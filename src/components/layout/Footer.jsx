import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company */}

          <div>
            <Logo />

            <p className="mt-4 leading-7 text-slate-400">
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
                <a
                  href="#how-it-works"
                  className="hover:text-white transition"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#why-loveview"
                  className="hover:text-white transition"
                >
                  Why LoveView
                </a>
              </li>

              <li>
                <a
                  href="#plans"
                  className="hover:text-white transition"
                >
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
              <li>hello@theloveview.com</li>

              <li>Visakhapatnam, India</li>

              <li>
                <a
                  href="mailto:hello@theloveview.com?subject=LoveView Demo Request"
                  className="hover:text-white transition"
                >
                  📅 Book a Demo
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 LoveView. All rights reserved.</p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}