import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, Star, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { getItem } from "@/data/menu";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/item/$id")({
  loader: ({ params }) => {
    const item = getItem(params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.name} — BunBite` },
          { name: "description", content: loaderData.item.description },
          { property: "og:title", content: `${loaderData.item.name} — BunBite` },
          { property: "og:description", content: loaderData.item.description },
          { property: "og:image", content: loaderData.item.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md p-12 text-center">
      <p className="font-display text-2xl font-bold">Item not found</p>
      <Link to="/menu" className="mt-4 inline-block text-primary hover:underline">Back to menu</Link>
    </div>
  ),
  component: ItemPage,
});

function ItemPage() {
  const { item } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <Link to="/menu" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to menu
      </Link>

      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-mustard p-6 shadow-card">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-primary/30" />
          <img
            src={item.image}
            alt={item.name}
            width={768}
            height={768}
            className="relative mx-auto aspect-square w-full rounded-2xl object-cover shadow-juicy"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${item.veg ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              <span className={`h-2 w-2 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
              {item.veg ? "Veg" : "Non-Veg"}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/30 px-3 py-1 text-xs font-bold">
              <Star className="h-3 w-3 fill-primary text-primary" /> {item.rating}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">{item.name}</h1>
          <p className="mt-3 text-base text-muted-foreground">{item.description}</p>

          <p className="mt-6 font-display text-5xl font-extrabold text-primary">₹{item.price}</p>

          <div className="mt-8">
            <h3 className="font-display text-lg font-bold">Ingredients</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.ingredients.map((i: string) => (
                <li key={i} className="rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-border bg-card">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-12 w-12 place-items-center hover:text-primary" aria-label="Decrease">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-display text-lg font-bold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-12 w-12 place-items-center hover:text-primary" aria-label="Increase">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => {
                for (let i = 0; i < qty; i++) add(item);
                setOpen(true);
              }}
              className="flex-1 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-juicy transition-transform hover:scale-[1.02] sm:flex-initial"
            >
              Order Now · ₹{item.price * qty}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
