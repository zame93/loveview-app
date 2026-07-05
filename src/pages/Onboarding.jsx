import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBusiness } from "../services/appsScript";
import Logo from "../components/ui/Logo";

export default function Onboarding() {
  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("Restaurant");
  const [reviewUrl, setReviewUrl] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    const business = businessName.trim();
    const owner = ownerName.trim();
    const phone = mobile.trim();
    const mail = email.trim();
    const url = reviewUrl.trim();

    // Required fields
    if (!business) {
  alert("Business Name is required.");
  return;
}

if (!owner) {
  alert("Owner Name is required.");
  return;
}

if (!phone) {
  alert("Mobile Number is required.");
  return;
}

if (!mail) {
  alert("Email Address is required.");
  return;
}

if (!url) {
  alert("Google Review URL is required.");
  return;
}

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(mail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Google Review URL validation
    const review = url.toLowerCase();

    if (
      !review.includes("google") &&
      !review.includes("g.page") &&
      !review.includes("maps.app.goo.gl")
    ) {
      alert("Please enter a valid Google Review URL.");
      return;
    }

    setLoading(true);

    try {
      const result = await createBusiness({
        businessName: business,
        ownerName: owner,
        mobile: phone,
        email: mail,
        category,
        reviewUrl: url,
      });

      if (result.success) {
        navigate(`/qr/${result.businessId}`);
      } else {
        alert(result.message || "Unable to create business.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl p-10">

        <Logo size="lg" />

<Link
  to="/"
  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
>
  ← Back to Home
</Link>

<h1 className="mt-6 text-3xl font-bold text-slate-900">
  Get Started with LoveView
</h1>

        <p className="mt-2 text-slate-500">
          Set up your business in under 2 minutes and start collecting more Google Reviews.
          more Google Reviews today.
        </p>
<div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
  <h3 className="font-semibold text-indigo-700">
    Before you begin
  </h3>

  <p className="mt-2 text-sm text-slate-700">
    You'll need your Google Business review link to complete setup.
    If you don't have it yet, don't worry—we'll show you how to find it below.
  </p>
</div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* Business Name */}

          <div className="md:col-span-2">
            <label className="font-medium">
              Business Name
            </label>

            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3"
              placeholder="Shahi Foods"
            />
          </div>

          {/* Owner */}

          <div>
            <label className="font-medium">
              Owner Name
            </label>

            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3"
              placeholder="Syed Karim"
            />
          </div>

          {/* Mobile */}

          <div>
            <label className="font-medium">
              Mobile Number
            </label>

            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3"
              placeholder="9876543210"
            />
          </div>

          {/* Email */}

          <div>
            <label className="font-medium">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3"
              placeholder="owner@email.com"
            />
          </div>

          {/* Category */}

          <div>
  <label className="font-medium">
    Business Category
  </label>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="mt-2 w-full rounded-xl border px-4 py-3"
  >
    <option>Restaurant</option>
    <option>Cafe</option>
    <option>Salon</option>
    <option>Clinic</option>
    <option>Hotel</option>
    <option>Retail Store</option>
    <option>Gym</option>
    <option>Spa</option>
    <option>Dental Clinic</option>
    <option>Hospital</option>
    <option>Bakery</option>
    <option>Other</option>
  </select>
</div>
<div className="md:col-span-2">
  <label className="font-medium">
    Google Review URL
  </label>

  <input
    type="url"
    value={reviewUrl}
    onChange={(e) => setReviewUrl(e.target.value)}
    className="mt-2 w-full rounded-xl border px-4 py-3"
    placeholder="https://g.page/r/xxxxxxxx/review"
  />

  <div className="mt-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-indigo-700">
        Need help finding your review link?
      </h3>

      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
        Takes 30 seconds
      </span>
    </div>

    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
      <li>Open your Google Business Profile.</li>
      <li>Click <strong>Ask for Reviews</strong>.</li>
      <li>Copy the generated review link.</li>
      <li>Paste it into the field above.</li>
    </ol>

    <a
      href="https://support.google.com/business/answer/3474122"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-block font-medium text-indigo-600 hover:underline"
    >
      Learn how to find your review link →
    </a>
  </div>
</div>

{/* Close the form grid */}
</div>

<button
  onClick={handleSubmit}
  disabled={loading}
  className={`mt-10 w-full rounded-2xl py-4 text-lg font-semibold transition ${
    loading
      ? "bg-indigo-400 cursor-not-allowed opacity-70"
      : "bg-indigo-600 hover:bg-indigo-700 text-white"
  }`}
>
  {loading
    ? "Creating Your LoveView..."
    : "Create My Review QR →"}
</button>

<p className="mt-4 text-center text-sm text-slate-500">
  Your QR code and dashboard will be created instantly after setup.
</p>

</div>

</div>
  );
}