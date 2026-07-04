export default function FAQ() {
  const faqs = [
    {
      question: "What is LoveView?",
      answer:
        "LoveView is a customer feedback and Google review platform that helps local businesses collect more Google reviews, capture private customer feedback, and understand customer satisfaction from one simple dashboard."
    },
    {
        question: "How does LoveView work?",
        answer:
        "Customers scan your LoveView QR code after their visit. Customers who rate their experience highly are directed to your Google review page, while customers with lower ratings can share private feedback directly with your business."
    },
    {
      question: "Does LoveView work with Google Reviews?",
      answer:
        "Yes. LoveView directs satisfied customers to your Google Business Profile review page, making it easier to collect more Google reviews."
    },
    {
      question: "Can I use my existing Google Business Profile?",
      answer:
        "Yes. LoveView works with your existing Google Business Profile. You simply connect your Google review link during setup."
    },
    {
      question: "Why not use a normal Google Review QR code?",
      answer:
        "A standard Google Review QR code sends every customer directly to Google. LoveView helps you collect more reviews while also capturing private feedback from dissatisfied customers and providing customer insights through a dashboard."
    },
    {
      question: "Which businesses can use LoveView?",
      answer:
        "LoveView is designed for restaurants, cafés, salons, clinics, gyms, retail stores, service businesses, and any local business that wants to improve its online reputation."
    },
    {
      question: "Do my customers need to install an app?",
      answer:
        "No. Customers simply scan a QR code using their phone's camera and complete the review or feedback process directly in their browser."
    },
    {
      question: "Can I collect private customer feedback?",
      answer:
        "Yes. Customers who aren't fully satisfied can share their feedback privately instead of immediately leaving a public review, helping you understand issues and improve customer experience."
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses can get started within a few minutes. Once your business is onboarded, you'll receive your LoveView QR code and dashboard access."
    },
    {
      question: "How much does LoveView cost?",
      answer:
        "LoveView offers simple pricing for local businesses. Visit our pricing section for the latest plan details and what's included."
    }
  ];

  return (
    <section
    id="faq"
    className="py-24 bg-white"
    >

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Have questions? Here are answers to the most common questions about LoveView.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (

            <details
              key={index}
              className="rounded-2xl border border-slate-200 p-6 group"
            >

              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-slate-900 list-none flex justify-between items-center">

                {faq.question}

                <span className="text-indigo-600 text-2xl transition-transform duration-300 group-open:rotate-45">
                  +
                </span>

              </summary>

              <p className="mt-4 pr-6 leading-8 text-slate-600">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
}