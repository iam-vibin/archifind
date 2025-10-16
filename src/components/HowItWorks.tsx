import { Search, Users, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Filter",
    description: "Browse verified professionals by specialty, location, and ratings",
  },
  {
    icon: Users,
    title: "Compare Profiles",
    description: "Review portfolios, ratings, and cost estimates side by side",
  },
  {
    icon: MessageCircle,
    title: "Connect & Discuss",
    description: "Reach out directly to discuss your project requirements",
  },
  {
    icon: CheckCircle,
    title: "Hire with Confidence",
    description: "Choose the right professional for your project with verified reviews",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Finding the right professional for your project is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elegant">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border hidden lg:block" 
                       style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
