export default function ROI() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Understand What Your Customers Are Really Saying
        </h2>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          LoveView turns customer ratings and private feedback into actionable
          insights that help you improve every customer experience.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-indigo-600">
              Average Rating
            </h3>

            <p className="mt-3 text-slate-600">
              Know how customers rate their experience.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-indigo-600">
              Customer Satisfaction
            </h3>

            <p className="mt-3 text-slate-600">
              Track customer satisfaction over time.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-indigo-600">
              Private Feedback
            </h3>

            <p className="mt-3 text-slate-600">
              Understand what customers don't share publicly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-indigo-600">
              Rating Trends
            </h3>

            <p className="mt-3 text-slate-600">
              Monitor improvements in customer experience over time.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-indigo-600 p-12 text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            LoveView Dashboard
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                4.8 ★
              </div>

              <div className="mt-2 text-indigo-100">
                Average Rating
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                92%
              </div>

              <div className="mt-2 text-indigo-100">
                Customer Satisfaction
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                482
              </div>

              <div className="mt-2 text-indigo-100">
                Google Reviews
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <div className="text-3xl font-bold">
                18
              </div>

              <div className="mt-2 text-indigo-100">
                Private Feedback
              </div>
            </div>

          </div>

          <p className="mt-10 text-lg text-indigo-100 max-w-2xl mx-auto">
            View customer ratings, satisfaction trends, and private feedback
            from one simple dashboard designed for local businesses.
          </p>

        </div>

      </div>
    </section>
  );
}