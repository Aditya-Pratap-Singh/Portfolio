import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always excited to discuss product management opportunities, collaborate on innovative projects, 
            or simply chat about the latest in tech and product strategy. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:aditya190300@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="gap-3 w-64">
                <Mail className="w-5 h-5" />
                Email Me
              </Button>
            </a>
            
            <a href="https://linkedin.com/in/aditya-pratap-singh-37114220b/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-3 w-64">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </a>
            
            <a href="https://github.com/Aditya-Pratap-Singh" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-3 w-64">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Aditya Pratap Singh. Built with passion for product and data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
