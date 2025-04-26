import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Mentors = () => {
  const mentors = [
    {
      name: "Aarav Sharma",
      expertise: "Frontend Development",
      experience: "8+ years",
      avatar: "/mentors/aarav.jpeg",
      email: "aarav.sharma@techhub.com",
    },
    {
      name: "Neha Verma",
      expertise: "Backend Development",
      experience: "10+ years",
      avatar: "/mentors/neha.jpeg",
      email: "neha.verma@devsolutions.com",
    },
    {
      name: "Rahul Mehta",
      expertise: "Full Stack Development",
      experience: "6+ years",
      avatar: "/mentors/rahul.jpeg",
      email: "rahul.mehta@codeminds.com",
    },
    {
      name: "Sanjay Thakur",
      expertise: "Python Programming",
      experience: "7+ years",
      avatar: "/mentors/sanjay.jpeg",
      email: "sanjay.thakur@datasciencepro.com",
    },
    {
      name: "Karan Patel",
      expertise: "Data Science",
      experience: "9+ years",
      avatar: "/mentors/karan.jpeg",
      email: "karan.patel@analyticslab.com",
    },
    {
      name: "Ananya Iyer",
      expertise: "Android Development",
      experience: "6+ years",
      avatar: "/mentors/ananya.jpeg",
      email: "ananya.iyer@androidexperts.com",
    },
    {
      name: "Rohan Mehra",
      expertise: "Cloud Computing",
      experience: "8+ years",
      avatar: "/mentors/rohan.jpeg",
      email: "rohan.mehra@cloudgenius.com",
    },
    {
      name: "Ishita Desai",
      expertise: "UI/UX Design",
      experience: "5+ years",
      avatar: "/mentors/ishita.jpeg",
      email: "ishita.desai@uidesigners.com",
    },
    {
      name: "Vikram Choudhary",
      expertise: "Cybersecurity",
      experience: "10+ years",
      avatar: "/mentors/vikram.jpeg",
      email: "vikram.choudhary@securetech.com",
    },
  ];

  // State to track which mentor's email is shown
  const [showEmail, setShowEmail] = useState(Array(mentors.length).fill(false));

  const handleShowEmail = (index) => {
    const updated = [...showEmail];
    updated[index] = !updated[index]; // Toggle visibility
    setShowEmail(updated);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Expert Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>
                  {mentor.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary">{mentor.expertise}</p>
              <p className="text-sm text-muted-foreground">{mentor.experience} experience</p>
              {showEmail[index] ? (
                <p className="text-sm text-muted-foreground mt-2">{mentor.email}</p>
              ) : (
                <Button
                  onClick={() => handleShowEmail(index)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Show Email
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
