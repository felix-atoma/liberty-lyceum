import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Quote, 
  Star, 
  Play, 
  GraduationCap,
  Users,
  Award,
  X
} from 'lucide-react'

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Testimonials' },
    { id: 'parents', name: 'Parents' },
    { id: 'students', name: 'Students' },
    { id: 'alumni', name: 'Alumni' },
    { id: 'teachers', name: 'Teachers' }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Mr. & Mrs. Osei',
      role: 'Parents of Grade 10 Student',
      category: 'parents',
      content: 'Liberty Lyceum has transformed our daughter into a confident, critical thinker. The Christian values integrated with academic excellence create the perfect learning environment.',
      rating: 5,
      image: '/testimonials/parents-1.jpg',
      video: 'https://example.com/video1'
    },
    {
      id: 2,
      name: 'Chloe Mensah',
      role: 'IB Diploma Student',
      category: 'students',
      content: 'The teachers here genuinely care about our success. The IB program is challenging but the support system makes all the difference. I feel prepared for university and beyond.',
      rating: 5,
      image: '/testimonials/student-1.jpg'
    },
    {
      id: 3,
      name: 'Dr. Kwame Asare',
      role: 'Alumni Class of 2018 - Medical Student',
      category: 'alumni',
      content: 'Liberty Lyceum gave me the foundation to excel in medical school. The research skills and work ethic I developed here are invaluable. Truly winners more than conquerors!',
      rating: 5,
      image: '/testimonials/alumni-1.jpg'
    },
    {
      id: 4,
      name: 'Mrs. Akua Boateng',
      role: 'Parent of Two Students',
      category: 'parents',
      content: 'Both our children have thrived at Liberty Lyceum. The attention to individual needs and the strong sense of community make this school exceptional.',
      rating: 5,
      image: '/testimonials/parents-2.jpg',
      video: 'https://example.com/video2'
    },
    {
      id: 5,
      name: 'David Kofi',
      role: 'Cambridge A-Level Student',
      category: 'students',
      content: 'The Cambridge curriculum is rigorous but the teachers make learning engaging. The sports facilities and clubs provide great balance to academic life.',
      rating: 5,
      image: '/testimonials/student-2.jpg'
    },
    {
      id: 6,
      name: 'Nana Ama Serwaa',
      role: 'Alumni Class of 2020 - Engineering Student',
      category: 'alumni',
      content: 'The STEM program at Liberty Lyceum sparked my passion for engineering. The hands-on projects and expert guidance prepared me perfectly for university.',
      rating: 5,
      image: '/testimonials/alumni-2.jpg'
    }
  ]

  const videoTestimonials = [
    {
      id: 1,
      title: 'Family Experience at Liberty Lyceum',
      duration: '2:30',
      thumbnail: '/video-thumbnails/family.jpg',
      category: 'parents'
    },
    {
      id: 2,
      title: 'Student Journey: From Shy to Confident',
      duration: '3:15',
      thumbnail: '/video-thumbnails/student-journey.jpg',
      category: 'students'
    },
    {
      id: 3,
      title: 'Alumni Success Stories',
      duration: '4:20',
      thumbnail: '/video-thumbnails/alumni-success.jpg',
      category: 'alumni'
    },
    {
      id: 4,
      title: 'A Day in the Life at Liberty Lyceum',
      duration: '5:45',
      thumbnail: '/video-thumbnails/day-in-life.jpg',
      category: 'students'
    }
  ]

  const stats = [
    { number: '98%', label: 'Parent Satisfaction Rate' },
    { number: '100%', label: 'University Acceptance' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Student Happiness' }
  ]

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory)

  const filteredVideos = activeCategory === 'all' 
    ? videoTestimonials 
    : videoTestimonials.filter(video => video.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Testimonials - Hear from Our Community | Liberty Lyceum</title>
        <meta name="description" content="Read and watch testimonials from parents, students, and alumni about their experiences at Liberty Lyceum International School in Accra, Ghana." />
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Hear From Our Community</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover why families choose Liberty Lyceum and how we're making 
              a difference in the lives of students every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-liberty-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-liberty-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">What Our Community Says</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                >
                  <Quote className="w-8 h-8 text-liberty-600 mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-liberty-500 to-gold-500 rounded-full flex items-center justify-center">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>

                  {testimonial.video && (
                    <button
                      onClick={() => setSelectedVideo(testimonial)}
                      className="mt-4 flex items-center space-x-2 text-liberty-600 font-semibold hover:text-liberty-700 transition-colors"
                    >
                      <Play size={16} />
                      <span>Watch Video Testimonial</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch inspiring stories from our students, parents, and alumni
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative overflow-hidden">
                  <div className="text-white text-center p-4">
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="font-semibold">{video.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-liberty-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users size={14} />
                    <span>{video.category.charAt(0).toUpperCase() + video.category.slice(1)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Alumni Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are making their mark at top universities and in their careers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { university: 'Harvard University', count: 12, field: 'Various' },
              { university: 'University of Oxford', count: 8, field: 'Sciences & Humanities' },
              { university: 'MIT', count: 6, field: 'Engineering & Tech' },
              { university: 'Stanford University', count: 10, field: 'Business & Medicine' }
            ].map((alum, index) => (
              <motion.div
                key={alum.university}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-liberty-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-liberty-600 w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-liberty-600 mb-2">{alum.count}+</div>
                <div className="font-semibold text-gray-900 mb-2">{alum.university}</div>
                <div className="text-sm text-gray-500">{alum.field}</div>
              </motion.div>
            ))}
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
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            Become part of our community of winners and conquerors. 
            Schedule a tour and see why families choose Liberty Lyceum.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Your Visit
          </motion.button>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">{selectedVideo.title || selectedVideo.name}</p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-center">
                  Video testimonial would play here. In a real implementation, 
                  this would embed a YouTube/Vimeo player or custom video player.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Testimonials