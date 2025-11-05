import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Filter,
  Download,
  Share2,
  Plus
} from 'lucide-react'

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'academic', name: 'Academic' },
    { id: 'sports', name: 'Sports' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'community', name: 'Community' },
    { id: 'parent', name: 'Parent Events' }
  ]

  const events = [
    {
      id: 1,
      title: 'Annual Cultural Day Celebration',
      date: '2024-03-15',
      time: '9:00 AM - 3:00 PM',
      category: 'arts',
      location: 'School Main Field',
      description: 'A vibrant celebration of diversity featuring performances, traditional food, cultural exhibits, and international showcases from our student community.',
      image: '/events/cultural-day.jpg',
      audience: 'Students, Parents, Community',
      registration: true,
      featured: true
    },
    {
      id: 2,
      title: 'Science & Technology Fair 2024',
      date: '2024-04-22',
      time: '10:00 AM - 4:00 PM',
      category: 'academic',
      location: 'Science & Innovation Center',
      description: 'Showcasing student innovations, robotics projects, scientific experiments, and technology demonstrations. Open to all prospective families.',
      image: '/events/science-fair.jpg',
      audience: 'Students, Parents, Public',
      registration: true
    },
    {
      id: 3,
      title: 'Inter-School Sports Championship',
      date: '2024-06-08',
      time: '8:00 AM - 6:00 PM',
      category: 'sports',
      location: 'Sports Complex',
      description: 'Annual sports competition featuring basketball, football, swimming, track and field events with schools from across Ghana.',
      image: '/events/sports-championship.jpg',
      audience: 'Students, Parents, Sports Enthusiasts',
      registration: false
    },
    {
      id: 4,
      title: 'Parent-Teacher Conference Spring 2024',
      date: '2024-02-20',
      time: '2:00 PM - 6:00 PM',
      category: 'parent',
      location: 'Main Auditorium & Classrooms',
      description: 'Opportunity for parents to meet with teachers, discuss student progress, and learn about upcoming academic plans.',
      image: '/events/parent-teacher.jpg',
      audience: 'Parents & Guardians',
      registration: true
    },
    {
      id: 5,
      title: 'Music & Drama Night: "The Lion King"',
      date: '2024-07-12',
      time: '6:00 PM - 9:00 PM',
      category: 'arts',
      location: 'School Auditorium',
      description: 'An enchanting evening of musical and theatrical performances by our talented students. Featuring the classic "The Lion King" production.',
      image: '/events/drama-night.jpg',
      audience: 'Students, Parents, Community',
      registration: true
    },
    {
      id: 6,
      title: 'Community Service Day',
      date: '2024-05-18',
      time: '8:00 AM - 1:00 PM',
      category: 'community',
      location: 'Local Community Centers',
      description: 'Students and staff volunteer for various community outreach projects, embodying our Christian values of service and compassion.',
      image: '/events/community-service.jpg',
      audience: 'Students, Staff, Volunteers',
      registration: true
    },
    {
      id: 7,
      title: 'College & University Fair',
      date: '2024-09-10',
      time: '1:00 PM - 5:00 PM',
      category: 'academic',
      location: 'Main Hall',
      description: 'Meet representatives from top universities worldwide and learn about admission requirements, scholarships, and academic programs.',
      image: '/events/college-fair.jpg',
      audience: 'High School Students & Parents',
      registration: false
    },
    {
      id: 8,
      title: 'Christmas Concert & Celebration',
      date: '2024-12-15',
      time: '5:00 PM - 8:00 PM',
      category: 'arts',
      location: 'School Chapel & Grounds',
      description: 'A joyful celebration of the Christmas season with choir performances, nativity play, and community fellowship.',
      image: '/events/christmas-concert.jpg',
      audience: 'Students, Parents, Community',
      registration: false
    }
  ]

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter)

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date())
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date())

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>Events Calendar - School Activities & Programs | Liberty Lyceum</title>
        <meta name="description" content="Explore upcoming events, activities, and programs at Liberty Lyceum. From academic fairs to cultural celebrations, stay connected with our vibrant community." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-liberty-900 via-liberty-800 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Events Calendar</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community for academic, cultural, sports, and social events 
              that enrich the Liberty Lyceum experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Featured Events</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.filter(event => event.featured).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
                  <Calendar className="w-16 h-16 text-white opacity-80" />
                  {event.registration && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Registration Open
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(event.date).full}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{event.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{event.audience}</span>
                      </div>
                    </div>
                    <button className="text-liberty-600 hover:text-liberty-700 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header and Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-6 lg:mb-0"
              >
                <h2 className="text-3xl font-bold text-gray-900 font-serif">Events Calendar</h2>
                <p className="text-gray-600 mt-2">Stay updated with our school activities</p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Filter size={20} className="text-gray-400" />
                  <span className="text-sm text-gray-600">Filter by:</span>
                </motion.div>
                <div className="flex flex-wrap gap-2">
                  {eventCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                        activeFilter === category.id
                          ? 'bg-liberty-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Upcoming Events</h3>
              
              {upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200 cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      {/* Date Badge */}
                      <div className="bg-gradient-liberty text-white p-4 text-center">
                        <div className="text-2xl font-bold">{formatDate(event.date).day}</div>
                        <div className="text-sm uppercase">{formatDate(event.date).month}</div>
                        <div className="text-xs mt-1">{formatDate(event.date).weekday}</div>
                      </div>

                      <div className="p-6">
                        <h4 className="font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h4>
                        
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Clock size={14} />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users size={14} />
                            <span>{event.audience}</span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex items-center justify-between">
                          {event.registration ? (
                            <button className="bg-liberty-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-liberty-700 transition-colors">
                              Register Now
                            </button>
                          ) : (
                            <span className="text-sm text-gray-500">No registration required</span>
                          )}
                          <button className="text-liberty-600 hover:text-liberty-700 transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">No upcoming events</h4>
                  <p className="text-gray-600">
                    {activeFilter === 'all' 
                      ? "Check back later for new events"
                      : `No upcoming ${eventCategories.find(c => c.id === activeFilter)?.name} events`
                    }
                  </p>
                </div>
              )}
            </motion.div>

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Past Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.slice(0, 3).map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 border border-gray-200 opacity-75"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-gray-100 text-gray-600 p-2 rounded-lg">
                          <Calendar size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{formatDate(event.date).full}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-liberty text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 font-serif"
          >
            Never Miss an Event
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            Download our event calendar or subscribe to get notifications about 
            upcoming activities at Liberty Lyceum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
              <Download size={20} />
              <span>Download Calendar</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-liberty-900 transition-all flex items-center justify-center space-x-2">
              <Plus size={20} />
              <span>Subscribe to Updates</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
              <Calendar className="w-16 h-16 text-white opacity-80" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{selectedEvent.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-liberty-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Date</div>
                      <div className="text-gray-600">{formatDate(selectedEvent.date).full}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-liberty-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Time</div>
                      <div className="text-gray-600">{selectedEvent.time}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-liberty-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Location</div>
                      <div className="text-gray-600">{selectedEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-liberty-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Audience</div>
                      <div className="text-gray-600">{selectedEvent.audience}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Event Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              {selectedEvent.registration && (
                <button className="w-full bg-liberty-600 text-white py-3 rounded-lg font-semibold hover:bg-liberty-700 transition-colors">
                  Register for this Event
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Events