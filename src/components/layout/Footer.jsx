import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

import { Container, Grid } from "../layout-system";
import { Button } from "../ui";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <Container>
        <div className="py-16">
          <Grid
            cols="grid-cols-1 md:grid-cols-3"
            gap="gap-12"
          >
            {/* Company */}
            <div>
              <Logo light={true} />

              <p className="mt-4 leading-7 text-slate-400">
                Helping local businesses collect more Google reviews,
                capture private customer feedback, and understand
                customer experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold">
                Quick Links
              </h4>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>
                  <a
                    href="#how-it-works"
                    className="transition hover:text-white"
                  >
                    How It Works
                  </a>
                </li>

                <li>
                  <a
                    href="#why-loveview"
                    className="transition hover:text-white"
                  >
                    Why LoveView
                  </a>
                </li>

                <li>
                  <a
                    href="#plans"
                    className="transition hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold">
                Contact
              </h4>

              <ul className="mt-4 space-y-3 text-slate-400">
                <li>hello@theloveview.com</li>

                <li>Visakhapatnam, India</li>

                <li>
                  <a
                    href="mailto:hello@theloveview.com?subject=LoveView Demo Request"
                    className="transition hover:text-white"
                  >
                    📅 Book a Demo
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <Link to="/onboarding">
                  <Button>
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">
            <p>© 2026 LoveView. All rights reserved.</p>

            <div className="mt-4 flex gap-6 md:mt-0">
              <a
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}