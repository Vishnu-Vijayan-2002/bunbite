import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CategoryCards } from "@/components/CategoryCards";
import { FoodCard } from "@/components/FoodCard";
import { PromoBanner } from "@/components/PromoBanner";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = menu.slice(0, 4);
  return (
    <>
      <Hero />
      <CategoryCards />

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Featured</p>
            <h2 className="mt-1 font-display text-4xl font-bold md:text-5xl">Today's hot picks 🔥</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <PromoBanner />
    </>
  );
}
