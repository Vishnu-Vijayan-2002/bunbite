import { Link } from "@tanstack/react-router";
import { Plus, Star } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/store/cart";

export function FoodCard({ item }: { item: MenuItem }) {
  const { add, setOpen } = useCart();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-juicy">
      <Link to="/item/$id" params={{ id: item.id }} className="relative block aspect-square overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute left-3 top-3 grid h-6 w-6 place-items-center rounded-md border-2 ${
            item.veg ? "border-green-700 bg-white" : "border-red-700 bg-white"
          }`}
          aria-label={item.veg ? "Vegetarian" : "Non-vegetarian"}
        >
          <span className={`block h-2.5 w-2.5 rounded-full ${item.veg ? "bg-green-700" : "bg-red-700"}`} />
        </span>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-secondary text-secondary" />
          {item.rating}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to="/item/$id" params={{ id: item.id }}>
          <h3 className="font-display text-lg font-bold leading-tight hover:text-primary">{item.name}</h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-2xl font-extrabold text-primary">₹{item.price}</span>
          <button
            onClick={() => {
              add(item);
              setOpen(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream transition-all hover:bg-primary hover:scale-105"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
