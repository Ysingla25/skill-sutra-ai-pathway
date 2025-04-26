
import React from 'react';
import Navbar from '@/components/Navbar';
import { GraduationCap, Target, Users, Briefcase, ChartBar, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">SkillSutra Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform can transform your career journey with personalized guidance and comprehensive learning solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Personalized Learning Paths</h2>
            </div>
            <p className="text-gray-600">
              AI-driven custom learning journeys tailored to your career goals, skills, and industry requirements. Get step-by-step guidance to achieve your professional aspirations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Skill Gap Analysis</h2>
            </div>
            <p className="text-gray-600">
              Advanced analytics to identify skill gaps between your current profile and dream job requirements. Receive targeted recommendations for improvement.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Mentor Matching</h2>
            </div>
            <p className="text-gray-600">
              Connect with industry experts and mentors who align with your career interests. Get valuable insights and guidance from professionals in your target field.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Job Market Insights</h2>
            </div>
            <p className="text-gray-600">
              Real-time job market analytics, salary trends, and industry demand forecasts to help you make informed career decisions and stay ahead of the curve.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <ChartBar className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Progress Tracking</h2>
            </div>
            <p className="text-gray-600">
              Comprehensive dashboard to monitor your skill development, learning milestones, and career progression with detailed analytics and achievements.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-purple-600 ml-4">Interactive Learning</h2>
            </div>
            <p className="text-gray-600">
              Engage with interactive courses, workshops, and assessments designed to enhance your skills through practical, hands-on learning experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
