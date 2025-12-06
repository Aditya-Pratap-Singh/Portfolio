const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-fade-in-up">
              Hi, I'm Aditya. I’ve always been fascinated by how products shape the way we think and behave. As a kid, video games weren’t just entertainment, they were my first lessons in design, systems, and user experience. That curiosity eventually led me to engineering, where I discovered how things work, and then to product management, where I learned why they matter.
              </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              My journey has taken me from building small games to leading validation for large scale cloud transformations, improving data reliability for enterprise systems and collaborating across engineering and business teams to ship high-impact solutions. Along the way, I found myself driven by one question: How do we turn complex problems into simple, meaningful experiences?
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Beyond the classroom, I've applied these skills through internships and case competitions, where I've conducted user research, and developed product roadmaps.
            </p>
            
            <p className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            During my MBA, I deepened this passion through product teardowns, user research, and hands-on projects, from designing recommendation flows to building tools that brought clarity to messy data and enabled faster decision-making.
            </p>

            <p className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Today, I’m motivated by products that make people’s lives easier, whether that’s a learner navigating a platform, a business team making decisions, or a user trying to get from confusion to clarity
            </p>

            <p className="animate-fade-in-up font-semibold text-foreground" style={{ animationDelay: "0.5s" }}>
              This portfolio is a glimpse into how I think, build and bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
