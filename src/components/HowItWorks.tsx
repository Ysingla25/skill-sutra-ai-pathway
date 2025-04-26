import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Simple steps to transform your career journey
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-4">1</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Get Started</h3>
            <p className="text-gray-600">
              Create your profile and share your career aspirations
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-4">2</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI analyzes your skills and market trends
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-purple-600 mb-4">3</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Path</h3>
            <p className="text-gray-600">
              Get a tailored career development plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;