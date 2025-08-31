import OnboardingHeader from "@/components/OnboardingHeader";
import ProgressSteps from "@/components/ProgressSteps";
import AccessSection from "@/components/AccessSection";
import SystemSetupSection from "@/components/SystemSetupSection";
import LocalEnvironmentSection from "@/components/LocalEnvironmentSection";
import QuickLinksSection from "@/components/QuickLinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <OnboardingHeader />
      
      <main>
        {/* Getting Started Section */}
        <section id="overview" className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Getting Started</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Welcome to the CALUMO engineering team! This comprehensive guide will walk you through 
                  everything you need to get started: from gaining access and setting up your system, 
                  to running CALUMO locally and finding the right learning resources.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Before You Start</h3>
                  <p className="text-muted-foreground mb-4">
                    To understand how we work and the technology stack we use, please review the following:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">📖 CALUMO Tech Stack Overview – Get familiar with our tools and frameworks</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">📖 Task Implementation Process – Learn our development workflow</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-accent mb-4">Support Channels</h3>
                  <p className="text-muted-foreground mb-4">
                    CALUMO uses different support channels depending on the type of request. 
                    Understanding these channels is important because they are the gateway to obtaining 
                    all necessary accounts, permissions, and system access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <div className="sticky top-4 z-50 mx-6 mb-8">
          <div className="container mx-auto">
            <div className="max-w-md ml-auto">
              <ProgressSteps />
            </div>
          </div>
        </div>

        <AccessSection />
        <SystemSetupSection />
        <LocalEnvironmentSection />
        <QuickLinksSection />
        
        {/* Footer */}
        <footer className="bg-card border-t border-border/50 py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Start Contributing?</h3>
              <p className="text-muted-foreground mb-6">
                You've completed the onboarding process! If you have any questions or need additional support, 
                don't hesitate to reach out to your team lead or use the appropriate support channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold h-12 px-8 rounded-lg">
                  Start Coding
                </button>
                <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 rounded-lg transition-colors">
                  Join Slack
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
