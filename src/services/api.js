// services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email, password) => 
    api.post('/auth/login', { email, password }),

  signup: (userData) => 
    api.post('/auth/signup', userData),

  logout: () => 
    api.post('/auth/logout'),

  refreshToken: () => 
    api.post('/auth/refresh-token'),

  forgotPassword: (email) => 
    api.post('/auth/forgot-password', { email }),

  resetPassword: (token, password) => 
    api.post('/auth/reset-password', { token, password }),
};

// Contact/Applications API
export const applicationsAPI = {
  submitContact: (formData) => 
    api.post('/applications/contact', formData),

  submitApplication: (applicationData) => 
    api.post('/applications/submit', applicationData),

  uploadDocuments: (applicationId, documents) => {
    const formData = new FormData();
    formData.append('applicationId', applicationId);
    documents.forEach((doc, index) => {
      formData.append('documents', doc.file);
    });
    return api.post('/applications/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },

  getApplicationStatus: (applicationId) => 
    api.get(`/applications/status/${applicationId}`),

  getApplications: (filters = {}) => 
    api.get('/applications', { params: filters }),
};

// LMS API
export const lmsAPI = {
  // Courses
  getCourses: () => api.get('/courses'),
  getCourse: (courseId) => api.get(`/courses/${courseId}`),
  enrollCourse: (courseId) => api.post(`/courses/${courseId}/enroll`),

  // Assignments
  getAssignments: (filters = {}) => 
    api.get('/assignments', { params: filters }),
  submitAssignment: (assignmentId, submissionData) => 
    api.post(`/assignments/${assignmentId}/submit`, submissionData),
  getAssignment: (assignmentId) => 
    api.get(`/assignments/${assignmentId}`),

  // Grades
  getGrades: () => api.get('/grades'),
  getGradebook: (courseId) => api.get(`/grades/course/${courseId}`),

  // Announcements
  getAnnouncements: () => api.get('/announcements'),
  getAnnouncement: (announcementId) => 
    api.get(`/announcements/${announcementId}`),

  // Messages
  getMessages: () => api.get('/messages'),
  sendMessage: (messageData) => api.post('/messages', messageData),
  markAsRead: (messageId) => api.patch(`/messages/${messageId}/read`),
};

// User Management API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (profileData) => api.patch('/users/profile', profileData),
  changePassword: (passwordData) => 
    api.patch('/users/change-password', passwordData),
  uploadAvatar: (avatarFile) => {
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    return api.post('/users/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
};

// Analytics API
export const analyticsAPI = {
  getDashboardStats: () => api.get('/analytics/dashboard'),
  getCourseAnalytics: (courseId) => 
    api.get(`/analytics/courses/${courseId}`),
  getStudentProgress: (studentId) => 
    api.get(`/analytics/students/${studentId}`),
};

export default api;