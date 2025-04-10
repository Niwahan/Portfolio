"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Niwa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <ModeToggle />
          <Button asChild className="group">
            <a 
              href="/niwahang-angbuhang-resume.pdf.pdf" 
              download="Niwahang_Angbuhang_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#projects"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full group">
              <a 
                href="/niwahang-angbuhang-resume.pdf.pdf" 
                download="Niwahang_Angbuhang_Resume.pdf"
                className="flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
