import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import burger from "@/assets/hero-burger.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary opacity-30 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:gap-6 md:px-6 md:pb-28 md:pt-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Open • Delivers in 20 min
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Order Your <br />
            <span className="text-secondary">Favorites</span> in <br />
            Minutes.
          </h1>
          <p className="mt-6 max-w-md text-base/relaxed text-white/85 md:text-lg">
            Hot, fresh, hand-crafted. Browse the menu, build your cart and we'll have it at your door before
            your hunger gets loud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-semibold text-secondary-foreground shadow-glow transition-all hover:scale-[1.03]"
            >
              Order Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-semibold backdrop-blur transition-colors hover:bg-white/20"
            >
              View Menu
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span><strong>4.9</strong> · 2.3k reviews</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <strong>50k+</strong> happy bites
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* spinning ring */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-72 w-72 animate-spin-slow rounded-full border-2 border-dashed border-secondary/40 md:h-[26rem] md:w-[26rem]" />
          </div>
          <div className="absolute h-64 w-64 rounded-full bg-secondary/40 blur-3xl md:h-96 md:w-96" />
          <img
            src={burger}
            alt="Juicy cheeseburger"
            width={1024}
            height={1024}
            className="relative z-10 w-full max-w-md animate-float-slow drop-shadow-2xl md:max-w-xl"
          />
          {/* floating tag */}
          <div className="absolute -left-2 top-10 z-20 hidden rounded-2xl bg-white px-4 py-3 text-charcoal shadow-card md:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Best seller</p>
            <p className="text-sm font-bold">Classic Cheeseburger</p>
            <p className="text-sm text-primary font-bold">₹220</p>
          </div>
          <div className="absolute -right-2 bottom-12 z-20 hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-charcoal shadow-card md:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary">🔥</span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Free delivery</p>
              <p className="text-xs font-bold">on orders ₹500+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
