import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Download,
  Filter,
  ChevronDown,
  School,
  Trophy,
  Music,
  Microscope,
  Globe,
  BookOpen,
  Star,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const SchoolCalendar = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Academic Excellence',
      subtitle: '2025-2026 School Year',
      description: 'Plan your academic journey with our comprehensive calendar of events and activities'
    },
    {
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'STEM Innovation',
      subtitle: 'Science & Technology Events',
      description: 'Explore our exciting science fairs, robotics competitions, and innovation challenges'
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Athletics & Sports',
      subtitle: 'Championship Events',
      description: 'Follow our sports teams and athletic competitions throughout the year'
    }
  ]

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const eventCategories = [
    { id: 'all', name: 'All Events', icon: CalendarIcon, color: 'bg-blue-500', count: 24 },
    { id: 'academic', name: 'Academic', icon: BookOpen, color: 'bg-green-500', count: 8 },
    { id: 'sports', name: 'Sports', icon: Trophy, color: 'bg-orange-500', count: 6 },
    { id: 'arts', name: 'Arts & Culture', icon: Music, color: 'bg-purple-500', count: 5 },
    { id: 'science', name: 'Science', icon: Microscope, color: 'bg-cyan-500', count: 4 },
    { id: 'international', name: 'International', icon: Globe, color: 'bg-red-500', count: 3 }
  ]

  const events = [
    // September 2025
    {
      id: 1,
      title: 'First Day of School',
      date: '2025-09-01',
      time: '8:00 AM',
      location: 'Main Campus',
      category: 'academic',
      description: 'Welcome back students! Orientation, class assignments, and community building activities for the 2025-2026 academic year.',
      important: true,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'STEM Innovation Fair',
      date: '2025-09-16',
      time: '9:00 AM - 3:00 PM',
      location: 'Science & Innovation Center',
      category: 'science',
      description: 'Annual showcase of student projects in robotics, coding, engineering, and scientific research. Open to parents and community.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Inter-House Sports Competition',
      date: '2025-09-23',
      time: '8:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'sports',
      description: 'Annual inter-house sports championship featuring athletics, basketball, football, and swimming competitions.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // October 2025
    {
      id: 4,
      title: 'International Day Celebration',
      date: '2025-10-07',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Field & Auditorium',
      category: 'international',
      description: 'Celebration of our diverse community with cultural performances, international cuisine, and global awareness workshops.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Music & Drama Festival',
      date: '2025-10-20',
      time: '6:00 PM - 9:00 PM',
      location: 'Auditorium',
      category: 'arts',
      description: 'An evening of exceptional performances by our music ensembles, drama clubs, and individual student artists.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // November 2025
    {
      id: 6,
      title: 'Parent-Teacher Conferences',
      date: '2025-11-10',
      time: '1:00 PM - 6:00 PM',
      location: 'Classrooms & Virtual',
      category: 'academic',
      description: 'Opportunity for parents to meet with teachers, review student progress, and discuss academic goals.',
      important: true,
      image: 'https://images.unsplash.com/photo-1577896851161-7aefac6c4c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      title: 'Thanksgiving Break',
      date: '2025-11-27',
      time: 'All Day',
      location: '-',
      category: 'academic',
      description: 'School closed for Thanksgiving holiday. Classes resume on December 2nd.',
      holiday: true
    },

    // December 2025
    {
      id: 8,
      title: 'Christmas Concert',
      date: '2025-12-12',
      time: '6:30 PM - 8:30 PM',
      location: 'Auditorium',
      category: 'arts',
      description: 'Annual Christmas concert featuring choir, band, orchestra, and special guest performances.',
      image: 'https://images.unsplash.com/photo-1579118541919-f3447acd6f5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 9,
      title: 'End of Term Exams',
      date: '2025-12-15',
      time: 'All Day',
      location: 'Exam Halls',
      category: 'academic',
      description: 'First term comprehensive examinations for all secondary school students.',
      important: true
    },

    // January 2026
    {
      id: 10,
      title: 'Second Term Begins',
      date: '2026-01-12',
      time: '8:00 AM',
      location: 'Main Campus',
      category: 'academic',
      description: 'Start of second term with new elective courses and extracurricular activities.',
      important: true
    },

    // February 2026
    {
      id: 11,
      title: 'Science Olympiad',
      date: '2026-02-14',
      time: '9:00 AM - 4:00 PM',
      location: 'Science Center',
      category: 'science',
      description: 'Regional science competition featuring physics, chemistry, biology, and environmental science challenges.',
      featured: true,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // March 2026
    {
      id: 12,
      title: 'Cultural Arts Week',
      date: '2026-03-10',
      time: 'All Week',
      location: 'Various Locations',
      category: 'arts',
      description: 'Week-long celebration featuring art exhibitions, musical performances, drama productions, and cultural workshops.',
      featured: true
    },

    // April 2026
    {
      id: 13,
      title: 'Spring Break',
      date: '2026-04-07',
      time: 'All Day',
      location: '-',
      category: 'academic',
      description: 'School closed for spring break. Enjoy your vacation!',
      holiday: true
    },
    {
      id: 14,
      title: 'Third Term Begins',
      date: '2026-04-27',
      time: '8:00 AM',
      location: 'Main Campus',
      category: 'academic',
      description: 'Start of third and final term with focus on exam preparation and year-end projects.',
      important: true
    },

    // May 2026
    {
      id: 15,
      title: 'Mathematics Competition',
      date: '2026-05-15',
      time: '10:00 AM - 2:00 PM',
      location: 'Mathematics Department',
      category: 'academic',
      description: 'Inter-school mathematics challenge testing problem-solving skills and mathematical reasoning.'
    },

    // June 2026
    {
      id: 16,
      title: 'Graduation Ceremony',
      date: '2026-06-20',
      time: '4:00 PM - 7:00 PM',
      location: 'Auditorium & Main Field',
      category: 'academic',
      description: 'Commencement ceremony honoring the Class of 2026. Featuring guest speakers and award presentations.',
      featured: true,
      important: true,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },

    // July 2026
    {
      id: 17,
      title: 'Last Day of School',
      date: '2026-07-17',
      time: '3:00 PM',
      location: 'Main Campus',
      category: 'academic',
      description: 'End of 2025-2026 academic year. Report cards distributed and summer break begins.',
      important: true
    }
  ]

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const filteredEvents = events.filter(event => {
    const eventMonth = new Date(event.date).getMonth()
    const categoryMatch = activeFilter === 'all' || event.category === activeFilter
    const monthMatch = selectedMonth === eventMonth
    return categoryMatch && monthMatch
  })

  const getEventColor = (category) => {
    const categoryObj = eventCategories.find(cat => cat.id === category)
    return categoryObj ? categoryObj.color : 'bg-gray-500'
  }

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <>
      <Helmet>
        <title>School Calendar - Academic Year 2025/2026 | Liberty Lyceum</title>
        <meta name="description" content="View Liberty Lyceum's academic calendar for 2025/2026. Important dates, events, holidays, and school activities in Accra, Ghana." />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSlides[currentHeroSlide].image})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-gray-900/90"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            >
              <CalendarIcon className="w-6 h-6" />
              <span className="text-lg font-semibold">Academic Year 2025/2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight"
            >
              {heroSlides[currentHeroSlide].title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-yellow-300 font-light mb-6"
            >
              {heroSlides[currentHeroSlide].subtitle}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {heroSlides[currentHeroSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Full Calendar</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all">
                View Key Dates
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to Explore</div>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: CalendarIcon, number: '24', label: 'Major Events' },
              { icon: Trophy, number: '6', label: 'Sports Competitions' },
              { icon: Award, number: '8', label: 'Academic Milestones' },
              { icon: Users, number: '5', label: 'Community Events' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Controls */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Month Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-semibold text-lg">View Month:</label>
                <div className="relative">
                  <select 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                    className="appearance-none bg-white border border-gray-300 rounded-xl px-6 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
                  >
                    {months.map((month, index) => (
                      <option key={month} value={index}>
                        {month} {index >= 8 ? '2025' : '2026'}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {eventCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center space-x-3 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                      activeFilter === category.id
                        ? `${category.color} text-white shadow-lg scale-105`
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeFilter === category.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Download Button */}
              <button className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                <Download size={20} />
                <span>Export Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              {months[selectedMonth]} {selectedMonth >= 8 ? '2025' : '2026'} Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {filteredEvents.length} scheduled event{filteredEvents.length !== 1 ? 's' : ''} for {months[selectedMonth]}
            </p>
          </motion.div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <CalendarIcon className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">No Events Scheduled</h3>
              <p className="text-gray-500 text-lg max-w-md mx-auto">
                Try selecting a different month or category to view scheduled events.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                    {/* Event Image */}
                    {event.image && (
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      {/* Event Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${getEventColor(event.category)}`}></div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {event.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                              <div className="flex items-center space-x-1">
                                <CalendarIcon size={16} />
                                <span>{new Date(event.date).toLocaleDateString('en-US', { 
                                  weekday: 'short', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock size={16} />
                                <span>{event.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {(event.featured || event.important) && (
                          <div className="flex flex-col space-y-1">
                            {event.featured && (
                              <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                                <Star size={12} />
                                <span>Featured</span>
                              </span>
                            )}
                            {event.important && (
                              <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">
                                Important
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Event Details */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin size={16} />
                          <span className="font-medium">{event.location}</span>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>

                        {/* Event Tags */}
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-sm px-3 py-1 rounded-full ${getEventColor(event.category)} text-white font-medium`}>
                            {eventCategories.find(cat => cat.id === event.category)?.name}
                          </span>
                          {event.holiday && (
                            <span className="text-sm px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                              Holiday
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className="w-full mt-6 bg-blue-50 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors flex items-center justify-center space-x-2 group-hover:bg-blue-600 group-hover:text-white">
                        <CalendarIcon size={18} />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Key Academic Dates 2025-2026</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these important academic milestones and term dates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                term: 'First Term', 
                start: 'Sep 1, 2025', 
                end: 'Dec 19, 2025', 
                color: 'from-blue-500 to-blue-600',
                events: ['Orientation', 'STEM Fair', 'Parent Conferences']
              },
              { 
                term: 'Second Term', 
                start: 'Jan 12, 2026', 
                end: 'Apr 3, 2026', 
                color: 'from-green-500 to-green-600',
                events: ['Science Olympiad', 'Cultural Week', 'Spring Break']
              },
              { 
                term: 'Third Term', 
                start: 'Apr 27, 2026', 
                end: 'Jul 17, 2026', 
                color: 'from-orange-500 to-orange-600',
                events: ['Math Competition', 'Graduation', 'Final Exams']
              },
              { 
                term: 'Summer Programs', 
                start: 'Jul 20, 2026', 
                end: 'Aug 28, 2026', 
                color: 'from-purple-500 to-purple-600',
                events: ['STEM Camps', 'Sports Clinics', 'Arts Workshops']
              }
            ].map((term, index) => (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${term.color}`}></div>
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${term.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <School className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{term.term}</h3>
                  <div className="text-gray-600 space-y-2 mb-4">
                    <div className="font-semibold">{term.start}</div>
                    <div className="text-sm">to</div>
                    <div className="font-semibold">{term.end}</div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Events:</h4>
                    <div className="space-y-1">
                      {term.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="text-xs text-gray-500">
                          • {event}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 font-serif">Never Miss an Important Date</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download our comprehensive academic calendar or subscribe to receive automatic updates 
              and reminders for all school events and activities.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-3">
                <Download size={20} />
                <span>Download Full Calendar (PDF)</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center space-x-3">
                <CalendarIcon size={20} />
                <span>Subscribe to Updates</span>
              </button>
            </motion.div>
            
            <p className="text-blue-200 mt-8 text-sm">
              📅 Updated regularly • 🔔 Set reminders • 📱 Mobile-friendly • 🌐 Sync with your calendar
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SchoolCalendar