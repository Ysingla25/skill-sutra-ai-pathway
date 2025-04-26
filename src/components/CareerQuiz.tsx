import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

interface Course {
  title: string;
  platform: 'Udemy' | 'Coursera' | 'edX' | 'LinkedIn Learning';
  url: string;
  rating: number;
  price: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface CareerPathScore {
  path: string;
  score: number;
  description: string;
  keySkills: string[];
  nextSteps: string[];
  recommendedCourses: Course[];
}

const courseRecommendations: Record<string, Course[]> = {
  'Data Science': [
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      platform: 'Udemy',
      url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
      rating: 4.6,
      price: '$84.99',
      duration: '25 hours',
      level: 'Intermediate'
    },
    {
      title: 'IBM Data Science Professional Certificate',
      platform: 'Coursera',
      url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
      rating: 4.8,
      price: '$39/month',
      duration: '10 months',
      level: 'Beginner'
    }
  ],
  'Web Development': [
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      platform: 'Udemy',
      url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
      rating: 4.7,
      price: '$89.99',
      duration: '55 hours',
      level: 'Beginner'
    },
    {
      title: 'Full-Stack Web Development with React',
      platform: 'Coursera',
      url: 'https://www.coursera.org/specializations/full-stack-react',
      rating: 4.7,
      price: '$49/month',
      duration: '5 months',
      level: 'Intermediate'
    }
  ],
  'Digital Marketing': [
    {
      title: 'Digital Marketing Specialization',
      platform: 'Coursera',
      url: 'https://www.coursera.org/specializations/digital-marketing',
      rating: 4.6,
      price: '$49/month',
      duration: '8 months',
      level: 'Beginner'
    },
    {
      title: 'The Complete Digital Marketing Course',
      platform: 'Udemy',
      url: 'https://www.udemy.com/course/learn-digital-marketing-course/',
      rating: 4.5,
      price: '$84.99',
      duration: '22.5 hours',
      level: 'Beginner'
    }
  ],
  'UX Design': [
    {
      title: 'Google UX Design Professional Certificate',
      platform: 'Coursera',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      rating: 4.8,
      price: '$39/month',
      duration: '6 months',
      level: 'Beginner'
    },
    {
      title: 'User Experience Design Essentials',
      platform: 'Udemy',
      url: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/',
      rating: 4.7,
      price: '$84.99',
      duration: '13 hours',
      level: 'Beginner'
    }
  ]
};

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What type of problems do you enjoy solving the most?",
    options: [
      {
        text: "Technical and logical puzzles",
        scores: { technical: 3, creative: 0, business: 1 }
      },
      {
        text: "Creative and design challenges",
        scores: { technical: 0, creative: 3, business: 1 }
      },
      {
        text: "Business and strategic problems",
        scores: { technical: 1, creative: 1, business: 3 }
      },
      {
        text: "People and communication challenges",
        scores: { technical: 0, creative: 2, business: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "How do you prefer to work?",
    options: [
      {
        text: "Independently with focused concentration",
        scores: { technical: 2, creative: 1, business: 0 }
      },
      {
        text: "In a collaborative team environment",
        scores: { technical: 1, creative: 2, business: 2 }
      },
      {
        text: "Leading and coordinating others",
        scores: { technical: 0, creative: 1, business: 3 }
      },
      {
        text: "Mix of solo and team work",
        scores: { technical: 1, creative: 1, business: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "What interests you most about technology?",
    options: [
      {
        text: "Building and creating new things",
        scores: { technical: 3, creative: 2, business: 0 }
      },
      {
        text: "Understanding how things work",
        scores: { technical: 2, creative: 1, business: 1 }
      },
      {
        text: "Using it to solve business problems",
        scores: { technical: 1, creative: 0, business: 3 }
      },
      {
        text: "Its impact on people and society",
        scores: { technical: 0, creative: 2, business: 2 }
      }
    ]
  },
  {
    id: 4,
    question: "What's your preferred learning style?",
    options: [
      {
        text: "Hands-on practice and experimentation",
        scores: { technical: 2, creative: 2, business: 0 }
      },
      {
        text: "Reading and researching thoroughly",
        scores: { technical: 2, creative: 0, business: 2 }
      },
      {
        text: "Learning from others' experiences",
        scores: { technical: 1, creative: 1, business: 2 }
      },
      {
        text: "A mix of theory and practice",
        scores: { technical: 1, creative: 1, business: 1 }
      }
    ]
  },
  {
    id: 5,
    question: "What kind of impact do you want to make?",
    options: [
      {
        text: "Building innovative solutions",
        scores: { technical: 3, creative: 2, business: 1 }
      },
      {
        text: "Creating beautiful experiences",
        scores: { technical: 0, creative: 3, business: 1 }
      },
      {
        text: "Driving business growth",
        scores: { technical: 1, creative: 0, business: 3 }
      },
      {
        text: "Helping and mentoring others",
        scores: { technical: 0, creative: 1, business: 2 }
      }
    ]
  }
];

const careerPaths: Record<string, Omit<CareerPathScore, 'score'>> = {
  "Software Development": {
    path: "Software Development",
    description: "A career in software development involves creating, testing, and maintaining applications and systems. You'll work with various programming languages and technologies to solve complex problems.",
    keySkills: ["Programming", "Problem Solving", "System Design", "Version Control", "Testing"],
    nextSteps: [
      "Learn a programming language (Python, JavaScript, Java)",
      "Build a portfolio of projects",
      "Contribute to open source",
      "Practice coding challenges"
    ],
    recommendedCourses: [
      {
        title: "The Complete Web Development Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
        rating: 4.7,
        price: "$89.99",
        duration: "55 hours",
        level: "Beginner"
      },
      {
        title: "Full-Stack Web Development with React",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/full-stack-react",
        rating: 4.7,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate"
      }
    ]
  },
  "UX/UI Design": {
    path: "UX/UI Design",
    description: "UX/UI designers create intuitive and visually appealing interfaces for digital products. You'll combine creativity with user psychology to design engaging experiences.",
    keySkills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "User Testing"],
    nextSteps: [
      "Learn design tools (Figma, Adobe XD)",
      "Study user psychology",
      "Create a design portfolio",
      "Practice user research"
    ],
    recommendedCourses: [
      {
        title: "Google UX Design Professional Certificate",
        platform: "Coursera",
        url: "https://www.coursera.org/professional-certificates/google-ux-design",
        rating: 4.8,
        price: "$39/month",
        duration: "6 months",
        level: "Beginner"
      },
      {
        title: "User Experience Design Essentials",
        platform: "Udemy",
        url: "https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/",
        rating: 4.7,
        price: "$84.99",
        duration: "13 hours",
        level: "Beginner"
      }
    ]
  },
  "Product Management": {
    path: "Product Management",
    description: "Product managers guide the development of products from conception to launch. You'll work with various teams to ensure products meet user needs and business goals.",
    keySkills: ["Strategy", "Leadership", "Analytics", "Communication", "Agile"],
    nextSteps: [
      "Learn product development frameworks",
      "Study market analysis",
      "Develop technical knowledge",
      "Practice stakeholder management"
    ],
    recommendedCourses: [
      {
        title: "Digital Product Management Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/digital-product-management",
        rating: 4.6,
        price: "$49/month",
        duration: "5 months",
        level: "Intermediate"
      },
      {
        title: "Product Management A-Z",
        platform: "Udemy",
        url: "https://www.udemy.com/course/product-management-a-z/",
        rating: 4.5,
        price: "$84.99",
        duration: "13.5 hours",
        level: "Beginner"
      }
    ]
  }
};

interface QuizResult {
  userId: string;
  timestamp: string;
  answers: { questionId: number; answer: string }[];
  topPaths: { path: string; score: number }[];
}

export const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [topPaths, setTopPaths] = useState<CareerPathScore[]>([]);

  const calculateResults = () => {
    const scores = {
      technical: 0,
      creative: 0,
      business: 0
    };

    // Calculate scores based on answers
    answers.forEach((answer, index) => {
      const question = quizQuestions[index];
      const selectedOption = question.options.find(opt => opt.text === answer);
      if (selectedOption) {
        Object.entries(selectedOption.scores).forEach(([category, score]) => {
          scores[category as keyof typeof scores] += score;
        });
      }
    });

    // Map scores to career paths
    const pathScores = Object.entries(careerPaths).map(([path, info]) => {
      let score = 0;
      if (path === "Software Development") {
        score = scores.technical * 2 + scores.creative * 0.5 + scores.business * 0.5;
      } else if (path === "UX/UI Design") {
        score = scores.creative * 2 + scores.technical * 0.5 + scores.business;
      } else if (path === "Product Management") {
        score = scores.business * 2 + scores.technical * 0.7 + scores.creative * 0.7;
      }
      return { ...info, score, recommendedCourses: courseRecommendations[path] || [] };
    });

    // Sort and get top paths
    const sortedPaths = pathScores.sort((a, b) => b.score - a.score);
    setTopPaths(sortedPaths.slice(0, 2));

    // Save results to database
    const result: QuizResult = {
      userId: "user123", // In a real app, this would come from authentication
      timestamp: new Date().toISOString(),
      answers: answers.map((answer, index) => ({
        questionId: quizQuestions[index].id,
        answer
      })),
      topPaths: sortedPaths.slice(0, 2).map(p => ({
        path: p.path,
        score: p.score
      }))
    };

    // Here you would typically save to a database
    console.log("Quiz results:", result);
    
    setShowResults(true);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setTopPaths([]);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Career Path Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <Progress value={progress} className="w-full" />
            <div className="text-xl font-semibold">
              {quizQuestions[currentQuestion].question}
            </div>
            <RadioGroup
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.text}
                    id={`option-${index}`}
                  />
                  <Label htmlFor={`option-${index}`}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Your Recommended Career Paths</h3>
            {topPaths.map((path, index) => (
              <div key={index} className="space-y-4 p-4 border rounded-lg">
                <h4 className="text-lg font-semibold">{index + 1}. {path.path}</h4>
                <p>{path.description}</p>
                <div>
                  <h5 className="font-semibold">Key Skills:</h5>
                  <ul className="list-disc pl-5">
                    {path.keySkills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold">Next Steps:</h5>
                  <ul className="list-disc pl-5">
                    {path.nextSteps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold mb-4">Recommended Courses:</h5>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {courseRecommendations[path.path]?.map((course, i) => (
                      <Card key={i} className="overflow-hidden">
                        <CardHeader className="p-4">
                          <div className="flex items-center justify-between">
                            <div className={`px-2 py-1 text-xs font-semibold rounded ${{
                              'Udemy': 'bg-purple-100 text-purple-700',
                              'Coursera': 'bg-blue-100 text-blue-700',
                              'edX': 'bg-red-100 text-red-700',
                              'LinkedIn Learning': 'bg-sky-100 text-sky-700'
                            }[course.platform]}`}>
                              {course.platform}
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              <span className="ml-1 text-sm font-medium">{course.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-base mt-3">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                            <span>{course.duration}</span>
                            <span>{course.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-medium px-2 py-1 rounded ${{
                              'Beginner': 'bg-green-100 text-green-700',
                              'Intermediate': 'bg-yellow-100 text-yellow-700',
                              'Advanced': 'bg-red-100 text-red-700'
                            }[course.level]}`}>
                              {course.level}
                            </span>
                            <a 
                              href={course.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                            >
                              Learn More →
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Button onClick={resetQuiz} className="w-full">
              Take Quiz Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
