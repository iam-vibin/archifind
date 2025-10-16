import { MapPin, Star, CheckCircle, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ProfessionalCardProps {
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  verified: boolean;
  projects: number;
  initials: string;
  phone?: string;
  email?: string;
}

const ProfessionalCard = ({
  name,
  specialty,
  location,
  rating,
  reviews,
  verified,
  projects,
  initials,
  phone,
  email,
}: ProfessionalCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-16 h-16 ring-2 ring-primary/20 group-hover:ring-primary transition-all">
            <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{name}</h3>
              {verified && (
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{specialty}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 pb-4 border-b">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-semibold">{rating}</span>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {projects} projects
          </div>
        </div>

        {(phone || email) && (
          <div className="space-y-2 mb-4 pb-4 border-b">
            {phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>{phone}</span>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="truncate">{email}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            View Profile
          </Button>
          <Button className="flex-1 bg-gradient-primary shadow-elegant">
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;
