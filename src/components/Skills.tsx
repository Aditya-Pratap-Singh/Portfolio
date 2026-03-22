import { 
  Target, 
  Users, 
  FileText, 
  TestTube, 
  TrendingUp,
  BarChart3,
  Database,
  LineChart,
  Calculator,
  Boxes,
  Figma,
  ListTodo
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Target,
      skills: [
        { name: "Product Roadmap", icon: FileText },
        { name: "Agile/Scrum", icon: ListTodo },
        { name: "User Research", icon: Users },
        { name: "Wireframing", icon: Figma },
        { name: "A/B Testing", icon: TestTube },
        { name: "Competitive Analysis", icon: TrendingUp },
        { name: "Product Strategy", icon: Compass },
        { name: "Stakeholder Management", icon: Users },
        { name: "Risk Mitigation Planning", icon: Shield },
      ],
    },
    {
      title: "AI & Automation",
      icon: Brain,
      skills: [
        { name: "Generative AI", icon: Bot },
        { name: "LLM Prompting", icon: Brain },
        { name: "No-Code AI Agents", icon: Zap },
        { name: "Multimodal AI", icon: Cpu },
        { name: "AI Prototyping", icon: FlaskConical },
        { name: "N8N Automation", icon: Zap },
        { name: "Google AI Studio", icon: Bot },
      ],
    },
    {
      title: "Business Analytics",
      icon: BarChart3,
      skills: [
        { name: "SQL", icon: Database },
        { name: "Data Visualization", icon: LineChart },
        { name: "Statistical Analysis", icon: BarChart3 },
        { name: "Exploratory Data Analysis", icon: Search },
        { name: "Predictive Modelling", icon: PieChart },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Boxes,
      skills: [
        { name: "Agility", icon: ListTodo },
        { name: "Figma", icon: Figma },
        { name: "Python", icon: Database },
        { name: "Google Antigravity", icon: Zap },
        { name: "VirusTotal API", icon: Shield },
        { name: "Gemini / Vertex AI", icon: Bot },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <Card 
                key={category.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-card rounded-lg">
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div 
                          key={skill.name}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          <SkillIcon className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
