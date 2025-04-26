import { useState, useRef, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

interface CareerInfo {
  title: string;
  description: string;
  details: string[];
  relatedTopics: string[];
}

const careerKnowledgeBase: Record<string, CareerInfo> = {
  "salary": {
    title: "Career Salaries and Compensation",
    description: "Understanding salary ranges and compensation packages in different career paths",
    details: [
      "Entry-level tech roles typically start at $50-70k annually",
      "Mid-level positions range from $80-120k based on experience and location",
      "Senior roles and specialized positions can exceed $150-200k",
      "Additional compensation often includes stock options, bonuses, and benefits",
      "Remote work opportunities may offer location-independent salary scales"
    ],
    relatedTopics: ["negotiation", "benefits", "career-growth", "job-levels"]
  },
  "skills": {
    title: "Essential Career Skills",
    description: "Key skills needed for career success in today's professional landscape",
    details: [
      "Technical skills specific to your field (e.g., programming languages, tools)",
      "Soft skills: communication, leadership, problem-solving, teamwork",
      "Project management and organizational abilities",
      "Adaptability and continuous learning mindset",
      "Digital literacy and technology proficiency"
    ],
    relatedTopics: ["learning", "development", "certification", "training"]
  },
  "education": {
    title: "Educational Pathways",
    description: "Various educational routes to build a successful career",
    details: [
      "Traditional degrees: Bachelor's, Master's, Ph.D. programs",
      "Professional certifications and industry-specific qualifications",
      "Online learning platforms and MOOCs",
      "Bootcamps and intensive training programs",
      "Self-learning and practical experience building"
    ],
    relatedTopics: ["qualifications", "certifications", "training", "learning-path"]
  },
  "interview": {
    title: "Interview Preparation",
    description: "Comprehensive guide to ace job interviews",
    details: [
      "Research the company thoroughly: culture, products, recent news",
      "Prepare STAR method responses for behavioral questions",
      "Practice technical skills and coding challenges if applicable",
      "Prepare thoughtful questions for the interviewer",
      "Follow up professionally after the interview"
    ],
    relatedTopics: ["job-search", "resume", "negotiation", "career-change"]
  },
  "growth": {
    title: "Career Growth and Development",
    description: "Strategies for advancing your career",
    details: [
      "Set clear short-term and long-term career goals",
      "Seek mentorship and networking opportunities",
      "Take on challenging projects and leadership roles",
      "Stay updated with industry trends and technologies",
      "Build a strong professional network"
    ],
    relatedTopics: ["promotion", "leadership", "networking", "mentorship"]
  },
  "work-life": {
    title: "Work-Life Balance",
    description: "Managing professional and personal life effectively",
    details: [
      "Set clear boundaries between work and personal time",
      "Utilize flexible work arrangements when available",
      "Practice time management and prioritization",
      "Take regular breaks and use vacation time",
      "Maintain physical and mental well-being"
    ],
    relatedTopics: ["stress-management", "remote-work", "productivity", "health"]
  },
  "change": {
    title: "Career Transition",
    description: "Guide for successful career changes",
    details: [
      "Assess your transferable skills and interests",
      "Research and network in your target industry",
      "Develop new skills through courses or side projects",
      "Update your resume and online presence",
      "Consider starting with entry-level positions or internships"
    ],
    relatedTopics: ["skills", "education", "networking", "job-search"]
  },
  "trends": {
    title: "Industry Trends",
    description: "Current and emerging career opportunities",
    details: [
      "AI and Machine Learning continue rapid growth",
      "Cybersecurity becomes increasingly critical",
      "Remote work and digital transformation",
      "Sustainability and green technology",
      "Healthcare technology and telemedicine"
    ],
    relatedTopics: ["technology", "future-skills", "innovation", "job-market"]
  },
  "networking": {
    title: "Professional Networking",
    description: "Building and maintaining professional relationships",
    details: [
      "Attend industry events and conferences",
      "Utilize professional social networks like LinkedIn",
      "Join professional associations and communities",
      "Contribute to discussions and share knowledge",
      "Maintain regular contact with your network"
    ],
    relatedTopics: ["career-growth", "job-search", "mentorship", "personal-brand"]
  }
};

const generateResponse = (question: string): string => {
  question = question.toLowerCase();
  
  // Helper function to find the most relevant topic
  const findRelevantTopic = (q: string): string | null => {
    const topics = Object.keys(careerKnowledgeBase);
    for (const topic of topics) {
      const info = careerKnowledgeBase[topic];
      // Check main topic keywords
      if (q.includes(topic)) return topic;
      // Check related topics
      if (info.relatedTopics.some(rt => q.includes(rt))) return topic;
    }
    return null;
  };

  // Find the most relevant topic
  const topic = findRelevantTopic(question);
  
  if (topic) {
    const info = careerKnowledgeBase[topic];
    return `📌 ${info.title}\n\n${info.description}\n\n${info.details.map(d => `• ${d}`).join('\n')}\n\n💡 Related topics: ${info.relatedTopics.join(', ')}`;
  }

  // If no specific topic is found, provide a general response
  return `I can help you with various career-related topics. You can ask about:\n\n${Object.values(careerKnowledgeBase).map(info => `• ${info.title}`).join('\n')}\n\nWhat would you like to know more about?`;
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

            {/* Reset button */}
            <Button className="w-full mt-4" onClick={resetChat}>
              Start Over
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};
