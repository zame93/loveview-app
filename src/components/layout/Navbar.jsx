import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

        {/* Logo */}

        <a href="/">
          <Logo />
        </a>

        {/* Navigation */}

<div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">

  <a
    href="#how-it-works"
    className="hover:text-indigo-600 transition duration-200"
  >
    How It Works
  </a>

  <a
    href="#why-loveview"
    className="hover:text-indigo-600 transition duration-200"
  >
    Why LoveView
  </a>

  <a
    href="#plans"
    className="hover:text-indigo-600 transition duration-200"
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
            className="hidden md:inline-flex rounded-lg border border-slate-300 px-5 py-2 font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Book Demo
          </a>

          <a
            href="/onboarding"
            className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Start Free Trial
          </a>

        </div>

      </div>
    </nav>
  );
}