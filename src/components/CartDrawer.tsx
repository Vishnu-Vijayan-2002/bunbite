import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/store/cart";
import { useEffect } from "react";

export function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, total, clear } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold">
            <ShoppingBag className="h-5 w-5 text-primary" /> Your Cart
          </h2>
          <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-muted text-3xl">🍔</div>
              <p className="mt-4 font-display text-lg font-bold">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">Add something delicious to get started.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {lines.map((l) => (
                <li key={l.item.id} className="flex gap-3 rounded-2xl border border-border p-3">
                  <img src={l.item.image} alt={l.item.name} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold leading-tight">{l.item.name}</p>
                      <button
                        onClick={() => remove(l.item.id)}
                        className="text-muted-foreground hover:text-destructive"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-bold text-primary">₹{l.item.price}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          onClick={() => setQty(l.item.id, l.qty - 1)}
                          className="grid h-8 w-8 place-items-center hover:text-primary"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-bold">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.item.id, l.qty + 1)}
                          className="grid h-8 w-8 place-items-center hover:text-primary"
                          aria-label="Increase"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold">₹{l.item.price * l.qty}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border bg-muted/40 px-5 py-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Delivery</span>
              <span>{total >= 500 ? "FREE" : "₹40"}</span>
            </div>
            <div className="mt-2 flex items-center justify-between font-display text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">₹{total + (total >= 500 ? 0 : 40)}</span>
            </div>
            <button
              onClick={() => {
                alert("Order placed! 🎉 Thank you.");
                clear();
                setOpen(false);
              }}
              className="mt-4 w-full rounded-full bg-primary py-3.5 font-semibold text-primary-foreground shadow-juicy transition-transform hover:scale-[1.02]"
            >
              Place Order
            </button>
            <button
              onClick={clear}
              className="mt-2 w-full rounded-full py-2 text-sm font-medium text-muted-foreground hover:text-destructive"
            >
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
