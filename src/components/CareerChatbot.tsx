import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

interface CareerPath {
  title: string;
  description: string;
  requiredSkills: string[];
  learningPath: string[];
  estimatedTime: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
}

const careerPaths: Record<string, CareerPath> = {
  "Frontend Development": {
    title: "Frontend Development",
    description: "Create beautiful and interactive user interfaces",
    requiredSkills: ["HTML", "CSS", "JavaScript", "React", "UI/UX Design"],
    learningPath: [
      "HTML & CSS Fundamentals",
      "JavaScript Basics & Advanced Concepts",
      "React.js Framework",
      "UI/UX Design Principles",
      "Web Performance Optimization"
    ],
    estimatedTime: {
      beginner: "6-8 months",
      intermediate: "4-6 months",
      advanced: "2-3 months"
    }
  },
  "Backend Development": {
    title: "Backend Development",
    description: "Build robust server-side applications and APIs",
    requiredSkills: ["Node.js", "Databases", "API Design", "Server Management", "Security"],
    learningPath: [
      "Server-side Programming",
      "Database Design & Management",
      "RESTful API Development",
      "Authentication & Authorization",
      "Cloud Services & Deployment"
    ],
    estimatedTime: {
      beginner: "8-10 months",
      intermediate: "5-7 months",
      advanced: "3-4 months"
    }
  },
  "Full Stack Development": {
    title: "Full Stack Development",
    description: "Master both frontend and backend development",
    requiredSkills: ["Frontend Skills", "Backend Skills", "Database Management", "DevOps", "System Design"],
    learningPath: [
      "Frontend Development Basics",
      "Backend Development Fundamentals",
      "Database Integration",
      "Full Stack Project Development",
      "Deployment & DevOps"
    ],
    estimatedTime: {
      beginner: "12-14 months",
      intermediate: "8-10 months",
      advanced: "5-6 months"
    }
  }
};

const questions = [
  {
    id: 1,
    question: "What interests you more?",
    options: ["Frontend Development", "Backend Development", "Full Stack Development"],
    followUp: "Great choice! Frontend development focuses on creating user interfaces that users love to interact with."
  },
  {
    id: 2,
    question: "What is your current experience level?",
    options: ["Beginner", "Intermediate", "Advanced"],
    followUp: "Understanding your experience level helps us tailor the perfect learning path for you."
  },
  {
    id: 3,
    question: "How much time can you dedicate to learning?",
    options: ["2-4 hours/day", "4-6 hours/day", "6+ hours/day"],
    followUp: "Consistent learning is key to success in tech. We'll adjust the pace accordingly."
  },
  {
    id: 4,
    question: "What's your primary motivation for learning?",
    options: ["Career Change", "Skill Enhancement", "Personal Interest"],
    followUp: "Understanding your goals helps us provide more relevant guidance."
  }
];

export const CareerChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: "Hi! I'm here to help you find your ideal career path. Ready to start?" },
  ]);

  const handleOptionClick = (option: string) => {
    // Add user's response
    setMessages((prev) => [...prev, { type: "user", content: option }]);

    // Add bot's next question or conclusion
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setMessages((prev) => [
          ...prev,
          { type: "bot", content: questions[currentQuestion + 1].question },
        ]);
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Final recommendation
        const recommendation = generateRecommendation(
          messages.filter((m) => m.type === "user").map((m) => m.content)
        );
        setMessages((prev) => [...prev, { type: "bot", content: recommendation }]);
      }
    }, 500);
  };

  const generateRecommendation = (answers: string[]) => {
    const [interest, level, time, motivation] = answers;
    const careerPath = careerPaths[interest];
    const timeCommitment = time.split('-')[0];
    const hoursPerWeek = parseInt(timeCommitment) * 5; // Assuming 5 days/week

    let completionTime = careerPath.estimatedTime[level.toLowerCase() as keyof typeof careerPath.estimatedTime];
    
    // Adjust completion time based on daily commitment
    if (time === "6+ hours/day") {
      completionTime = completionTime.split('-')[0] + " (accelerated)";
    }

    return `Based on your responses, here's your personalized career path in ${interest}:

🎯 Career Focus: ${careerPath.description}

📚 Required Skills:
${careerPath.requiredSkills.map(skill => `• ${skill}`).join('\n')}

🛣️ Your Learning Path:
${careerPath.learningPath.map((step, index) => `${index + 1}. ${step}`).join('\n')}

⏱️ Estimated Completion Time: ${completionTime}
(Based on ${time} commitment, ${hoursPerWeek}+ hours/week)

💡 Additional Tips:
• ${motivation === 'Career Change' ? 'Focus on building a strong portfolio of projects' : 
    motivation === 'Skill Enhancement' ? 'Consider specializing in advanced topics in your area' : 
    'Explore side projects that interest you'}
• Join our community to connect with other learners
• Regular practice and real-world projects are key to success

Ready to start? Check out our courses page for structured learning paths!`;
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setMessages([
      { type: "bot", content: "Hi! I'm here to help you find your ideal career path. Ready to start?" },
    ]);
  };

  return (
    <>
      {/* Floating button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full px-4 py-2 flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-5 w-5" />
        <span>Chat with us</span>
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[380px] max-h-[600px] shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b bg-card sticky top-0 z-20">
            <h3 className="font-semibold">Career Path Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4 overflow-hidden flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[85%] break-words ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Options */}
            {currentQuestion < questions.length && messages[messages.length - 1].type === "bot" && (
                <div className="space-y-2 sticky bottom-0 bg-background pt-2 border-t">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className="w-full justify-start text-sm py-2 px-3 h-auto whitespace-normal text-left"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}

            {/* Reset button */}
            {currentQuestion >= questions.length && (
              <Button className="w-full mt-4" onClick={resetChat}>
                Start Over
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};
