import { Code, Download, CheckCircle, Terminal, Database, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SystemSetupSection = () => {
  const coreTools = [
    {
      name: "GIT",
      purpose: "For committing files",
      icon: "Code"
    },
    {
      name: "Visual Studio Professional 2022",
      purpose: "Mainly for writing C# server/client code",
      icon: "Code"
    },
    {
      name: "VSTS Account",
      purpose: "For managing issues and pull requests (login with work account)",
      icon: "Settings"
    },
    {
      name: "IIS",
      purpose: "For running your own CALUMO website",
      icon: "Globe"
    },
    {
      name: "Docker",
      purpose: "For running related Docker containers (Linux/Windows)",
      icon: "Settings"
    },
    {
      name: "WSL2",
      purpose: "For running Docker Linux based containers",
      icon: "Terminal"
    },
    {
      name: "Windows Containers",
      purpose: "For running Docker Windows based containers",
      icon: "Settings"
    },
    {
      name: "Office 365",
      purpose: "For running Excel/Word/PowerPoint with CALUMO addins for testing",
      icon: "Settings"
    },
    {
      name: "SQL SERVER 2022",
      purpose: "For running your own local database for CALUMO website",
      icon: "Database"
    },
    {
      name: "Ruby 2.5.8 32-bit",
      purpose: "To run build scripts",
      icon: "Code"
    },
    {
      name: "NodeJS >= v16.0.0",
      purpose: "For TypeScript/WebPack",
      icon: "Code"
    },
    {
      name: "VS Code and JetBrains editor",
      purpose: "eg WebStorm or RubyMine etc",
      icon: "Code"
    }
  ];

  const developmentTools = [
    {
      name: "VSTS Account",
      purpose: "Managing issues and pull requests",
      note: "Login with work account (@insightsoftware.com)"
    },
    {
      name: "VS Code",
      purpose: "TypeScript editing (open src/calumo.web.site)",
      setup: "choco install vscode"
    },
    {
      name: "JetBrains Editor",
      purpose: "WebStorm or RubyMine for development",
      note: "Optional but recommended"
    },
    {
      name: "Office 365",
      purpose: "Testing Excel/Word/PowerPoint CALUMO add-ins",
      setup: "Use script: .\\scripts\\install-officevia365.ps1"
    }
  ];

  const infrastructureSetup = [
    {
      name: "IIS Configuration",
      steps: [
        "Enable all IIS features in Windows Features",
        "Or run: Dism /Online /Enable-Feature /FeatureName:IIS-ASPNET45 /all",
        "Run: .\\scripts\\iis_config_dynamic_compression.bat",
        "Set Feature Delegation to Read/Write for Authentication",
        "Create DefaultAppPool with LocalSystem identity",
        "Add Application: Alias='Calumo', Path='path\\CALUMO\\src\\Calumo.Web.Site'"
      ]
    },
    {
      name: "Docker & WSL2",
      steps: [
        "Install Docker for Windows",
        "Enable WSL2 for Linux containers",
        "Enable Windows Containers feature",
        "Test with: rake docker:redis"
      ]
    }
  ];

  const databaseSetup = [
    {
      name: "SQL Server 2022 Installation",
      steps: [
        "Download SQL Server 2022 Developer + SSMS",
        "During setup: Uncheck Azure extensions",
        "Select default instance or named instance with machine name",
        "Set strong sa password (personal account)",
        "Enable Mixed Mode authentication",
        "Add current user as SQL Server Administrator",
        "Install Analysis Services (Multidimensional Mode)",
        "Restart system and re-run .exe after installation"
      ]
    },
    {
      name: "Database Configuration",
      steps: [
        "Set Security to 'SQL Server and Windows Authentication'",
        "Restart database service",
        "Place backup files in c:\\temp",
        "Run .\\scripts\\RestoreRequiredDatabases.sql",
        "Run .\\scripts\\RestoreRequiredCubes.xmla",
        "Configure Analysis Services connection strings"
      ]
    }
  ];


  return (
    <section id="setup" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">System Setup</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensure your development machine has all the required tools and software 
              before starting CALUMO development.
            </p>
          </div>


          {/* Core Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Core Development Tools
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
              {coreTools.map((tool, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-3 shadow-soft">
                  <h4 className="font-bold text-foreground text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Settings className="w-8 h-8 text-primary" />
              Additional Development Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {developmentTools.map((tool, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 shadow-soft">
                  <h4 className="font-bold text-foreground mb-2">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{tool.purpose}</p>
                  {tool.note && (
                    <p className="text-xs text-accent-foreground">{tool.note}</p>
                  )}
                  {tool.setup && (
                    <div className="bg-muted/50 rounded p-2 mt-2">
                      <code className="text-xs font-mono text-primary">{tool.setup}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Setup */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary" />
              Infrastructure Configuration
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {infrastructureSetup.map((setup, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 shadow-soft">
                  <h4 className="font-bold text-foreground mb-3">{setup.name}</h4>
                  <div className="space-y-2">
                    {setup.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Setup */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Database className="w-8 h-8 text-primary" />
              Database Configuration
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {databaseSetup.map((setup, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 shadow-soft">
                  <h4 className="font-bold text-foreground mb-3">{setup.name}</h4>
                  <div className="space-y-2">
                    {setup.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Build Commands */}
          <div className="bg-muted/30 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Essential Build Commands</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">Main Commands</h4>
                <div className="space-y-2">
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">rake ready</code>
                    <p className="text-xs text-muted-foreground">Get ready to work after repository update</p>
                  </div>
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">rake</code>
                    <p className="text-xs text-muted-foreground">Build everything</p>
                  </div>
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">yarn watch</code>
                    <p className="text-xs text-muted-foreground">Auto-update website (run from src/calumo.web.site)</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Testing & Verification</h4>
                <div className="space-y-2">
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">localhost/calumo</code>
                    <p className="text-xs text-muted-foreground">Test local CALUMO site</p>
                  </div>
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">yarn test</code>
                    <p className="text-xs text-muted-foreground">Run TypeScript tests</p>
                  </div>
                  <div className="bg-muted/50 rounded p-2">
                    <code className="text-sm font-mono text-primary">CTRL + SHIFT + B</code>
                    <p className="text-xs text-muted-foreground">Build code in Visual Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSetupSection;