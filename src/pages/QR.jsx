import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBusiness } from "../services/appsScript";

import Logo from "../components/ui/Logo";

export default function QR() {

  const { businessId } = useParams();
  const navigate = useNavigate();

  const [business, setBusiness] = useState(null);

  useEffect(() => {

  async function loadBusiness() {

    const result = await getBusiness(businessId);

    console.log(result);

    setBusiness(result);

  }

  loadBusiness();

}, [businessId]);

if (!business) {

  return (

    <div className="min-h-screen flex items-center justify-center">

      Loading QR...

    </div>

  );

}

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl text-center">

        <div className="flex flex-col items-center">

  <Logo size="lg" />

  <p className="text-gray-500 mt-3">
    🎉 Your LoveView review system is ready.
  </p>

</div>

<div className="mt-6">
  <h2 className="text-2xl font-bold text-slate-900">
    {business.businessName}
  </h2>

  <p className="text-gray-500 mt-2">
    Your customers can scan this QR code to leave a Google review.
  </p>
</div>

<div className="mt-8 flex justify-center">

  <img
    src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(business.qrUrl)}`}
    alt="Review QR"
    className="rounded-2xl shadow-lg border"
  />

</div>

<div className="mt-6 text-gray-600 text-left bg-slate-50 rounded-xl p-5">

  <h3 className="font-semibold text-slate-900 mb-3">
    How to use your QR
  </h3>

  <ol className="list-decimal ml-5 space-y-2">
    <li>Download or print your QR code.</li>
    <li>Place it near your billing counter or reception.</li>
    <li>Invite customers to scan it after their visit.</li>
  </ol>

</div>

<div className="mt-8 grid grid-cols-2 gap-4">

  <a
    href={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(business.qrUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 text-center font-semibold"
  >
    Download QR
  </a>

  <button
    onClick={() => navigator.clipboard.writeText(business.qrUrl)}
    className="bg-gray-200 py-3 rounded-xl hover:bg-gray-300 font-semibold"
  >
    Copy QR Link
  </button>

  <button
    onClick={() => window.print()}
    className="bg-gray-200 py-3 rounded-xl hover:bg-gray-300 font-semibold"
  >
    Print QR
  </button>

  <button
    onClick={() => navigate(`/dashboard/${business.businessId}`)}
    className="bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 font-semibold"
  >
    Go to Dashboard →
  </button>

</div>

      </div>

    </div>

  );

}