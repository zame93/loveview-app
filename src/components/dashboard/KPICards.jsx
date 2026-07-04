export default function KPICards({ dashboard }) {

  const cards = [

    {
      title: "Average Rating",
      value: dashboard.averageRating,
      subtitle: "out of 5",
      stars: true
    },

    {
      title: "Customer Satisfaction",
      value: `${dashboard.customerSatisfaction}%`,
      subtitle: "Happy customers"
    },

    {
      title: "Total Ratings",
      value: dashboard.totalRatings,
      subtitle: "Responses received"
    },

    {
      title: "Private Feedback",
      value: dashboard.privateFeedback,
      subtitle: "Needs attention"
    }

  ];

  return (

    <div className="-mt-6 relative z-10">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => (

          <div
            key={card.title}
            className="bg-white rounded-3xl shadow-lg px-6 py-5 transition hover:-translate-y-1 hover:shadow-2xl"
          >

            <p className="text-gray-500 text-sm">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-2 text-slate-900">
              {card.value}
            </h2>

            {card.stars && (
              <div className="text-yellow-400 mt-2 text-lg">
  {"★".repeat(Math.round(dashboard.averageRating))}
  {"☆".repeat(5 - Math.round(dashboard.averageRating))}
</div>
            )}

            <p className="text-gray-400 text-sm mt-2">
              {card.subtitle}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

}