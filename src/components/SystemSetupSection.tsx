import { Code, Download, CheckCircle, Terminal, Database, Settings, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SystemSetupSection = () => {
  const requiredSoftware = [
    {
      name: "Visual Studio Code",
      purpose: "Front-end development and code editing",
      downloadText: "Download",
      verifyCommand: null
    },
    {
      name: "Visual Studio Professional 2022",
      purpose: "Writing C# server/client code",
      downloadText: "Download",
      verifyCommand: null
    },
    {
      name: "Git",
      purpose: "Version control for code management",
      downloadText: "Download",
      verifyCommand: "git --version"
    },
    {
      name: "Node.js",
      purpose: "TypeScript / WebPack / front-end build tools",
      downloadText: "Download",
      verifyCommand: "node --version"
    },
    {
      name: ".NET 8.0 SDK",
      purpose: "Running .NET services and building projects",
      downloadText: "Download",
      verifyCommand: "dotnet --version"
    }
  ];

  const additionalRequirements = [
    "VSTS / Azure DevOps account",
    "IIS for hosting local CALUMO website",
    "Office (should already be installed, but if not: Install from Office 365 subscription/account, or use .\\scripts\\install-officevia365.ps1; earlier versions 2013/2010 can be installed manually)",
    "SQL Server 2022 for local databases",
    "Ruby 2.5.8 (32-bit) for build scripts",
    "VS Code (choco install vscode) - for editing TypeScript (start by opening directory src/calumo.web.site)",
    "Optional: choco install git-fork (or any git GUI)",
    "Optional: choco install resharper-platform (Visual Studio extension)",
    "Optional: choco install googlechrome (Chrome Browser - default dev browser)",
    "Optional: choco install firefox (for testing on FireFox)",
    "Optional: choco install rapidee (for managing your system settings like PATH)",
    "Optional: choco install sysinternals (process utilities)",
    "Optional: choco install paint.net (for editing icons)",
    "Optional: choco install 7zip (for zip management)"
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

          {/* Required Software & Installation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Required Software & Installation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requiredSoftware.map((software, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
                  <h4 className="font-bold text-foreground mb-2">{software.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{software.purpose}</p>
                  
                  <Button variant="outline" size="sm" className="mb-3 w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {software.downloadText}
                  </Button>
                  
                  {software.verifyCommand && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Verify installation:</p>
                      <div className="bg-muted/50 rounded p-2">
                        <code className="text-xs font-mono text-primary">{software.verifyCommand}</code>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional CALUMO Dev Machine Requirements */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Additional CALUMO Dev Machine Requirements</h3>
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
              <p className="text-muted-foreground mb-4">
                To run CALUMO locally and work on the full stack, your system should also have:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {additionalRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-1 flex-shrink-0 mt-1">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">💡</span>
              </div>
              <div>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Tip:</strong> After installing each tool, verify the installation using the appropriate 
                  command or version check to ensure everything is set up correctly.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SystemSetupSection;
