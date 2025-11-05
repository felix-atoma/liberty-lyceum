import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Users, 
  Calendar, 
  Award,
  BookOpen,
  Palette,
  Microscope,
  Globe,
  Star,
  Check
} from 'lucide-react'

const SummerProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState(null)

  const programs = [
    {
      id: 1,
      title: 'STEM Innovation Camp',
      ageGroup: 'Ages 10-15',
      duration: '2 weeks',
      schedule: 'July 8-19, 2024',
      description: 'Hands-on science, technology, engineering, and mathematics activities that spark curiosity and innovation.',
      focus: ['Robotics & Coding', 'Science Experiments', 'Engineering Challenges', 'Math Puzzles'],
      icon: Microscope,
      color: 'from-blue-500 to-blue-700',
      featured: true
    },
    {
      id: 2,
      title: 'Creative Arts Intensive',
      ageGroup: 'Ages 8-16',
      duration: '3 weeks',
      schedule: 'July 22 - August 9, 2024',
      description: 'Explore various art forms including painting, drama, music, and digital arts with professional artists.',
      focus: ['Visual Arts', 'Performing Arts', 'Digital Design', 'Creative Writing'],
      icon: Palette,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 3,
      title: 'Sports Development Camp',
      ageGroup: 'Ages 6-14',
      duration: '2 weeks',
      schedule: 'August 12-23, 2024',
      description: 'Professional coaching in multiple sports with focus on skill development, teamwork, and fitness.',
      focus: ['Basketball', 'Football', 'Swimming', 'Athletics'],
      icon: Award, // Using Award icon instead of Basketball
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      title: 'Academic Enrichment',
      ageGroup: 'Ages 12-17',
      duration: '4 weeks',
      schedule: 'July 1-26, 2024',
      description: 'Get ahead in core subjects with specialized tutoring and project-based learning approaches.',
      focus: ['Mathematics', 'Science', 'English', 'Critical Thinking'],
      icon: BookOpen,
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 5,
      title: 'Leadership & Global Citizenship',
      ageGroup: 'Ages 13-18',
      duration: '2 weeks',
      schedule: 'August 5-16, 2024',
      description: 'Develop leadership skills, cultural awareness, and community engagement through interactive workshops.',
      focus: ['Public Speaking', 'Team Leadership', 'Cultural Exchange', 'Community Service'],
      icon: Globe,
      color: 'from-red-500 to-red-700'
    }
  ]

  const programHighlights = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Qualified teachers and industry professionals'
    },
    {
      icon: Award,
      title: 'Certificate of Completion',
      description: 'Official recognition of summer program achievement'
    },
    {
      icon: Sun,
      title: 'Fun Learning Environment',
      description: 'Balance of education and recreational activities'
    },
    {
      icon: Check,
      title: 'Christian Values',
      description: 'Moral and character development integrated'
    }
  ]

  const dailySchedule = [
    { time: '8:00 AM', activity: 'Morning Assembly & Devotion' },
    { time: '8:30 AM', activity: 'Core Program Session' },
    { time: '10:30 AM', activity: 'Snack Break & Outdoor Play' },
    { time: '11:00 AM', activity: 'Specialized Workshops' },
    { time: '12:30 PM', activity: 'Lunch & Social Time' },
    { time: '1:30 PM', activity: 'Afternoon Activities' },
    { time: '3:00 PM', activity: 'Creative/Physical Education' },
    { time: '4:00 PM', activity: 'Closing Circle & Pickup' }
  ]

  return (
    <>
      <Helmet>
        <title>Summer Programs - Enrichment Camps & Activities | Liberty Lyceum</title>
        <meta name="description" content="Discover Liberty Lyceum's exciting summer programs in Accra. STEM camps, arts intensives, sports development, and academic enrichment for all ages." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
        <div className="absolute inset-0 bg-black/20"></div>
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
              <Sun className="w-16 h-16" />
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Summer Programs 2024</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Transform summer into an adventure of learning, creativity, and fun with 
              Liberty Lyceum's exciting enrichment programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Why Choose Our Summer Programs?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {programHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Program Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from a variety of specialized programs designed to inspire, 
              educate, and entertain during the summer break.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200 cursor-pointer ${
                  program.featured ? 'ring-2 ring-yellow-500' : ''
                }`}
                onClick={() => setSelectedProgram(program)}
              >
                {program.featured && (
                  <div className="bg-yellow-500 text-white text-center py-2 text-sm font-semibold">
                    🏆 Most Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                  <program.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-blue-100">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{program.ageGroup}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <Calendar size={14} />
                    <span>{program.schedule}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Program Focus:</h4>
                    {program.focus.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More & Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Sample Daily Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A typical day at our summer program balances learning, creativity, and fun
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dailySchedule.map((slot, index) => (
                  <motion.div
                    key={slot.time}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-semibold text-sm">
                      {slot.time}
                    </div>
                    <div className="text-gray-900 font-medium">{slot.activity}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Registration */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 font-serif">Program Fees & Registration</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Affordable pricing with early bird discounts and sibling packages available
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  plan: '2-Week Program',
                  price: '¢1,200',
                  savings: 'Save ¢200 with early registration',
                  features: ['Full program access', 'Materials included', 'Daily lunch & snacks', 'Certificate of completion']
                },
                {
                  plan: '3-Week Program',
                  price: '¢1,600',
                  savings: 'Most popular option',
                  features: ['Extended learning', 'Special workshops', 'Field trip included', 'Progress report'],
                  featured: true
                },
                {
                  plan: '4-Week Program',
                  price: '¢2,000',
                  savings: 'Best value per week',
                  features: ['Comprehensive experience', 'Multiple field trips', 'Individual portfolio', 'Advanced certificate']
                }
              ].map((pricing, index) => (
                <motion.div
                  key={pricing.plan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border ${
                    pricing.featured ? 'border-yellow-500 ring-2 ring-yellow-500' : 'border-white/20'
                  }`}
                >
                  {pricing.featured && (
                    <div className="bg-yellow-500 text-blue-900 text-center py-2 rounded-full text-sm font-semibold mb-4">
                      🏆 RECOMMENDED
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{pricing.plan}</h3>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{pricing.price}</div>
                  <p className="text-yellow-200 text-sm mb-6">{pricing.savings}</p>

                  <ul className="space-y-3 mb-6">
                    {pricing.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-blue-100">
                        <Check className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-blue-100 mb-4">
                ✨ Early Bird Discount: Register before March 31st and save 15% on all programs
              </p>
              <p className="text-yellow-200">
                👨‍👩‍👧‍👦 Sibling Discount: 10% off for each additional sibling
              </p>
            </motion.div>
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
            Ready for an Unforgettable Summer?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Spaces are limited in each program. Secure your child's spot today and 
            give them a summer of growth, friendship, and fun.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Register Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all">
              Download Brochure
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SummerProgram