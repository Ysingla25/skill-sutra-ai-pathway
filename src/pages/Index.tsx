import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CareerChatbot } from "@/components/CareerChatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Your AI-Powered</span>
                  <span className="block text-purple-600">Career Guide</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover your perfect career path with personalized AI guidance. Get expert insights, learn in-demand skills, and navigate your professional journey with confidence.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/auth/signup">
                      <Button className="w-full flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700">
                        Start Your Journey
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose SkillSutra?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Empower your career journey with our AI-driven platform
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium text-gray-900">Personalized Guidance</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get tailored career recommendations based on your skills, interests, and goals.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium text-gray-900">Skill Analysis</h3>
                <p className="mt-2 text-base text-gray-500">
                  Identify key skills needed for your dream career and get personalized learning paths.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-medium text-gray-900">AI-Powered Insights</h3>
                <p className="mt-2 text-base text-gray-500">
                  Access real-time industry insights and trends to make informed career decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to boost your career?</span>
            <span className="block text-purple-200">Join SkillSutra today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/auth/signup">
                <Button className="bg-white text-purple-600 hover:bg-purple-50">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <CareerChatbot />
    </div>
  );
};

export default Index;
