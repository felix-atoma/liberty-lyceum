import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Check, 
  Download, 
  Calendar, 
  FileText, 
  UserCheck, 
  Award,
  Clock,
  DollarSign,
  HelpCircle,
  ChevronRight,
  Play,
  Star,
  GraduationCap,
  Sparkles,
  X,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const Admissions = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [showFeeModal, setShowFeeModal] = useState(false)
  const [activeScholarship, setActiveScholarship] = useState(0)

  const processSteps = [
    {
      step: 1,
      icon: FileText,
      title: 'Online Inquiry',
      description: 'Submit our online inquiry form to receive detailed information and schedule a campus tour',
      duration: '1-2 days',
      action: 'Start Inquiry',
      color: 'from-blue-500 to-cyan-500',
      features: ['Receive info packet', 'Schedule tour', 'Meet advisor']
    },
    {
      step: 2,
      icon: Calendar,
      title: 'Campus Tour & Interview',
      description: 'Visit our campus, meet our principal, and have a student assessment interview',
      duration: '1 week',
      action: 'Schedule Tour',
      color: 'from-purple-500 to-pink-500',
      features: ['Campus tour', 'Meet faculty', 'Student assessment']
    },
    {
      step: 3,
      title: 'Application Submission',
      icon: UserCheck,
      description: 'Complete the application form and submit required documents',
      duration: '2-3 days',
      action: 'Start Application',
      color: 'from-green-500 to-emerald-500',
      features: ['Online application', 'Document upload', 'Application fee']
    },
    {
      step: 4,
      title: 'Assessment & Testing',
      icon: Award,
      description: 'Participate in age-appropriate academic assessments and placement tests',
      duration: '1 week',
      action: 'View Requirements',
      color: 'from-orange-500 to-red-500',
      features: ['Academic assessment', 'Placement tests', 'Learning evaluation']
    },
    {
      step: 5,
      title: 'Admission Decision',
      icon: Check,
      description: 'Receive admission decision and enrollment package',
      duration: '1 week',
      action: 'Check Status',
      color: 'from-indigo-500 to-purple-500',
      features: ['Admission decision', 'Enrollment package', 'Welcome kit']
    }
  ]

  const requirements = [
    'Completed application form',
    'Birth certificate or passport copy',
    'Previous school reports (last 2 years)',
    'Passport-sized photographs (4)',
    'Immunization records',
    'Recommendation letters (for Grades 6-12)',
    'Student and parent interviews',
    'Assessment test results'
  ]

  const feeStructure = [
    { category: 'Application Fee', amount: '¢500', note: 'One-time, non-refundable', popular: false },
    { category: 'Registration Fee', amount: '¢2,000', note: 'One-time upon acceptance', popular: false },
    { category: 'Elementary School', amount: '¢25,000', note: 'Per academic year', popular: true },
    { category: 'Middle School', amount: '¢35,000', note: 'Per academic year', popular: false },
    { category: 'High School', amount: '¢45,000', note: 'Per academic year', popular: false },
    { category: 'Development Fee', amount: '¢5,000', note: 'Annual', popular: false },
    { category: 'Technology Fee', amount: '¢2,000', note: 'Annual', popular: false },
    { category: 'Boarding (Optional)', amount: '¢30,000', note: 'Per academic year', popular: false }
  ]

  const scholarships = [
    {
      name: 'Academic Excellence Scholarship',
      coverage: 'Up to 50% tuition',
      deadline: 'March 31, 2024',
      criteria: 'Top 5% academic performance with outstanding recommendations',
      color: 'from-blue-600 to-cyan-600',
      icon: Star,
      applicants: '25 spots available'
    },
    {
      name: 'Leadership Scholarship',
      coverage: 'Up to 30% tuition',
      deadline: 'April 15, 2024',
      criteria: 'Demonstrated leadership potential and community involvement',
      color: 'from-purple-600 to-pink-600',
      icon: Award,
      applicants: '15 spots available'
    },
    {
      name: 'Sports & Arts Scholarship',
      coverage: 'Up to 25% tuition',
      deadline: 'April 30, 2024',
      criteria: 'Exceptional talent in sports, music, or visual arts',
      color: 'from-orange-600 to-red-600',
      icon: GraduationCap,
      applicants: '20 spots available'
    }
  ]

  const stats = [
    { number: '98%', label: 'Admission Success Rate', icon: Check },
    { number: '48h', label: 'Average Response Time', icon: Clock },
    { number: '15%', label: 'Students on Scholarship', icon: Award },
    { number: '50+', label: 'Countries Represented', icon: MapPin }
  ]

  // Fixed: Create a component for dynamic icons
  const StepIcon = ({ step }) => {
    const IconComponent = step.icon
    return <IconComponent className="w-8 h-8 text-white" />
  }

  const ScholarshipIcon = ({ scholarship }) => {
    const IconComponent = scholarship.icon
    return <IconComponent className="w-6 h-6 text-white" />
  }

  const StatIcon = ({ stat }) => {
    const IconComponent = stat.icon
    return <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
  }

  return (
    <>
      <Helmet>
        <title>Admissions Process - Apply to Liberty Lyceum | International School Accra</title>
        <meta name="description" content="Start your admission journey to Liberty Lyceum. Learn about application process, tuition fees, scholarships, and requirements for IB & Cambridge programs." />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
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
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Limited Spaces Available</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold mb-6 font-serif leading-tight"
              >
                Begin Your
                <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                  Academic Journey
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Join our community of winners and conquerors. Experience world-class 
                Christian education with IB and Cambridge curricula in the heart of Accra.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 hover:scale-105">
                  <FileText size={20} />
                  <span>Start Application</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Virtual Tour</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <StatIcon stat={stat} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">5-Step Admission Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined admission process ensures a smooth transition into the Liberty Lyceum family
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
              {processSteps.map((step, index) => (
                <motion.button
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl text-center transition-all ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg scale-105`
                      : 'bg-white text-gray-600 hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl font-bold mb-2">{step.step}</div>
                  <div className="text-sm font-semibold">{step.title}</div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${processSteps[activeStep].color} rounded-2xl flex items-center justify-center`}>
                        <StepIcon step={processSteps[activeStep]} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{processSteps[activeStep].title}</h3>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Clock size={16} />
                          <span>{processSteps[activeStep].duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {processSteps[activeStep].description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {processSteps[activeStep].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-600">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center space-x-2">
                      <span>{processSteps[activeStep].action}</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-300 mb-4">
                        {processSteps[activeStep].step}
                      </div>
                      <div className="text-gray-500">Step</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enhanced Requirements & Fees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="xl:col-span-2"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Admission Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={requirement}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Need help with documents?</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our admissions team is here to assist you with any questions about required documents.
                  </p>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      <Phone size={16} />
                      <span>Call Admissions</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      <Mail size={16} />
                      <span>Email Inquiry</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fee Structure */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-serif mb-2">Fee Structure 2024-2025</h3>
                <p className="text-purple-200">Transparent pricing with flexible payment plans</p>
              </div>
              
              <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
                {feeStructure.map((fee, index) => (
                  <motion.div
                    key={fee.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      fee.popular ? 'bg-yellow-500/20 border border-yellow-400/30' : 'bg-white/10'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-semibold">{fee.category}</div>
                      <div className="text-purple-200 text-sm">{fee.note}</div>
                    </div>
                    <div className="text-lg font-bold">{fee.amount}</div>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => setShowFeeModal(true)}
                className="w-full bg-yellow-500 text-purple-900 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Full Fee Schedule</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Scholarships */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Scholarship Opportunities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in rewarding excellence and making quality education accessible 
              to deserving students from diverse backgrounds
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => setActiveScholarship(index)}
                  className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all ${
                    activeScholarship === index 
                      ? 'border-blue-500 shadow-2xl scale-105' 
                      : 'border-gray-200 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${scholarship.color} rounded-xl flex items-center justify-center mb-4`}>
                    <ScholarshipIcon scholarship={scholarship} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{scholarship.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-bold text-blue-600">{scholarship.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deadline:</span>
                      <span className="font-semibold text-gray-900">{scholarship.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-semibold text-green-600">{scholarship.applicants}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{scholarship.criteria}</p>
                  
                  <Link
                    to="/scholarships"
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Scholarship CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white"
            >
              <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Ready to Apply for Scholarships?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our scholarship committee reviews applications on a rolling basis. 
                Early applications receive priority consideration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-all">
                  Start Scholarship Application
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all">
                  Download Scholarship Guide
                </button>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 font-serif">Begin Your Liberty Lyceum Journey</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Limited spaces available for the 2024-2025 academic year. 
              Start your application today and join our community of future leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2">
                <FileText size={20} />
                <span>Start Online Application</span>
              </button>
              <Link
                to="/campus-tour"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Schedule Campus Tour</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Check className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">48h</div>
                <div className="text-blue-200 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">15%</div>
                <div className="text-blue-200 text-sm">On Scholarship</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-blue-200 text-sm">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Fee Modal */}
      <AnimatePresence>
        {showFeeModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Complete Fee Structure 2024-2025</h3>
                    <p className="text-gray-600">Including payment plans and additional costs</p>
                  </div>
                  <button 
                    onClick={() => setShowFeeModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {feeStructure.map((fee, index) => (
                    <div key={fee.category} className={`p-4 rounded-xl border-2 ${
                      fee.popular ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-semibold text-gray-900">{fee.category}</div>
                          <div className="text-sm text-gray-600">{fee.note}</div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">{fee.amount}</div>
                      </div>
                      {fee.popular && (
                        <div className="inline-block bg-yellow-500 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
                          Most Popular
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Flexible Payment Plans Available</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-gray-900">Annual Payment</div>
                      <div className="text-green-600 font-bold">5% Discount</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-gray-900">Semester Payments</div>
                      <div className="text-gray-600">2 installments</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg">
                      <div className="font-semibold text-gray-900">Monthly Payments</div>
                      <div className="text-gray-600">10 installments</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download Detailed Fee Schedule (PDF)</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Admissions