// pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Compass } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Compass className="h-10 w-10 text-blue-600" />
          </div>

          {/* Title & Description */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Homepage</span>
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/about"
                className="border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Explore</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Go Back</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Popular Pages</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Admissions', 'Academics', 'Contact', 'Blog'].map((page) => (
                <Link
                  key={page}
                  to={`/${page.toLowerCase()}`}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;