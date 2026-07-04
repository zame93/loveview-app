export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Simple Pricing for Local Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Everything you need to collect more Google reviews, capture private
            customer feedback, and understand your customers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Starter */}

          <div className="rounded-3xl border-2 border-indigo-600 bg-white p-10 shadow-2xl">

            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              RECOMMENDED
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              LoveView Starter
            </h3>

            <div className="mt-8 flex items-end gap-2">

              <span className="text-6xl font-extrabold">
                ₹1,999
              </span>

            </div>

            <p className="mt-2 text-slate-500">
              One-time setup
            </p>

            <p className="mt-6 text-lg text-slate-600">
              Perfect for restaurants, cafés, salons, clinics and local businesses.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Business setup</li>

              <li>✓ Review QR Code</li>

              <li>✓ Smart Review Routing</li>

              <li>✓ Google Review Collection</li>

              <li>✓ Private Customer Feedback</li>

              <li>✓ Live Business Dashboard</li>

              <li>✓ Customer Insights</li>

              <li>✓ 30 Days Support</li>

            </ul>

            <a
              href="/onboarding"
              className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started
            </a>

          </div>

          {/* Growth */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10">

            <span className="inline-flex rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              COMING SOON
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              LoveView Growth
            </h3>

            <p className="mt-6 text-lg text-slate-600">
              Designed for growing businesses that need advanced customer engagement tools.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Multi-location support</li>

              <li>✓ AI-powered customer insights</li>

              <li>✓ WhatsApp communication</li>

              <li>✓ Loyalty & rewards</li>

              <li>✓ Advanced reporting</li>

              <li>✓ Priority support</li>

            </ul>

            <button
              className="mt-10 w-full rounded-xl border border-slate-300 bg-white px-6 py-4 text-lg font-semibold text-slate-700"
            >
              Join the Waitlist
            </button>

          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-indigo-600 p-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Not Sure If LoveView Is Right for You?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-100">
            Book a free demo and we'll show you how LoveView can help your
            business collect more Google reviews and understand customer
            feedback.
          </p>

          <a
            href="https://forms.gle/C9pJwNvVt4EM8trF9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-700 hover:bg-slate-100"
          >
            Book Free Demo
          </a>

        </div>

      </div>
    </section>
  );
}