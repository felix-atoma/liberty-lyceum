// contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI, usersAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const response = await usersAPI.getProfile();
        setUser(response.data.data);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await authAPI.login(email, password);
      const { token, user: userData } = response.data.data;

      localStorage.setItem('authToken', token);
      setUser(userData);

      return { success: true, user: userData };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password, name, role = 'student', additionalData = {}) => {
    try {
      setLoading(true);
      setError('');

      const signupData = {
        email,
        password,
        name,
        role,
        phone: additionalData.phone || '',
        address: additionalData.address || '',
        dateOfBirth: additionalData.dateOfBirth || '',
        gender: additionalData.gender || '',
        nationality: additionalData.nationality || ''
      };

      const response = await authAPI.signup(signupData);
      const { token, user: userData } = response.data.data;

      localStorage.setItem('authToken', token);
      setUser(userData);

      return { success: true, user: userData, message: 'Account created successfully!' };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    try {
      setLoading(true);
      const response = await usersAPI.updateProfile(profileData);
      const updatedUser = response.data.data;
      
      setUser(updatedUser);
      return { success: true, message: 'Profile updated successfully!', user: updatedUser };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Profile update failed';
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    loading,
    error,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};