import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink px-4 py-2 text-center text-[10px] font-semibold tracking-brand text-ink-foreground uppercase">
        Claim two 7ml freebies with every order
      </div>
      <div className="flex items-center justify-between border-b border-border bg-background px-5 py-4 md:px-10">
        <nav className="hidden gap-8 text-[11px] font-medium tracking-[0.18em] uppercase md:flex">
          <Link to="/" className="hover:text-honey">
            Home
          </Link>
          <a href="#story" className="hover:text-honey">
            Heir
          </a>
          <a href="#notes" className="hover:text-honey">
            Notes
          </a>
        </nav>
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-brand uppercase md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          Sarkar
        </Link>
        <a
          href="#heir"
          className="bg-primary px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
        >
          Buy Now
        </a>
      </div>
    </header>
  );
}
