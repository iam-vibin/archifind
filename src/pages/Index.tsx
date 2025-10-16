import { Building2, Palette, Trees, Ruler } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProfessionalCard from "@/components/ProfessionalCard";
import ProjectCard from "@/components/ProjectCard";
import HowItWorks from "@/components/HowItWorks";
import CostCalculator from "@/components/CostCalculator";
import interiorImage from "@/assets/project-interior-1.jpg";
import landscapeImage from "@/assets/project-landscape-1.jpg";
import civilImage from "@/assets/project-civil-1.jpg";

const categories = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Structural design, construction, and project management experts",
    count: 850,
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Transform your space with creative and functional designs",
    count: 920,
  },
  {
    icon: Trees,
    title: "Landscaping",
    description: "Beautiful outdoor spaces and sustainable garden solutions",
    count: 450,
  },
  {
    icon: Ruler,
    title: "Architecture",
    description: "Innovative architectural planning and design services",
    count: 380,
  },
];

const featuredProfessionals = [
  {
    name: "Sarah Mitchell",
    specialty: "Interior Designer",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    verified: true,
    projects: 84,
    initials: "SM",
  },
  {
    name: "David Chen",
    specialty: "Civil Engineer",
    location: "San Francisco, CA",
    rating: 4.8,
    reviews: 203,
    verified: true,
    projects: 156,
    initials: "DC",
  },
  {
    name: "Maria Rodriguez",
    specialty: "Landscape Architect",
    location: "Austin, TX",
    rating: 5.0,
    reviews: 89,
    verified: true,
    projects: 62,
    initials: "MR",
  },
  {
    name: "James Thompson",
    specialty: "Architect",
    location: "Seattle, WA",
    rating: 4.9,
    reviews: 145,
    verified: true,
    projects: 98,
    initials: "JT",
  },
];

const featuredProjects = [
  {
    image: interiorImage,
    title: "Modern Luxury Living Room",
    category: "Interior Design",
    location: "Manhattan, NY",
    professional: "Sarah Mitchell",
  },
  {
    image: landscapeImage,
    title: "Zen Garden Oasis",
    category: "Landscaping",
    location: "Austin, TX",
    professional: "Maria Rodriguez",
  },
  {
    image: civilImage,
    title: "Contemporary Residential Complex",
    category: "Civil Engineering",
    location: "San Francisco, CA",
    professional: "David Chen",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect professional for your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Professionals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verified experts with proven track records
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProfessionals.map((professional, index) => (
              <ProfessionalCard key={index} {...professional} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Inspiring Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse completed projects for design inspiration
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <CostCalculator />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of homeowners who found their perfect professional through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-card text-card-foreground rounded-lg font-semibold hover:shadow-elegant transition-all hover:-translate-y-1 text-lg">
              Find Professionals
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all text-lg">
              Join as Professional
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
