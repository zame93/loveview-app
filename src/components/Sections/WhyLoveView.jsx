export default function WhyLoveView() {
  return (
    <section
  id="why-loveview"
  className="py-20 bg-slate-50"
>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            Why LoveView
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            More Than Just a Google Review QR Code
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            LoveView helps businesses collect more Google reviews while giving
            unhappy customers a safe way to share private feedback and helping
            you understand what really happens after every visit.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Standard QR */}

          <div className="rounded-3xl border border-slate-200 bg-white p-10">

            <h3 className="text-2xl font-bold">
              Standard Google Review QR
            </h3>

            <div className="mt-8 space-y-5 text-slate-600">

              <div>✅ Sends every customer to Google Reviews</div>

              <div>❌ No private customer feedback</div>

              <div>❌ No customer satisfaction insights</div>

              <div>❌ No issue tracking</div>

              <div>❌ No business dashboard</div>

            </div>

          </div>

          {/* LoveView */}

          <div className="rounded-3xl bg-indigo-600 p-10 text-white shadow-xl">

            <h3 className="text-2xl font-bold">
              LoveView
            </h3>

            <div className="mt-8 space-y-5">

              <div>✅ Smart review routing</div>

              <div>✅ Private customer feedback</div>

              <div>✅ Customer satisfaction tracking</div>

              <div>✅ Common issue insights</div>

              <div>✅ Live business dashboard</div>

            </div>

          </div>

        </div>

        <div className="mt-14 rounded-3xl bg-white border border-slate-200 p-10 text-center shadow-sm">

          <h3 className="text-2xl font-bold text-slate-900">
            Every Customer Experience Matters
          </h3>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            LoveView doesn't just help you collect Google reviews.
            It helps you understand your customers, resolve issues
            privately, and continuously improve your business.
          </p>

        </div>

      </div>
    </section>
  );
}