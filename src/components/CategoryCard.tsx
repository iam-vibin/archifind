import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
}

const CategoryCard = ({ icon: Icon, title, description, count }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 border-2 hover:border-primary">
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <p className="text-sm font-medium text-primary">{count} professionals</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
