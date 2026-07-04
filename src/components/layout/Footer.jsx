import Logo from "../ui/Logo";
export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Company */}

          <div>

            <Logo />

<p className="mt-4 text-slate-400 leading-7">
  Helping local businesses collect more Google reviews,
  capture private customer feedback, and understand
  customer experiences.
</p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-slate-400">

              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#why-loveview" className="hover:text-white transition">
                  Why LoveView
                </a>
              </li>

              <li>
                <a href="#plans" className="hover:text-white transition">
                  Pricing
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-slate-400">

              <li>
                hello@theloveview.com
              </li>

              <li>
                Visakhapatnam, India
              </li>

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

            </ul>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">

          <p>
            © 2026 LoveView. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex gap-6">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}