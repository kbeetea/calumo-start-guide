import { Mail, Shield, Github, Globe, Server, Key, Code, Users, Zap, Lock } from "lucide-react";
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

  const accessSteps = [
    {
      step: 1,
      title: "Confluence",
      icon: <Globe className="w-6 h-6" />,
      description: "Space: Calumo Engineering/DevOps",
      action: "Request access via IT Support through itsupport@insightsoftware.com",
      type: "IT Support"
    },
    {
      step: 2,
      title: "Jira",
      icon: <Code className="w-6 h-6" />,
      description: "Project: Calumo Engineering (CE)",
      action: "Request access via IT Support through itsupport@insightsoftware.com",
      type: "IT Support"
    },
    {
      step: 3,
      title: "GitHub Access",
      icon: <Github className="w-6 h-6" />,
      description: "Create GitHub account with Insight Software credentials",
      action: "Self-setup required",
      details: [
        "Enable two-factor authentication (2FA) using mobile authenticator app",
        "Save your recovery codes securely for future use",
        "Share details with team lead for CALUMO GitHub Team access",
        "Access to all CALUMO repositories for development"
      ],
      type: "Self-Setup"
    },
    {
      step: 4,
      title: "CALUMO Account",
      icon: <Key className="w-6 h-6" />,
      description: "Raise a ticket with ProdSupport",
      action: "prodsupport@insightsoftware.com",
      details: [
        "Grants PROD/DEV access and enables VPN setup",
        "Required for accessing CALUMO systems from VPN",
        "Keep temporary password safe and reset on first login"
      ],
      type: "ProdSupport"
    },
    {
      step: 5,
      title: "Visual Studio Enterprise License",
      icon: <Server className="w-6 h-6" />,
      description: "Request access via IT Support",
      action: "itsupport@insightsoftware.com",
      details: [
        "Assigned VS licenses: https://my.visualstudio.com/",
        "Required for Azure DevOps full access"
      ],
      type: "IT Support"
    },
    {
      step: 6,
      title: "Azure DevOps (Calumolabs Organization)",
      icon: <Code className="w-6 h-6" />,
      description: "Access granted via Invite button from Azure DevOps - CALUMO",
      action: "Team Lead Invitation",
      details: [
        "Ensure access to Cloud Management repositories",
        "https://calumolabs.visualstudio.com/_git/Cloud%20Management",
        "https://calumolabs.visualstudio.com/Cloud%20Management/_git/CALUMOLogin",
        "https://calumolabs.visualstudio.com/Cloud%20Management/_git/CALUMONotifications",
        "💡 Important: Visual Studio Enterprise license required"
      ],
      type: "Team Access"
    },
    {
      step: 7,
      title: "CALUMO VPN Setup",
      icon: <Lock className="w-6 h-6" />,
      description: "VPN Setup Procedure",
      action: "Follow installation guide",
      details: [
        "💡 Requirement: CALUMO account must exist first"
      ],
      type: "Self-Setup"
    },
    {
      step: 8,
      title: "CloudManagement Accounts",
      icon: <Globe className="w-6 h-6" />,
      description: "Request access via ProdSupport ticket",
      action: "prodsupport@insightsoftware.com",
      details: [
        "PROD: https://cloud.calumo.com/calumo",
        "DEV: https://aus-cloud.calumo.com/dev",
        "💡 Requirement: CALUMO account must exist"
      ],
      type: "ProdSupport"
    },
    {
      step: 9,
      title: "DWIGHT (via OKTA)",
      icon: <Shield className="w-6 h-6" />,
      description: "Request through IT Support",
      action: "itsupport@insightsoftware.com",
      type: "IT Support"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "IT Support":
        return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "ProdSupport":
        return "bg-green-500/10 text-green-600 border-green-200";
      case "Self-Setup":
        return "bg-purple-500/10 text-purple-600 border-purple-200";
      case "Team Access":
        return "bg-orange-500/10 text-orange-600 border-orange-200";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="access" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Access & Permissions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete these steps in order to gain full access to CALUMO systems. 
              Each step builds upon the previous ones, so follow the sequence carefully.
            </p>
          </div>

          {/* Support Channels Reference */}
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
                  <h4 className="font-semibold text-foreground">Handles:</h4>
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

          {/* Step-by-Step Access Guide */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">Step-by-Step Access Guide</h3>
            
            {accessSteps.map((step, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(step.type)}`}>
                        {step.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    
                    <div className="bg-muted/50 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-foreground">Action Required:</p>
                      <p className="text-sm text-muted-foreground">{step.action}</p>
                    </div>
                    
                    {step.details && (
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default AccessSection;
