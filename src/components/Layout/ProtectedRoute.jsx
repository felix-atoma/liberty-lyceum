// components/Layout/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">
            {adminOnly ? 'Verifying admin privileges...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to appropriate login based on route
    const loginPath = adminOnly ? '/admin/login' : '/login';
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  if (adminOnly && user.role !== 'admin') {
    // Redirect non-admin users trying to access admin routes
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;