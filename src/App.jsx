import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
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

function App() {
  return (
    <Layout>
      <Routes>
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
        <Route path="/resources/calendar" element={<SchoolCalendar/>} />
        <Route path="/application" element={<Application/>} />
      </Routes>
    </Layout>
  )
}

export default App