import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Globe, 
  Users, 
  Target, 
  Award,
  Star,
  ArrowRight,
  Download,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle,
  GraduationCap,
  Sparkles,
  Video,
  Image,
  MapPin,
  UserCheck,
  Trophy,
  Heart
} from 'lucide-react'

const Academics = () => {
  const [activeProgram, setActiveProgram] = useState(0)
  const [activeCurriculum, setActiveCurriculum] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeGallery, setActiveGallery] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const programs = [
    {
      level: 'Early Years',
      age: '2-5 years',
      description: 'Play-based learning that nurtures curiosity and foundational skills in a Christian environment',
      features: ['Montessori-inspired approach', 'Christian character foundation', 'Language development', 'Social skills'],
      image: '/early-years.jpg',
      color: 'from-purple-500 to-purple-700',
      video: '/videos/early-years.mp4',
      gallery: [
        '/gallery/early-years-1.jpg',
        '/gallery/early-years-2.jpg',
        '/gallery/early-years-3.jpg'
      ],
      stats: { ratio: '1:8', size: '15-20', hours: '8AM-3PM' }
    },
    {
      level: 'Primary School',
      age: '6-11 years',
      description: 'Building strong academic foundations with Cambridge Primary curriculum and Christian values',
      features: ['Cambridge Primary curriculum', 'Literacy & numeracy focus', 'Bible studies', 'Creative arts'],
      image: '/primary-school.jpg',
      color: 'from-blue-500 to-blue-700',
      video: '/videos/primary-school.mp4',
      gallery: [
        '/gallery/primary-1.jpg',
        '/gallery/primary-2.jpg',
        '/gallery/primary-3.jpg'
      ],
      stats: { ratio: '1:12', size: '20-25', hours: '8AM-3PM' }
    },
    {
      level: 'Middle School',
      age: '12-14 years',
      description: 'Developing critical thinking and subject specialization with Cambridge Lower Secondary',
      features: ['Cambridge Lower Secondary', 'STEM foundation', 'Leadership development', 'Service learning'],
      image: '/middle-school.jpg',
      color: 'from-green-500 to-green-700',
      video: '/videos/middle-school.mp4',
      gallery: [
        '/gallery/middle-1.jpg',
        '/gallery/middle-2.jpg',
        '/gallery/middle-3.jpg'
      ],
      stats: { ratio: '1:15', size: '18-22', hours: '8AM-3:30PM' }
    },
    {
      level: 'High School',
      age: '15-18 years',
      description: 'University preparation with choice of IB Diploma or Cambridge A-Levels',
      features: ['IB Diploma Programme', 'Cambridge A-Levels', 'College counseling', 'Career guidance'],
      image: '/high-school.jpg',
      color: 'from-orange-500 to-orange-700',
      video: '/videos/high-school.mp4',
      gallery: [
        '/gallery/high-1.jpg',
        '/gallery/high-2.jpg',
        '/gallery/high-3.jpg'
      ],
      stats: { ratio: '1:10', size: '15-18', hours: '8AM-4PM' }
    }
  ]

  const curricula = [
    {
      name: 'International Baccalaureate',
      abbreviation: 'IB',
      description: 'A comprehensive, internationally recognized program that develops inquiring, knowledgeable and caring young people',
      features: [
        'Holistic education approach',
        'Theory of Knowledge (TOK)',
        'Creativity, Activity, Service (CAS)',
        'Extended Essay research project'
      ],
      universities: ['Harvard', 'Oxford', 'MIT', 'Stanford', 'Yale', 'Princeton'],
      icon: Globe,
      color: 'from-blue-600 to-cyan-600',
      video: '/videos/ib-program.mp4',
      stats: { acceptance: '100%', countries: '140+', universities: '5000+' }
    },
    {
      name: 'Cambridge International',
      abbreviation: 'CAIE',
      description: 'A rigorous, flexible curriculum that prepares students for the world\'s best universities',
      features: [
        'Internationally recognized qualifications',
        'Progressive learning path',
        'Subject specialization',
        'UK university pathway'
      ],
      universities: ['Cambridge', 'Imperial College', 'UCL', 'LSE', 'King\'s College', 'Edinburgh'],
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      video: '/videos/cambridge-program.mp4',
      stats: { acceptance: '100%', countries: '160+', universities: '2000+' }
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Kwame Mensah',
      role: 'Parent of IB Student',
      image: '/testimonials/parent-1.jpg',
      text: 'The IB program at Liberty Lyceum has transformed my daughter into a critical thinker and global citizen. The university preparation is exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Cambridge Graduate, Class of 2023',
      image: '/testimonials/student-1.jpg',
      text: 'Thanks to the Cambridge curriculum and dedicated teachers, I received offers from 5 top UK universities. The personalized guidance made all the difference.',
      rating: 5
    },
    {
      name: 'Professor Emma Davis',
      role: 'University Admissions Counselor',
      image: '/testimonials/counselor-1.jpg',
      text: 'Liberty Lyceum students consistently demonstrate strong academic preparation and well-rounded character. They stand out in university applications.',
      rating: 5
    }
  ]

  const achievementStats = [
    { number: '100%', label: 'University Acceptance', icon: GraduationCap },
    { number: '50+', label: 'Nationalities', icon: Globe },
    { number: '14+', label: 'Years of Excellence', icon: Trophy },
    { number: '95%', label: 'Parent Satisfaction', icon: Heart }
  ]

  // Auto-rotate carousels
  useEffect(() => {
    const programInterval = setInterval(() => {
      setActiveProgram((prev) => (prev + 1) % programs.length)
    }, 5000)

    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => {
      clearInterval(programInterval)
      clearInterval(testimonialInterval)
    }
  }, [programs.length, testimonials.length])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const nextSlide = (setter, length) => setter(prev => (prev + 1) % length)
  const prevSlide = (setter, length) => setter(prev => (prev - 1 + length) % length)

  // Fixed: Create icon components properly
  const CurriculumIcon = ({ curriculum }) => {
    const IconComponent = curriculum.icon
    return <IconComponent className="w-8 h-8 text-white" />
  }

  return (
    <>
      <Helmet>
        <title>Academic Programs - IB & Cambridge Curriculum | Liberty Lyceum</title>
        <meta name="description" content="Explore Liberty Lyceum's world-class IB Diploma Programme and Cambridge curriculum. Early Years to High School with Christian values in Accra, Ghana." />
      </Helmet>

      {/* Enhanced Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-30"
            muted
            loop
            playsInline
          >
            <source src="/videos/campus-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <GraduationCap className="w-5 h-5" />
                <span className="text-sm font-semibold">World-Class Education Since 2010</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
              >
                Shaping Future
                <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                  Leaders & Innovators
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                World-class IB and Cambridge curricula integrated with Christian values, 
                preparing students for success in universities worldwide and life beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={toggleVideo}
                  className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 hover:scale-105"
                >
                  {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
                  <span>{isVideoPlaying ? 'Pause' : 'Play'} Campus Tour</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>View Programs</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Interactive Program Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Program Overview</h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => prevSlide(setActiveProgram, programs.length)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft size={16} className="text-white" />
                    </button>
                    <button 
                      onClick={() => nextSlide(setActiveProgram, programs.length)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight size={16} className="text-white" />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProgram}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-white"
                  >
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <img 
                        src={programs[activeProgram].image} 
                        alt={programs[activeProgram].level}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${programs[activeProgram].color} mb-2`}>
                          <span className="font-semibold text-sm">{programs[activeProgram].level}</span>
                        </div>
                        <h3 className="text-xl font-bold">{programs[activeProgram].age}</h3>
                      </div>
                    </div>

                    <p className="text-gray-200 mb-4 text-sm">{programs[activeProgram].description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-white/10 rounded-lg">
                        <div className="text-xs text-gray-300">Teacher Ratio</div>
                        <div className="font-semibold text-sm">{programs[activeProgram].stats.ratio}</div>
                      </div>
                      <div className="text-center p-2 bg-white/10 rounded-lg">
                        <div className="text-xs text-gray-300">Class Size</div>
                        <div className="font-semibold text-sm">{programs[activeProgram].stats.size}</div>
                      </div>
                      <div className="text-center p-2 bg-white/10 rounded-lg">
                        <div className="text-xs text-gray-300">Hours</div>
                        <div className="font-semibold text-sm">{programs[activeProgram].stats.hours}</div>
                      </div>
                    </div>

                    <div className="flex space-x-2 justify-center mb-4">
                      {programs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveProgram(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeProgram ? 'bg-yellow-400 scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-xl font-semibold transition-all">
                  Explore {programs[activeProgram].level}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Programs Section with Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Academic Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Early Years to University Preparation, our comprehensive programs 
              nurture each student's God-given potential.
            </p>
          </motion.div>

          {programs.map((program, programIndex) => (
            <motion.div
              key={program.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`mb-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 ${
                programIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:flex">
                {/* Gallery Carousel */}
                <div className="lg:w-1/2 relative">
                  <div className="relative h-80 lg:h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeGallery}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={program.gallery[activeGallery]}
                        alt={`${program.level} - Image ${activeGallery + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                    
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button 
                        onClick={() => prevSlide(setActiveGallery, program.gallery.length)}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button 
                        onClick={() => nextSlide(setActiveGallery, program.gallery.length)}
                        className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="absolute bottom-4 left-4 flex space-x-1">
                      {program.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveGallery(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === activeGallery ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white text-sm font-semibold`}>
                        {program.level}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Content */}
                <div className="lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.level}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{program.age}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <UserCheck className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">{program.stats.ratio}</div>
                      <div className="text-xs text-gray-600">Teacher Ratio</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">{program.stats.size}</div>
                      <div className="text-xs text-gray-600">Class Size</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-gray-900">{program.stats.hours}</div>
                      <div className="text-xs text-gray-600">Daily Hours</div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      <Video size={16} />
                      <span>Watch Video</span>
                    </button>
                    <Link
                      to={`/academics#${program.level.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center space-x-2 text-gray-700 font-semibold hover:text-gray-900 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Curricula Section with Video */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">World-Class Curricula</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose between two internationally recognized pathways to university success
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Curriculum Tabs */}
            <div className="flex space-x-4 mb-8">
              {curricula.map((curriculum, index) => (
                <button
                  key={curriculum.name}
                  onClick={() => setActiveCurriculum(index)}
                  className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all ${
                    activeCurriculum === index
                      ? `bg-gradient-to-r ${curriculum.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {curriculum.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCurriculum}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${curricula[activeCurriculum].color} rounded-2xl flex items-center justify-center`}>
                        <CurriculumIcon curriculum={curricula[activeCurriculum]} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{curricula[activeCurriculum].name}</h3>
                        <p className="text-gray-600">{curricula[activeCurriculum].abbreviation}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{curricula[activeCurriculum].description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900">{curricula[activeCurriculum].stats.acceptance}</div>
                        <div className="text-sm text-gray-600">Acceptance Rate</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900">{curricula[activeCurriculum].stats.countries}</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900">{curricula[activeCurriculum].stats.universities}</div>
                        <div className="text-sm text-gray-600">Universities</div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {curricula[activeCurriculum].features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Curriculum Video */}
                    <div className="relative rounded-xl overflow-hidden bg-black mb-6">
                      <video
                        className="w-full h-48 object-cover"
                        controls
                        poster={`/thumbnails/${curricula[activeCurriculum].abbreviation.toLowerCase()}-video.jpg`}
                      >
                        <source src={curricula[activeCurriculum].video} type="video/mp4" />
                      </video>
                      <div className="absolute bottom-4 left-4">
                        <div className="px-2 py-1 bg-black/60 rounded text-white text-sm">
                          Program Overview
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-4">Accepted by Top Universities:</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {curricula[activeCurriculum].universities.map((uni, uniIndex) => (
                        <div key={uniIndex} className="bg-white p-3 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
                          <div className="font-semibold text-gray-900 text-sm">{uni}</div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                      <Download size={20} />
                      <span>Download {curricula[activeCurriculum].abbreviation} Guide</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from parents, students, and educators about their Liberty Lyceum experience
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-xl text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-500">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={() => prevSlide(setActiveTestimonial, testimonials.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => nextSlide(setActiveTestimonial, testimonials.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 font-serif">Ready to Begin Your Academic Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Download our comprehensive academic guide or schedule a meeting with our 
              academic advisors to choose the best program for your child's future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2">
                <Download size={20} />
                <span>Download Academic Guide</span>
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Meet Academic Advisor</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <GraduationCap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">University Acceptance</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Nationalities</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">14+</div>
                <div className="text-blue-200 text-sm">Years of Excellence</div>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">Parent Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Academics