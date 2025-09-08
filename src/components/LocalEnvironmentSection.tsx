import { Terminal, GitBranch, Database, Globe, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalEnvironmentSection = () => {
  const setupSteps = [
    {
      title: "Install Chocolatey",
      icon: <Terminal className="w-6 h-6" />,
      description: "Chocolatey will be used as the package manager for required dependencies.",
      commands: [
        "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
      ],
      note: "Open PowerShell as Administrator and run this command."
    },
    {
      title: "Install Required Packages",
      icon: <Terminal className="w-6 h-6" />,
      description: "Install Node.js, Git, and Yarn using Chocolatey",
      commands: [
        "choco install nvm",
        "nvm install 16.18.0",
        "choco install git",
        "choco install git-credential-manager-for-windows",
        "choco install yarn"
      ],
      note: "Run from an Admin PowerShell terminal and Any Node version >= 16 is fine."
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
      title: "Machine Settings",
      icon: <Database className="w-6 h-6" />,
      description: (
        <div>
          <ul className="list-disc pl-6 mb-3">
            <li>In Visual Studio, open the CALUMO repo and navigate to <code>CALUMO\build\Rake\settings</code> in the Solution Explorer</li>
            <li>Open <code>settings.CSSZFX3.rb</code> and copy the contents</li>
            <li>Create a new file in <code>CALUMO\build\Rake\settings</code> by right clicking the settings folder in the Solution Explorer and going add &gt; new file</li>
            <li>Name the new file: <code>settings.YOURMACHINENAME.rb</code> in <code>.\build\Rake\Settings</code></li>
            <li>To find your machine name go to Control Panel on your PC &gt; <code>System and Security &gt; System &gt; Device Name</code></li>
            <li>Replace all instances of <code>CSSZFX3</code> with your machine name in the new .rb file you have created.</li>
            <li>Commit this file to the git repository (notice everyone else has done this)</li>
          </ul>
        </div>
      ),
      commands: [],
      note: "Commit settings.YOURMACHINENAME.rb to the repository."
    },
    {
      title: "Calumo user creation",
      icon: <Database className="w-6 h-6" />,
      description: (
        <div>
          <ul className="list-disc pl-6 mb-3">
            <li>Open <code>AddCalumoData.cs</code> file under <code>CALUMO\Infrastructure\CompiledTasks\AddCalumoData</code> in the Solution Explorer</li>
            <li>Locate the <code>SaveUsers()</code> method and add own user</li>
            <li>Commit change &amp; create a PR following this process</li>
          </ul>
        </div>
      ),
      commands: [],
      note: "Commit the change and create a Pull Request."
    },
    {
      title: "Install Ruby",
      icon: <Terminal className="w-6 h-6" />,
      description: (
        <div>
          <h4 className="font-semibold mb-2">Install Ruby</h4>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Download Ruby version 2.5.8-2 (32-bit)
              <a
                href="https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.5.8-2/rubyinstaller-devkit-2.5.8-2-x86.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <button className="inline-flex items-center px-3 py-1 border rounded bg-background hover:bg-primary/10 text-primary text-sm font-medium transition-colors">Download</button>
              </a>
            </li>
            <li>Previously used Ruby Version 2.3.3 but HTTPS certificate was invalid when downloading Gems</li>
            <li>After installation, change directory to your source code root directory and run the following commands:</li>
          </ul>
        </div>
      ),
      commands: [
        "gem install bundler",
        "bundle install"
      ],
      note: "Run the commands from the source code root directory after installing Ruby."
    },
    {
      title: "Install Visual Studio",
      icon: <Globe className="w-6 h-6" />,
      description: (
        <div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Download Visual Studio Professional 2022
              <a
                href="https://visualstudio.microsoft.com/vs/professional/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
              >
                <button className="inline-flex items-center px-3 py-1 border rounded bg-background hover:bg-primary/10 text-primary text-sm font-medium transition-colors">Download</button>
              </a>
            </li>
            <li>
              Your work email (@insightsoftware.com) should already have a Visual Studio Professional subscription assigned. Verify at <a href="https://my.visualstudio.com" target="_blank" rel="noopener noreferrer" className="underline text-primary">my.visualstudio.com</a>. For issues, email <a href="mailto:itsupport@insightsoftware.com" className="underline text-primary">itsupport@insightsoftware.com</a>.
            </li>
          </ul>

          <div className="mb-2 font-semibold">Install steps</div>
          <ol className="list-decimal pl-6 mb-3">
            <li>Run the downloaded Visual Studio installer.</li>
            <li>
              Add the following workloads when prompted:
              <ul className="list-disc pl-6 mt-2">
                <li>ASP.NET and web development</li>
                <li>Azure development</li>
                <li>Node.js development</li>
                <li>.NET desktop development</li>
                <li>Data storage and processing</li>
                <li>.NET cross-platform development</li>
                <li>Optional: Data science and analytical applications</li>
              </ul>
            </li>
            <li>Ensure Visual Studio always runs as Administrator (some projects require Admin to compile). To do this: right-click the Visual Studio shortcut → Properties → Advanced → check 'Run as administrator'.</li>
            <li>Start Visual Studio and sign in using your insightsoftware work account.</li>
          </ol>
        </div>
      ),
      commands: [],
      note: "Ensure Visual Studio runs as Administrator and sign in to complete setup."
    },
    {
      title: "Install Certificate",
      icon: <CheckCircle2 className="w-6 h-6" />,
      description: (
        <ul className="list-disc pl-6 mb-3">
          <li>Required for dealing with signed assemblies</li>
          <li>Double-click <code>.\\certificates\\insightsoftware Code Signing Certificate.pfx</code></li>
          <li>Select <strong>Install for Current User</strong></li>
          <li>Password: <strong>Brisbane04</strong></li>
        </ul>
      ),
      commands: [
        "File location (in project folder): .\\certificates\\insightsoftware Code Signing Certificate.pfx",
        "Double-click .\\certificates\\insightsoftware Code Signing Certificate.pfx to start the installer",
        "Select 'Install for Current User'",
        "Password: Brisbane04"
      ],
      note: "Install the certificate before continuing with IIS setup."
    },
    {
      title: "Install & Configure IIS",
      icon: <Globe className="w-6 h-6" />,
      description: (
        <div>
          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Manual (GUI)</span></div>
            <p className="mb-2">If installing manually, open <strong>Turn Windows Features on or off</strong> and enable Internet Information Services (IIS).</p>

            <ol className="list-decimal pl-6 mb-3">
              <li>IIS certificate: create the default application pool, set the <strong>Identity</strong> to <strong>LocalSystem</strong>, then add sites.</li>
              <li>
                Sites → <strong>Default Web Site</strong> → <strong>Add Application</strong>:
                <div className="pl-6 mt-2">
                  <div>a. Set the physical path to: <code>path\\CALUMO\\src\\Calumo.Web.Site</code></div>
                  <div>b. Set the alias name to: <strong>Calumo</strong></div>
                </div>
              </li>
            </ol>

          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Alternative (PowerShell / DISM)</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li>
                Open PowerShell as Administrator (WIN+X A) and run the commands in the Command block below.
                <div className="bg-muted/50 rounded-lg p-4 my-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Command:</span>
                  </div>
                  <code className="block font-mono text-sm text-primary bg-background/50 p-2 rounded border">Dism /Online /Enable-Feature /FeatureName:IIS-ASPNET45 /All</code>
                  <code className="block font-mono text-sm text-primary bg-background/50 p-2 rounded border mt-2">Dism /Online /Enable-Feature /FeatureName:IIS-WindowsAuthentication</code>
                  <code className="block font-mono text-sm text-primary bg-background/50 p-2 rounded border mt-2">Dism /Online /Enable-Feature /FeatureName:IIS-HttpCompressionDynamic</code>
                </div>
              </li>
              <li>
                Run the following script afterwards to configure Dynamic Compression:
                <div className="bg-muted/50 rounded-lg p-4 my-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">Command:</span>
                  </div>
                  <code className="block font-mono text-sm text-primary bg-background/50 p-2 rounded border">.\\scripts\\iis_config_dynamic_compression.bat</code>
                </div>
              </li>
              <li>Go to IIS Manager → Server → <strong>Feature Delegation</strong> and set "Authentication - xxx" to <strong>Read/Write</strong> from Read Only.</li>
              <li>If this isn't done, the site won't load and you'll get a web.config error like "This configuration section cannot be used at this path" because we override config that is read-only so we need to set to read/write.</li>
              <li>In IIS select <strong>Application Pools</strong> and then right click on <strong>DefaultAppPool</strong> → <strong>Advanced Settings</strong> and set <strong>Identity</strong> to <strong>LocalSystem</strong>.</li>
            </ul>
          </div>
        </div>
      ),
      commands: [],
      note: "Install IIS before deploying the site."
    },
    {
      title: "Install & Configure SQL Server (SSMS)",
      icon: <Database className="w-6 h-6" />,
      description: (
        <div>
          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Installation</span></div>
            <p className="mb-2">Use the GUI installers to obtain SQL Server and SSMS.</p>

            <ul className="list-disc pl-6 mb-3">
              <li className="mb-2">
                Download SQL Server Management Studio (SSMS)
                <a href="https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms" target="_blank" rel="noopener noreferrer" className="ml-2">
                  <button className="inline-flex items-center px-3 py-1 border rounded bg-background hover:bg-primary/10 text-primary text-sm font-medium transition-colors">Download</button>
                </a>
                <span className="ml-2 text-sm text-muted-foreground">(ensure Analysis Services is installed)</span>
              </li>
              <li className="mb-2">
                Download SQL Server 2022 Developer
                <a href="https://www.microsoft.com/en-in/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer" className="ml-2">
                  <button className="inline-flex items-center px-3 py-1 border rounded bg-background hover:bg-primary/10 text-primary text-sm font-medium transition-colors">Download</button>
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Set Up</span></div>
            <ol className="list-decimal pl-6 mt-2">
              <li>Feature Selection: select <strong>Database Engine Services</strong> and <strong>Analysis Services</strong>.</li>
              <li>
                Database Engine Configuration:
                <ol className="list-decimal pl-6 mt-2">
                  <li>Select <strong>Mixed Mode</strong> authentication.</li>
                  <li>Provide a password for the <code>sa</code> account.</li>
                  <li>Select <strong>Add Current User</strong> for SQL Server administrators.</li>
                </ol>
              </li>
              <li>
                Analysis Services Configuration:
                <ol className="list-decimal pl-6 mt-2">
                  <li>Select <strong>Multidimensional Mode</strong> for <strong>Server Mode</strong>.</li>
                  <li>Select <strong>Add Current User</strong> for administrators.</li>
                </ol>
              </li>
            </ol>

            <p className="mt-3">If you want to add additional features later, run the setup.exe and re-configure the dev instance you created.</p>
            <p className="mt-2">After installation, open the local instance properties and set Security to <strong>SQL Server and Windows Authentication mode</strong> so rake can connect and create the necessary logins. After changing this setting, restart the instance (right-click the instance → <strong>Restart</strong>).</p>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">SSMS customization notes</span></div>
            <p className="mb-2">If you need to customize the installer or re-run configuration, use the customize option during SSMS setup or run the setup.exe manually to add features later.</p>
            <ol className="list-decimal pl-6 mb-3">
              <li>
                Click <strong>Customize</strong> during SSMS installation to open the popup. While progressing through the steps:
                <ol className="list-decimal pl-6 mt-2">
                  <li>In Azure extensions for SQL Server, unselect the checkbox for the Azure extension.</li>
                  <li>Instance configuration: select the default instance; if already in use, add a named instance with your machine name.</li>
                  <li>During Database Engine configuration: for the <code>sa</code> account, provide a strong password (you will need this later and it should be personal to your account).</li>
                </ol>
              </li>
              <li className="mt-2">After customization and installation are complete, restart the system, re-run the installer (.exe), and click <strong>Install</strong> to finish.</li>
            </ol>
          </div>
        </div>
      ),
      commands: [],
      note: "Follow these steps to ensure SQL Server and SSMS are set up correctly."
    },
    {
      title: "Database Setup & Build",
      icon: <Database className="w-6 h-6" />,
      description: (
        <div>
          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Database Setup</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li>Make sure SQL Server instance is the same as in the build settings ruby file (add <code>/DEV</code> if your settings file expects it).</li>
              <li>Try Windows username and password in SQL Server to ensure proper authentication is set up.</li>
              <li>If authentication fails:
                <ul className="list-disc pl-6 mt-2">
                  <li>Open <code>Calumo.All.Sln</code> in Visual Studio.</li>
                  <li>Open <code>master.config.json</code>.</li>
                  <li>Check which database you are pointing at in the Connection String — it should be <code>database=calumo</code>.</li>
                  <li>Check <code>"UseEffectiveUserName"</code> is <code>false</code>.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">CALUMO Requirements</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li>Download the OLAP Cubes and Databases backup files from the Calumo Dev teams channel (place them in <code>c:\temp</code>); ensure you have the necessary permissions to access the files, and if you don't, request access from your team or manager.</li>
              <li>Restore the OLAP cubes and relational databases:
                <ul className="list-disc pl-6 mt-2">
                  <li>Open <code>.\scripts\RestoreRequiredDatabases.sql</code> in SSMS and execute to restore databases.</li>
                  <li>Open <code>.\scripts\RestoreRequiredCubes.xmla</code> in SSMS and follow the instructions to restore cubes.</li>
                  <li>Ensure all backup files are placed under <code>c:\temp</code>.</li>
                </ul>
              </li>
              <li>Analysis Services: connect to Analysis Services → under Databases → <strong>Adventure Works DW</strong> → Data Sources → Right click <strong>Adventure Works DW</strong> → Properties:
                <ul className="list-disc pl-6 mt-2">
                  <li>Connection String: set Data Source = <code>.</code> or <code>CALUMO-YOURMACHINENAME</code> (do not use <code>localhost</code>).</li>
                  <li>Connection String: Provider should be <code>SQLNCLI11.1</code>.</li>
                  <li>Security Settings &gt; Impersonation Info &gt; Click the "..." and enter Windows user credentials to impersonate.</li>
                </ul>
              </li>
              <li>Repeat the Analysis Services steps for <strong>CALUMO Demo DW</strong> and then right-click each database and <strong>Process</strong> both to verify.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Build</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li>In your PowerShell terminal run: <code>rake ready</code></li>
              <li>Open the solution in Visual Studio: <strong>Calumo.All.Sln</strong></li>
              <li>Build the solution: press <strong>CTRL + SHIFT + B</strong></li>
              <li>If it builds, proceed and commit this file to the git repository.</li>
              <li>Process for creating a branch and committing your work: <a href="https://calumolabs.visualstudio.com/CALUMO/_wiki/wikis/CALUMO.wiki/290/Process-of-creating-a-branch-and-committing-your-work-to-the-repository" target="_blank" rel="noopener noreferrer" className="underline text-primary">Create a branch & commit guide</a></li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Configure your login in Calumo database</span></div>
              Create your own user in the Calumo database if it doesn't exist:
                <ul className="list-disc pl-6 mt-2">
                  <li>Right click Databases and Refresh → expand your database → Tables → <strong>dbo.CalumoUsers</strong> → (RCLICK) Edit Top 200 Rows.</li>
                  <li>Insert a row with:</li>
                  <ul className="list-disc pl-6 mt-2">
                    <li><code>LoginID = spf\FirstInitialLastName</code></li>
                    <li>First name</li>
                    <li>Last name</li>
                    <li>Calumo email</li>
                    <li><code>ADAccountName = FirstInitialLastName@spf.local</code></li>
                  </ul>
                  <li>After editing hit Enter and then <strong>Ctrl + R</strong> to save.</li>
                  <li>Open <strong>dbo.UserGroups</strong> (RCLICK) Edit Top 200 Rows and change <code>GroupID</code> and <code>UserID</code> to <code>1</code> for your user, then save (Enter + Ctrl + R).</li>
                </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Main build commands</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li><code>rake</code> - build everything</li>
              <li><code>rake settings</code> - show your settings and verify rake works</li>
              <li><code>rake ready</code> - get ready to work after updating repository</li>
              <li><code>rake makeready</code> - cleans everything and runs <code>rake ready</code></li>
              <li><code>rake -T &lt;partial&gt;</code> - shows available rake tasks</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Core Deployment Guide</span></div>
            <p className="mb-2">After finishing this README section, continue to the <code>Setup/Dev_Local_Core_Deployment_Guide.ipynb</code> for core deployment steps.</p>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Common web commands</span></div>
            <p className="text-sm text-muted-foreground mb-2">Run these from VS Code with the folder <code>src/calumo.web.site</code> open:</p>
            <ul className="list-disc pl-6 mb-3">
              <li><code>yarn watch</code> - auto-update website while editing files</li>
              <li><code>yarn start</code> - one-off webpack build</li>
              <li><code>yarn test</code> - run TypeScript tests</li>
              <li><code>yarn test-ui</code> - run UI tests</li>
              <li><code>yarn lint --fix</code> - fix lint and formatting issues</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="mb-2"><span className="inline-block font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Test Localhost</span></div>
            <ul className="list-disc pl-6 mb-3">
              <li>Test the local site at <a href="http://localhost/calumo" className="text-primary underline">http://localhost/calumo</a></li>
              <li>If the site fails to load: change the App Pool identity — IIS Manager → CALUMO → Application Pools → <strong>DefaultAppPool</strong> → (RCLICK) Advanced Settings → Identity → set to <strong>LocalSystem</strong>.</li>
            </ul>
          </div>
        </div>
      ),
      commands: [
        "rake ready",
        "rake",
        "rake settings"
      ],
      note: "Follow the Database Setup and Build steps to restore databases, build the solution, and register your Calumo user."
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
                    <div className="text-muted-foreground mb-4">{step.description}</div>
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
                    {step.note && (
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">
                          {step.note}
                        </p>
                      </div>
                    )}
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
