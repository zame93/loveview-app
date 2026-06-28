export default function Navbar() {
  return (
    <>
      {<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

          <h1 className="text-xl md:text-2xl font-bold text-indigo-600">
            LoveView
          </h1>

          <div className="hidden md:flex gap-8 text-slate-600">
            <a href="#features">Features</a>
            <a href="#plans">Plans</a>
            <a href="#growth services"> Growth Services</a>
<a href="#industries">Industries</a>            
<a href="#contact">Contact</a>
</div>
          <a
  href="https://forms.gle/C9pJwNvVt4EM8trF9"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-indigo-600 px-3 py-2 text-sm md:px-5 md:py-2 md:text-base text-white"
>
  Book Demo
</a>

        </div>
      </nav>/* Paste your <nav>...</nav> here */}
    </>
  );
}