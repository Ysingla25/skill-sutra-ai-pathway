import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CareerPath = () => {
  const paths = [
    {
      title: "Frontend Developer",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
      duration: "6-12 months",
      level: "Beginner to Intermediate",
    },
    {
      title: "Backend Developer",
      skills: ["Node.js", "Python", "Databases", "API Design"],
      duration: "8-14 months",
      level: "Intermediate",
    },
    {
      title: "Full Stack Developer",
      skills: ["Frontend", "Backend", "DevOps", "System Design"],
      duration: "12-18 months",
      level: "Advanced",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Career Paths</h1>
      <div className="space-y-6">
        {paths.map((path, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{path.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Key Skills</h3>
                  <ul className="list-disc list-inside">
                    {path.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p><span className="font-semibold">Duration:</span> {path.duration}</p>
                  <p><span className="font-semibold">Level:</span> {path.level}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
