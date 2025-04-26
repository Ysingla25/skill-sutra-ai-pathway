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

interface CareerPathScore {
  path: string;
  score: number;
  description: string;
  keySkills: string[];
  nextSteps: string[];
}

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

const careerPaths: Record<string, CareerPathScore> = {
  "Software Development": {
    path: "Software Development",
    score: 0,
    description: "Focus on building applications and systems using programming languages and development tools.",
    keySkills: [
      "Programming languages (e.g., JavaScript, Python)",
      "Problem-solving",
      "Software architecture",
      "Version control",
      "Testing methodologies"
    ],
    nextSteps: [
      "Learn fundamental programming concepts",
      "Build a portfolio of projects",
      "Contribute to open source",
      "Practice coding challenges",
      "Join developer communities"
    ]
  },
  "UX/UI Design": {
    path: "UX/UI Design",
    score: 0,
    description: "Create user-friendly interfaces and experiences that delight users while meeting business goals.",
    keySkills: [
      "User research",
      "Interface design",
      "Prototyping",
      "Visual design",
      "User testing"
    ],
    nextSteps: [
      "Learn design principles",
      "Master design tools",
      "Build a design portfolio",
      "Study user psychology",
      "Practice user research"
    ]
  },
  "Product Management": {
    path: "Product Management",
    score: 0,
    description: "Bridge technical and business needs to guide product development and strategy.",
    keySkills: [
      "Strategic thinking",
      "User empathy",
      "Data analysis",
      "Communication",
      "Project management"
    ],
    nextSteps: [
      "Learn product development lifecycle",
      "Study market research",
      "Practice stakeholder management",
      "Build analytical skills",
      "Network with product managers"
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
      return { ...info, score };
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
