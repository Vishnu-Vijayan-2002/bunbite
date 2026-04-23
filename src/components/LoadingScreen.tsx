import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShow(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8 h-24 w-24">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
          <div className="relative flex h-full w-full items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-2xl">
            <span className="text-4xl animate-bounce">🍔</span>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
          Bun<span className="text-primary">Bite</span>
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground animate-pulse">
          Preparing your menu
        </p>

        {/* Progress Bar Container */}
        <div className="mt-12 w-64 h-1.5 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Text */}
        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-primary/60">
          <span>{progress}%</span>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
    </div>
  );
}
