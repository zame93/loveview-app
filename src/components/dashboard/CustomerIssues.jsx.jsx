export default function CustomerIssues({ dashboard }) {

  return (

    <div className="bg-white rounded-3xl shadow-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Top Customer Issues
      </h2>

      {dashboard.topIssues.length === 0 ? (

        <p className="text-gray-500">
          No private feedback yet.
        </p>

      ) : (

        dashboard.topIssues.map((item) => (

          <div
            key={item.issue}
            className="flex justify-between items-center border-b py-4 last:border-0"
          >

            <div>

              <p className="font-semibold">
                {item.issue}
              </p>

            </div>

            <div className="bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 font-semibold">

              {item.count}

            </div>

          </div>

        ))

      )}

    </div>

  );

}