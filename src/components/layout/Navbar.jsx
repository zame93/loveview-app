import Logo from "../ui/Logo";
import { Container } from "../layout-system";
import { Button } from "../ui";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="/">
            <Logo />
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 font-medium text-slate-600 md:flex">
            <a
              href="#how-it-works"
              className="transition hover:text-indigo-600"
            >
              How It Works
            </a>

            <a
              href="#why-loveview"
              className="transition hover:text-indigo-600"
            >
              Why LoveView
            </a>

            <a
              href="#plans"
              className="transition hover:text-indigo-600"
            >
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/C9pJwNvVt4EM8trF9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Button variant="secondary">
                Book Demo
              </Button>
            </a>

            <a href="/onboarding">
              <Button>
                Start Free Trial
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}