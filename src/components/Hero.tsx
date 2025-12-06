import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import headshotImage from "@/assets/professional-headshot.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aditya Pratap Singh
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                MBA Candidate | Product Management & Business Analytics
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Passionate about building user-centric products backed by data-driven insights. 
              Combining strategic thinking with analytical rigor to deliver exceptional product experiences 
              that drive business growth and user satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a href="/AdityaPratapSingh_Resume.pdf" download="AdityaPratapSingh_Resume.pdf">
                <Button variant="hero" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
                </a>
              <Button variant="outline" size="lg" className="gap-2" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={headshotImage}
                alt="Aditya Pratap Singh - MBA Student"
                className="relative rounded-2xl shadow-card w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
