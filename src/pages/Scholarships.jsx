import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Award, 
  Target, 
  Users, 
  Calendar,
  Check,
  DollarSign,
  BookOpen,
  Star,
  FileText,
  Clock
} from 'lucide-react'

const Scholarships = () => {
  const [selectedScholarship, setSelectedScholarship] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const scholarshipTypes = [
    { id: 'all', name: 'All Scholarships' },
    { id: 'academic', name: 'Academic Excellence' },
    { id: 'talent', name: 'Talent-Based' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'need-based', name: 'Need-Based' }
  ]

  const scholarships = [
    {
      id: 1,
      name: 'Academic Excellence Scholarship',
      type: 'academic',
      coverage: 'Up to 100% tuition',
      deadline: '2024-03-31',
      description: 'For students demonstrating exceptional academic achievement and intellectual curiosity.',
      eligibility: [
        'Top 5% of graduating class',
        'Minimum GPA of 3.8',
        'Outstanding teacher recommendations',
        'Strong performance in entrance exam'
      ],
      requirements: [
        'Completed application form',
        'Academic transcripts',
        'Two teacher recommendations',
        'Personal statement',
        'Entrance exam results'
      ],
      awardAmount: '¢45,000',
      renewable: true,
      featured: true
    },
    {
      id: 2,
      name: 'Leadership & Service Scholarship',
      type: 'leadership',
      coverage: 'Up to 50% tuition',
      deadline: '2024-04-15',
      description: 'For students who have demonstrated exceptional leadership skills and community service involvement.',
      eligibility: [
        'Proven leadership experience',
        'Significant community service',
        'Strong academic record (GPA 3.5+)',
        'Leadership potential assessment'
      ],
      requirements: [
        'Leadership portfolio',
        'Community service records',
        'Two recommendation letters',
        'Leadership essay',
        'Interview with scholarship committee'
      ],
      awardAmount: '¢22,500',
      renewable: true
    },
    {
      id: 3,
      name: 'STEM Talent Scholarship',
      type: 'talent',
      coverage: 'Up to 75% tuition',
      deadline: '2024-04-30',
      description: 'For students with exceptional talent and achievement in science, technology, engineering, and mathematics.',
      eligibility: [
        'STEM competition awards',
        'Advanced coursework in STEM',
        'Portfolio of STEM projects',
        'Teacher recommendations in STEM'
      ],
      requirements: [
        'STEM project portfolio',
        'Competition certificates',
        'Math/Science teacher recommendations',
        'STEM achievement essay'
      ],
      awardAmount: '¢33,750',
      renewable: true
    },
    {
      id: 4,
      name: 'Arts & Creativity Scholarship',
      type: 'talent',
      coverage: 'Up to 50% tuition',
      deadline: '2024-04-30',
      description: 'For students demonstrating exceptional talent in visual arts, music, drama, or creative writing.',
      eligibility: [
        'Portfolio of creative work',
        'Arts competition awards',
        'Performance experience',
        'Teacher recommendations in arts'
      ],
      requirements: [
        'Arts portfolio or audition',
        'Performance recordings',
        'Arts teacher recommendations',
        'Creative statement'
      ],
      awardAmount: '¢22,500',
      renewable: true
    },
    {
      id: 5,
      name: 'Sports Excellence Scholarship',
      type: 'talent',
      coverage: 'Up to 40% tuition',
      deadline: '2024-05-15',
      description: 'For student-athletes who demonstrate exceptional sports talent and academic commitment.',
      eligibility: [
        'Competitive sports experience',
        'Team leadership',
        'Academic eligibility',
        'Coach recommendations'
      ],
      requirements: [
        'Sports achievement records',
        'Coach recommendations',
        'Tryout or performance video',
        'Academic transcripts'
      ],
      awardAmount: '¢18,000',
      renewable: true
    },
    {
      id: 6,
      name: 'Financial Need Scholarship',
      type: 'need-based',
      coverage: 'Up to 80% tuition',
      deadline: '2024-05-31',
      description: 'For students from families with demonstrated financial need who show academic promise.',
      eligibility: [
        'Demonstrated financial need',
        'Academic potential',
        'Good character references',
        'Willingness to contribute to school community'
      ],
      requirements: [
        'Financial documentation',
        'Family income statements',
        'Personal statement',
        'Two character references'
      ],
      awardAmount: '¢36,000',
      renewable: true
    }
  ]

  const stats = [
    { number: '¢2M+', label: 'Awarded Annually' },
    { number: '50+', label: 'Scholarship Recipients' },
    { number: '85%', label: 'Renewal Rate' },
    { number: '100%', label: 'Need Considered' }
  ]

  const filteredScholarships = activeTab === 'all' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.type === activeTab)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isDeadlineApproaching = (deadline) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30 && diffDays > 0
  }

  const isDeadlinePassed = (deadline) => {
    return new Date(deadline) < new Date()
  }

  return (
    <>
      <Helmet>
        <title>Scholarships - Financial Aid & Awards | Liberty Lyceum</title>
        <meta name="description" content="Discover scholarship opportunities at Liberty Lyceum. Academic, talent, leadership, and need-based scholarships for deserving students in Ghana." />
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <Award className="w-16 h-16" />
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Scholarship Opportunities</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Investing in exceptional talent and potential. Discover how Liberty Lyceum 
              makes world-class education accessible through our comprehensive scholarship program.
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

      {/* Scholarship Types */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {scholarshipTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === type.id
                    ? 'bg-liberty-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                }`}
              >
                {type.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scholarships Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Available Scholarships</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of scholarship opportunities designed to recognize and 
              support exceptional students across various domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredScholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200 cursor-pointer ${
                  scholarship.featured ? 'ring-2 ring-gold-500' : ''
                }`}
                onClick={() => setSelectedScholarship(scholarship)}
              >
                {scholarship.featured && (
                  <div className="bg-gold-500 text-white text-center py-2 text-sm font-semibold">
                    🏆 PREMIER SCHOLARSHIP
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Award className="w-12 h-12 text-liberty-600" />
                    {isDeadlineApproaching(scholarship.deadline) && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Deadline Soon
                      </span>
                    )}
                    {isDeadlinePassed(scholarship.deadline) && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Closed
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{scholarship.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{scholarship.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Award Value:</span>
                      <span className="font-semibold text-liberty-600">{scholarship.awardAmount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Coverage:</span>
                      <span className="font-semibold text-gray-900">{scholarship.coverage}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-semibold text-gray-900">{formatDate(scholarship.deadline)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Renewable:</span>
                      <span className={`font-semibold ${scholarship.renewable ? 'text-green-600' : 'text-gray-600'}`}>
                        {scholarship.renewable ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-liberty-600 font-semibold hover:text-liberty-700 transition-colors">
                      Learn More →
                    </button>
                    {!isDeadlinePassed(scholarship.deadline) && (
                      <button className="bg-liberty-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-liberty-700 transition-colors">
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Application Process</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  icon: FileText,
                  title: 'Submit Application',
                  description: 'Complete the online scholarship application form with required documents'
                },
                {
                  step: 2,
                  icon: Target,
                  title: 'Assessment & Review',
                  description: 'Scholarship committee reviews applications and conducts assessments'
                },
                {
                  step: 3,
                  icon: Award,
                  title: 'Award Decision',
                  description: 'Successful candidates receive scholarship offers and next steps'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-gradient-liberty w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="text-white w-8 h-8" />
                    <div className="absolute -top-2 -right-2 bg-gold-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
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
            Ready to Apply for a Scholarship?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            Don't let financial constraints limit your potential. Start your scholarship 
            application today and take the first step toward an exceptional education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Start Scholarship Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-liberty-900 transition-all">
              Download Application Guide
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scholarship Modal */}
      {selectedScholarship && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 font-serif">{selectedScholarship.name}</h2>
                  <p className="text-liberty-600 font-semibold mt-2">{selectedScholarship.coverage}</p>
                </div>
                <button
                  onClick={() => setSelectedScholarship(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedScholarship.description}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedScholarship.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <Check className="w-5 h-5 text-liberty-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedScholarship.requirements.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <FileText className="w-5 h-5 text-liberty-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Award Amount:</span>
                        <span className="font-semibold">{selectedScholarship.awardAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline:</span>
                        <span className="font-semibold">{formatDate(selectedScholarship.deadline)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Renewable:</span>
                        <span className={`font-semibold ${selectedScholarship.renewable ? 'text-green-600' : 'text-gray-600'}`}>
                          {selectedScholarship.renewable ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {!isDeadlinePassed(selectedScholarship.deadline) && (
                    <button className="w-full bg-liberty-600 text-white py-3 rounded-lg font-semibold hover:bg-liberty-700 transition-colors mt-6">
                      Apply for this Scholarship
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Scholarships