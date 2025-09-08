import { Code, Download, CheckCircle, Terminal, Database, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const SystemSetupSection = () => {
  const coreTools = [
    {
      name: "Git",
      purpose: "Version control for committing files",
      downloadUrl: "https://git-scm.com/download/win",
      verifyCommand: "git --version",
      setup: "Use Chocolatey: choco install git && choco install git-credential-manager-for-windows"
    },
    {
      name: "Visual Studio Professional 2022",
      purpose: "Writing C# server/client code",
      downloadUrl: "https://visualstudio.microsoft.com/vs/professional/",
      verifyCommand: null,
      setup: "Login with @insightsoftware.com email. Run as Administrator (required for IIS projects)."
    },
    {
      name: "Node.js (>= v16.0.0)",
      purpose: "TypeScript/WebPack build tools",
      downloadUrl: "https://nodejs.org/en",
      verifyCommand: "node --version",
      setup: "Use Chocolatey: choco install nvm, then nvm install 16.18.0"
    },
    {
      name: "Ruby 2.5.8 (32-bit)",
      purpose: "Build scripts execution",
      downloadUrl: "https://rubyinstaller.org/downloads/archives/",
      verifyCommand: "ruby --version",
      setup: "Install specific version 2.5.8-2 32-bit. Run: gem install bundler && bundle install"
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

  const chocolateySetup = {
    name: "Chocolatey Package Manager",
    command: `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`,
    packages: ["nvm", "git", "git-credential-manager-for-windows", "yarn", "vscode", "microsoft-build-tools"]
  };

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

          {/* Chocolatey Setup */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Terminal className="w-8 h-8 text-primary" />
              Chocolatey Package Manager Setup
            </h3>
            <div className="bg-card border border-border/50 rounded-xl p-6 shadow-soft">
              <h4 className="text-lg font-bold text-foreground mb-3">{chocolateySetup.name}</h4>
              <p className="text-muted-foreground mb-4">Run this command in an Admin PowerShell terminal:</p>
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <code className="text-xs font-mono text-primary break-all">{chocolateySetup.command}</code>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {chocolateySetup.packages.map((pkg, index) => (
                  <span key={index} className="text-sm bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                    choco install {pkg}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Core Development Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {coreTools.map((tool, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 shadow-soft">
                  <h4 className="font-bold text-foreground mb-2">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{tool.purpose}</p>
                  {tool.verifyCommand && (
                    <div className="bg-muted/50 rounded p-2 mb-3">
                      <code className="text-xs font-mono text-primary">{tool.verifyCommand}</code>
                    </div>
                  )}
                  {tool.setup && (
                    <p className="text-xs text-accent-foreground">{tool.setup}</p>
                  )}
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </a>
                  </Button>
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