import Logo from "../ui/Logo";
export default function Header({ dashboard }) {

  return (

    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl px-8 py-5 text-white shadow-xl">

      <div className="flex justify-between items-center">

        <div>

  <Logo light />

  <p className="text-indigo-100 mt-2">
    Review Manager
  </p>

</div>

        <div className="text-right">

          <p className="text-sm text-indigo-100">
            Business
          </p>

          <h2 className="text-2xl font-semibold">
            {dashboard.businessId}
          </h2>

        </div>

      </div>

    </div>

  );

}