import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  MapPin, 
  Briefcase, 
  Clock, 
  Star,
  LogOut,
  Search,
  MessageSquare
} from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Arun Kumar",
    profession: "Architect",
    experience: "8 years",
    location: "Chennai",
    specialization: "Residential & Commercial Design",
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: "Priya Interior Studio",
    profession: "Interior Designer",
    experience: "6 years",
    location: "Coimbatore",
    specialization: "Modular Kitchen & Living Room Design",
    rating: 4.6,
    verified: true,
  },
  {
    id: 3,
    name: "Ravi Builders",
    profession: "Builder",
    experience: "10 years",
    location: "Madurai",
    specialization: "Turnkey Construction Projects",
    rating: 4.9,
    verified: true,
  },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">ArchiFind</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, User</span>
            <Link to="/">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Professional</h1>
          <p className="text-muted-foreground">Browse verified architects, interior designers, and builders</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">45+</p>
                <p className="text-sm text-muted-foreground">Professionals Available</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-accent/20 rounded-full">
                <MessageSquare className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Active Quotes</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-secondary border-secondary/50">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-full">
                <Star className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Saved Profiles</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Profiles */}
        <h2 className="text-2xl font-semibold text-foreground mb-6">Available Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((prof) => (
            <Card key={prof.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{prof.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {prof.profession}
                      </Badge>
                      {prof.verified && (
                        <Badge className="bg-green-500/10 text-green-600 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{prof.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{prof.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{prof.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>{prof.specialization}</span>
                </div>
                <Button className="w-full mt-4">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
