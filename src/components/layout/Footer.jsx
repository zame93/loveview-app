export default function Footer() {
  return (
    <>
      {<footer id="contact" className="border-t bg-slate-950 text-white">
  <div className="mx-auto max-w-6xl px-6 py-16">

    <div className="grid gap-12 md:grid-cols-3">

      <div>
        <h3 className="text-2xl font-bold text-indigo-400">
          LoveView
        </h3>

        <p className="mt-4 text-slate-400">
          Turn happy customers into more reviews and recover unhappy customers before they leave.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          Product
        </h4>

        <ul className="mt-4 space-y-2 text-slate-400">
          <li>Review Generation</li>
          <li>Customer Recovery</li>
          <li>Dashboard Reporting</li>
          <li>QR Feedback</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">
          Contact
        </h4>

        <ul className="mt-4 space-y-2 text-slate-400">
          <li>hello@loveview.com</li>
          <li>
  <a
    href="https://forms.gle/C9pJwNvVt4EM8trF9"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Book a Demo
  </a>
</li>
          <li>Visakhapatnam, India</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © 2026 LoveView. All rights reserved.
    </div>

  </div>
</footer>}
    </>
  );
}