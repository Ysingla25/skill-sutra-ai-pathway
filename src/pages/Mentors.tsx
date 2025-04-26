import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Mentors = () => {
  const mentors = [
    {
      name: "Sarah Johnson",
      expertise: "Frontend Development",
      experience: "8+ years",
      avatar: "/mentors/sarah.jpg",
    },
    {
      name: "Michael Chen",
      expertise: "Backend Development",
      experience: "10+ years",
      avatar: "/mentors/michael.jpg",
    },
    {
      name: "Emily Brown",
      expertise: "Full Stack Development",
      experience: "6+ years",
      avatar: "/mentors/emily.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Our Expert Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary">{mentor.expertise}</p>
              <p className="text-sm text-muted-foreground">{mentor.experience} experience</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
