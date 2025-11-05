import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Maximize,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Download
} from 'lucide-react'

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [activeArea, setActiveArea] = useState('overview')
  const [isFullscreen, setIsFullscreen] = useState(false)

  const tourAreas = [
    {
      id: 'overview',
      name: 'Campus Overview',
      description: 'Get a bird\'s eye view of our beautiful campus in Baatsona Spintex',
      duration: '2:30',
      image: '/virtual-tour/overview.jpg'
    },
    {
      id: 'academic',
      name: 'Academic Facilities',
      description: 'Explore our state-of-the-art classrooms, libraries, and science labs',
      duration: '4:15',
      image: '/virtual-tour/academic.jpg'
    },
    {
      id: 'sports',
      name: 'Sports Complex',
      description: 'Tour our Olympic-sized pool, basketball courts, and football field',
      duration: '3:45',
      image: '/virtual-tour/sports.jpg'
    },
    {
      id: 'arts',
      name: 'Arts Center',
      description: 'Discover our music rooms, art studios, and performance theater',
      duration: '3:20',
      image: '/virtual-tour/arts.jpg'
    },
    {
      id: 'residence',
      name: 'Boarding Facilities',
      description: 'See our comfortable dormitories and student common areas',
      duration: '2:50',
      image: '/virtual-tour/residence.jpg'
    },
    {
      id: 'community',
      name: 'Community Spaces',
      description: 'Visit our chapel, cafeteria, and outdoor gathering areas',
      duration: '2:15',
      image: '/virtual-tour/community.jpg'
    }
  ]

  const tourHighlights = [
    {
      time: '0:45',
      title: 'Main Entrance & Security',
      description: 'Our secure campus entrance with 24/7 security monitoring'
    },
    {
      time: '1:30',
      title: 'Administration Building',
      description: 'Modern offices for our administrative team and support staff'
    },
    {
      time: '2:15',
      title: 'Primary School Wing',
      description: 'Bright, colorful classrooms for our youngest learners'
    },
    {
      time: '3:30',
      title: 'Science & Innovation Center',
      description: 'Advanced laboratories for physics, chemistry, and biology'
    },
    {
      time: '4:45',
      title: 'Digital Learning Hub',
      description: 'Technology-enabled classrooms and computer labs'
    },
    {
      time: '5:20',
      title: 'Library & Media Center',
      description: 'Extensive collection of books and digital resources'
    }
  ]

  const quickFacts = [
    { icon: MapPin, label: 'Campus Size', value: '25 Acres' },
    { icon: Users, label: 'Student Capacity', value: '1,200 Students' },
    { icon: Clock, label: 'Tour Duration', value: '15 Minutes' },
    { icon: Download, label: 'Tour File Size', value: '850 MB' }
  ]

  const selectedArea = tourAreas.find(area => area.id === activeArea)

  return (
    <>
      <Helmet>
        <title>Virtual Tour - Explore Our Campus Online | Liberty Lyceum</title>
        <meta name="description" content="Take a virtual tour of Liberty Lyceum campus in Baatsona Spintex. Explore facilities, classrooms, sports complex, and more from anywhere in the world." />
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Virtual Campus Tour</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore Liberty Lyceum from anywhere in the world. Take an immersive 
              journey through our state-of-the-art facilities and beautiful campus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Tour Interface */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tour Player */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏫</div>
                  <h3 className="text-2xl font-bold mb-2 font-serif">Liberty Lyceum Virtual Tour</h3>
                  <p className="text-gray-200">Exploring {selectedArea.name}</p>
                </div>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause className="w-16 h-16 text-white" />
                    ) : (
                      <Play className="w-16 h-16 text-white ml-2" />
                    )}
                  </div>
                </button>

                {/* Controls */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                    <div className="text-white text-sm">
                      {selectedArea.duration}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Maximize size={24} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
            >
              {quickFacts.map((fact, index) => (
                <div key={fact.label} className="bg-gray-800 rounded-lg p-4 text-center">
                  <fact.icon className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <div className="text-white font-semibold">{fact.value}</div>
                  <div className="text-gray-400 text-sm">{fact.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Explore Campus Areas</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through different areas of our campus to get a comprehensive 
              view of Liberty Lyceum's facilities and learning environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tourAreas.map((area, index) => (
              <motion.button
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveArea(area.id)}
                className={`bg-white rounded-2xl p-6 text-left border-2 transition-all cursor-pointer ${
                  activeArea === area.id
                    ? 'border-liberty-600 shadow-xl'
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl">📸</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-liberty-600 font-semibold">{area.duration}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    activeArea === area.id ? 'text-liberty-600' : 'text-gray-400'
                  }`} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Tour Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments and features you'll discover during your virtual campus experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {tourHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.time}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="bg-liberty-600 text-white px-4 py-2 rounded-lg font-semibold text-sm flex-shrink-0">
                    {highlight.time}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Interactive Experience</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our virtual tour goes beyond passive viewing. Engage with interactive 
                  elements that provide deeper insights into campus life and facilities.
                </p>
                <ul className="space-y-4">
                  {[
                    '360-degree panoramic views',
                    'Clickable information hotspots',
                    'Student testimonial videos',
                    'Facility specifications',
                    'Interactive campus map',
                    'Live Q&A integration'
                  ].map((feature, index) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-600">
                      <div className="w-2 h-2 bg-liberty-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-liberty-500 to-gold-500 rounded-2xl p-8 text-white text-center"
              >
                <div className="text-6xl mb-6">🎮</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Experience It Yourself</h3>
                <p className="text-liberty-100 mb-6 leading-relaxed">
                  Take control of your virtual tour. Navigate freely through our campus 
                  and explore areas that interest you most.
                </p>
                <button className="bg-white text-liberty-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Start Interactive Tour
                </button>
              </motion.div>
            </div>
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
            Ready to Experience Liberty Lyceum?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            While our virtual tour gives you a great overview, nothing compares to 
            experiencing our campus in person. Schedule a visit to feel the Liberty Lyceum difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Schedule In-Person Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-liberty-900 transition-all">
              Download Campus Map
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default VirtualTour