import { useState, useEffect } from "react";
import { useCart } from "@/store/cart";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Store, ArrowRight } from "lucide-react";

export function StoreEntryModal() {
  const { storeNumber, deskNumber, setStoreDetails } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [store, setStore] = useState("");
  const [desk, setDesk] = useState("");

  useEffect(() => {
    if (!storeNumber || !deskNumber) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [storeNumber, deskNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (store && desk) {
      setStoreDetails(store, desk);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] border-none bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <DialogHeader className="relative z-10">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Store className="h-8 w-8" />
          </div>
          <DialogTitle className="text-center text-3xl font-display font-bold">Welcome to SnapOrder</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-lg">
            Please enter your location details to start ordering delicious food.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4 relative z-10">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Store Number</Label>
              <div className="relative group">
                <Store className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="store"
                  placeholder="e.g. Store 01"
                  value={store}
                  onChange={(e) => setStore(e.target.value)}
                  className="pl-10 h-12 bg-white/50 border-white/50 focus:bg-white transition-all text-lg"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desk" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Desk / Table Number</Label>
              <div className="relative group">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="desk"
                  placeholder="e.g. Table 12"
                  value={desk}
                  onChange={(e) => setDesk(e.target.value)}
                  className="pl-10 h-12 bg-white/50 border-white/50 focus:bg-white transition-all text-lg"
                  required
                />
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group">
            Start Ordering
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
