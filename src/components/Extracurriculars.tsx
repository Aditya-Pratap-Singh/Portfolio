import { Trophy, Users, Mountain, Camera, Book, Music, SwordIcon, Swords, SwordsIcon, Gamepad2, MicVocal, Joystick, TvMinimalIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Activity {
  title: string;
  description: string;
  icon: any;
  category: "leadership" | "personal";
}

const Extracurriculars = () => {
  const activities: Activity[] = [
    {
      title: "Core Member, Food Committee",
      description: "Core Committe Member of FoodCom at Great Lakes representing 1000+ students",
      icon: Users,
      category: "leadership",
    },
    {
      title: "Member, Prodigies",
      description: "Member of Prodigies - The Product Management Club at Great Lakes",
      icon: Users,
      category: "leadership",
    },
    {
      title: "Case Competition Winner",
      description: "Winner, 'Advitiya', ICAR-NAARM, Hyderabad, 2025",
      icon: Trophy,
      category: "leadership",
    },
    {
      title: "Case Competition Finalist",
      description: "Runner-Up, 'Fluxathon', DoMS IIT Madras, 2025",
      icon: Trophy,
      category: "leadership",
    },
    {
      title: "Case Competition Semi-Finalist",
      description: "SemiFinalist, 'Case Combat', NMIMS, Mumbai, 2025",
      icon: Trophy,
      category: "leadership",
    },
    {
      title: "Badminton",
      description: "Master of court strategy, shuttlecock slayer, and net ninja",
      icon: SwordIcon,
      category: "personal",
    },
    {
      title: "Video Gaming",
      description: "Casual world saviour, strategic snack manager and keyboard warrior",
      icon: Gamepad2,
      category: "personal",
    },
    {
      title: "Video Game Development",
      description: "A place where my creativity runs wild and graphics takes a back seat",
      icon: Joystick,
      category: "personal",
    },
    {
      title: "Movies & TV Shows",
      description: "Need a recommendation? I've got a list longer than my to-do list",
      icon: TvMinimalIcon,
      category: "personal",
    },
    {
      title: "Bathroom Singing",
      description: "Live concerts in shower arenas, acclaimed by toiletries and mirrors",
      icon: MicVocal,
      category: "personal",
    },
  ];

  const leadershipActivities = activities.filter((a) => a.category === "leadership");
  const personalActivities = activities.filter((a) => a.category === "personal");

  return (
    <section id="extracurriculars" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Beyond the Desk
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Leadership, passions, and what makes me tick
        </p>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Leadership & Professional Activities */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Leadership & Professional Growth</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {leadershipActivities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <Card
                    key={activity.title}
                    className="bg-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in-up hover:scale-105"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-card rounded-lg shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Personal Interests */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Interests & Hobbies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {personalActivities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <Card
                    key={activity.title}
                    className="bg-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in-up hover:scale-105"
                    style={{ animationDelay: `${(idx + 3) * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-card rounded-lg shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
