import { Link } from "@tanstack/react-router";

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-mustard p-8 md:p-14">
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-charcoal/15 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-charcoal px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream">
              Limited Time
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-charcoal md:text-6xl">
              Order Food. <br />
              <span className="text-primary">Forget the line.</span>
            </h2>
            <p className="mt-4 max-w-md text-charcoal/80">
              Get free delivery on every order above ₹500 — and a free shake on your first order this week. 🎉
            </p>
            <Link
              to="/menu"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 font-semibold text-cream transition-transform hover:scale-105"
            >
              Grab the Deal
            </Link>
          </div>
          <div className="relative grid place-items-center">
            <div className="grid h-56 w-56 place-items-center rounded-full bg-cream shadow-card md:h-72 md:w-72">
              <span className="text-8xl md:text-9xl">🛵</span>
            </div>
            <div className="absolute -right-2 top-6 rotate-6 rounded-2xl bg-primary px-4 py-2 font-display text-lg font-bold text-primary-foreground shadow-juicy">
              20 min!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
