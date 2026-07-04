import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  if (
    !businessName ||
    !ownerName ||
    !mobile ||
    !email ||
    !reviewUrl
  ) {
    alert("Please fill in all fields.");
    return;
  }

  setLoading(true);

  try {

    const result = await createBusiness({
      businessName,
      ownerName,
      mobile,
      email,
      category,
      reviewUrl
    });

    if (result.success) {

      navigate(`/qr/${result.businessId}`);

    } else {

      alert(result.message || "Unable to create business.");

    }

  } catch (err) {

    console.error(err);
    alert("Something went wrong.");

  } finally {

    setLoading(false);

  }

}

if (
  !reviewUrl.includes("google") &&
  !reviewUrl.includes("g.page")
) {
  alert("Please enter a valid Google Review URL.");
  return;
}

return (

  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

    <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl p-10">

      <Logo size="lg" />

      <p className="text-gray-500 mt-2 mb-8">
        Create your review system in under 2 minutes.
      </p>

      <div className="grid grid-cols-2 gap-6">

        <div className="col-span-2">
          <label className="font-medium">Business Name</label>

          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
            placeholder="Shahi Foods"
          />
        </div>

        <div>
          <label className="font-medium">Owner Name</label>

          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
            placeholder="Syed Karim"
          />
        </div>

        <div>
          <label className="font-medium">Mobile Number</label>

          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
            placeholder="9876543210"
          />
        </div>

        <div>
          <label className="font-medium">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
            placeholder="owner@email.com"
          />
        </div>

        <div>
          <label className="font-medium">Business Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          >
            <option>Restaurant</option>
            <option>Cafe</option>
            <option>Salon</option>
            <option>Clinic</option>
            <option>Retail Store</option>
            <option>Hotel</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Google Review URL</label>

          <input
            type="tel"
            value={reviewUrl}
            onChange={(e) => setReviewUrl(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
            placeholder="Paste your Google Review link"
          />
        </div>

      </div>

      <button
  onClick={handleSubmit}
  disabled={loading}
  className={`w-full mt-10 py-4 rounded-2xl font-semibold text-lg transition
    ${
      loading
        ? "bg-indigo-400 cursor-not-allowed opacity-70"
        : "bg-indigo-600 hover:bg-indigo-700 text-white"
    }`}
>
  {loading ? "Creating..." : "Create My LoveView →"}
</button>

    </div>

  </div>

);

}
