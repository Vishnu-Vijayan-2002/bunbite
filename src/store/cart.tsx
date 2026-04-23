import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export interface CartLine {
  item: MenuItem;
  qty: number;
}

interface CartCtx {
  lines: CartLine[];
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  setOpen: (v: boolean) => void;
  storeNumber: string | null;
  deskNumber: string | null;
  setStoreDetails: (store: string, desk: string) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [storeNumber, setStoreNumber] = useState<string | null>(null);
  const [deskNumber, setDeskNumber] = useState<string | null>(null);

  // hydrate
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart-lines");
      if (raw) setLines(JSON.parse(raw));
      const s = localStorage.getItem("store-number");
      const d = localStorage.getItem("desk-number");
      if (s) setStoreNumber(s);
      if (d) setDeskNumber(d);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("cart-lines", JSON.stringify(lines));
      if (storeNumber) localStorage.setItem("store-number", storeNumber);
      if (deskNumber) localStorage.setItem("desk-number", deskNumber);
    } catch {}
  }, [lines, storeNumber, deskNumber]);

  const setStoreDetails = (store: string, desk: string) => {
    setStoreNumber(store);
    setDeskNumber(desk);
  };

  const add = (item: MenuItem) =>
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id);
      if (existing) return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { item, qty: 1 }];
    });

  const remove = (id: string) => setLines((prev) => prev.filter((l) => l.item.id !== id));

  const setQty = (id: string, qty: number) =>
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.item.id !== id) : prev.map((l) => (l.item.id === id ? { ...l, qty } : l)),
    );

  const clear = () => setLines([]);

  const { total, count } = useMemo(() => {
    let t = 0;
    let c = 0;
    for (const l of lines) {
      t += l.item.price * l.qty;
      c += l.qty;
    }
    return { total: t, count: c };
  }, [lines]);

  return (
    <Ctx.Provider
      value={{
        lines,
        add,
        remove,
        setQty,
        clear,
        total,
        count,
        open,
        setOpen,
        storeNumber,
        deskNumber,
        setStoreDetails,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
