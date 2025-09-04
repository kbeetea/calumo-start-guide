import { Terminal, GitBranch, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalEnvironmentSection = () => {
  const setupSteps = [
    {
      title: "Install Chocolatey",
      icon: <Terminal className="w-6 h-6" />,
      description: "Chocolatey will be used as the package manager for required dependencies",
      commands: [
        "Set-ExecutionPolicy Bypass -Scope Process -Force; `",
        "[System.Net.ServicePointManager]::SecurityProtocol = `",
        "[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `",
        "iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
      ],
      note: "Open PowerShell as Administrator and run the above commands"
    },
    {
      title: "Install Required Packages",
      icon: <Terminal className="w-6 h-6" />,
      description: "Install Node.js, Git, and Yarn using Chocolatey",
      commands: [
        "choco install nvm",
        "nvm install 16.18.0   # Any Node version >= 16 is fine",
        "choco install git",
        "choco install git-credential-manager-for-windows",
        "choco install yarn"
      ],
      note: "Run from an Admin PowerShell terminal"
    },
    {
      title: "Clone Repository",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Get the CALUMO codebase from GitHub",
      commands: [
        "git clone https://github.com/isw-Calumo/CALUMO.git"
      ],
      note: "Clone the repository to your local machine"
    },
    {
      title: "Install Ruby",
      icon: <Database className="w-6 h-6" />,
      description: "Download and install Ruby 2.5.8-2 (32-bit)",
      commands: [
        "gem install bundler",
        "bundle install"
      ],
      note: "Ruby 2.3.3 was previously used, but HTTPS certificates fail when downloading Gems. Navigate to project root directory after installation."
    },
    {
      title: "Install Visual Studio",
      icon: <Globe className="w-6 h-6" />,
      description: "Install Visual Studio Professional 2022 with required workloads",
      commands: [],
      note: "Go to https://my.visualstudio.com and verify your Visual Studio Professional 2022 subscription. Select workloads: ASP.NET and web development, Azure development, Node.js development, .NET desktop development, Data storage and processing, .NET cross-platform development",
      linkText: "Visual Studio Downloads",
      linkUrl: "https://my.visualstudio.com"
    },
    {
      title: "Install Certificate",
      icon: <CheckCircle2 className="w-6 h-6" />,
      description: "Install the insightsoftware Code Signing Certificate",
      commands: [],
      note: "Navigate to .\\certificates\\ and double-click insightsoftware Code Signing Certificate.pfx. Install for Current User. Password: Brisbane04."
    },
    {
      title: "Configure Machine Settings",
      icon: <Database className="w-6 h-6" />,
      description: "Create machine-specific settings file",
      commands: [],
      note: "In Visual Studio, open CALUMO\\build\\Rake\\settings\\, copy settings.CSSZFX3.rb contents, create settings.YOURMACHINENAME.rb (find machine name in Control Panel → System), replace CSSZFX3 with your machine name, and commit to Git."
    },
    {
      title: "Create Calumo User",
      icon: <Database className="w-6 h-6" />,
      description: "Add your user details to the system",
      commands: [],
      note: "Open CALUMO\\Infrastructure\\CompiledTasks\\AddCalumoData\\AddCalumoData.cs, locate SaveUsers() method, and add your own user details."
    },
    {
      title: "Commit Changes & Create PR",
      icon: <GitBranch className="w-6 h-6" />,
      description: "Commit machine settings and user creation changes",
      commands: [],
      note: "Commit the changes made for machine settings and user creation. Push to your branch and create a Pull Request following the standard process."
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