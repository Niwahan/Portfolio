import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" id="main-content" role="main" aria-label="Portfolio Content">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
