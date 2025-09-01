import { Terminal, GitBranch, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalEnvironmentSection = () => {
  const setupSteps = [
    {
      title: "Clone Repository",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Get the CALUMO codebase from GitHub",
      commands: [
        "git clone https://github.com/isw-Calumo/CALUMO"
      ],
      note: "Preferred method - use GitHub over other repositories"
    },
    {
      title: "Database & Config Setup",
      icon: <Database className="w-6 h-6" />,
      description: "Initialize databases and configuration",
      commands: [
        "rake ready"
      ],
      note: "This sets up databases and configuration files"
    },
    {
      title: "VPN Configuration",
      icon: <Globe className="w-6 h-6" />,
      description: "Set up CALUMO VPN access",
      commands: [],
      note: "Follow the VPN Setup Guide for installation steps",
      linkText: "VPN Setup Guide",
      linkUrl: "#"
    },
    {
      title: "IIS Bindings",
      icon: <Globe className="w-6 h-6" />,
      description: "Configure IIS for local CALUMO instance",
      commands: [],
      note: "See troubleshooting guide for SSL/binding issues"
    }
  ];

  const verificationChecks = [
    {
      task: "Launch CALUMO locally",
      url: "https://localhost/calumo",
      status: "required"
    },
    {
      task: "Log into SQL Server with sa",
      url: null,
      status: "required"
    },
    {
      task: "Run bundle install",
      url: null,
      status: "required"
    },
    {
      task: "Build solution in Visual Studio",
      url: null,
      status: "required"
    }
  ];

  return (
    <section id="environment" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Local Environment Setup</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Configure your local development environment to run CALUMO and start contributing to the codebase.
            </p>
          </div>

          {/* Setup Steps */}
          <div className="grid gap-8 mb-16">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-card border border-border/50 rounded-xl p-8 shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {step.commands.length > 0 && (
                      <div className="bg-muted/50 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Terminal className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">Command:</span>
                        </div>
                        {step.commands.map((command, i) => (
                          <code key={i} className="block font-mono text-sm text-primary bg-background/50 p-2 rounded border">
                            {command}
                          </code>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">
                        {step.note}
                        {step.linkText && step.linkUrl && (
                          <>
                            {" "}
                            <a 
                              href={step.linkUrl} 
                              className="text-primary hover:text-primary/80 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {step.linkText}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Verification */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-accent" />
              System Check & Verification
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Confirm that your local environment is properly configured by checking these items:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {verificationChecks.map((check, index) => (
                <div key={index} className="bg-card border border-border/30 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-accent/50 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-foreground">{check.task}</h4>
                      {check.url && (
                        <a 
                          href={check.url}
                          className="text-sm text-primary hover:text-primary/80 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {check.url}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h4 className="font-semibold text-destructive mb-2">Need Help?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you encounter errors during setup, refer to the comprehensive troubleshooting guide:
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="https://insightsoftware.atlassian.net/wiki/spaces/CE/pages/16457924647" target="_blank" rel="noopener noreferrer">
                  View Troubleshooting Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalEnvironmentSection;