import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BunBite" },
      { name: "description", content: "Get in touch with BunBite — visit us, call or send a message." },
      { property: "og:title", content: "Contact — BunBite" },
      { property: "og:description", content: "Get in touch with BunBite — visit us, call or send a message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <header className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Say Hi</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold md:text-5xl">Got a craving or a question?</h1>
        <p className="mt-3 text-muted-foreground">We'd love to hear from you.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          { icon: MapPin, title: "Visit", lines: ["12 Foodie Lane", "Bandra West, Mumbai 400050"] },
          { icon: Phone, title: "Call", lines: ["+91 98765 43210", "Daily, 10am – 12am"] },
          { icon: Mail, title: "Email", lines: ["hello@bunbite.com", "orders@bunbite.com"] },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl bg-card p-6 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-juicy">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l} className="text-sm text-muted-foreground">{l}</p>
            ))}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We'll get back to you. 💌");
        }}
        className="mt-10 grid gap-5 rounded-[2rem] bg-gradient-mustard p-8 shadow-card md:p-12"
      >
        <div className="flex items-center gap-3 text-charcoal">
          <Clock className="h-5 w-5" />
          <span className="text-sm font-semibold">We reply within an hour during open hours.</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <input required placeholder="Your name" className="rounded-2xl border-2 border-charcoal/10 bg-white/80 px-5 py-3.5 outline-none focus:border-primary" />
          <input required type="email" placeholder="Email" className="rounded-2xl border-2 border-charcoal/10 bg-white/80 px-5 py-3.5 outline-none focus:border-primary" />
        </div>
        <textarea required rows={5} placeholder="Tell us what's on your mind…" className="rounded-2xl border-2 border-charcoal/10 bg-white/80 px-5 py-3.5 outline-none focus:border-primary" />
        <button type="submit" className="self-start rounded-full bg-charcoal px-8 py-3.5 font-semibold text-cream transition-transform hover:scale-105">
          Send message
        </button>
      </form>
    </div>
  );
}
