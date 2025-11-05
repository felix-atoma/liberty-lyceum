import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Users, 
  Heart, 
  Award,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Send,
  BookOpen
} from 'lucide-react'

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeDepartment, setActiveDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'teaching', name: 'Teaching' },
    { id: 'administration', name: 'Administration' },
    { id: 'support', name: 'Support Staff' },
    { id: 'leadership', name: 'Leadership' }
  ]

  const jobOpenings = [
    {
      id: 1,
      title: 'IB Mathematics Teacher',
      department: 'teaching',
      type: 'Full-time',
      location: 'Secondary School',
      description: 'We are seeking an experienced and passionate IB Mathematics teacher to join our dynamic mathematics department.',
      requirements: [
        'Master\'s degree in Mathematics or related field',
        'IB Teaching certification',
        '3+ years teaching experience in IB Diploma Programme',
        'Strong knowledge of IB Mathematics curriculum'
      ],
      responsibilities: [
        'Teach IB Mathematics HL and SL courses',
        'Develop engaging lesson plans',
        'Assess and evaluate student progress',
        'Participate in curriculum development'
      ],
      salary: 'Competitive package',
      deadline: '2024-02-15',
      featured: true
    },
    {
      id: 2,
      title: 'Cambridge Science Teacher',
      department: 'teaching',
      type: 'Full-time',
      location: 'Middle School',
      description: 'Join our science department to deliver engaging Cambridge curriculum lessons in biology, chemistry, and physics.',
      requirements: [
        'Bachelor\'s degree in Science Education',
        'Cambridge teaching experience',
        'Strong laboratory skills',
        'Passion for inquiry-based learning'
      ],
      responsibilities: [
        'Teach Cambridge Science curriculum',
        'Conduct laboratory experiments',
        'Organize science fairs',
        'Support student research projects'
      ],
      salary: 'Attractive package',
      deadline: '2024-02-28'
    },
    {
      id: 3,
      title: 'Admissions Officer',
      department: 'administration',
      type: 'Full-time',
      location: 'Administration Building',
      description: 'We are looking for a dynamic Admissions Officer to manage student recruitment and admissions processes.',
      requirements: [
        'Bachelor\'s degree in related field',
        '2+ years admissions experience',
        'Excellent communication skills',
        'Customer service orientation'
      ],
      responsibilities: [
        'Manage admissions inquiries',
        'Coordinate campus tours',
        'Process applications',
        'Maintain student records'
      ],
      salary: 'Competitive salary',
      deadline: '2024-03-01'
    },
    {
      id: 4,
      title: 'School Counselor',
      department: 'support',
      type: 'Full-time',
      location: 'Student Support Center',
      description: 'Provide comprehensive counseling services to support student well-being and academic success.',
      requirements: [
        'Master\'s in Counseling or Psychology',
        'Counseling certification',
        'Experience in educational setting',
        'Strong interpersonal skills'
      ],
      responsibilities: [
        'Provide individual and group counseling',
        'Develop wellness programs',
        'Support college applications',
        'Crisis intervention'
      ],
      salary: 'Professional package',
      deadline: '2024-02-20'
    },
    {
      id: 5,
      title: 'IT Support Specialist',
      department: 'support',
      type: 'Full-time',
      location: 'Technology Department',
      description: 'Support our technology infrastructure and assist staff and students with technical issues.',
      requirements: [
        'Degree in Computer Science or related',
        '2+ years IT support experience',
        'Network administration skills',
        'Educational technology knowledge'
      ],
      responsibilities: [
        'Maintain computer systems',
        'Provide technical support',
        'Manage school network',
        'Train staff on technology'
      ],
      salary: 'Competitive package',
      deadline: '2024-03-05'
    },
    {
      id: 6,
      title: 'Head of Primary School',
      department: 'leadership',
      type: 'Full-time',
      location: 'Primary School Building',
      description: 'Lead our primary school division with vision and excellence in Christian education.',
      requirements: [
        'Master\'s in Educational Leadership',
        '5+ years leadership experience',
        'Primary education background',
        'Strong Christian faith'
      ],
      responsibilities: [
        'Lead primary school team',
        'Develop academic programs',
        'Manage school operations',
        'Foster community relationships'
      ],
      salary: 'Executive package',
      deadline: '2024-02-10',
      featured: true
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Attractive compensation packages with regular reviews'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and training programs'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supportive Christian community and collaborative environment'
    },
    {
      icon: BookOpen,
      title: 'Resources',
      description: 'State-of-the-art facilities and teaching resources'
    },
    {
      icon: GraduationCap,
      title: 'Tuition Benefits',
      description: 'Discounts for staff children attending Liberty Lyceum'
    }
  ]

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment)

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
    return diffDays <= 14 && diffDays > 0
  }

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Team | Liberty Lyceum</title>
        <meta name="description" content="Explore career opportunities at Liberty Lyceum. Teaching, administration, and support staff positions in a Christian international school environment." />
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
              <Briefcase className="w-16 h-16" />
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Be part of a community that nurtures winners and shapes conquerors. 
              Discover rewarding career opportunities at Liberty Lyceum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Why Work at Liberty Lyceum?</h2>
            <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of dedicated educators and professionals committed to 
              excellence in Christian international education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-liberty w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setActiveDepartment(department.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeDepartment === department.id
                    ? 'bg-liberty-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                }`}
              >
                {department.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current career opportunities and find your perfect role 
              in our dynamic educational community.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 cursor-pointer ${
                      job.featured ? 'ring-2 ring-gold-500' : ''
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <h3 className="text-xl font-bold text-gray-900 font-serif">{job.title}</h3>
                            {job.featured && (
                              <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Featured
                              </span>
                            )}
                            {isDeadlineApproaching(job.deadline) && (
                              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                                Apply Soon
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center space-x-2">
                              <Briefcase size={16} />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock size={16} />
                              <span>Apply by {formatDate(job.deadline)}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                        </div>

                        <div className="lg:pl-6 lg:border-l lg:border-gray-200 lg:ml-6 mt-4 lg:mt-0">
                          <div className="text-right">
                            <div className="text-lg font-bold text-liberty-600 mb-2">{job.salary}</div>
                            <button className="bg-liberty-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-liberty-700 transition-colors">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center py-12 bg-gray-50 rounded-2xl"
              >
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Current Openings</h3>
                <p className="text-gray-600 mb-6">
                  There are currently no openings in the {departments.find(d => d.id === activeDepartment)?.name} department.
                </p>
                <button
                  onClick={() => setActiveDepartment('all')}
                  className="text-liberty-600 font-semibold hover:text-liberty-700 transition-colors"
                >
                  View all departments
                </button>
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
            Not Seeing the Perfect Role?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            We're always interested in connecting with talented educators and professionals. 
            Send us your resume for future opportunities.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 mx-auto"
          >
            <Send size={20} />
            <span>Submit General Application</span>
          </motion.button>
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 font-serif">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Briefcase size={16} />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>Apply by {formatDate(selectedJob.deadline)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedJob.description}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-liberty-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <Award className="w-5 h-5 text-liberty-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Position Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary:</span>
                        <span className="font-semibold">{selectedJob.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Application Deadline:</span>
                        <span className="font-semibold">{formatDate(selectedJob.deadline)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Department:</span>
                        <span className="font-semibold">
                          {departments.find(d => d.id === selectedJob.department)?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-liberty-600 text-white py-3 rounded-lg font-semibold hover:bg-liberty-700 transition-colors flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>Apply for this Position</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Careers