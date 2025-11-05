import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Quote,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  BookOpen,
  GraduationCap,
  Globe
} from 'lucide-react'

const About = () => {
  const [currentValue, setCurrentValue] = useState(0)
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  const heroSlides = [
    {
      background: "bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90",
      icon: GraduationCap,
      title: "Excellence in Education",
      subtitle: "Since 2010",
      description: "14+ years of academic excellence and character development"
    },
    {
      background: "bg-gradient-to-br from-emerald-900/90 via-teal-800/80 to-cyan-900/90",
      icon: Globe,
      title: "Global Community",
      subtitle: "50+ Nationalities",
      description: "A diverse international community in the heart of Accra"
    },
    {
      background: "bg-gradient-to-br from-amber-900/90 via-orange-800/80 to-red-900/90",
      icon: Heart,
      title: "Christian Foundation",
      subtitle: "Faith-Based Learning",
      description: "Nurturing mind, body, and spirit through Christ-centered education"
    },
    {
      background: "bg-gradient-to-br from-violet-900/90 via-purple-800/80 to-fuchsia-900/90",
      icon: BookOpen,
      title: "Dual Curriculum",
      subtitle: "IB & Cambridge",
      description: "World-class international curricula preparing students for global success"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Christian Faith',
      description: 'Integrating biblical principles into daily learning, fostering spiritual growth and moral character in a nurturing environment.'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Pursuing the highest standards in IB and Cambridge curricula, preparing students for global university success.'
    },
    {
      icon: Users,
      title: 'Character Development',
      description: 'Building integrity, respect, responsibility, and leadership through our comprehensive character education program.'
    },
    {
      icon: Target,
      title: 'Global Citizenship',
      description: 'Developing culturally aware individuals who understand their role in creating positive change worldwide.'
    }
  ]

  const milestones = [
    { year: '2010', event: 'Liberty Lyceum Founded', description: 'Established with 50 students in temporary facilities' },
    { year: '2013', event: 'Cambridge Accreditation', description: 'Received full Cambridge International accreditation' },
    { year: '2016', event: 'IB World School Status', description: 'Authorized as an IB World School for Diploma Programme' },
    { year: '2018', event: 'New Campus Opening', description: 'Moved to state-of-the-art campus in Baatsona Spintex' },
    { year: '2022', event: '1000+ Students', description: 'Reached milestone of 1000 students from 50+ nationalities' },
    { year: '2024', event: 'STEM Center Launch', description: 'Opened advanced Science and Innovation Center' }
  ]

  // Auto-advance hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Auto-advance values carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => (prev + 1) % values.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [values.length])

  const nextValue = () => {
    setCurrentValue((prev) => (prev + 1) % values.length)
  }

  const prevValue = () => {
    setCurrentValue((prev) => (prev - 1 + values.length) % values.length)
  }

  const currentValueObj = values[currentValue]
  const CurrentIcon = currentValueObj.icon
  const CurrentHeroSlide = heroSlides[currentHeroSlide]
  const HeroIcon = CurrentHeroSlide.icon

  return (
    <>
      <Helmet>
        <title>About Liberty Lyceum - Our Story, Mission & Values | International School Accra</title>
        <meta name="description" content="Discover Liberty Lyceum's Christian foundation, academic excellence, and commitment to nurturing winners more than conquerors in Baatsona Spintex, Accra." />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Slides */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={`absolute inset-0 ${CurrentHeroSlide.background}`}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-500"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight 
              }}
              animate={{
                y: [null, -50, 50, 0],
                x: [null, 30, -30, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-8"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-flex">
                  <HeroIcon className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold mb-4 font-serif leading-tight"
              >
                {CurrentHeroSlide.title}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="block text-2xl lg:text-3xl text-yellow-300 font-light mt-2"
                >
                  {CurrentHeroSlide.subtitle}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                {CurrentHeroSlide.description}
              </motion.p>

              {/* Hero Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex space-x-2 mb-8"
              >
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
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">14+</div>
                  <div className="text-sm text-gray-300">Years Excellence</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-2xl font-bold text-yellow-300">100%</div>
                  <div className="text-sm text-gray-300">University Acceptance</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Animated Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-1">
                  <div className="bg-gray-900 rounded-xl p-8 text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    >
                      <Star className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-white text-2xl font-bold mb-2 font-serif">Liberty Lyceum</h3>
                    <p className="text-yellow-400 font-semibold mb-4 text-lg">Winners More Than Conquerors</p>
                    <div className="space-y-2 text-gray-300">
                      <p className="flex items-center justify-center space-x-2">
                        <GraduationCap size={16} />
                        <span>IB & Cambridge Programs</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <Heart size={16} />
                        <span>Christian Faith-Based</span>
                      </p>
                      <p className="flex items-center justify-center space-x-2">
                        <Globe size={16} />
                        <span>Global Education</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
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

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Founding Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Liberty Lyceum was founded in 2010 by a group of visionary Christian educators 
                  who believed that education should do more than inform—it should transform. 
                  Located in the vibrant community of Baatsona Spintex, our school was established 
                  on the principle that every child deserves an education that nurtures their mind, 
                  body, and spirit.
                </p>
                <p>
                  The name "Liberty Lyceum" reflects our commitment to academic freedom and 
                  the pursuit of truth within a Christian framework. "Lyceum" hearkens back to 
                  Aristotle's school of philosophy, symbolizing our dedication to rigorous 
                  intellectual inquiry, while "Liberty" represents the freedom we have in Christ 
                  to pursue excellence in all things.
                </p>
                <p>
                  Under the dedicated leadership of our founding board and Principal Mrs. Grace Mensah, 
                  we have grown from a small community school to a premier international institution, 
                  serving students from over 50 nationalities while maintaining our core Christian values.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">14+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Nationalities</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">University Acceptance</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2:1</div>
                  <div className="text-sm text-gray-600">Student-Teacher Ratio</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Quote className="w-12 h-12 mx-auto mb-4" />
                    <blockquote className="text-xl font-serif italic mb-4">
                      "We don't just educate students; we nurture conquerors who will transform their world through Christ."
                    </blockquote>
                    <div className="font-semibold">Mrs. Grace Mensah</div>
                    <div className="text-blue-200">Principal</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500"
            >
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a transformative Christian education that integrates academic excellence 
                with character development, preparing students to be winners and conquerors in all 
                spheres of life through innovative edutainment and values-based learning rooted in 
                biblical principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500"
            >
              <Eye className="w-12 h-12 text-yellow-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading Christian international school in West Africa, recognized for 
                developing principled leaders, innovative thinkers, and compassionate global 
                citizens who excel academically and make positive impacts in their communities 
                for Christ.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values form the foundation of everything we do at Liberty Lyceum, 
              guiding our students to become winners more than conquerors.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200">
              {/* Navigation Arrows */}
              <button
                onClick={prevValue}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextValue}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Carousel Content */}
              <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentValue}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                  >
                    <CurrentIcon className="w-16 h-16 text-blue-600 mb-6" />
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{currentValueObj.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {currentValueObj.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValue(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentValue 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-serif">Our Journey</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From humble beginnings to becoming a premier international school in Ghana
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-6 lg:mb-0`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <div className="text-yellow-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold mb-2">{milestone.event}</h4>
                      <p className="text-blue-100">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 flex justify-center lg:justify-center relative">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-white"></div>
                  </div>

                  <div className="lg:w-1/2 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-6 font-serif"
          >
            Experience Liberty Lyceum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Come see for yourself how we're shaping the next generation of leaders and conquerors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/campus-tour"
              className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center space-x-2"
            >
              <MapPin size={20} />
              <span>Schedule Campus Tour</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Contact Admissions
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About