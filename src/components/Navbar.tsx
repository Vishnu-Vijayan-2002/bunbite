import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, User, Menu as MenuIcon } from "lucide-react";
import { useCart } from "@/store/cart";
import { useState } from "react";

export function Navbar() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkCls = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-juicy">
            <span className="text-lg">🍔</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Bun<span className="text-primary">Bite</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <Link to="/menu" className={linkCls} activeProps={{ className: "text-primary" }}>
            Menu
          </Link>
          <Link to="/contact" className={linkCls} activeProps={{ className: "text-primary" }}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            to="/menu"
            className="hidden h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-muted hover:text-foreground md:grid"
            aria-label="Search menu"
          >
            <Search className="h-4.5 w-4.5" />
          </Link>
          <button
            className="hidden h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-muted hover:text-foreground md:grid"
            aria-label="Account"
          >
            <User className="h-4.5 w-4.5" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-juicy transition-transform hover:scale-105"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-secondary px-1 text-[11px] font-bold text-secondary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            className="ml-1 grid h-10 w-10 place-items-center rounded-full text-foreground/70 hover:bg-muted md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted">
              Home
            </Link>
            <Link to="/menu" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted">
              Menu
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-2 hover:bg-muted">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
