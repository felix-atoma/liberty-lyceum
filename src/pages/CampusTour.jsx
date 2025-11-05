import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Star,
  Check,
  Video,
  ArrowRight
} from 'lucide-react'

const CampusTour = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentAge: '',
    programInterest: '',
    message: ''
  })

  const tourOptions = [
    {
      type: 'Personalized Tour',
      duration: '1.5 hours',
      description: 'One-on-one tour with our admissions director, tailored to your specific interests',
      features: ['Meet principal', 'Classroom visits', 'Q&A session', 'Customized itinerary'],
      bestFor: 'Seriously considering enrollment'
    },
    {
      type: 'Group Open House',
      duration: '2 hours',
      description: 'Join other prospective families for a comprehensive school overview and tour',
      features: ['Group presentation', 'Campus tour', 'Student panel', 'Meet teachers'],
      bestFor: 'Exploring options'
    },
    {
      type: 'Virtual Tour',
      duration: '45 minutes',
      description: 'Live online tour with admissions team, perfect for international families',
      features: ['Live video tour', 'Screen sharing', 'Q&A session', 'Flexible scheduling'],
      bestFor: 'Remote families'
    }
  ]

  const tourHighlights = [
    {
      area: 'Academic Facilities',
      features: ['State-of-the-art science labs', 'Modern classrooms', 'Library & media center', 'Computer labs']
    },
    {
      area: 'Arts & Creativity',
      features: ['Music rooms', 'Art studios', 'Drama theater', 'Dance studio']
    },
    {
      area: 'Sports & Recreation',
      features: ['Olympic-sized swimming pool', 'Basketball courts', 'Football field', 'Track & field']
    },
    {
      area: 'Student Life',
      features: ['Cafeteria', 'Student lounge', 'Prayer rooms', 'Outdoor spaces']
    }
  ]

  const availableDates = [
    '2024-01-15', '2024-01-18', '2024-01-22', '2024-01-25',
    '2024-02-01', '2024-02-05', '2024-02-08', '2024-02-12'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Tour booking:', { ...formData, date: selectedDate })
    alert('Tour scheduled successfully! We will contact you to confirm.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Schedule Campus Tour - Visit Liberty Lyceum | International School Accra</title>
        <meta name="description" content="Book your personalized campus tour of Liberty Lyceum in Baatsona Spintex. Experience our facilities, meet our teachers, and see why we're different." />
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Experience Our Campus</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              See firsthand how Liberty Lyceum creates an environment where students 
              become winners more than conquerors. Book your personalized tour today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Choose Your Tour Experience</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different tour options to suit your needs and schedule
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tourOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-liberty p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{option.type}</h3>
                  <div className="flex items-center space-x-2 text-liberty-100">
                    <Clock size={16} />
                    <span>{option.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Includes:</h4>
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-liberty-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-liberty-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center space-x-2 text-liberty-700">
                      <Star size={16} />
                      <span className="font-semibold">Best for:</span>
                    </div>
                    <p className="text-liberty-600 text-sm mt-1">{option.bestFor}</p>
                  </div>

                  <button className="w-full bg-liberty-600 text-white py-3 rounded-lg font-semibold hover:bg-liberty-700 transition-colors">
                    Book {option.type}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Campus Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our state-of-the-art facilities designed to inspire learning and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {tourHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.area}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">{highlight.area}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-liberty-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Schedule Your Tour</h2>
              <p className="text-xl text-gray-600">
                Complete the form below and we'll contact you to confirm your tour details
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student's Age/Grade
                  </label>
                  <input
                    type="text"
                    name="studentAge"
                    value={formData.studentAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                    placeholder="e.g., 12 years or Grade 7"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Tour Date *
                  </label>
                  <select
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a date</option>
                    {availableDates.map(date => (
                      <option key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program Interest
                  </label>
                  <select
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select program</option>
                    <option value="ib">IB Diploma Programme</option>
                    <option value="cambridge">Cambridge Curriculum</option>
                    <option value="early-years">Early Years</option>
                    <option value="primary">Primary School</option>
                    <option value="secondary">Secondary School</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Questions or Comments
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any specific areas you'd like to focus on during the tour?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-liberty text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Campus Tour
              </motion.button>

              <p className="text-center text-gray-500 text-sm mt-4">
                We'll contact you within 24 hours to confirm your tour details
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-br from-gold-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <Video className="w-16 h-16" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-6 font-serif"
            >
              Can't Visit in Person?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto"
            >
              Experience Liberty Lyceum from anywhere in the world with our 
              interactive virtual tour and live video sessions with admissions staff.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-liberty-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <Video size={20} />
                <span>Start Virtual Tour</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-liberty-900 transition-all">
                Schedule Video Call
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CampusTour