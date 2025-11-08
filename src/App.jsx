// App.js
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorBoundary from './components/Layout/ErrorBoundary'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'
import CampusTour from './pages/CampusTour'
import Faculty from './pages/Faculty'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Events from './pages/Events'
import SummerProgram from './pages/SummerProgram'
import Scholarships from './pages/Scholarships'
import Careers from './pages/Careers'
import VirtualTour from './pages/VirtualTour'
import SchoolCalendar from './pages/SchoolCalendar'
import Application from './pages/Application'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LMSDashboard from './pages/LMSDashboard'
import Profile from './pages/Profile'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminMessages from './pages/AdminMessages'
import Unauthorized from './pages/Unauthorized'
import NotFound from './pages/NotFound Page'
import ProtectedRoute from './components/Layout/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/campus-tour" element={<CampusTour />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/summer-program" element={<SummerProgram />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/resources/calendar" element={<SchoolCalendar />} />
            <Route path="/application" element={<Application />} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Error Pages */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/404" element={<NotFound />} />
            
            {/* Protected LMS Routes (Students, Teachers, Parents) */}
            <Route 
              path="/lms" 
              element={
                <ProtectedRoute>
                  <LMSDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />

            {/* Protected Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/admin/messages" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminMessages />
                </ProtectedRoute>
              } 
            />

            {/* Additional Admin Routes can be added here */}
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App