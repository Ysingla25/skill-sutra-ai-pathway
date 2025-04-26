
import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About SkillSutra</h1>
        <p className="text-lg text-gray-600">
          SkillSutra is an AI-powered career guidance platform designed to help individuals 
          navigate their professional journey with personalized insights and learning paths.
        </p>
      </div>
    </div>
  );
};

export default About;
