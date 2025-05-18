
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export const BackgroundElements = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${isDark ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient circles */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      
      {/* Abstract shapes */}
      <svg className="absolute top-1/4 left-10 w-24 h-24 text-primary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
        }}
      >
        <path fill="currentColor" d="M45.4,-77.5C58.2,-69.3,67.9,-54.9,73.6,-39.9C79.4,-24.9,81.3,-9.2,78.9,5.8C76.4,20.8,69.5,35.2,59.8,47.6C50.2,59.9,37.7,70.3,22.7,76.5C7.8,82.6,-9.7,84.5,-24.9,79.7C-40.1,74.8,-53.1,63.1,-64.5,49.5C-75.9,35.9,-85.8,20.3,-86.8,4.1C-87.8,-12.1,-79.9,-28.9,-69.1,-42.3C-58.3,-55.7,-44.7,-65.7,-30.7,-73.1C-16.8,-80.6,-2.5,-85.5,11,-83.6C24.5,-81.7,32.6,-85.8,45.4,-77.5Z" transform="translate(100 100)" />
      </svg>
      
      <svg className="absolute bottom-1/4 right-10 w-32 h-32 text-secondary/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
      >
        <path fill="currentColor" d="M47.7,-73.8C62.9,-67.9,77.2,-57.4,83.6,-43.2C90.1,-29,88.7,-11.2,82.8,3.4C76.9,18,66.6,29.5,56.9,41.3C47.3,53.1,38.3,65.2,26.4,71C14.5,76.9,-0.3,76.5,-15.4,73.6C-30.4,70.8,-45.8,65.4,-57.2,55.2C-68.6,44.9,-76,29.7,-79.7,13.7C-83.3,-2.3,-83.3,-19.2,-77.3,-33.3C-71.2,-47.3,-59.2,-58.6,-45.5,-65C-31.7,-71.4,-15.9,-73,-0.3,-72.5C15.3,-72.1,32.6,-79.7,47.7,-73.8Z" transform="translate(100 100)" />
      </svg>
      
      {/* Diagonal lines */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23${isDark ? 'ffffff' : '000000'}' stroke-width='1'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Moving blobs */}
      <MovingBlob 
        className="absolute top-1/3 left-1/5 w-64 h-64 text-primary/5" 
        delay={0}
      />
      <MovingBlob 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 text-secondary/5" 
        delay={2}
      />
    </div>
  );
};

interface MovingBlobProps {
  className?: string;
  delay?: number;
}

const MovingBlob = ({ className, delay = 0 }: MovingBlobProps) => {
  const [path, setPath] = useState("");
  
  useEffect(() => {
    // Generate initial blob path
    generateBlobPath();
    
    // Animate the blob every 8 seconds
    const interval = setInterval(() => {
      generateBlobPath();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const generateBlobPath = () => {
    const points = 8;
    const slice = (Math.PI * 2) / points;
    const radius = 80;
    
    // Generate random points around a circle
    let pathData = "M";
    for (let i = 0; i < points; i++) {
      const angle = slice * i;
      const randomRadius = radius + (Math.random() * 20 - 10);
      const x = 100 + Math.cos(angle) * randomRadius;
      const y = 100 + Math.sin(angle) * randomRadius;
      
      if (i === 0) {
        pathData += `${x},${y}`;
      } else {
        const cpRadius = randomRadius * 0.5;
        const cp1x = 100 + Math.cos(angle - slice * 0.5) * cpRadius * 1.5;
        const cp1y = 100 + Math.sin(angle - slice * 0.5) * cpRadius * 1.5;
        pathData += ` S${cp1x},${cp1y} ${x},${y}`;
      }
    }
    
    pathData += " Z";
    setPath(pathData);
  };
  
  return (
    <div className={className} style={{ animationDelay: `${delay}s` }}>
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-blob"
      >
        <path fill="currentColor" d={path || "M100,100 A80,80 0 1,1 100,101 Z"} />
      </svg>
    </div>
  );
};

export default BackgroundElements;
