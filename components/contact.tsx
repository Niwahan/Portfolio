"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

dotenv.config();

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const statusTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

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
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });


    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        if (statusTimeoutRef.current) {
          clearTimeout(statusTimeoutRef.current);
        }
        
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        
        statusTimeoutRef.current = setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
        
        setFormData({ user_name: "", user_email: "", message: "" });
      }
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
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
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block mt-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8"
            >
              <p className="text-center text-muted-foreground italic">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}