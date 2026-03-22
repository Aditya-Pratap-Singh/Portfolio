import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";
import FanCodeImage from "@/assets/FanCode.png";
import Yelp from "@/assets/Yelp.png";
import TechSelect from "@/assets/TechSelect.png";
import AISecurityCheck from "@/assets/AISecurityCheck.png";
import Patient from "@/assets/Patient.png";
import AutoDocs from "@/assets/autodocs_cover.svg";
import LocalPDF from "@/assets/localpdf_cover.svg";


interface Project {
  id: number;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  objective: string;
  //role: string;
  process: string;
  results: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    /**
    */
    {
      id: 3,
      title: "AutoDocs – AI SOP Generator",
      summary: "Automated SOP creation using multimodal AI, cutting documentation time by 90%.",
      image: AutoDocs,
      tags: ["Generative AI", "Multimodal AI", "Google AI Studio", "Automation", "No-Code"],
      objective:
        "Enterprise teams waste significant time manually writing Standard Operating Procedures (SOPs) from recorded workflows and screen captures. The objective was to eliminate this bottleneck by building a multimodal AI agent that watches process videos and automatically generates structured, ready-to-use SOPs — with zero manual documentation effort.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process:
        "Built using Google's Gemini 3 model via Google AI Studio, the agent accepts process walkthrough videos as input. It applies intent-based video reasoning to understand each step being demonstrated, extracts the logical sequence of actions, and produces a formatted SOP document. The pipeline was designed to be fully automated — from video ingestion to document output — with no human intervention required in between.",
      results:
        "The agent reduced SOP documentation time by 90%, transforming a multi-hour manual task into a near-instant automated output. Teams were able to onboard faster, maintain more consistent documentation, and scale process documentation across departments without additional headcount. Built using Google AI Studio, this project demonstrated a practical, production-ready application of multimodal generative AI in an enterprise workflow context.",
    },
    {
      id: 3,
      title: "LocalPDF – Privacy-First PDF Toolkit",
      summary: "A local desktop app for all your PDF needs — no uploads, no cloud, no privacy risk.",
      image: LocalPDF,
      tags: ["Desktop App", "Google Antigravity", "Vibe Coding", "Privacy", "Productivity"],
      objective:
        "Popular online PDF tools like Smallpdf and iLovePDF require you to upload your files to their servers, creating a real risk that sensitive documents are stored, scanned, or misused. The objective was to build a privacy-first alternative that runs entirely on your personal computer — giving users all the same PDF utilities without ever sending a file to the cloud.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process:
        "Built using Google Antigravity, Google's agentic development platform, the app was vibe coded by describing the desired features in natural language and letting Antigravity's AI agents autonomously plan, write, and verify the code across the editor and terminal. The result is a fully local desktop application that supports core PDF operations including compression, PDF-to-other-format conversion, and other-format-to-PDF conversion — all processed on-device.",
      results:
        "LocalPDF delivers the full feature set of popular online PDF tools with zero privacy compromise. Since all processing happens locally on the user's machine, no files are ever uploaded or stored externally. This makes it particularly valuable for handling confidential documents — legal files, financial records, personal data — where cloud-based tools pose an unacceptable risk. The project also demonstrated the power of Google Antigravity as a vibe coding tool, going from idea to working desktop app through natural language prompting alone.",
    },
    {
      id: 3,
      title: "AI Powered Security Agent",
      summary: "Automated Security Monitoring with AI Insights",
      image: AISecurityCheck,
      tags: ["AI", "N8N", "AI Automation", "No-Code"],
      objective: "To automate website security assessments using AI and transform raw cybersecurity scan data into clear, actionable insights and prioritized development actions for Product Managers and engineering teams.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process: "Website URLs and recipient emails are fetched from Google Sheets on a scheduled trigger. Each URL is scanned using the VirusTotal API, and the raw security report is analyzed by a Gemini AI agent to generate a security grade, key business risks, and a prioritized developer action plan. The final actionable report is automatically emailed to stakeholders via Gmail.",
      results: "The system enabled fully automated security monitoring with zero manual effort, significantly reducing the time required to interpret complex cybersecurity data. Product Managers received executive-ready risk summaries and clear next steps, while developers were directly provided with a prioritized backlog from live security scans. This improved decision making speed, strengthened product risk governance and demonstrated a scalable AI driven security intelligence capability.",
    },
    {
      id: 3,
      title: "FanCode - A Product Teardown",
      summary: "Streamlined user onboarding to reduce drop-off rates",
      image: FanCodeImage,
      tags: ["Mobile UX", "Wireframing", "Competitive Analysis", "Prototyping"],
      objective: "Conducted a product teardown of FanCode to analyze its unique business model in India’s crowded sports streaming market. The objective was to dissect its 'everything-but-IPL' strategy, which leverages flexible micro-passes and an integrated content-to-commerce flywheel to serve niche fan bases.",
      process: "My analysis involved deconstructing the end-to-end user experience. I mapped key user personas, identified their specific pain points and analyzed how FanCode’s solutions, from the pass-purchase funnel to the live viewing experience, address these unmet demands.",
      results: "The teardown identified key strategic gaps, including pricing ladder confusion , a weak CTV experience , and churn between events. I proposed high-impact recommendations to drive growth, such as introducing smart bundling , simplifying pricing with upgrade credits , and prioritizing a CTV-first redesign",
    },
    {
      id: 3,
      title: "TechSelect - An Android App",
      summary: "Tech product recommendations based on user preferences",
      image: TechSelect,
      tags: ["Mobile UX", "Wireframing", "Competitive Analysis", "Prototyping"],
      objective: "Tech consumers often face 'analysis paralysis', spending hours on e-commerce sites manually comparing complex specs. The objective was to build an Android app that simplifies this process, allowing users to find the perfect product by filtering for specific features like battery size or camera quality, rather than browsing endlessly.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process: "Built an Android app focused on direct user control. The app's core feature is a clean interface with multiple, specific filters. Users can manually select checkboxes and sliders for their exact requirements (e.g., battery size, camera megapixels, RAM), instantly narrowing the list of available products.",
      results: "The final app is a straightforward, time-saving tool that eliminates e-commerce clutter. It drastically reduces product discovery time by replacing endless browsing with direct filtering. This empowers users to make faster, more confident purchasing decisions based only on the features they personally selected.",
    },
    {
      id: 3,
      title: "Patient Risk Stratification & Intervention Model",
      summary: "Predictive Healthcare Risk & Persona Modeling",
      image: Patient,
      tags: ["Data Analysis", "EDA", "Inferential Analysis"],
      objective: "To build a predictive analytics solution that identifies high-risk patients from large-scale medical records and segments them into actionable personas to enable targeted, data-driven healthcare intervention strategies.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process: "A dataset of 10,000 patient records was cleaned, engineered, and analyzed to identify critical health risk indicators. A predictive classification model was developed to detect high-risk patients with 90% recall. The identified high-risk cohort was further segmented using clustering techniques to create three distinct patient personas, enabling targeted intervention planning for each group.",
      results: "The model successfully identified 50% of the patient population as high-risk with high recall, ensuring minimal critical cases were missed. The high-risk group was segmented into three clearly defined, targetable personas, enabling healthcare stakeholders to design focused intervention strategies, optimize resource allocation, and improve preventive care planning through data-driven decision-making.",
    },
    {
      id: 3,
      title: "Yelp Restaurant Data Analysis",
      summary: "Cleaned, integrated, and analyzed Yelp's Restaurant data insights.",
      image: Yelp,
      tags: ["Data Analysis", "EDA", "Inferential Analysis"],
      objective: "The objective was to prepare the data and conduct exploratory analysis to uncover initial insights into restaurant ratings, review counts, and user engagement patterns.",
      //role: "Product Management Coursework Project - Conducted comprehensive UX audit and designed streamlined onboarding flow as part of Product Design & Development course.",
      process: "Loaded Yelp CSVs into DuckDB. Performed extensive data wrangling: handled nulls through imputation, cleaned inconsistent categorical values (like WiFi status), joined relevant tables (restos, reviews, users, friends), removed duplicates, and split the data (70/30) for distinct EDA and inferential phases.",
      results: "Produced a clean, unified dataset ready for advanced analysis. Initial EDA using descriptive statistics and plots revealed a positive skew in star ratings, high variability in review counts per restaurant, and generally low but occasionally high user engagement with reviews.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          My Work & Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Click on any project to learn more about the process and results
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="bg-card border-border hover:shadow-glow transition-all duration-300 cursor-pointer group animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-4">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Objective</h3>
                    <p className="text-muted-foreground">{selectedProject.objective}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Process</h3>
                    <p className="text-muted-foreground">{selectedProject.process}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Results</h3>
                    <p className="text-muted-foreground font-medium">{selectedProject.results}</p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
