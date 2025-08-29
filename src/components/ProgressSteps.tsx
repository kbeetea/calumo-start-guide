import { CheckCircle, Circle, Clock } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

const steps: Step[] = [
  {
    id: "overview",
    title: "Overview",
    description: "Understanding CALUMO",
    status: "completed"
  },
  {
    id: "access",
    title: "Access & Permissions",
    description: "Get accounts and permissions",
    status: "current"
  },
  {
    id: "setup",
    title: "System Setup",
    description: "Install required software",
    status: "upcoming"
  },
  {
    id: "environment",
    title: "Local Environment",
    description: "Clone and configure",
    status: "upcoming"
  },
  {
    id: "verification",
    title: "System Check",
    description: "Verify everything works",
    status: "upcoming"
  }
];

const ProgressSteps = () => {
  return (
    <div className="bg-card shadow-card rounded-xl p-8 border border-border/50">
      <h3 className="text-2xl font-bold mb-6 text-foreground">Onboarding Progress</h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="flex-shrink-0">
              {step.status === "completed" && (
                <CheckCircle className="w-6 h-6 text-accent" />
              )}
              {step.status === "current" && (
                <Clock className="w-6 h-6 text-primary" />
              )}
              {step.status === "upcoming" && (
                <Circle className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
            
            <div className="flex-grow">
              <h4 className={`font-semibold ${
                step.status === "current" ? "text-primary" : 
                step.status === "completed" ? "text-accent" : 
                "text-muted-foreground"
              }`}>
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
            
            <div className={`text-xs px-2 py-1 rounded-full ${
              step.status === "completed" ? "bg-accent/10 text-accent" :
              step.status === "current" ? "bg-primary/10 text-primary" :
              "bg-muted text-muted-foreground"
            }`}>
              {step.status === "completed" ? "Done" :
               step.status === "current" ? "In Progress" : "Pending"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;