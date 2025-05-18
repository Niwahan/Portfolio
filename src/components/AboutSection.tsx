import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "TailwindCSS",
    "Redux",
    "Responsive Design",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "RESTful APIs",
    "Firebase",
    "AWS",
  ];

  const designTools = ["Figma", "UI/UX Design", "Wireframing", "Prototyping"];

  const devTools = ["Git", "GitHub", "VS Code", "Testing"];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal opacity-0">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto reveal opacity-0"
            style={{ animationDelay: "100ms" }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-foreground/80 mb-4">
              I'm a creative frontend developer with a passion for building
              user-centric digital experiences. My journey in web development
              began with a fascination for the intersection of design and
              technology, evolving into a career where I blend aesthetics with
              functionality.
            </p>
            <p className="text-foreground/80 mb-4">
              I thrive on transforming complex problems into elegant, intuitive
              interfaces. My approach combines technical expertise with design
              thinking to create applications that not only work flawlessly but
              also delight users with thoughtful interactions and visual appeal.
            </p>
            <p className="text-foreground/80">
              Beyond coding, I'm constantly exploring emerging technologies,
              contributing to open-source projects, and refining my craft
              through continuous learning and experimentation.
            </p>
          </div>

          <div className="reveal opacity-0" style={{ animationDelay: "300ms" }}>
            <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-primary">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-card hover:bg-card/80 text-foreground px-3 py-2 hover-translate"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-primary">
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-card hover:bg-card/80 text-foreground px-3 py-2 hover-translate"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2 text-primary/80">
                Design
              </h4>
              <div className="flex flex-wrap gap-2">
                {designTools.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-card hover:bg-card/80 text-foreground px-3 py-2 hover-translate"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-primary/80">
                Development Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {devTools.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-card hover:bg-card/80 text-foreground px-3 py-2 hover-translate"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
