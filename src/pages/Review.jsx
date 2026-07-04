import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getBusiness,
  trackRating,
  trackFeedback
} from "../services/appsScript";

import Logo from "../components/ui/Logo";

export default function Home() {

  const { businessId } = useParams();
  console.log("businessId:", businessId);

  const [business, setBusiness] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [issue, setIssue] = useState("");
  const [comment, setComment] = useState("");
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {

    if (!businessId) return;

    async function loadBusiness() {

      const result = await getBusiness(businessId);
      

      console.log(result);

      setBusiness(result);

    }

    loadBusiness();

  }, [businessId]);

  if (businessId && !business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Business...
      </div>
    );
  }

  async function handleRating(rating) {
    setSelectedRating(rating);
  const result = await trackRating(
    business.businessId,
    rating
  );

  if (!result.success) {
    alert("Unable to save rating");
    return;
  }

  if (rating >= 4) {

    window.open(business.reviewUrl, "_blank");

  } else {

    setSelectedRating(rating);
    setShowFeedbackForm(true);

  }

}

async function submitFeedback() {

  if (!issue) {
    alert("Please select an issue.");
    return;
  }

  const result = await trackFeedback(
    business.businessId,
    selectedRating,
    issue,
    comment
  );

  console.log(result);

  if (result.success) {

  setFeedbackSubmitted(true);

} else {

  alert("Unable to save feedback");

}

}

if (feedbackSubmitted) {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-[520px] text-center">

        <div className="text-6xl mb-6">
          ❤️
        </div>

        <h1 className="text-3xl font-bold">
          Thank You!
        </h1>

        <p className="text-gray-600 mt-4 leading-7">

          Your feedback has been shared privately with the business.

          <br /><br />

          Thank you for helping them improve.

        </p>

        <div className="mt-8 bg-green-50 rounded-xl p-5 text-left">

          <p>✅ Your feedback was not posted publicly.</p>

          <p className="mt-2">✅ The business has received your comments.</p>

          <p className="mt-2">✅ Your opinion helps improve future customer experiences.</p>

        </div>

      </div>

    </div>

  );

}

if (showFeedbackForm) {

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-[500px]">

        <h2 className="text-2xl font-bold">
  Help us improve ❤️
</h2>

<p className="mt-2 text-gray-500 text-sm leading-6">
  Your feedback is shared privately with the business.
  <br />
  Thank you for helping them improve.
</p>

<p className="mt-6 font-medium">
  What went wrong?
</p>

<div className="mt-6 space-y-3">

  {[
    "Service",
    "Product / Food Quality",
    "Waiting Time",
    "Staff Behaviour",
    "Cleanliness",
    "Pricing / Value",
    "Other"
  ].map((item) => (

    <label
      key={item}
      className="flex items-center gap-3 cursor-pointer"
    >

      <input
        type="radio"
        name="issue"
        value={item}
        checked={issue === item}
        onChange={(e) => setIssue(e.target.value)}
      />

      <span>{item}</span>

    </label>

  ))}

</div>

<textarea
  className="w-full mt-6 border rounded-xl p-4"
  rows="2"
  placeholder="Tell us more (optional)"

  value={comment}
  onChange={(e) => setComment(e.target.value)}
/>

<button
  disabled={!issue}
  onClick={submitFeedback}
  className={`w-full mt-6 rounded-xl py-3 font-semibold transition ${
    issue
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Share Feedback
</button>

      </div>

    </div>

  );

}


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-[450px]">
      <div className="flex justify-center mb-8">
      <Logo />
      </div>

        <h1 className="text-3xl font-bold text-center">
          {business?.businessName}
        </h1>

        <p className="text-center text-gray-500 mt-2">
          How was your experience today?
        </p>

        <div className="flex justify-center gap-4 mt-10">

          {[1,2,3,4,5].map((rating) => (

            <button
              key={rating}
              onClick={() => handleRating(rating)}
              className={`text-5xl transition cursor-pointer hover:scale-125 ${
  rating <= selectedRating
    ? "text-yellow-400"
    : "text-gray-300"
}`}
            >
              {rating <= selectedRating ? "★" : "☆"}
            </button>

          ))}

        </div>

      </div>

    </div>

  );

}