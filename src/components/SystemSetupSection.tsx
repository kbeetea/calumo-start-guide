import { Code, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SystemSetupSection = () => {
  const requiredSoftware = [
    {
      name: "Visual Studio Code",
      purpose: "Front-end development and code editing",
      downloadUrl: "https://code.visualstudio.com/download",
      verifyCommand: null
    },
    {
      name: "Visual Studio Professional 2022",
      purpose: "Writing C# server/client code",
      downloadUrl: "https://visualstudio.microsoft.com/vs/professional/",
      verifyCommand: null
    },
    {
      name: "Git",
      purpose: "Version control for code management",
      downloadUrl: "https://git-scm.com/download/win",
      verifyCommand: "git --version"
    },
    {
      name: "Node.js",
      purpose: "TypeScript / WebPack / front-end build tools",
      downloadUrl: "https://nodejs.org/en",
      verifyCommand: "node --version"
    },
    {
      name: ".NET 8.0 SDK",
      purpose: "Running .NET services and building projects",
      downloadUrl: "https://dotnet.microsoft.com/en-us/download/dotnet/8.0",
      verifyCommand: "dotnet --version"
    }
  ];

  const additionalRequirements = [
    "VSTS / Azure DevOps account",
    "IIS for hosting local CALUMO website",
    "Docker for running containers",
    "WSL2 for Linux-based Docker containers",
    "Windows Containers",
    "Office 365 for testing Excel/Word/PowerPoint add-ins",
    "SQL Server 2022 for local databases",
    "Ruby 2.5.8 (32-bit) for build scripts"
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

          {/* Required Software */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Required Software & Installation
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {requiredSoftware.map((software, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 shadow-soft">
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{software.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{software.purpose}</p>
                    </div>
                    
                    {software.verifyCommand && (
                      <div className="bg-muted/50 rounded-lg p-2">
                        <p className="text-xs text-muted-foreground mb-1">Verify:</p>
                        <code className="text-xs font-mono text-primary">{software.verifyCommand}</code>
                      </div>
                    )}
                    
                    <Button variant="default" size="sm" asChild className="w-full">
                      <a href={software.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-3 h-3 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="bg-muted/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Additional CALUMO Dev Machine Requirements</h3>
            <p className="text-muted-foreground mb-6">
              To run CALUMO locally and work on the full stack, your system should also have:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {additionalRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{requirement}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-sm text-accent-foreground">
                <strong>💡 Tip:</strong> After installing each tool, verify the installation using the 
                appropriate command or version check to ensure everything is set up correctly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSetupSection;