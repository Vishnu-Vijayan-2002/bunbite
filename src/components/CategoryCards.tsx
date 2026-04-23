import { Link } from "@tanstack/react-router";
import { categories } from "@/data/menu";

const palette: Record<string, string> = {
  burgers: "from-primary to-primary/70",
  sides: "from-secondary to-secondary/70",
  drinks: "from-charcoal to-charcoal/80",
  pizza: "from-primary/90 to-secondary/80",
};

export function CategoryCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Browse</p>
          <h2 className="mt-1 font-display text-4xl font-bold md:text-5xl">Pick your craving.</h2>
        </div>
        <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
          View full menu →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/menu"
            search={{ category: c.id, q: "" }}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${palette[c.id]} p-6 text-primary-foreground shadow-card transition-all hover:-translate-y-1 hover:shadow-juicy`}
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl transition-transform group-hover:scale-150" />
            <div className="relative">
              <span className="text-5xl drop-shadow-md">{c.emoji}</span>
              <h3 className="mt-6 font-display text-2xl font-bold">{c.label}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider opacity-80">Order now →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
