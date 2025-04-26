import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CareerPath = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const paths = [
    {
      title: "Frontend Developer",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
      duration: "6-12 months",
      level: "Beginner to Intermediate",
      jobs: ["Junior Web Developer", "Frontend Developer", "Web Designer"],
      companies: ["TCS", "Accenture", "Infosys", "Cognizant"],
      salary: "₹4,00,000 – ₹7,00,000 (India), $50,000 – $80,000 (USA)",
      details:
        "Learn the foundational technologies of web development — HTML, CSS, and JavaScript. Understand how to build responsive, user-friendly websites and become proficient in web standards and practices.",
    },
    {
      title: "Backend Developer",
      skills: ["Node.js", "Python", "Databases", "API Design"],
      duration: "8-14 months",
      level: "Intermediate",
      jobs: ["Backend Developer", "API Developer", "Database Administrator"],
      companies: ["Amazon", "Flipkart", "Zomato", "Paytm"],
      salary: "₹6,00,000 – ₹12,00,000 (India), $70,000 – $120,000 (USA)",
      details:
        "Dive into the world of backend development by learning how to build scalable, server-side applications and working with databases and APIs to handle data and user interactions.",
    },
    {
      title: "Full Stack Developer",
      skills: ["Frontend", "Backend", "DevOps", "System Design"],
      duration: "12-18 months",
      level: "Advanced",
      jobs: ["Full Stack Developer", "Software Engineer", "Web Developer"],
      companies: ["Microsoft", "IBM", "Accenture", "Capgemini"],
      salary: "₹8,00,000 – ₹14,00,000 (India), $80,000 – $120,000 (USA)",
      details:
        "Learn both frontend and backend technologies to become a full stack developer. This course will teach you how to develop complete web applications from scratch, covering both client-side and server-side aspects.",
    },
    {
      title: "Data Science",
      skills: ["Python", "Machine Learning", "Data Analysis", "Statistical Models"],
      duration: "9-12 months",
      level: "Intermediate to Advanced",
      jobs: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
      companies: ["Mu Sigma", "Fractal Analytics", "ZS Associates", "Amazon"],
      salary: "₹7,00,000 – ₹18,00,000 (India), $90,000 – $150,000 (USA)",
      details:
        "Learn how to collect, clean, and analyze large datasets using Python, machine learning algorithms, and statistical models. This course prepares you for data-driven decision-making in various industries.",
    },
    {
      title: "Android Development",
      skills: ["Java", "Kotlin", "Android Studio", "Mobile App Development"],
      duration: "6-12 months",
      level: "Beginner to Intermediate",
      jobs: ["Android Developer", "Mobile App Developer", "Software Engineer"],
      companies: ["Google", "Flipkart", "Paytm", "Swiggy"],
      salary: "₹5,00,000 – ₹12,00,000 (India), $70,000 – $110,000 (USA)",
      details:
        "Learn to create Android applications using Java and Kotlin. Understand Android development environments, APIs, and best practices to build intuitive and functional apps.",
    },
    {
      title: "Python Developer",
      skills: ["Python", "Django", "Flask", "Data Structures"],
      duration: "6-12 months",
      level: "Beginner to Intermediate",
      jobs: ["Python Developer", "Backend Developer", "Data Engineer"],
      companies: ["Microsoft", "Infosys", "Wipro", "Cognizant"],
      salary: "₹6,00,000 – ₹10,00,000 (India), $60,000 – $95,000 (USA)",
      details:
        "Learn the core concepts of Python programming, along with frameworks like Django and Flask, to build scalable and efficient backend systems.",
    },
    {
      title: "Cloud Computing Engineer",
      skills: ["AWS", "Azure", "Google Cloud", "Virtualization", "Docker"],
      duration: "8-14 months",
      level: "Intermediate to Advanced",
      jobs: ["Cloud Engineer", "Cloud Architect", "DevOps Engineer"],
      companies: ["Amazon Web Services", "Google", "Microsoft", "IBM"],
      salary: "₹8,00,000 – ₹15,00,000 (India), $90,000 – $140,000 (USA)",
      details:
        "Master cloud platforms like AWS, Azure, and Google Cloud to design, implement, and maintain cloud infrastructure and services.",
    },
    {
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
      duration: "6-9 months",
      level: "Beginner to Intermediate",
      jobs: ["UI Designer", "UX Designer", "Product Designer"],
      companies: ["Tata Consultancy Services", "Accenture", "Capgemini", "Oracle"],
      salary: "₹4,00,000 – ₹8,00,000 (India), $50,000 – $80,000 (USA)",
      details:
        "Learn the art of creating user-centric, intuitive designs for digital products, while understanding design principles and usability testing.",
    },
    {
      title: "Cybersecurity Specialist",
      skills: ["Network Security", "Ethical Hacking", "Firewalls", "Penetration Testing"],
      duration: "9-12 months",
      level: "Intermediate to Advanced",
      jobs: ["Cybersecurity Analyst", "Ethical Hacker", "Network Security Engineer"],
      companies: ["Palo Alto Networks", "CrowdStrike", "Sophos", "IBM"],
      salary: "₹9,00,000 – ₹18,00,000 (India), $90,000 – $150,000 (USA)",
      details:
        "Learn the techniques for securing systems, applications, and networks against attacks. Study ethical hacking, firewalls, and penetration testing.",
    },
    // New Career Path Added Below
    {
      title: "DevOps Engineer",
      skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Infrastructure Automation"],
      duration: "8-12 months",
      level: "Intermediate to Advanced",
      jobs: ["DevOps Engineer", "Site Reliability Engineer", "Systems Administrator"],
      companies: ["Netflix", "Uber", "Facebook", "LinkedIn"],
      salary: "₹8,00,000 – ₹15,00,000 (India), $100,000 – $160,000 (USA)",
      details:
        "Learn how to automate and streamline the process of software delivery and infrastructure management using tools like Docker, Kubernetes, Jenkins, and AWS. DevOps engineers work closely with development and operations teams to ensure the continuous integration and deployment of software.",
    },
  ];

  const toggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Career Paths</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paths.map((path, index) => (
          <Card key={index} className="text-center">
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
                  {/* Basic info without Learn More */}
                  <p>
                    <span className="font-semibold">Duration:</span> {path.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Level:</span> {path.level}
                  </p>
                </div>
              </div>
              {expandedIndex === index && (
                <div className="mt-4">
                  <p><span className="font-semibold">Jobs:</span> {path.jobs.join(", ")}</p>
                  <p><span className="font-semibold">Main Companies:</span> {path.companies.join(", ")}</p>
                  <p><span className="font-semibold">Average Salary:</span> {path.salary}</p>
                  <p>{path.details}</p>
                </div>
              )}
              <Button className="mt-4" onClick={() => toggleDetails(index)}>
                {expandedIndex === index ? "Show Less" : "Learn More"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
