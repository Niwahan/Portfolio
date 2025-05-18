
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card/30 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-text mb-2">Portfolio</h2>
            <p className="text-foreground/60">Building the web, one project at a time.</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Niwahan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/Niwahan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:niwahang00@gmail.com"
              className="p-2 text-foreground/60 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Niwahang. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
