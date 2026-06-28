export default function Features() {
  return (
    <>
      {<section className="py-16 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-4xl font-bold">
      From Visit To Repeat Customer In 3 Steps
    </h2>

    <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
      LoveLink captures customer sentiment before it becomes public and routes every customer to the right next step.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 1
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Customer Visits
        </h3>

        <p className="mt-3 text-slate-600">
          Customer scans a QR code or receives a review request link.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 2
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Customer Rates Experience
        </h3>

        <p className="mt-3 text-slate-600">
          LoveView captures feedback privately before it reaches Google.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 3
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Smart Routing
        </h3>

        <p className="mt-3 text-slate-600">
          Happy customers go to Google Reviews. Unhappy customers enter LoveBack recovery.
        </p>
      </div>

    </div>

  </div>
</section>}
    </>
  );
}