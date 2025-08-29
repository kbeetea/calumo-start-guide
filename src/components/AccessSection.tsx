import { Mail, Shield, Github, Globe, Server, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const AccessSection = () => {
  const supportChannels = [
    {
      title: "IT Support Requests",
      email: "itsupport@insightsoftware.com",
      icon: <Shield className="w-6 h-6" />,
      description: "For general system access and IT-related permissions",
      items: [
        "Confluence: Calumo Engineering/DevOps space",
        "Jira: Calumo Engineering (CE) project", 
        "DWIGHT (via OKTA) access",
        "Visual Studio Enterprise license"
      ]
    },
    {
      title: "ProdSupport Requests",
      email: "prodsupport@insightsoftware.com",
      icon: <Server className="w-6 h-6" />,
      description: "For CALUMO-specific accounts and environment access",
      note: "Email Subject Prefix: CALUMO: [your subject line here]",
      items: [
        "CALUMO account creation (PROD/DEV)",
        "CloudManagement access (PROD & DEV)",
        "CALUMO VPN setup"
      ]
    }
  ];

  const accessItems = [
    {
      title: "GitHub Access",
      icon: <Github className="w-6 h-6" />,
      description: "Create GitHub account with Insight Software credentials",
      requirements: [
        "Enable two-factor authentication (2FA)",
        "Save recovery codes securely",
        "Share details with team lead for CALUMO GitHub Team access"
      ]
    },
    {
      title: "CALUMO Account",
      icon: <Key className="w-6 h-6" />,
      description: "Raise ProdSupport ticket for PROD/DEV access",
      requirements: [
        "Grants PROD/DEV access",
        "Enables VPN setup",
        "Required for accessing CALUMO systems"
      ]
    },
    {
      title: "CloudManagement Accounts",
      icon: <Globe className="w-6 h-6" />,
      description: "Request via ProdSupport ticket",
      requirements: [
        "PROD: https://cloud.calumo.com/calumo",
        "DEV: https://aus-cloud.calumo.com/dev",
        "Requires existing CALUMO account"
      ]
    }
  ];

  return (
    <section id="access" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Access & Permissions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CALUMO uses different support channels depending on the type of request. 
              Understanding these channels is crucial for obtaining necessary accounts and permissions.
            </p>
          </div>

          {/* Support Channels */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{channel.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">{channel.email}</span>
                  </div>
                  {channel.note && (
                    <p className="text-sm text-muted-foreground">{channel.note}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Common Requests:</h4>
                  <ul className="space-y-1">
                    {channel.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Access Items */}
          <div className="grid md:grid-cols-3 gap-8">
            {accessItems.map((item, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;