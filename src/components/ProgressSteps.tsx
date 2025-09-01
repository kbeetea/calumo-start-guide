import { CheckCircle, Circle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface Step {
  id: string;
  title: string;
  description: string;
}

const initialSteps: Step[] = [
  {
    id: "overview",
    title: "Overview",
    description: "Understanding CALUMO"
  },
  {
    id: "access", 
    title: "Access & Permissions",
    description: "Get accounts and permissions"
  },
  {
    id: "setup",
    title: "System Setup", 
    description: "Install required software"
  },
  {
    id: "environment",
    title: "Local Environment",
    description: "Clone and configure"
  },
  {
    id: "verification",
    title: "System Check",
    description: "Verify everything works"
  }
];

const ProgressSteps = () => {
  const [completedSteps, setCompletedSteps] = useState(new Set(["overview"]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !completedSteps.has(sectionId)) {
              setCompletedSteps(prev => new Set(prev).add(sectionId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [completedSteps]);

  const getStepStatus = (step: Step) => {
    if (completedSteps.has(step.id)) return "completed";
    return "upcoming";
  };

  const resetProgress = () => {
    setCompletedSteps(new Set(["overview"]));
  };

  return (
    <div className="bg-card/90 backdrop-blur-sm shadow-soft rounded-xl p-6 border border-border/30">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">Onboarding Progress</h3>
        <Button 
          variant="outline" 
          size="sm"
          onClick={resetProgress}
          className="text-xs"
        >
          Reset
        </Button>
      </div>
      
      <div className="space-y-4">
        {initialSteps.map((step, index) => {
          const status = getStepStatus(step);
          return (
            <div 
              key={step.id} 
              className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 relative">
                {status === "completed" && (
                  <CheckCircle className="w-6 h-6 text-accent animate-scale-in" />
                )}
                {status === "upcoming" && (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="flex-grow">
                <h4 className={`font-semibold transition-colors ${
                  status === "completed" ? "text-accent" : "text-muted-foreground"
                }`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`text-xs px-2 py-1 rounded-full transition-all ${
                  status === "completed" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                }`}>
                  {status === "completed" ? "Done" : "Pending"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{completedSteps.size} of {initialSteps.length} steps completed</span>
          <span>{Math.round((completedSteps.size / initialSteps.length) * 100)}% complete</span>
        </div>
        <div className="mt-2 w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(completedSteps.size / initialSteps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;