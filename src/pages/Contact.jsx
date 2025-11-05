import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Download,
  ChevronRight,
  Users,
  Award,
  Globe,
  Building,
  CheckCircle,
  X,
  Play
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    studentAge: '',
    programInterest: '',
    message: '',
    contactMethod: 'email'
  })

  const [activeTab, setActiveTab] = useState('general')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+233 24 123 4567', '+233 50 987 6543'],
      description: 'Speak directly with our admissions team',
      action: 'Call Now',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['admissions@libertylyceum.edu.gh', 'info@libertylyceum.edu.gh'],
      description: 'Send us your inquiries and we\'ll respond within 24 hours',
      action: 'Send Email',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Baatsona, Spintex Road', 'Accra, Ghana'],
      description: 'Schedule a campus tour to see our facilities',
      action: 'Get Directions',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      details: ['Available Mon-Fri: 8AM-4PM', 'Quick responses to your questions'],
      description: 'Chat instantly with our team during business hours',
      action: 'Start Chat',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:30 AM - 4:30 PM', status: 'Open' },
    { day: 'Saturday', hours: '8:00 AM - 1:00 PM', status: 'Limited' },
    { day: 'Sunday', hours: 'Closed', status: 'Closed' }
  ]

  const departments = [
    {
      name: 'Admissions Office',
      email: 'admissions@libertylyceum.edu.gh',
      phone: '+233 24 123 4567',
      description: 'For enrollment inquiries, campus tours, and application process',
      icon: Users
    },
    {
      name: 'Academic Office',
      email: 'academics@libertylyceum.edu.gh',
      phone: '+233 24 123 4568',
      description: 'For curriculum questions, academic programs, and teacher contacts',
      icon: Award
    },
    {
      name: 'Student Affairs',
      email: 'studentaffairs@libertylyceum.edu.gh',
      phone: '+233 24 123 4569',
      description: 'For student life, activities, and support services',
      icon: Users
    },
    {
      name: 'Finance Office',
      email: 'finance@libertylyceum.edu.gh',
      phone: '+233 24 123 4570',
      description: 'For tuition, fees, and financial matters',
      icon: Building
    }
  ]

  const inquiryTypes = [
    { id: 'general', name: 'General Inquiry', icon: MessageCircle },
    { id: 'admissions', name: 'Admissions', icon: Users },
    { id: 'academics', name: 'Academics', icon: Award },
    { id: 'student-life', name: 'Student Life', icon: Globe },
    { id: 'careers', name: 'Careers', icon: Building }
  ]

  const programs = [
    { id: 'ib', name: 'IB Diploma Programme' },
    { id: 'cambridge', name: 'Cambridge Curriculum' },
    { id: 'early-years', name: 'Early Years Foundation' },
    { id: 'primary', name: 'Primary School' },
    { id: 'secondary', name: 'Secondary School' },
    { id: 'summer', name: 'Summer Programs' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      studentAge: '',
      programInterest: '',
      message: '',
      contactMethod: 'email'
    })
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
        <title>Contact Us - Get in Touch | Liberty Lyceum International School</title>
        <meta name="description" content="Contact Liberty Lyceum in Baatsona Spintex, Accra. Admissions, academic inquiries, campus tours, and general information. We're here to help!" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-liberty-900 via-liberty-800 to-gray-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">We're Here to Help</span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
              Let's Start Your
              <span className="block text-gold-400">Journey</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Connect with Liberty Lyceum and discover how we can help shape your child's future 
              through exceptional international education.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl hover:bg-gold-400 transition-all flex items-center space-x-2 group">
                <Calendar className="w-5 h-5" />
                <span>Schedule Campus Tour</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-liberty-900 transition-all flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Virtual Tour</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm">Scroll to Explore</span>
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

      {/* Enhanced Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">Multiple Ways to Connect</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-liberty-600 to-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the contact method that works best for you. Our dedicated team is ready to 
              assist you with any questions about our programs and admissions process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${method.gradient} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 h-full`}>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <method.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 font-serif">{method.title}</h3>
                    
                    <div className="space-y-2 mb-6 flex-1">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-white/90 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">{method.description}</p>
                    
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all group-hover:bg-white group-hover:text-gray-900">
                      {method.action}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-liberty-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-100 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Send Us a Message</h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  {/* Inquiry Type Tabs */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setActiveTab(type.id)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all ${
                          activeTab === type.id
                            ? 'bg-liberty-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                        }`}
                      >
                        <type.icon size={18} />
                        <span>{type.name}</span>
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Student's Age/Grade
                        </label>
                        <input
                          type="text"
                          name="studentAge"
                          value={formData.studentAge}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                          placeholder="e.g., 12 years or Grade 7"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">
                          Program Interest
                        </label>
                        <select
                          name="programInterest"
                          value={formData.programInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50"
                        >
                          <option value="">Select program</option>
                          {programs.map(program => (
                            <option key={program.id} value={program.id}>
                              {program.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-700">
                        Preferred Contact Method
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { value: 'email', label: 'Email' },
                          { value: 'phone', label: 'Phone Call' },
                          { value: 'both', label: 'Both' }
                        ].map((method) => (
                          <label key={method.value} className="flex items-center space-x-3 cursor-pointer">
                            <div className="relative">
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method.value}
                                checked={formData.contactMethod === method.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.contactMethod === method.value
                                  ? 'border-liberty-600 bg-liberty-600'
                                  : 'border-gray-300'
                              }`}>
                                {formData.contactMethod === method.value && (
                                  <div className="w-2 h-2 rounded-full bg-white"></div>
                                )}
                              </div>
                            </div>
                            <span className="text-gray-700 font-medium">{method.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all bg-gray-50 resize-none"
                        placeholder="Tell us about your inquiry or interest in Liberty Lyceum..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold text-lg shadow-xl transition-all flex items-center justify-center space-x-3 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-liberty-600 to-gold-500 hover:shadow-2xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-white">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span className="text-white">Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Enhanced Contact Information Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                {/* Office Hours Card */}
                <div className="bg-gradient-to-br from-gray-900 to-liberty-900 text-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-serif">Office Hours</h3>
                      <p className="text-white/70 text-sm">Current local time in Accra</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={schedule.day} className="flex justify-between items-center pb-3 border-b border-white/10 last:border-0">
                        <div>
                          <div className="font-medium">{schedule.day}</div>
                          <div className="text-white/60 text-sm">{schedule.hours}</div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          schedule.status === 'Open' 
                            ? 'bg-green-500/20 text-green-300'
                            : schedule.status === 'Limited'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {schedule.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Departments Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Departments</h3>
                  <div className="space-y-6">
                    {departments.map((dept, index) => (
                      <motion.div
                        key={dept.name}
                        whileHover={{ x: 5 }}
                        className="border-l-4 border-liberty-500 pl-5 py-2 cursor-pointer group"
                      >
                        <div className="flex items-start space-x-3">
                          <dept.icon className="w-5 h-5 text-liberty-600 mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 group-hover:text-liberty-600 transition-colors">
                              {dept.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-2 leading-relaxed">{dept.description}</p>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center space-x-2 text-gray-500 hover:text-liberty-600 transition-colors">
                                <Phone size={14} />
                                <span>{dept.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2 text-gray-500 hover:text-liberty-600 transition-colors">
                                <Mail size={14} />
                                <span>{dept.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions Card */}
                <div className="bg-gradient-to-br from-gold-400 to-gold-600 text-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 font-serif">Quick Actions</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-gold-600 transition-all flex items-center justify-center space-x-3 group">
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Campus Tour</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full bg-white text-gold-600 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-3 group">
                      <Download className="w-5 h-5" />
                      <span>Download Prospectus</span>
                    </button>
                    <button className="w-full border-2 border-white text-white py-4 rounded-xl font-semibold hover:bg-white hover:text-gold-600 transition-all flex items-center justify-center space-x-3 group">
                      <Play className="w-5 h-5" />
                      <span>Virtual Tour</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">Visit Our Campus</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-liberty-600 to-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Located in the vibrant community of Baatsona Spintex, 
              our state-of-the-art campus is easily accessible from across Accra.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="text-white text-center relative z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-3 font-serif">Liberty Lyceum Campus</h3>
                  <p className="text-xl text-gray-200 mb-6">Baatsona, Spintex Road, Accra, Ghana</p>
                  <button className="bg-white text-liberty-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Travel Times */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {[
                { label: 'From Kotoka Airport', time: '25 mins', distance: '18 km' },
                { label: 'From Accra Central', time: '20 mins', distance: '15 km' },
                { label: 'From Tema', time: '30 mins', distance: '25 km' }
              ].map((route, index) => (
                <div
                  key={route.label}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all"
                >
                  <div className="text-lg font-bold text-gray-900 mb-2">{route.label}</div>
                  <div className="text-2xl font-bold text-liberty-600 mb-1">{route.time}</div>
                  <div className="text-gray-500 text-sm">{route.distance}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Message Sent!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for contacting Liberty Lyceum. We've received your message and will get back to you within 24 hours.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full bg-liberty-600 text-white py-3 rounded-xl font-semibold hover:bg-liberty-700 transition-colors"
                >
                  Continue Exploring
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Download Prospectus
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Contact