import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional construction and design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Find Verified{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Construction
            </span>{" "}
            & Design Experts
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Connect with trusted civil engineers, interior designers, architects, and landscapers.
            Compare services, view portfolios, and get instant cost estimates.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-slide-up">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for professionals, services, or projects..."
                className="pl-10 h-14 text-lg bg-card shadow-soft border-2 focus:border-primary"
              />
            </div>
            <Button size="lg" className="h-14 px-8 text-lg shadow-elegant">
              Search
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">2,500+</div>
              <div className="text-sm md:text-base text-muted-foreground">Verified Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">10,000+</div>
              <div className="text-sm md:text-base text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-1">4.8/5</div>
              <div className="text-sm md:text-base text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
