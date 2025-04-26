
import React from 'react';
import Navbar from '@/components/Navbar';

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">SkillSutra Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600 mb-4">Personalized Guidance</h2>
            <p className="text-gray-600">Get tailored career recommendations based on your skills and interests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600 mb-4">Skill Analysis</h2>
            <p className="text-gray-600">Identify key skills needed for your dream career and get personalized learning paths.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-purple-600 mb-4">AI-Powered Insights</h2>
            <p className="text-gray-600">Access real-time industry insights and trends to make informed career decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
