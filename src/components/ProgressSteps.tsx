import { CheckCircle, Circle, Clock, Play } from "lucide-react";
import { useState } from "react";
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
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set(["overview"]));

  const getStepStatus = (index: number) => {
    if (completedSteps.has(initialSteps[index].id)) return "completed";
    if (index === currentStepIndex) return "current";
    return "upcoming";
  };

  const markStepComplete = (stepIndex: number) => {
    const stepId = initialSteps[stepIndex].id;
    if (!completedSteps.has(stepId)) {
      const newCompleted = new Set(completedSteps);
      newCompleted.add(stepId);
      setCompletedSteps(newCompleted);
      
      // Move to next step if current step is completed
      if (stepIndex === currentStepIndex && stepIndex < initialSteps.length - 1) {
        setCurrentStepIndex(stepIndex + 1);
      }
    }
  };

  const resetProgress = () => {
    setCurrentStepIndex(1);
    setCompletedSteps(new Set(["overview"]));
  };

  return (
    <div className="bg-card shadow-card rounded-xl p-8 border border-border/50">
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
          const status = getStepStatus(index);
          return (
            <div 
              key={step.id} 
              className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                status === "current" ? "bg-primary/5 border border-primary/20" : ""
              } ${status === "upcoming" ? "hover:bg-muted/50 cursor-pointer" : ""}`}
              onClick={() => status === "upcoming" && index === currentStepIndex && markStepComplete(index)}
            >
              <div className="flex-shrink-0 relative">
                {status === "completed" && (
                  <CheckCircle className="w-6 h-6 text-accent animate-scale-in" />
                )}
                {status === "current" && (
                  <div className="relative">
                    <Clock className="w-6 h-6 text-primary animate-pulse" />
                    <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping"></div>
                  </div>
                )}
                {status === "upcoming" && (
                  <Circle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                )}
              </div>
              
              <div className="flex-grow">
                <h4 className={`font-semibold transition-colors ${
                  status === "current" ? "text-primary" : 
                  status === "completed" ? "text-accent" : 
                  "text-muted-foreground"
                }`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="flex items-center gap-2">
                {status === "current" && index === currentStepIndex && (
                  <Button
                    size="sm"
                    variant="default"
                    className="h-8 px-3 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      markStepComplete(index);
                    }}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Complete
                  </Button>
                )}
                
                <div className={`text-xs px-2 py-1 rounded-full transition-all ${
                  status === "completed" ? "bg-accent/10 text-accent" :
                  status === "current" ? "bg-primary/10 text-primary" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {status === "completed" ? "Done" :
                   status === "current" ? "In Progress" : "Pending"}
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