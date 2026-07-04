export default function Recovery() {
    return (
        <>
            {<section className="py-16 bg-indigo-600 text-white">
  <div className="mx-auto max-w-6xl px-6">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      <div>
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          Private Customer Feedback
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
          Recover Customers Before They Leave For Good
        </h2>

        <p className="mt-6 text-xl text-indigo-100">
          Instead of losing unhappy customers to public reviews, 
          LoveView lets them share feedback privately so your team can understand and resolve issues.
        </p>

        <div className="mt-10 space-y-4">

          <div className="flex gap-3">
            <span>✓</span>
            <span>✓ Capture private customer feedback</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>✓ Understand common customer issues</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>✓ Reduce negative public reviews</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>✓ Improve customer experience</span>
          </div>

        </div>
      </div>

      <div>

        <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">

          <h3 className="font-bold text-xl">
            Private Feedback Dashboard
          </h3>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              📝 New private feedback received
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              📌 Most reported issue: Waiting Time
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              📊 Private feedback this month: 18
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>}
        </>
    )
}