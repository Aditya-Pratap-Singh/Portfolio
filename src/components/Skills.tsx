import { 
  Target, 
  Users, 
  FileText, 
  TestTube, 
  TrendingUp,
  Database,
  LineChart,
  Figma,
  ListTodo,
  Search,
  Kanban,
  Brain,
  Cog,
  Cloud,
  MessageSquare,
  Layers
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Target,
      skills: [
        { name: "Roadmapping & PRDs", icon: FileText },
        { name: "Discovery & Research", icon: Search },
        { name: "A/B Testing", icon: TestTube },
        { name: "OKRs & KPIs", icon: Target },
        { name: "Go-to-Market", icon: TrendingUp },
        { name: "Backlog Management", icon: Kanban },
      ],
    },
    {
      title: "Technical & AI",
      icon: Brain,
      skills: [
        { name: "SQL & Data Analytics", icon: Database },
        { name: "AI/ML Product Sense", icon: Brain },
        { name: "LLM & Prompt Eng", icon: MessageSquare },
        { name: "API Design", icon: Cog },
      ],
    },
    {
      title: "Tools & Methodologies",
      icon: Layers,
      skills: [
        { name: "Scrum/Agile & SAFe", icon: Users },
        { name: "Jira & Notion", icon: ListTodo },
        { name: "Figma", icon: Figma },
        { name: "Google Analytics", icon: LineChart },
        { name: "AWS", icon: Cloud },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
