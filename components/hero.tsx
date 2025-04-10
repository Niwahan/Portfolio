"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary animate-shine">Niwahang Angbuhang</span>
        </h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-float"
        >
          Full-Stack Developer & Designer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Detail-oriented Software Developer with hands-on experience in full-stack development using MERN stack and Java
          technologies. Demonstrated success in developing responsive web applications and efficient database solutions.
          Strong analytical skills with a passion for creating intuitive user interfaces and robust backend systems.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-all hover:scale-105 duration-300"
          >
            Contact Me
          </Link>
          <Link
            href="https://linkedin.com/in/niwahang"
            target="_blank"
            className="text-primary hover:text-primary/90 transition-all hover:scale-105 duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Niwahan"
            target="_blank"
            className="text-primary hover:text-primary/90 transition-all hover:scale-105 duration-300"
          >
            GitHub
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
