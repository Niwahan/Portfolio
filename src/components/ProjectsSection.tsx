
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Repository } from "@/types/github";
import {
  LayoutGrid,
  Github,
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Niwahan/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        const filteredData = data
          .filter((repo: Repository) => !repo.fork)
          .sort((a: Repository, b: Repository) => 
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, 6);
        setProjects(filteredData);
      } catch (err) {
        setError("Failed to load projects");
        console.error("Error fetching data:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <LayoutGrid className="w-5 h-5" />
            <p className="text-foreground/80">
              A collection of my recent work
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center text-destructive py-10">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Box Layout */}
            {/* First row - 2 cards */}
            {projects[0] && (
              <Card className="md:col-span-7 group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold">{projects[0].name}</h3>
                        <p className="text-muted-foreground mt-2">
                          {projects[0].description || "A GitHub repository by Niwahan."}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {projects[0].stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{projects[0].stargazers_count}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {projects[0].topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto pt-4">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={projects[0].html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                      {projects[0].homepage && (
                        <Button asChild size="sm">
                          <a
                            href={projects[0].homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Second card in first row */}
            {projects[1] && (
              <div className="md:col-span-5">
                <ProjectCard
                  key={projects[1].id}
                  title={projects[1].name}
                  description={projects[1].description || "A GitHub repository by Niwahan."}
                  tags={projects[1].topics}
                  githubUrl={projects[1].html_url}
                  demoUrl={projects[1].homepage}
                />
              </div>
            )}

            {/* Second row - 3 cards with different sizes */}
            {projects[2] && (
              <div className="md:col-span-4">
                <ProjectCard
                  key={projects[2].id}
                  title={projects[2].name}
                  description={projects[2].description || "A GitHub repository by Niwahan."}
                  tags={projects[2].topics}
                  githubUrl={projects[2].html_url}
                  demoUrl={projects[2].homepage}
                />
              </div>
            )}

            {projects[3] && (
              <div className="md:col-span-4">
                <ProjectCard
                  key={projects[3].id}
                  title={projects[3].name}
                  description={projects[3].description || "A GitHub repository by Niwahan."}
                  tags={projects[3].topics}
                  githubUrl={projects[3].html_url}
                  demoUrl={projects[3].homepage}
                />
              </div>
            )}

            {projects[4] && (
              <div className="md:col-span-4">
                <ProjectCard
                  key={projects[4].id}
                  title={projects[4].name}
                  description={projects[4].description || "A GitHub repository by Niwahan."}
                  tags={projects[4].topics}
                  githubUrl={projects[4].html_url}
                  demoUrl={projects[4].homepage}
                />
              </div>
            )}

            {/* Last row - wide card */}
            {projects[5] && (
              <div className="md:col-span-12">
                <ProjectCard
                  key={projects[5].id}
                  title={projects[5].name}
                  description={projects[5].description || "A GitHub repository by Niwahan."}
                  tags={projects[5].topics}
                  githubUrl={projects[5].html_url}
                  demoUrl={projects[5].homepage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
