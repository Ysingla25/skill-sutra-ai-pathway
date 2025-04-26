import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CareerChatbot } from "@/components/CareerChatbot";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to SkillSutra</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover your ideal career path and get personalized guidance
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/quiz">
              <Button size="lg" className="gap-2">
                🎯 Take Career Quiz
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why Take Our Career Quiz?</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Get personalized career path recommendations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Understand your strengths and interests
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Learn about required skills and next steps
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Make informed career decisions
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Need More Help?</h2>
            <p className="text-muted-foreground">
              Chat with our AI career advisor for personalized guidance on career paths,
              skills, education, and more.
            </p>
          </div>
        </div>

        {/* Career chatbot will appear as a floating button */}
        <CareerChatbot />
      </div>
    </main>
  );
}
