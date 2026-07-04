import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDashboard } from "../services/appsScript";

import Header from "../components/dashboard/Header";
import KPICards from "../components/dashboard/KPICards";
import RatingDistribution from "../components/dashboard/RatingDistribution";
import CustomerIssues from "../components/dashboard/CustomerIssues.jsx";
import LatestFeedback from "../components/dashboard/LatestFeedback";

export default function Dashboard() {

  const { businessId } = useParams();
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    async function loadDashboard() {

      const result = await getDashboard(businessId);

      console.log(result);

      setDashboard(result);

    }

    loadDashboard();

  }, [businessId]);

  if (!dashboard) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Dashboard...
      </div>
    );

  }

  return (

  <div className="min-h-screen bg-gray-100 p-8">

    <Header dashboard={dashboard} />

    <KPICards dashboard={dashboard} />

    {dashboard.totalRatings === 0 && (

      <div className="bg-white rounded-3xl shadow-xl p-10 mt-8 text-center">

        <h2 className="text-3xl font-bold text-slate-900">
  🎉 Welcome to LoveView!
</h2>

<p className="text-gray-600 mt-4">
  Your review system is now live.
</p>

<div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 text-left">

  <h3 className="font-semibold text-slate-900 mb-4">
    Next Steps
  </h3>

  <ul className="space-y-3 text-gray-600">

    <li>✅ Download your QR code</li>

    <li>✅ Print and display it near your billing counter</li>

    <li>✅ Invite every customer to scan after their visit</li>

    <li>✅ Watch your dashboard fill with reviews and feedback</li>

  </ul>

</div>

<button
  onClick={() => navigate(`/qr/${dashboard.businessId}`)}
  className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-2xl hover:bg-indigo-700 font-semibold"
>
  View My QR →
</button>
      
      </div>

    )}

    {dashboard.totalRatings > 0 && (
      <>
        <RatingDistribution dashboard={dashboard} />

        <CustomerIssues dashboard={dashboard} />

        <LatestFeedback dashboard={dashboard} />
      </>
    )}

  </div>

);
}