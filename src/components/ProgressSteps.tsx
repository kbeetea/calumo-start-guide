import { CheckCircle, Circle, ChevronRight, ChevronLeft } from "lucide-react";
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
  const [currentStep, setCurrentStep] = useState(0);

  const navigateToSection = (sectionId: string, stepIndex: number) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setCurrentStep(stepIndex);
    }
  };

  const goToNextStep = () => {
    if (currentStep < initialSteps.length - 1) {
      const nextStep = currentStep + 1;
      navigateToSection(initialSteps[nextStep].id, nextStep);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      navigateToSection(initialSteps[prevStep].id, prevStep);
    }
  };

  const resetProgress = () => {
    setCurrentStep(0);
    navigateToSection("overview", 0);
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
          const isCompleted = index <= currentStep;
          const isCurrent = index === currentStep;
          return (
            <div 
              key={step.id} 
              className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-accent/5 ${
                isCurrent ? "bg-primary/5 border border-primary/20" : ""
              }`}
              onClick={() => navigateToSection(step.id, index)}
            >
              <div className="flex-shrink-0 relative">
                {isCompleted && (
                  <CheckCircle className="w-6 h-6 text-accent animate-scale-in" />
                )}
                {!isCompleted && (
                  <Circle className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="flex-grow">
                <h4 className={`font-semibold transition-colors ${
                  isCompleted ? "text-accent" : isCurrent ? "text-primary" : "text-muted-foreground"
                }`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`text-xs px-2 py-1 rounded-full transition-all ${
                  isCompleted ? "bg-accent/10 text-accent" : isCurrent ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {isCompleted ? "Done" : isCurrent ? "Current" : "Pending"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Controls */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={goToNextStep}
            disabled={currentStep === initialSteps.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{currentStep + 1} of {initialSteps.length} steps</span>
          <span>{Math.round(((currentStep + 1) / initialSteps.length) * 100)}% complete</span>
        </div>
        <div className="mt-2 w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / initialSteps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;