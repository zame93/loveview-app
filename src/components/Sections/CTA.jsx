export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold leading-tight">
          Ready to Collect More Google Reviews?
        </h2>

        <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
          Start using LoveView in minutes to collect more Google reviews,
          capture private customer feedback, and understand every customer
          experience from one simple dashboard.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="/onboarding"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
          >
            Start Free Trial
          </a>

          <a
            href="https://forms.gle/C9pJwNvVt4EM8trF9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-indigo-600"
          >
            Book a Demo
          </a>

        </div>

        <p className="mt-8 text-sm text-indigo-100">
          Setup in minutes • Works with Google Reviews • Built for local businesses
        </p>

      </div>
    </section>
  );
}