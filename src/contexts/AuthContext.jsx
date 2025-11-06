import React, { createContext, useState, useContext, useEffect } from 'react';

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

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate different user types based on email
      let userData;
      
      if (email.includes('teacher') || email.includes('staff')) {
        userData = {
          id: 1,
          email,
          name: email.split('@')[0],
          role: 'teacher',
          status: 'active',
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=2684FF`,
          joinDate: '2024-01-15',
          department: 'Mathematics',
          courses: ['IB Mathematics HL', 'Cambridge Mathematics A-Level'],
          permissions: ['create_courses', 'grade_assignments', 'manage_students']
        };
      } else if (email.includes('admin')) {
        userData = {
          id: 2,
          email,
          name: email.split('@')[0],
          role: 'admin',
          status: 'active',
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=FF5733`,
          joinDate: '2023-08-01',
          department: 'Administration',
          permissions: ['all_access']
        };
      } else {
        userData = {
          id: 3,
          email,
          name: email.split('@')[0],
          role: 'student',
          status: 'active',
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=10B981`,
          joinDate: '2024-09-01',
          grade: 'Grade 12',
          studentId: 'STU2024001',
          courses: ['IB Mathematics HL', 'Cambridge Physics A-Level', 'IB English Literature HL'],
          gpa: 3.8,
          attendance: 95.2
        };
      }
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password, name, role = 'student') => {
    setLoading(true);
    try {
      const userData = {
        id: Date.now(),
        email,
        name,
        role,
        status: 'pending', // New users start as pending
        avatar: `https://ui-avatars.com/api/?name=${name}&background=random`,
        joinDate: new Date().toISOString().split('T')[0],
        ...(role === 'student' && {
          grade: 'Not assigned',
          studentId: `PENDING${Date.now()}`,
          courses: [],
          gpa: 0,
          attendance: 0
        }),
        ...(role === 'teacher' && {
          department: 'Not assigned',
          courses: [],
          permissions: []
        })
      };
      
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, message: 'Account created! Waiting for admin approval.' };
    } catch (error) {
      return { success: false, error: 'Signup failed' };
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData) => {
    setLoading(true);
    try {
      const updatedUser = {
        ...user,
        ...profileData,
        avatar: profileData.avatar || user.avatar
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, message: 'Profile updated successfully!' };
    } catch (error) {
      return { success: false, error: 'Profile update failed' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};