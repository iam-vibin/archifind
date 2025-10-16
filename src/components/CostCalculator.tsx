import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CostCalculator = () => {
  const [projectType, setProjectType] = useState("");
  const [area, setArea] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    if (!projectType || !area) return;
    
    const rates: Record<string, number> = {
      civil: 1500,
      interior: 2000,
      landscape: 1200,
      architecture: 1800,
    };
    
    const rate = rates[projectType] || 1500;
    const areaNum = parseFloat(area);
    const estimated = rate * areaNum;
    setEstimate(estimated);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-elegant border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Calculator className="w-6 h-6 text-accent-foreground" />
              </div>
              Quick Cost Estimator
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Get an instant estimate for your project
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="project-type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger id="project-type">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="civil">Civil Engineering</SelectItem>
                  <SelectItem value="interior">Interior Design</SelectItem>
                  <SelectItem value="landscape">Landscaping</SelectItem>
                  <SelectItem value="architecture">Architecture</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Project Area (sq ft)</Label>
              <Input
                id="area"
                type="number"
                placeholder="Enter area in square feet"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            <Button 
              onClick={calculateEstimate} 
              className="w-full bg-gradient-primary shadow-elegant"
              size="lg"
            >
              Calculate Estimate
            </Button>

            {estimate !== null && (
              <div className="p-6 bg-secondary/50 rounded-lg border-2 border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Estimated Cost</p>
                <p className="text-4xl font-bold text-primary">
                  ${estimate.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  *This is a rough estimate. Actual costs may vary based on specific requirements.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CostCalculator;
