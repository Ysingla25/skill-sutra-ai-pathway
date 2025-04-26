import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics",
      duration: "8 weeks",
    },
    {
      title: "React Development",
      description: "Master modern React.js development",
      duration: "10 weeks",
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications",
      duration: "12 weeks",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{course.description}</p>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
