
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl: string;
  demoUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  delay = 0,
}: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card 
        className="group hover:shadow-xl transition-all duration-300 h-full border-border/40 backdrop-blur-sm relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
      >
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(var(--primary-rgb), 0.03), transparent 25%)`,
          }}
        />
        
        <CardContent className="p-6 relative">
          <div className="flex flex-col h-full space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary backdrop-blur-sm border border-primary/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" size="sm" className="group/button relative overflow-hidden">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-primary/5 opacity-0 group-hover/button:opacity-100 transition-opacity" />
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
              {demoUrl && (
                <Button asChild size="sm" className="group/button relative overflow-hidden">
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover/button:opacity-100 transition-opacity" />
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
