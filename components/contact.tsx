"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+977 9818284883",
      href: "tel:+9779818284883",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "niwahang00@gmail.com",
      href: "mailto:niwahang00@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "https://maps.google.com/?q=Kathmandu,Nepal",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.label === "Location" ? "_blank" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-primary mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.label}</h3>
              <p className="text-muted-foreground">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
