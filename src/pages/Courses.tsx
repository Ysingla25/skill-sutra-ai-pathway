import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const courses = {
    "Web Development": [
      {
        title: "The Complete 2024 Web Development Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        rating: 4.7,
        price: "$89.99",
        duration: "55 hours",
        level: "Beginner",
        description: "Learn web development from scratch. Master HTML, CSS, JavaScript, React, Node.js, and more."
      },
      {
        title: "Full-Stack Web Development with React",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/full-stack-react",
        rating: 4.7,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate",
        description: "Build complete web applications with modern tools and frameworks."
      }
    ],
    "Data Science": [
      {
        title: "Python for Data Science and Machine Learning Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
        rating: 4.6,
        price: "$84.99",
        duration: "25 hours",
        level: "Intermediate",
        description: "Learn data science, machine learning, and data visualization with Python."
      },
      {
        title: "IBM Data Science Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/ibm-data-science",
        rating: 4.8,
        price: "$39/month",
        duration: "10 months",
        level: "Beginner",
        description: "Kickstart your career in data science & ML. No prior knowledge required."
      }
    ],
    "UX Design": [
      {
        title: "Google UX Design Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/google-ux-design",
        rating: 4.8,
        price: "$39/month",
        duration: "6 months",
        level: "Beginner",
        description: "Launch your career in UX design with a professional certificate from Google."
      },
      {
        title: "User Experience Design Essentials",
        platform: "Udemy",
        url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
        rating: 4.7,
        price: "$84.99",
        duration: "13 hours",
        level: "Beginner",
        description: "Master UX/UI design principles and create stunning user interfaces."
      }
    ],
    "Product Management": [
      {
        title: "Digital Product Management Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/digital-product-management",
        rating: 4.6,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate",
        description: "Learn modern product management practices and lead successful products."
      },
      {
        title: "Product Management A-Z",
        platform: "Udemy",
        url: "https://www.udemy.com/course/product-management-a-z/",
        rating: 4.5,
        price: "$84.99",
        duration: "13.5 hours",
        level: "Beginner",
        description: "Complete product management course covering strategy to execution."
      }
    ]
  };

  return (
    <div className="container mx-auto py-10 relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Courses</h1>
      <Tabs defaultValue="Web Development" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
          {Object.keys(courses).map((category) => (
            <TabsTrigger key={category} value={category} className="text-lg">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(courses).map(([category, categoryCourses]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {categoryCourses.map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`px-2 py-1 text-xs font-semibold rounded ${
                        {
                          'Udemy': 'bg-purple-100 text-purple-700',
                          'Coursera': 'bg-blue-100 text-blue-700',
                          'edX': 'bg-red-100 text-red-700',
                          'LinkedIn Learning': 'bg-sky-100 text-sky-700'
                        }[course.platform]
                      }`}>
                        {course.platform}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>{course.duration}</span>
                      <span>{course.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        {
                          'Beginner': 'bg-green-100 text-green-700',
                          'Intermediate': 'bg-yellow-100 text-yellow-700',
                          'Advanced': 'bg-red-100 text-red-700'
                        }[course.level]
                      }`}>
                        {course.level}
                      </span>
                      <a 
                        href={course.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Enroll Now →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Courses;
