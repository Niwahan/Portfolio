"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
    figmaUrl: "https://figma.com/file/project1",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
    figmaUrl: "https://figma.com/file/project2",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode and animations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
    figmaUrl: "https://figma.com/file/project3",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard with location search and 7-day forecast.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    liveUrl: "https://project4.com",
    githubUrl: "https://github.com/yourusername/project4",
  },
]

// All unique tags from projects
const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)))

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData

  const projects = [
    {
      title: "Gym Management System",
      description: "A full-stack gym management system using React, Node.js, Express, and MongoDB. Features include user authentication with JWT and different access levels, and responsive interfaces using Material UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Material UI", "JWT"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
    {
      title: "MERN Blogging Platform",
      description: "A blogging platform built using MongoDB, Express.js, React, and Node.js. Implemented user authentication, content management features, search functionality, and notification system.",
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
    {
      title: "Course Enrollment System",
      description: "A Java-based GUI desktop application for efficient course enrollment management. Features include student registration, course management, and enrollment tracking.",
      tags: ["Java", "GUI", "Desktop App"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
    {
      title: "Library Management System",
      description: "A Python-based library management system with inventory tracking and user checkout capabilities. Includes features for book management and user borrowing history.",
      tags: ["Python", "Database", "GUI"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
    {
      title: "Online Voting System",
      description: "A secure online voting web application using ASP.NET and Oracle SQL. Implemented user authentication, vote tracking, and result visualization.",
      tags: ["ASP.NET", "Oracle SQL", "Web App"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
    {
      title: "Bike Service Center Management",
      description: "A C# .NET MAUI Blazor desktop application for bike service center management. Features include service tracking, customer management, and billing system.",
      tags: [".NET MAUI", "Blazor", "C#"],
      github: "https://github.com/Niwahan",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-shine">Projects</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-primary hover:text-primary/90 transition-all hover:scale-105 duration-300"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="text-primary hover:text-primary/90 transition-all hover:scale-105 duration-300"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
