// pages/Unauthorized.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Home, ArrowLeft } from 'lucide-react';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-red-600" />
          </div>

          {/* Title & Description */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-2">
            You don't have permission to access this page.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            This area is restricted to authorized personnel only.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              to="/login"
              className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Login</span>
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If you believe this is an error, please contact{' '}
              <a href="mailto:support@libertylyceum.edu.gh" className="text-blue-600 hover:text-blue-700 font-medium">
                support@libertylyceum.edu.gh
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Unauthorized;