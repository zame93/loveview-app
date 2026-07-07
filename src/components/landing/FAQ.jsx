import { Container, Section } from "../layout-system";
import { Badge, Card, SectionTitle } from "../ui";

export default function FAQ() {
  const faqs = [
    {
      question: "What is LoveView?",
      answer:
        "LoveView is a customer feedback and Google review platform that helps local businesses collect more Google reviews, capture private customer feedback, and understand customer satisfaction from one simple dashboard.",
    },
    {
      question: "How does LoveView work?",
      answer:
        "Customers scan your LoveView QR code after their visit. Customers who rate their experience highly are directed to your Google Business Profile review page, while customers with lower ratings can share private feedback directly with your business.",
    },
    {
      question: "Does LoveView work with Google Reviews?",
      answer:
        "Yes. LoveView directs satisfied customers to your Google Business Profile review page, making it easier to collect more Google reviews.",
    },
    {
      question: "Can I use my existing Google Business Profile?",
      answer:
        "Yes. LoveView works with your existing Google Business Profile. Simply connect your Google review link during setup.",
    },
    {
      question: "Why not use a normal Google Review QR code?",
      answer:
        "A standard Google Review QR code sends every customer directly to Google. LoveView helps you collect more reviews while also capturing private feedback from dissatisfied customers and providing customer insights through a live dashboard.",
    },
    {
      question: "Which businesses can use LoveView?",
      answer:
        "LoveView is designed for restaurants, cafés, salons, clinics, gyms, retail stores, service businesses, and any local business that wants to improve its online reputation.",
    },
    {
      question: "Do my customers need to install an app?",
      answer:
        "No. Customers simply scan your QR code using their phone's camera and complete the review or feedback process directly in their browser.",
    },
    {
      question: "Can I collect private customer feedback?",
      answer:
        "Yes. Customers who aren't fully satisfied can share their feedback privately instead of immediately leaving a public review, helping you resolve issues before they affect your online reputation.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most businesses can get started within a few minutes. Once your business is onboarded, you'll receive your LoveView QR code and dashboard access.",
    },
    {
      question: "How much does LoveView cost?",
      answer:
        "LoveView offers simple pricing for local businesses. Visit our pricing section for the latest plans and included features.",
    },
  ];

  return (
    <Section id="faq">
      <Container>
        <SectionTitle
          badge={<Badge>Frequently Asked Questions</Badge>}
          title="Everything You Need to Know"
          subtitle="Have questions? Here are answers to the most common questions about LoveView."
        />

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              hover
              padding="p-0"
              shadow="shadow-sm"
            >
              <details className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-slate-900 transition-colors group-open:text-indigo-600 md:text-xl">
                  {faq.question}

                  <span className="text-2xl font-light text-indigo-600 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}