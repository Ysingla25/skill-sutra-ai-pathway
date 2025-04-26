
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GraduationCap, Target, Users, Briefcase, ChartBar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              SkillSutra Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform can transform your career journey with personalized guidance and comprehensive learning solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards with motion effects */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <GraduationCap className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Personalized Learning Paths</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                AI-driven custom learning journeys tailored to your career goals, skills, and industry requirements. Get step-by-step guidance to achieve your professional aspirations.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Target className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Skill Gap Analysis</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Advanced analytics to identify skill gaps between your current profile and dream job requirements. Receive targeted recommendations for improvement.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Mentor Matching</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connect with industry experts and mentors who align with your career interests. Get valuable insights and guidance from professionals in your target field.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Briefcase className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Job Market Insights</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Real-time job market analytics, salary trends, and industry demand forecasts to help you make informed career decisions and stay ahead of the curve.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <ChartBar className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Progress Tracking</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboard to monitor your skill development, learning milestones, and career progression with detailed analytics and achievements.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <BookOpen className="h-7 w-7 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 ml-4">Interactive Learning</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Engage with interactive courses, workshops, and assessments designed to enhance your skills through practical, hands-on learning experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
