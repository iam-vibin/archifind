import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  location: string;
  professional: string;
}

const ProjectCard = ({ image, title, category, location, professional }: ProjectCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Badge className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm">{category}</Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-muted-foreground">by {professional}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
