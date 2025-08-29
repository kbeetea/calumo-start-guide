import heroImage from "@/assets/calumo-hero.jpg";

const OnboardingHeader = () => {
  return (
    <header className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
              CALUMO
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Your comprehensive onboarding guide to join the CALUMO engineering team. 
            Follow these steps to get access, set up your environment, and start contributing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#getting-started" className="inline-block">
              <button className="bg-accent text-accent-foreground hover:shadow-soft transform hover:scale-105 transition-all duration-300 font-semibold h-12 px-8 rounded-lg">
                Get Started
              </button>
            </a>
            <a href="#quick-links" className="inline-block">
              <button className="border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 h-12 px-8 rounded-lg">
                Quick Links
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingHeader;