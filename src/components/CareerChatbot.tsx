import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

const questions = [
  {
    id: 1,
    question: "What interests you more?",
    options: ["Frontend Development", "Backend Development", "Full Stack Development"],
  },
  {
    id: 2,
    question: "What is your current experience level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    question: "How much time can you dedicate to learning?",
    options: ["2-4 hours/day", "4-6 hours/day", "6+ hours/day"],
  },
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
    // Simple recommendation logic based on answers
    const [interest, level, time] = answers;
    return `Based on your responses, I recommend the following path:
    
    ${interest} track - ${level} level
    Estimated completion time with ${time} commitment
    
    Check out our courses page for relevant courses and start your journey today!`;
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
        className="fixed bottom-4 right-4 rounded-full p-4"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[350px] max-h-[500px] shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Career Path Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="h-[350px] overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
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
            {currentQuestion < questions.length &&
              messages[messages.length - 1].type === "bot" && (
                <div className="space-y-2">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className="w-full justify-start"
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
