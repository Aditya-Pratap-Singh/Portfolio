import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  date: string;
  points: string[];
}

const Experience = () => {
  const timeline: TimelineItem[] = [
    {
      type: "work",
      title: "Product Management Intern",
      organization: "Paytm",
      date: "Aug 2025 - Sep 2025",
      points: [
        "Spearheaded competitor analysis of 8 payment gateways by surveying 150+ merchants to identify pain points and opportunities for product improvement.",
        "Built a centralized product portfolio website enabling leadership and product teams to drive informed decisions and fast execution.",
      ],
    },
    {
      type: "education",
      title: "Master of Business Administration (MBA)",
      organization: "Great Lakes Institute of Management, Chennai",
      date: "2025 - 2026",
      points: [
        "Majors: Product Management | Business Analytics",
        "GPA: 3.06/4.0 | Cum Laude",
        "Core Member, Food Committee | Member, Prodigies - The ProdMan Club"
      ],
    },
    {
      type: "work",
      title: "Senior Software Engineer",
      organization: "Mphasis Ltd",
      date: "Jun 2022 - Jun 2024",
      points: [
        "Led cross-functional collaboration with 10+ engineers to migrate critical legacy applications from Mainframe to Cloud for a Fortune 500 client, modernizing infrastructure used by millions and aligning with long-term digital transformation goals, minimizing the application's downtime by 30%.",
        "Maintained system reliability and safeguarded critical data during the seamless migration of 100TB+ data and millions of code lines, driving a measurable reduction in system maintenance costs.",
      ],
    },
    {
      type: "work",
      title: "Software Engineer",
      organization: "Mphasis Ltd",
      date: "Jul 2024 - May 2025",
      points: [
        "Enhanced data reliability and processing speed by validating and optimizing ETL workflows using Ab Initio, resulting in a ~25% increase in data accuracy and improved processing speed through data analysis.",
        "Co-developed a full-stack Resource Management System with a 6 member agile team, streamlining allocation for 2000+ internal users and reducing manual effort and improving internal productivity",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Technology (B.Tech)",
      organization: "Manipal Institute of Technology, Manipal Academy of Higher Education",
      date: "2018 - 2022",
      points: [
        "Major: Information Technology",
        "GPA: 6.9/10.0",
        "Core Member, MIT Gaming | Head of Events, TechTatva'20",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative mb-12 animate-fade-in-up ${
                  idx % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"}`}>
                  {/* Timeline Icon */}
                  <div
                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center ${
                      idx === 0 ? "shadow-glow" : ""
                    }`}
                  >
                    {item.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-24 md:ml-0 bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-primary font-medium">{item.organization}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
