import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  FileImage, 
  MessageSquare, 
  Star,
  LogOut,
  Upload,
  Eye,
  CheckCircle,
  User
} from "lucide-react";

const quoteRequests = [
  {
    id: 1,
    clientName: "Ramesh Kumar",
    projectType: "Home Interior",
    location: "Chennai",
    budget: "₹5-8 Lakhs",
    date: "2024-01-16",
  },
  {
    id: 2,
    clientName: "Lakshmi Priya",
    projectType: "Kitchen Renovation",
    location: "Coimbatore",
    budget: "₹2-3 Lakhs",
    date: "2024-01-15",
  },
  {
    id: 3,
    clientName: "Suresh Builders",
    projectType: "Commercial Space",
    location: "Madurai",
    budget: "₹15-20 Lakhs",
    date: "2024-01-14",
  },
];

export default function ProfessionalDashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-accent-foreground" />
            <span className="text-xl font-bold text-foreground">ArchiFind Pro</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Professional Panel</span>
            <Link to="/professional">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Profile Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground">Arun Kumar Architects</h1>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge className="bg-primary/10 text-primary">Architect</Badge>
                  <Badge className="bg-green-500/10 text-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 (23 reviews)</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">Chennai, Tamil Nadu • 8 years experience</p>
              </div>
              <Button variant="outline">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileImage className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Uploaded</p>
                <p className="text-sm text-muted-foreground">Portfolio Status</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-accent/20 rounded-full">
                <MessageSquare className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">New Quote Requests</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-500/10 border-green-500/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Profile Views</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-500/10 border-yellow-500/20">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-full">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-sm text-muted-foreground">Total Reviews</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Requests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              New Quote Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quoteRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-muted/50 rounded-lg gap-4"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{request.clientName}</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">{request.projectType}</Badge>
                      <span>•</span>
                      <span>{request.location}</span>
                      <span>•</span>
                      <span>{request.budget}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Received: {request.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">View Details</Button>
                    <Button size="sm" variant="outline">Respond</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Upload className="w-6 h-6" />
                <span>Upload Portfolio</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Eye className="w-6 h-6" />
                <span>View My Profile</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <MessageSquare className="w-6 h-6" />
                <span>Messages</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
