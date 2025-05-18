import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Phone,
  MapPin,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const statusTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        });
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
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),rgba(30,58,138,0.05))]"></div>

      {/* Subtle floating shapes similar to hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-12 h-12 border border-primary/10 rounded-full animate-float opacity-30"
          style={{ animationDelay: "0s", animationDuration: "15s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-primary/10 rounded-lg rotate-45 animate-float opacity-20"
          style={{ animationDelay: "2s", animationDuration: "18s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-16 h-16 border border-secondary/10 rounded-full animate-float opacity-30"
          style={{ animationDelay: "1s", animationDuration: "12s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal opacity-0">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto reveal opacity-0"
            style={{ animationDelay: "100ms" }}
          ></div>
          <p
            className="text-foreground/80 mt-4 max-w-xl mx-auto reveal opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal opacity-0" style={{ animationDelay: "300ms" }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start group hover:-translate-y-1 transition-all duration-300 p-2 rounded-lg hover:bg-card/50">
                <Mail className="mr-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:niwahang00@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    niwahang00@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group hover:-translate-y-1 transition-all duration-300 p-2 rounded-lg hover:bg-card/50">
                <Phone className="mr-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a
                    href="tel:+977 9818284883"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +977 9818284883
                  </a>
                </div>
              </div>

              <div className="flex items-start group hover:-translate-y-1 transition-all duration-300 p-2 rounded-lg hover:bg-card/50">
                <MapPin className="mr-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <a
                    href="https://maps.google.com/?q=Kathmandu,Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                  >
                    Kathmandu, Nepal
                    <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Niwahan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/Niwahan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:niwahang00@gmail.com"
                className="bg-card p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="reveal opacity-0" style={{ animationDelay: "400ms" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="user_name"
                  placeholder="Your name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="bg-card/50 border-border/40 transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="bg-card/50 border-border/40 transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-card/50 border-border/40 transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-card/50 border-border/40 transition-all duration-300 focus:ring-2 focus:ring-primary/50 hover:border-primary/50"
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
              <Button
                type="submit"
                className="w-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>

                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
