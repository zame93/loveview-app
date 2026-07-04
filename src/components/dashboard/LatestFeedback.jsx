export default function LatestFeedback({ dashboard }) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Latest Feedback
      </h2>

      {dashboard.latestFeedback.length === 0 ? (

        <p className="text-gray-500">
          No feedback received yet.
        </p>

      ) : (

        dashboard.latestFeedback.map((item, index) => (

          <div
            key={index}
            className="border-b py-4 last:border-0"
          >

            <div className="flex justify-between">

              <div className="font-semibold">

                {"★".repeat(item.rating)}

              </div>

              <div className="text-sm text-gray-400">

                {new Date(item.timestamp).toLocaleDateString()}

              </div>

            </div>

            <p className="mt-2 font-medium">
              {item.issue}
            </p>

            <p className="text-gray-600 mt-1">
              {item.comment}
            </p>

          </div>

        ))

      )}

    </div>

  );

}