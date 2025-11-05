import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Music, 
  Palette, 
  Users, 
  Heart, 
  Camera,
  BookOpen,
  Microscope,
  Globe,
  Play,
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Award,
  GraduationCap,
  Smile,
  Target
} from 'lucide-react'

const StudentLife = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroCarousel = [
    {
      id: 1,
      image: '/api/placeholder/1920/800',
      title: 'Vibrant Campus Life',
      subtitle: 'Where Learning Meets Adventure',
      description: 'Experience a dynamic environment that nurtures talents, builds character, and creates lifelong memories',
      cta: 'Explore Activities',
      stats: ['20+ Clubs', '500+ Students', '50+ Events Yearly']
    },
    {
      id: 2,
      image: '/api/placeholder/1920/800',
      title: 'Sports Excellence',
      subtitle: 'Champions in Making',
      description: 'State-of-the-art facilities and expert coaching for aspiring athletes across multiple disciplines',
      cta: 'View Sports',
      stats: ['15 Sports', '10 Championships', 'Elite Training']
    },
    {
      id: 3,
      image: '/api/placeholder/1920/800',
      title: 'Creative Arts',
      subtitle: 'Unleash Your Imagination',
      description: 'From theater to fine arts, our creative programs help students discover and develop their artistic talents',
      cta: 'See Gallery',
      stats: ['Art Studios', 'Theater Productions', 'Music Programs']
    },
    {
      id: 4,
      image: '/api/placeholder/1920/800',
      title: 'Academic Enrichment',
      subtitle: 'Beyond the Classroom',
      description: 'Robotics, science fairs, and academic competitions that challenge and inspire young minds',
      cta: 'Learn More',
      stats: ['Science Labs', 'Robotics Club', 'Research Projects']
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarousel.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCarousel.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCarousel.length) % heroCarousel.length)
  }

  const clubs = [
    {
      icon: Music,
      title: 'Music & Drama Club',
      description: 'Explore musical talents and theatrical performances through our vibrant arts program. Join choir, band, or drama productions.',
      members: '45 students',
      meeting: 'Tuesdays, 3:00 PM',
      category: 'arts',
      achievements: ['Annual School Musical', 'State Competition Winners']
    },
    {
      icon: Palette,
      title: 'Art & Design Club',
      description: 'Creative expression through various art forms including painting, sculpture, digital art, and graphic design.',
      members: '32 students',
      meeting: 'Wednesdays, 3:00 PM',
      category: 'arts',
      achievements: ['Gallery Exhibitions', 'Community Murals']
    },
    {
      icon: Users,
      title: 'Sports Clubs',
      description: 'Basketball, football, swimming, athletics, and more for all skill levels. Professional coaching and competitive teams.',
      members: '120 students',
      meeting: 'Daily, 3:30 PM',
      category: 'sports',
      achievements: ['Regional Champions', 'Sports Scholarships']
    },
    {
      icon: Users,
      title: 'Debate Society',
      description: 'Develop public speaking, critical thinking, and argumentation skills through competitive debating.',
      members: '28 students',
      meeting: 'Thursdays, 3:00 PM',
      category: 'academic',
      achievements: ['State Debate Champions', 'National Qualifiers']
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Making a positive impact in local communities through various outreach programs and volunteer initiatives.',
      members: '65 students',
      meeting: 'Fridays, 2:30 PM',
      category: 'community',
      achievements: ['5000+ Volunteer Hours', 'Community Awards']
    },
    {
      icon: Camera,
      title: 'Photography Club',
      description: 'Learn digital photography, editing, and visual storytelling techniques with professional equipment.',
      members: '25 students',
      meeting: 'Mondays, 3:00 PM',
      category: 'arts',
      achievements: ['Photo Exhibitions', 'Competition Wins']
    },
    {
      icon: BookOpen,
      title: 'Literary Society',
      description: 'Book discussions, creative writing workshops, poetry slams, and publishing opportunities.',
      members: '35 students',
      meeting: 'Wednesdays, 2:30 PM',
      category: 'academic',
      achievements: ['School Magazine', 'Writing Competitions']
    },
    {
      icon: Microscope,
      title: 'Science Club',
      description: 'Hands-on experiments, science fairs, innovation projects, and research opportunities.',
      members: '40 students',
      meeting: 'Tuesdays, 2:30 PM',
      category: 'academic',
      achievements: ['Science Fair Winners', 'Research Grants']
    },
    {
      icon: Globe,
      title: 'Model United Nations',
      description: 'Simulate UN conferences and develop diplomacy, research, and public speaking skills.',
      members: '30 students',
      meeting: 'Fridays, 3:00 PM',
      category: 'academic',
      achievements: ['Best Delegation Awards', 'International Conferences']
    }
  ]

  const gallery = [
    {
      id: 1,
      category: 'academic',
      title: 'Science Lab Experiments',
      description: 'Students conducting hands-on experiments in our state-of-the-art laboratories',
      stats: { students: 24, projects: 8 }
    },
    {
      id: 2,
      category: 'arts',
      title: 'Annual Drama Production',
      description: 'Our talented students performing in the school play',
      stats: { students: 45, performances: 12 }
    },
    {
      id: 3,
      category: 'sports',
      title: 'Sports Day Champions',
      description: 'Celebrating achievements during our annual inter-house sports competition',
      stats: { students: 200, events: 15 }
    },
    {
      id: 4,
      category: 'community',
      title: 'Community Service Project',
      description: 'Students volunteering at local orphanage as part of outreach program',
      stats: { students: 65, hours: 500 }
    },
    {
      id: 5,
      category: 'academic',
      title: 'Robotics Competition',
      description: 'Our robotics team competing in national championships',
      stats: { students: 12, awards: 3 }
    },
    {
      id: 6,
      category: 'arts',
      title: 'Art Exhibition',
      description: 'Showcasing creative works from our art and design students',
      stats: { students: 32, artworks: 80 }
    }
  ]

  const events = [
    {
      title: 'Annual Cultural Day',
      date: 'March 15, 2024',
      time: '9:00 AM - 3:00 PM',
      description: 'Celebration of diverse cultures and traditions through performances, food, and exhibits from around the world',
      location: 'School Main Field',
      type: 'cultural',
      participants: 'All Students'
    },
    {
      title: 'Science & Technology Fair',
      date: 'April 22, 2024',
      time: '10:00 AM - 4:00 PM',
      description: 'Showcasing student innovations, experiments, and technology projects with industry judges',
      location: 'Science & Innovation Center',
      type: 'academic',
      participants: 'Grades 6-12'
    },
    {
      title: 'Sports Championship',
      date: 'June 8, 2024',
      time: '8:00 AM - 6:00 PM',
      description: 'Inter-school sports competition featuring various athletic events and championship trophies',
      location: 'Sports Complex',
      type: 'sports',
      participants: 'Athletic Teams'
    },
    {
      title: 'Music & Drama Night',
      date: 'July 12, 2024',
      time: '6:00 PM - 9:00 PM',
      description: 'An evening of musical and theatrical performances by our students featuring orchestra and drama',
      location: 'Auditorium',
      type: 'arts',
      participants: 'Music & Drama Clubs'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Activities', count: clubs.length },
    { id: 'academic', name: 'Academic', count: clubs.filter(c => c.category === 'academic').length },
    { id: 'arts', name: 'Arts & Culture', count: clubs.filter(c => c.category === 'arts').length },
    { id: 'sports', name: 'Sports', count: clubs.filter(c => c.category === 'sports').length },
    { id: 'community', name: 'Community', count: clubs.filter(c => c.category === 'community').length }
  ]

  const stats = [
    { icon: Users, value: '20+', label: 'Student Clubs' },
    { icon: Award, value: '50+', label: 'Annual Events' },
    { icon: GraduationCap, value: '95%', label: 'Participation Rate' },
    { icon: Smile, value: '100%', label: 'Student Satisfaction' }
  ]

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Student Life - Clubs, Activities & Events | Liberty Lyceum</title>
        <meta name="description" content="Explore vibrant student life at Liberty Lyceum. Discover clubs, sports, arts, community service, and events that make learning an adventure beyond the classroom." />
      </Helmet>

      {/* Enhanced Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900"
            style={{
              backgroundImage: `url(${heroCarousel[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-4 font-serif"
              >
                {heroCarousel[currentSlide].title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl text-yellow-400 mb-6 font-light"
              >
                {heroCarousel[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                {heroCarousel[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {heroCarousel[currentSlide].stats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-yellow-400 font-semibold">{stat}</span>
                  </div>
                ))}
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all"
              >
                {heroCarousel[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Clubs & Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Clubs & Activities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 20 clubs and activities, every student can find their passion 
              and develop new skills in a supportive Christian environment.
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
                }`}
              >
                {category.name}
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs
              .filter(club => activeCategory === 'all' || club.category === activeCategory)
              .map((club, index) => (
              <motion.div
                key={club.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <club.icon className="w-12 h-12 text-blue-600" />
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {club.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{club.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{club.description}</p>
                
                <div className="space-y-3 text-sm text-gray-500 mb-4">
                  <div className="flex justify-between">
                    <span>Members:</span>
                    <span className="font-semibold">{club.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Meets:</span>
                    <span className="font-semibold">{club.meeting}</span>
                  </div>
                </div>

                {club.achievements && (
                  <div className="border-t pt-4">
                    <div className="text-xs font-semibold text-gray-500 mb-2">ACHIEVEMENTS</div>
                    <div className="space-y-1">
                      {club.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Award className="w-3 h-3 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Campus Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual journey through life at Liberty Lyceum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center p-4">
                    <Camera className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{item.stats.students} students</span>
                    <span>{item.stats.projects || item.stats.performances || item.stats.events} activities</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming events at Liberty Lyceum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-8 rounded-full ${
                        event.type === 'cultural' ? 'bg-purple-500' :
                        event.type === 'academic' ? 'bg-blue-500' :
                        event.type === 'sports' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-600 font-semibold mb-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="text-gray-600 text-sm mb-3">{event.time} • {event.location}</div>
                    <div className="bg-gray-50 px-3 py-1 rounded-full text-xs font-semibold text-gray-600 inline-block">
                      {event.participants}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                    Add to Calendar 
                    <Calendar size={16} />
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6 font-serif"
          >
            Experience Campus Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Come see our vibrant campus community in action. Schedule a tour during 
            school hours to experience student life firsthand with our student ambassadors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 transition-all flex items-center gap-2">
              <Target size={20} />
              Schedule Student-Led Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Download Event Calendar
            </button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center relative">
                <Camera className="w-24 h-24 text-white opacity-80" />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-semibold text-gray-900">{selectedImage.stats.students}</div>
                        <div className="text-gray-600">Students Involved</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-semibold text-gray-900">
                          {selectedImage.stats.projects || selectedImage.stats.performances || selectedImage.stats.events}
                        </div>
                        <div className="text-gray-600">
                          {selectedImage.stats.projects ? 'Projects' : selectedImage.stats.performances ? 'Performances' : 'Events'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default StudentLife