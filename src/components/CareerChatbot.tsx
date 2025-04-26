import { useState, useRef, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

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

const careerKnowledgeBase = {
  "salary": "Salaries vary greatly by role, location, and experience. Entry-level tech roles typically start at $50-70k, while experienced professionals can earn $100k+. Senior roles and specialized positions can exceed $150k.",
  "skills": "Key career skills include: technical expertise in your field, communication, problem-solving, adaptability, time management, and continuous learning. Soft skills are as important as technical skills.",
  "education": "While formal education is valuable, many successful careers can be built through self-learning, bootcamps, or certifications. What matters most is your skills and portfolio.",
  "interview": "Prepare for interviews by: researching the company, practicing common questions, preparing your own questions, showcasing your projects, and demonstrating both technical and soft skills.",
  "growth": "Career growth comes from: continuous learning, taking on challenging projects, networking, mentorship, and staying updated with industry trends.",
  "work-life": "Work-life balance varies by company and role. Many organizations offer flexible hours, remote work, and wellness programs. It's important to set boundaries and communicate your needs.",
  "change": "Career changes are common. Key steps include: identifying transferable skills, learning new required skills, networking in your target field, and possibly starting with entry-level positions.",
  "trends": "Current trending career fields include: AI/Machine Learning, Data Science, Cybersecurity, Cloud Computing, and Sustainable Technology. Stay updated with industry news and continuous learning."
};

const generateResponse = (question: string): string => {
  question = question.toLowerCase();
  
  if (question.includes('salary') || question.includes('pay') || question.includes('earn')) {
    return careerKnowledgeBase.salary;
  } else if (question.includes('skill') || question.includes('learn')) {
    return careerKnowledgeBase.skills;
  } else if (question.includes('education') || question.includes('degree') || question.includes('study')) {
    return careerKnowledgeBase.education;
  } else if (question.includes('interview') || question.includes('hire')) {
    return careerKnowledgeBase.interview;
  } else if (question.includes('growth') || question.includes('advance') || question.includes('promotion')) {
    return careerKnowledgeBase.growth;
  } else if (question.includes('balance') || question.includes('work-life') || question.includes('stress')) {
    return careerKnowledgeBase["work-life"];
  } else if (question.includes('change') || question.includes('switch') || question.includes('transition')) {
    return careerKnowledgeBase.change;
  } else if (question.includes('trend') || question.includes('future') || question.includes('demand')) {
    return careerKnowledgeBase.trends;
  }
  
  return "I understand you're asking about careers. Could you please be more specific about what you'd like to know? You can ask about salaries, skills needed, education requirements, interview tips, career growth, work-life balance, career changes, or industry trends.";
};

export const CareerChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: "Hi! I'm your career advisor. Ask me anything about careers, jobs, skills, or professional growth!" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user's message
    const userMessage = { type: "user" as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);

    // Generate and add bot's response
    const botResponse = generateResponse(inputValue);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", content: botResponse }]);
      
      // Scroll to bottom
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
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
    setMessages([
      { type: "bot", content: "Hi! I'm your career advisor. Ask me anything about careers, jobs, skills, or professional growth!" },
    ]);
    setInputValue("");
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
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin" ref={chatContainerRef}>
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

            {/* Input area */}
            <div className="flex items-center gap-2 sticky bottom-0 bg-background pt-2 border-t">
              <Input
                placeholder="Ask me anything about careers..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
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
