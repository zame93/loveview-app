export default function Hero() {
  return (
    <>
      {<section className="px-6 pt-6 pb-16">

        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">

          <div>

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
              Google Reviews • Private Feedback • Customer Insights
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
  Collect More
Google Reviews.
<br />
<span className="text-indigo-600">
Capture Private Feedback Before It Becomes Public.
</span>
</h1>

            <p className="mt-6 text-xl text-slate-600">
              LoveView helps restaurants, cafés, salons and local businesses collect more Google reviews, capture Private Feedback, 
              and understand customer satisfaction from one simple dashboard.
            </p>

            <div className="mt-8 flex gap-4">
              <a
  href="https://forms.gle/C9pJwNvVt4EM8trF9"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition"
>
  Start Free Trial
</a>

              <button className="rounded-lg border border-slate-300 px-6 py-3">
                See How It Works
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>✓ 2-Minute Setup</span>
              <span>✓ QR Code Included</span>
              <span>✓ No App Required</span>
              <span>✓ Works With Google Reviews</span>
            </div>

          </div>

          <div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

  <div className="flex items-center justify-between">
    <h3 className="font-bold text-lg">
      Live Review Dashboard
    </h3>

    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
      Live
    </span>
  </div>

  <div className="mt-8 grid grid-cols-2 gap-4">

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-indigo-600">
        4.8
      </div>
      <div className="text-sm text-slate-500">
        Average Rating
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-indigo-600">
        482
      </div>
      <div className="text-sm text-slate-500">
        Google Reviews
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-green-600">
        92%
      </div>
      <div className="text-sm text-slate-500">
        Satisfaction
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-violet-600">
        134
      </div>
      <div className="text-sm text-slate-500">
        Private Feedback
      </div>
    </div>

  </div>

  <div className="mt-8 rounded-xl bg-slate-50 p-5">
    <div className="text-sm font-semibold text-slate-700">
      Recent Customer Activity
    </div>

    <div className="mt-4 space-y-3">

      <div className="flex justify-between">
        <span>⭐⭐⭐⭐⭐ Amazing food & service</span>
        <span className="text-green-600">Posted</span>
      </div>

      <div className="flex justify-between">
        <span>⭐⭐⭐⭐ Great customer experience</span>
        <span className="text-green-600">Posted</span>
      </div>

      <div className="flex justify-between">
        <span>⭐⭐ Slow delivery issue</span>
        <span className="text-orange-500">Private Feedback</span>
      </div>

    </div>
  </div>

</div>
          </div>
        </div>

        </section>}
    </>
  );
}