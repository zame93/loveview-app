export default function RatingDistribution({ dashboard }) {

  const ratings = [
    { stars: 5, count: dashboard.ratingCounts["5"] || 0 },
    { stars: 4, count: dashboard.ratingCounts["4"] || 0 },
    { stars: 3, count: dashboard.ratingCounts["3"] || 0 },
    { stars: 2, count: dashboard.ratingCounts["2"] || 0 },
    { stars: 1, count: dashboard.ratingCounts["1"] || 0 }
  ];

  const max = Math.max(...ratings.map(r => r.count), 1);

  return (

    <div className="bg-white rounded-3xl shadow-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Review Distribution
      </h2>

      {ratings.map((rating) => (

        <div
          key={rating.stars}
          className="flex items-center gap-4 mb-4"
        >

          <div className="w-16 font-medium">
            {"★".repeat(rating.stars)}
          </div>

          <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">

            <div
              className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
              style={{
                width: `${(rating.count / max) * 100}%`
              }}
            />

          </div>

          <div className="w-8 text-right font-semibold">
            {rating.count}
          </div>

        </div>

      ))}

    </div>

  );

}