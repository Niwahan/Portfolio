import AnimatedText from "./AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const { left, top, width, height } =
        sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Hero-specific background elements */}
      <div
        className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      />

      <div
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-secondary/10 dark:bg-secondary/15 blur-3xl"
        style={{
          transform: `translate(${mousePos.x * -0.7}px, ${
            mousePos.y * -0.7
          }px)`,
        }}
      />

      {/* Subtle floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-12 h-12 border border-primary/10 rounded-full animate-float opacity-40"
          style={{ animationDelay: "0s", animationDuration: "10s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-8 h-8 border border-primary/10 rounded-lg rotate-45 animate-float opacity-30"
          style={{ animationDelay: "1s", animationDuration: "15s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-secondary/10 rounded-full animate-float opacity-40"
          style={{ animationDelay: "2s", animationDuration: "12s" }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="mb-6">
          <span
            className="inline-block py-1 px-3 rounded-full border border-foreground/10 text-foreground/80 font-medium text-sm mb-4 opacity-0 animate-fade-in glass-card"
            style={{ animationDelay: "0.1s" }}
          >
            Frontend Developer & UI/UX Enthusiast
          </span>
        </div>

        <AnimatedText
          text="Hi, I'm Niwahang."
          className="text-4xl md:text-7xl font-bold mb-4 text-glow tracking-tight"
        />

        <AnimatedText
          text="Crafting digital experiences."
          className="text-2xl md:text-4xl mb-6 text-foreground/80"
          el="h2"
        />

        <p
          className="text-lg max-w-2xl mb-8 text-foreground/70 opacity-0 animate-fade-in leading-relaxed"
          style={{ animationDelay: "1s" }}
        >
          I specialize in creating modern, intuitive web applications with a
          focus on performance, accessibility, and beautiful user interfaces
          that deliver exceptional user experiences.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 relative overflow-hidden group"
          >
            <a href="#projects">
              Explore Projects
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 text-base px-8 relative overflow-hidden group"
          >
            <a href="#contact">
              Let's Connect
              <span className="absolute inset-0 w-full h-full bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 animate-float opacity-0 animate-fade-in hover:opacity-75 transition-opacity"
          style={{ animationDelay: "1.5s" }}
        >
          <ArrowDown className="h-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
