import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo } from "react";
import { Search } from "lucide-react";
import { FoodCard } from "@/components/FoodCard";
import { categories, menu, type Category } from "@/data/menu";

const searchSchema = z.object({
  category: fallback(z.enum(["all", "burgers", "sides", "drinks", "pizza"]), "all").default("all"),
  q: fallback(z.string(), "").default(""),
  veg: fallback(z.enum(["all", "veg", "nonveg"]), "all").default("all"),
});

export const Route = createFileRoute("/menu")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Menu — BunBite" },
      { name: "description", content: "Browse the BunBite menu — burgers, sides, drinks and pizza." },
      { property: "og:title", content: "Menu — BunBite" },
      { property: "og:description", content: "Browse the BunBite menu — burgers, sides, drinks and pizza." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { category, q, veg } = Route.useSearch();
  const navigate = Route.useNavigate();
  type SP = { category: typeof category; q: string; veg: typeof veg };

  const filtered = useMemo(() => {
    return menu.filter((m) => {
      if (category !== "all" && m.category !== (category as Category)) return false;
      if (veg === "veg" && !m.veg) return false;
      if (veg === "nonveg" && m.veg) return false;
      if (q && !m.name.toLowerCase().includes(q.toLowerCase()) && !m.description.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [category, q, veg]);

  const cats = [{ id: "all" as const, label: "All", emoji: "✨" }, ...categories];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Menu</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold md:text-5xl">Crafted with love.</h1>
      </header>

      {/* search + filters */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => navigate({ search: (prev: SP) => ({ ...prev, q: e.target.value }) })}
            placeholder="Search burgers, fries, drinks…"
            className="w-full rounded-full border border-border bg-card py-3.5 pl-11 pr-5 text-sm shadow-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {cats.map((c) => {
            const active = category === c.id;
            return (
              <button
                key={c.id}
                onClick={() => navigate({ search: (prev: SP) => ({ ...prev, category: c.id }) })}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-juicy"
                    : "bg-card text-foreground hover:bg-muted"
                }`}
              >
                <span>{c.emoji}</span>
                {c.label}
              </button>
            );
          })}
          <div className="ml-auto inline-flex rounded-full border border-border bg-card p-1">
            {(["all", "veg", "nonveg"] as const).map((v) => (
              <button
                key={v}
                onClick={() => navigate({ search: (prev: SP) => ({ ...prev, veg: v }) })}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                  veg === v ? "bg-charcoal text-cream" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v === "nonveg" ? "Non-Veg" : v}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-16 text-center">
          <p className="text-5xl">🥲</p>
          <p className="mt-4 font-display text-xl font-bold">Nothing matches that.</p>
          <p className="mt-1 text-sm text-muted-foreground">Try a different category or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => (
            <FoodCard key={m.id} item={m} />
          ))}
        </div>
      )}
    </div>
  );
}
