"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"

interface Skill {
  name: string
  level: number
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

const skillBarVariants = {
  hidden: { width: 0 },
  show: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  })
}

export function Skills() {
  const frontendSkills: Skill[] = [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "Material UI", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "ASP.NET", level: 75 },
    { name: "REST APIs", level: 90 },
  ]

  const designSkills: Skill[] = [
    { name: "Figma", level: 85 },
    { name: "Adobe XD", level: 80 },
    { name: "User Flow Design", level: 85 },
  ]

  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["React", "Angular", "HTML5/CSS3", "Material UI", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "ASP.NET", "REST APIs"],
    },
    {
      category: "Languages",
      skills: ["Java", "Python", "C#", "JavaScript (ES6+)"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Oracle SQL"],
    },
    {
      category: "UI/UX",
      skills: ["Figma", "Adobe XD", "User Flow Design"],
    },
  ]

  const softSkills = [
    "Cross-functional Collaboration",
    "Problem Solving",
    "Time Management",
  ]

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "SB Solutions",
      period: "Aug 2022 - Dec 2022",
      description: "Developed Angular components, implemented Spring Boot features, collaborated with the development team, and contributed to feature development and testing.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computing",
      institution: "Islington College (Affiliated to London Metropolitan University)",
      period: "Mar 2021 - Dec 2023",
    },
    {
      degree: "Diploma in Graphic Design",
      institution: "Gurukul Institute",
      period: "2019",
    },
  ]

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          variants={skillBarVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={level}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-shine">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
            <div className="space-y-8">
              {technicalSkills.map((skillGroup) => (
                <motion.div
                  key={skillGroup.category}
                  variants={item}
                  className="group"
                >
                  <h4 className="text-xl font-medium text-primary mb-3 group-hover:translate-x-2 transition-transform">{skillGroup.category}</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                  >
                    {skillGroup.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary p-4 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <p className="text-lg">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Experience</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">My technical skills and professional background.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="skills">
              <Card>
                <CardContent className="pt-6">
                  <Tabs defaultValue="frontend">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="frontend">Frontend</TabsTrigger>
                      <TabsTrigger value="backend">Backend</TabsTrigger>
                      <TabsTrigger value="design">Design</TabsTrigger>
                    </TabsList>
                    <TabsContent value="frontend">
                      {frontendSkills.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                      ))}
                    </TabsContent>
                    <TabsContent value="backend">
                      {backendSkills.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                      ))}
                    </TabsContent>
                    <TabsContent value="design">
                      {designSkills.map((skill) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="experience">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex justify-between text-sm text-foreground/70 mb-2">
                        <span>{exp.company}</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-foreground/80">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex justify-between text-sm text-foreground/70">
                        <span>{edu.institution}</span>
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardContent className="pt-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <p className="text-foreground/70 mb-6 flex-grow">
                Download my resume for a complete overview of my skills, experience, and education.
              </p>
              <Button asChild className="w-full group">
                <a 
                  href="/niwahang-angbuhang-resume.pdf.pdf" 
                  download="Niwahang_Angbuhang_Resume.pdf"
                  className="flex items-center justify-center"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
