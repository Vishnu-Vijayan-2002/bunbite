import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">🍔</span>
            <span className="font-display text-xl font-bold">
              Bun<span className="text-secondary">Bite</span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-cream/70">
            Hand-crafted burgers, fries and shakes — delivered hot to your door.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
            <li><Link to="/menu" className="hover:text-secondary">Menu</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            <li>Mon–Fri · 11am – 11pm</li>
            <li>Sat–Sun · 10am – 12am</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            <li>+91 98765 43210</li>
            <li>hello@bunbite.com</li>
            <li>12 Foodie Lane, Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-5 text-center text-xs text-cream/60 md:px-6">
        © {new Date().getFullYear()} BunBite. Crafted with 🔥 and cheese.
      </div>
    </footer>
  );
}
