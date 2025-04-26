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
    "Popular": [
      {
        title: "100 Days of Code: The Complete Python Pro Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/100-days-of-code/",
        rating: 4.7,
        price: "$89.99",
        duration: "60 hours",
        level: "Beginner",
        description: "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!"
      },
      {
        title: "Meta Front-End Developer Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        rating: 4.8,
        price: "$49/month",
        duration: "7 months",
        level: "Beginner",
        description: "Launch your career as a front-end developer. Build job-ready skills for an in-demand career and earn a credential from Meta."
      },
      {
        title: "AWS Cloud Practitioner Essentials",
        platform: "edX",
        url: "https://www.edx.org/learn/aws/amazon-web-services-aws-cloud-practitioner-essentials",
        rating: 4.7,
        price: "Free",
        duration: "6 weeks",
        level: "Beginner",
        description: "Learn the fundamentals of cloud computing and AWS, preparing you for the AWS Cloud Practitioner certification."
      }
    ],
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
      },
      {
        title: "The Complete JavaScript Course 2024",
        platform: "Udemy",
        url: "https://www.udemy.com/course/the-complete-javascript-course/",
        rating: 4.8,
        price: "$89.99",
        duration: "69 hours",
        level: "Beginner",
        description: "Master JavaScript with projects, challenges and theory. From fundamentals to advanced topics."
      },
      {
        title: "Next.js & React - The Complete Guide",
        platform: "Udemy",
        url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
        rating: 4.8,
        price: "$89.99",
        duration: "25 hours",
        level: "Intermediate",
        description: "Learn Next.js from the ground up and build production-ready, fullstack React applications."
      },
      {
        title: "Vue - The Complete Guide",
        platform: "Udemy",
        url: "https://www.udemy.com/course/vuejs-2-the-complete-guide/",
        rating: 4.7,
        price: "$89.99",
        duration: "32 hours",
        level: "Intermediate",
        description: "Master Vue.js with the most complete course on Vue on Udemy. Includes Vuex, Composition API, and more."
      }
    ],
    "Mobile Development": [
      {
        title: "iOS & Swift - The Complete iOS App Development Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
        rating: 4.8,
        price: "$89.99",
        duration: "55 hours",
        level: "Beginner",
        description: "Learn iOS app development from scratch using Swift and SwiftUI."
      },
      {
        title: "Android App Development Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/android-app-development",
        rating: 4.6,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate",
        description: "Master Android development using Kotlin and Android Studio."
      },
      {
        title: "React Native - The Practical Guide",
        platform: "Udemy",
        url: "https://www.udemy.com/course/react-native-the-practical-guide/",
        rating: 4.7,
        price: "$89.99",
        duration: "28.5 hours",
        level: "Intermediate",
        description: "Build native mobile apps for iOS and Android using React Native. Includes hooks, Redux, and more."
      },
      {
        title: "Flutter & Dart - The Complete Guide",
        platform: "Udemy",
        url: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
        rating: 4.6,
        price: "$89.99",
        duration: "42 hours",
        level: "Beginner",
        description: "Learn Flutter and Dart from scratch, build adaptive and beautiful apps for iOS and Android."
      },
      {
        title: "SwiftUI Masterclass",
        platform: "Udemy",
        url: "https://www.udemy.com/course/swiftui-masterclass-course-ios-development-with-swift/",
        rating: 4.8,
        price: "$89.99",
        duration: "28 hours",
        level: "Intermediate",
        description: "Learn iOS 15 app development with SwiftUI 3 and build beautiful, professional iOS apps."
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
      },
      {
        title: "Data Science: R Basics",
        platform: "edX",
        url: "https://www.edx.org/learn/r-programming/harvard-university-data-science-r-basics",
        rating: 4.7,
        price: "Free",
        duration: "8 weeks",
        level: "Beginner",
        description: "Learn R programming and data science basics from Harvard University."
      },
      {
        title: "Data Science Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/jhu-data-science",
        rating: 4.5,
        price: "$49/month",
        duration: "11 months",
        level: "Intermediate",
        description: "Master data science with R programming. Build a data science toolkit with Johns Hopkins."
      },
      {
        title: "Statistics for Data Science",
        platform: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/statistics-for-data-science",
        rating: 4.6,
        price: "$29.99",
        duration: "6 hours",
        level: "Intermediate",
        description: "Learn essential statistics concepts for data science and machine learning."
      }
    ],
    "Artificial Intelligence": [
      {
        title: "Deep Learning Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/deep-learning",
        rating: 4.9,
        price: "$49/month",
        duration: "5 months",
        level: "Advanced",
        description: "Master deep learning fundamentals with Andrew Ng. Build neural networks and AI systems."
      },
      {
        title: "Complete Machine Learning & AI Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/complete-machine-learning-and-artificial-intelligence-bootcamp/",
        rating: 4.7,
        price: "$89.99",
        duration: "45 hours",
        level: "Intermediate",
        description: "Learn machine learning, deep learning, and artificial intelligence from scratch."
      },
      {
        title: "TensorFlow Developer Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
        rating: 4.8,
        price: "$49/month",
        duration: "4 months",
        level: "Intermediate",
        description: "Learn TensorFlow from Google experts and build production-ready deep learning models."
      },
      {
        title: "Natural Language Processing Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/natural-language-processing",
        rating: 4.7,
        price: "$49/month",
        duration: "4 months",
        level: "Advanced",
        description: "Build natural language processing systems using PyTorch and transformers."
      },
      {
        title: "Computer Vision - The Complete Guide",
        platform: "Udemy",
        url: "https://www.udemy.com/course/computer-vision-the-complete-guide/",
        rating: 4.6,
        price: "$89.99",
        duration: "22 hours",
        level: "Advanced",
        description: "Learn computer vision with OpenCV, deep learning, and modern AI techniques."
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
      },
      {
        title: "UI/UX Design Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/ui-ux-design",
        rating: 4.6,
        price: "$49/month",
        duration: "6 months",
        level: "Intermediate",
        description: "Create digital user experiences that people love. Master Figma and design systems."
      },
      {
        title: "Design Thinking Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/design-thinking-innovation",
        rating: 4.7,
        price: "$49/month",
        duration: "5 months",
        level: "Beginner",
        description: "Learn design thinking from the University of Virginia. Master creative problem solving."
      },
      {
        title: "Advanced UI/UX Design",
        platform: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/advanced-ui-ux-design",
        rating: 4.8,
        price: "$34.99",
        duration: "8 hours",
        level: "Advanced",
        description: "Take your UI/UX skills to the next level with advanced design patterns and techniques."
      }
    ],
    "Cloud Computing": [
      {
        title: "AWS Certified Solutions Architect",
        platform: "Udemy",
        url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
        rating: 4.8,
        price: "$89.99",
        duration: "27 hours",
        level: "Intermediate",
        description: "Prepare for AWS Solutions Architect certification with hands-on practice."
      },
      {
        title: "Google Cloud Platform Fundamentals",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/cloud-engineering-gcp",
        rating: 4.7,
        price: "$49/month",
        duration: "6 months",
        level: "Beginner",
        description: "Start your cloud computing career with Google Cloud Platform."
      },
      {
        title: "Microsoft Azure Fundamentals",
        platform: "Microsoft Learn",
        url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
        rating: 4.8,
        price: "Free",
        duration: "10 hours",
        level: "Beginner",
        description: "Learn Azure fundamentals and prepare for the AZ-900 certification."
      },
      {
        title: "AWS DevOps Engineer Professional",
        platform: "Udemy",
        url: "https://www.udemy.com/course/aws-certified-devops-engineer-professional-hands-on/",
        rating: 4.7,
        price: "$89.99",
        duration: "20 hours",
        level: "Advanced",
        description: "Master DevOps on AWS and prepare for the professional certification."
      },
      {
        title: "Kubernetes for the Absolute Beginners",
        platform: "Udemy",
        url: "https://www.udemy.com/course/learn-kubernetes/",
        rating: 4.6,
        price: "$89.99",
        duration: "5.5 hours",
        level: "Beginner",
        description: "Learn Kubernetes from scratch with hands-on labs and practice tests."
      }
    ],
    "Cybersecurity": [
      {
        title: "CompTIA Security+ Certification",
        platform: "Udemy",
        url: "https://www.udemy.com/course/securityplus/",
        rating: 4.8,
        price: "$89.99",
        duration: "24 hours",
        level: "Intermediate",
        description: "Comprehensive security training for the CompTIA Security+ certification."
      },
      {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
        rating: 4.6,
        price: "$49/month",
        duration: "8 months",
        level: "Beginner",
        description: "Start your career in cybersecurity with IBM's professional certificate."
      },
      {
        title: "IBM Cybersecurity Analyst Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
        rating: 4.7,
        price: "$49/month",
        duration: "8 months",
        level: "Beginner",
        description: "Get ready for a career in cybersecurity. Learn from industry experts at IBM."
      },
      {
        title: "Ethical Hacking - The Complete Course",
        platform: "Udemy",
        url: "https://www.udemy.com/course/penetration-testing/",
        rating: 4.6,
        price: "$89.99",
        duration: "25 hours",
        level: "Intermediate",
        description: "Learn ethical hacking, penetration testing, and network security from scratch."
      },
      {
        title: "Certified Information Systems Security Professional (CISSP)",
        platform: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/cissp-cert-prep",
        rating: 4.8,
        price: "$34.99",
        duration: "20 hours",
        level: "Advanced",
        description: "Prepare for the CISSP certification exam with comprehensive coverage of all domains."
      },
      {
        title: "Cloud Security Engineering on AWS",
        platform: "Coursera",
        url: "https://www.coursera.org/learn/aws-cloud-security-engineering",
        rating: 4.7,
        price: "$49",
        duration: "20 hours",
        level: "Advanced",
        description: "Master cloud security best practices and tools on Amazon Web Services."
      }
    ],
    "Product Management": [
      {
        title: "Digital Product Management Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/uva-darden-digital-product-management",
        rating: 4.7,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate",
        description: "Learn modern product management techniques for digital products."
      },
      {
        title: "Product Management: Building Great Products",
        platform: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/product-management-building-great-products",
        rating: 4.6,
        price: "$34.99",
        duration: "2 hours",
        level: "Beginner",
        description: "Learn the fundamentals of product management and strategy."
      },
      {
        title: "Become a Product Manager | Learn the Skills & Get the Job",
        platform: "Udemy",
        url: "https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/",
        rating: 4.5,
        price: "$89.99",
        duration: "13 hours",
        level: "Beginner",
        description: "The most complete product management course on Udemy. From PM fundamentals to job interviews."
      },
      {
        title: "Product Management First Steps",
        platform: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning/product-management-first-steps",
        rating: 4.7,
        price: "$34.99",
        duration: "1.5 hours",
        level: "Beginner",
        description: "Learn the day-to-day responsibilities of a product manager and how to excel in the role."
      },
      {
        title: "Agile Product Management",
        platform: "Coursera",
        url: "https://www.coursera.org/learn/uva-darden-agile-product-management",
        rating: 4.8,
        price: "$49",
        duration: "4 weeks",
        level: "Intermediate",
        description: "Learn how to manage products using agile methodologies from the University of Virginia."
      }
    ],
    "Digital Marketing": [
      {
        title: "Digital Marketing Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/digital-marketing",
        rating: 4.7,
        price: "$49/month",
        duration: "8 months",
        level: "Beginner",
        description: "Master digital marketing strategy, social media, and SEO."
      },
      {
        title: "The Complete Digital Marketing Course",
        platform: "Udemy",
        url: "https://www.udemy.com/course/learn-digital-marketing-course/",
        rating: 4.5,
        price: "$84.99",
        duration: "22 hours",
        level: "Beginner",
        description: "Learn SEO, Google Ads, social media marketing, and content marketing."
      },
      {
        title: "Google Digital Marketing & E-commerce Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce",
        rating: 4.8,
        price: "$49/month",
        duration: "6 months",
        level: "Beginner",
        description: "Get professional training designed by Google and earn an industry-recognized certification."
      },
      {
        title: "Social Media Marketing Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/social-media-marketing",
        rating: 4.6,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate",
        description: "Master social media marketing strategy across multiple platforms."
      },
      {
        title: "SEO 2024: Complete SEO Training + SEO for WordPress",
        platform: "Udemy",
        url: "https://www.udemy.com/course/complete-seo-training/",
        rating: 4.7,
        price: "$89.99",
        duration: "18 hours",
        level: "All Levels",
        description: "Learn modern SEO strategies, tools, and techniques to rank higher on Google."
      }
    ]
  };

  return (
    <div className="container mx-auto py-10 relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Courses</h1>
      <Tabs defaultValue="Web Development" className="w-full">
        <div className="relative mb-8 border rounded-lg overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />
          <TabsList className="flex w-full overflow-x-auto scrollbar-hide p-2 gap-2 bg-gray-50">
            {Object.keys(courses).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="flex-none px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-100 data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 rounded-md transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.entries(courses).map(([category, categoryCourses]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
