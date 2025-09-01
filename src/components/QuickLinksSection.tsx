import { ExternalLink, Book, Video, HelpCircle, Terminal, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuickLinksSection = () => {
  const resourceCategories = [
    {
      title: "Essential Reading",
      icon: <Book className="w-6 h-6" />,
      color: "primary",
      links: [
        {
          title: "CALUMO Tech Stack Overview",
          description: "Understand the tools and frameworks",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/15049719892/CALUMO+-+Engineering",
          icon: <Book className="w-4 h-4" />
        },
        {
          title: "Task Implementation Process",
          description: "Learn the development work",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/16750149678/Task+implementation+process?utm_source=chatgpt.com",
          icon: <Terminal className="w-4 h-4" />
        },
        {
          title: "Developer Machine Setup",
          description: "Initial setup for your development environment",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/15049719871/Developer+Machine+Setup",
          icon: <Terminal className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Development Resources", 
      icon: <Terminal className="w-6 h-6" />,
      color: "accent",
      links: [
        {
          title: "GitHub Repository",
          description: "Access the CALUMO codebase",
          url: "https://github.com/isw-Calumo/CALUMO",
          icon: <ExternalLink className="w-4 h-4" />
        },
        {
          title: "VPN Setup Guide",
          description: "Configure CALUMO VPN access",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/15350268088?utm_source=chatgpt.com",
          icon: <ExternalLink className="w-4 h-4" />
        },
        {
          title: "Local Setup Troubleshooting",
          description: "Fix common setup issues",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/16457924647",
          icon: <Bug className="w-4 h-4" />
        }
      ]
    },
    {
      title: "Learning & Support",
      icon: <Video className="w-6 h-6" />,
      color: "calumo-green",
      links: [
        {
          title: "Knowledge Transfer",
          description: "Watch onboarding sessions and knowledge transfer content",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/15565619333",
          icon: <Video className="w-4 h-4" />
        },
        {
          title: "CALUMO Dev Wiki",
          description: "Browse development documentation",
          url: "https://insightsoftware.atlassian.net/wiki/spaces/CE/overview?utm_source=chatgpt.com",
          icon: <Book className="w-4 h-4" />
        }
      ]
    }
  ];

  const managementUrls = [
    {
      title: "PROD CloudManagement",
      url: "https://cloud.calumo.com/calumo",
      status: "Requires CALUMO account"
    },
    {
      title: "DEV CloudManagement", 
      url: "https://aus-cloud.calumo.com/dev",
      status: "Requires CALUMO account"
    },
    {
      title: "Visual Studio Licenses",
      url: "https://my.visualstudio.com/",
      status: "After IT approval"
    },
    {
      title: "CALUMO Slack",
      url: "https://calumo.slack.com",
      status: "Invitation required"
    }
  ];

  return (
    <section id="quick-links" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Quick Links & Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential links and resources to help you throughout your CALUMO journey.
            </p>
          </div>

          {/* Resource Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resourceCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${
                    category.color === "primary" ? "bg-primary/10 text-primary" :
                    category.color === "accent" ? "bg-accent/10 text-accent" :
                    "bg-calumo-green/10 text-calumo-green"
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-1 text-muted-foreground group-hover:text-foreground transition-colors">
                          {link.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {link.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Management URLs */}
          <div className="bg-card border border-border/50 rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <ExternalLink className="w-8 h-8 text-accent" />
              Management & Platform URLs
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {managementUrls.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {item.title}
                    </a>
                    <p className="text-sm text-muted-foreground">{item.status}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;