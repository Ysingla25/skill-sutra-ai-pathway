"use client";

import { Button } from "@/components/ui/button";
import { CareerQuiz } from "@/components/CareerQuiz";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to SkillSutra
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover your ideal career path and get personalized guidance
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="default"
                  className="text-lg px-8 py-6 font-semibold hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                >
                  🎯 Take Career Quiz
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <CareerQuiz />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600">Why Take Our Career Quiz?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Get personalized career path recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Understand your strengths and interests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Learn about required skills and next steps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Make informed career decisions</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-purple-600">Need More Help?</h2>
            <p className="text-gray-600 leading-relaxed">
              Chat with our AI career advisor for personalized guidance on career paths,
              skills, education, and more.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
