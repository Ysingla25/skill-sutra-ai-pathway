import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Enrollment Form component
const EnrollmentForm = ({ onClose }: { onClose: () => void }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Enrollment successful! 🎉");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Enroll Now</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border p-2 rounded"
            required
          />
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
        <Button variant="ghost" className="mt-4" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript basics",
      duration: "8 weeks",
      features: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design"],
    },
    {
      title: "React Development",
      description: "Master modern React.js development",
      duration: "10 weeks",
      features: ["React Components", "Hooks", "State Management", "Routing"],
    },
    {
      title: "Full Stack Development",
      description: "Build complete web applications",
      duration: "12 weeks",
      features: ["Frontend + Backend", "APIs", "Databases", "Deployment"],
    },
    {
      title: "Python for Beginners",
      description: "Start your Python journey from scratch",
      duration: "6 weeks",
      features: ["Python Syntax", "Data Structures", "OOP Basics", "Mini Projects"],
    },
    {
      title: "Data Science Essentials",
      description: "Dive into data analysis and visualization",
      duration: "10 weeks",
      features: ["Pandas", "NumPy", "Data Visualization", "Machine Learning Intro"],
    },
    {
      title: "Android App Development",
      description: "Create apps for Android devices",
      duration: "8 weeks",
      features: ["Kotlin Basics", "Android Studio", "UI/UX Design", "Publishing Apps"],
    },
    {
      title: "Cloud Computing Basics",
      description: "Understand cloud services and deployment",
      duration: "7 weeks",
      features: ["AWS Fundamentals", "Cloud Models", "Storage Services", "Deployment Basics"],
    },
    {
      title: "UI/UX Design",
      description: "Master the art of designing stunning interfaces",
      duration: "5 weeks",
      features: ["Figma", "Wireframing", "Prototyping", "User Testing"],
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn how to secure systems and networks",
      duration: "9 weeks",
      features: ["Network Security", "Encryption Basics", "Threat Detection", "Risk Management"],
    },
  ];

  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [showEnrollment, setShowEnrollment] = useState(false);

  const handleLearnMore = (index: number) => {
    setExpandedCourse(index === expandedCourse ? null : index);
  };

  const handleEnroll = () => {
    setShowEnrollment(true);
  };

  const closeEnrollmentForm = () => {
    setShowEnrollment(false);
  };

  return (
    <div className="container mx-auto py-10 relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{course.description}</p>
              <Button
                onClick={() => handleLearnMore(index)}
                className="mb-4"
              >
                {expandedCourse === index ? "Show Less" : "Learn More"}
              </Button>

              {expandedCourse === index && (
                <div className="mt-4">
                  <ul className="list-disc list-inside mb-4">
                    {course.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Button onClick={handleEnroll}>Enroll Now</Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {showEnrollment && <EnrollmentForm onClose={closeEnrollmentForm} />}
    </div>
  );
};

export default Courses;
