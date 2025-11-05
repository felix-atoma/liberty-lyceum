import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Award, 
  BookOpen, 
  Users, 
  Mail, 
  GraduationCap,
  X,
  Linkedin,
  Globe
} from 'lucide-react'

const Faculty = () => {
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [activeDepartment, setActiveDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Faculty' },
    { id: 'leadership', name: 'School Leadership' },
    { id: 'ib', name: 'IB Programme' },
    { id: 'cambridge', name: 'Cambridge' },
    { id: 'stem', name: 'STEM' },
    { id: 'humanities', name: 'Humanities' },
    { id: 'arts', name: 'Arts' },
    { id: 'support', name: 'Student Support' }
  ]

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Grace Mensah',
      position: 'Principal',
      department: 'leadership',
      education: ['PhD in Educational Leadership, University of Oxford', 'MEd in Curriculum Development', 'BSc in Mathematics'],
      experience: '15+ years in international education leadership',
      bio: 'Dr. Mensah is passionate about creating learning environments where students can thrive academically and spiritually.',
      image: '/faculty/principal.jpg',
      email: 'principal@libertylyceum.edu.gh',
      achievements: ['International Education Award 2022', 'Published 3 research papers', 'Speaker at Global Education Conference']
    },
    {
      id: 2,
      name: 'Mr. Kwame Asante',
      position: 'IB Coordinator',
      department: 'ib',
      education: ['MSc in Physics, MIT', 'IB Teacher Certification', 'BEd in Science Education'],
      experience: '12 years teaching IB Physics and Mathematics',
      bio: 'Mr. Asante believes in making complex scientific concepts accessible and exciting for all students.',
      image: '/faculty/ib-coordinator.jpg',
      email: 'kasante@libertylyceum.edu.gh',
      achievements: ['IB Examiner for Physics', 'STEM Education Innovator Award']
    },
    {
      id: 3,
      name: 'Mrs. Ama Serwaa',
      position: 'Cambridge Coordinator',
      department: 'cambridge',
      education: ['MA in English Literature, Cambridge University', 'PGCE in Secondary Education', 'BA in English'],
      experience: '10 years teaching Cambridge English and Literature',
      bio: 'Mrs. Serwaa fosters a love for literature while developing critical thinking and analytical skills.',
      image: '/faculty/cambridge-coordinator.jpg',
      email: 'aserwaa@libertylyceum.edu.gh',
      achievements: ['Cambridge Teacher of the Year 2021', 'Published poetry collection']
    },
    {
      id: 4,
      name: 'Dr. Kofi Anim',
      position: 'Head of Science',
      department: 'stem',
      education: ['PhD in Chemistry, University of Ghana', 'MSc in Biochemistry', 'BSc in Chemistry'],
      experience: '14 years teaching Chemistry and leading science departments',
      bio: 'Dr. Anim is dedicated to inspiring the next generation of scientists through hands-on experimentation.',
      image: '/faculty/science-head.jpg',
      email: 'kanim@libertylyceum.edu.gh',
      achievements: ['National Science Teaching Award', 'Research in renewable energy']
    },
    {
      id: 5,
      name: 'Ms. Efua Badu',
      position: 'Art Director',
      department: 'arts',
      education: ['MFA in Fine Arts, KNUST', 'BFA in Painting and Sculpture', 'Art Therapy Certification'],
      experience: '8 years teaching visual arts and directing school productions',
      bio: 'Ms. Badu encourages students to express their creativity while developing technical artistic skills.',
      image: '/faculty/art-director.jpg',
      email: 'ebadu@libertylyceum.edu.gh',
      achievements: ['International Art Exhibition Participant', 'Community Mural Project Leader']
    },
    {
      id: 6,
      name: 'Mr. Yaw Boateng',
      position: 'Mathematics Teacher',
      department: 'stem',
      education: ['MSc in Mathematics, University of Cape Coast', 'BEd in Mathematics', 'Digital Learning Certification'],
      experience: '11 years teaching Mathematics across all grade levels',
      bio: 'Mr. Boateng makes mathematics engaging through real-world applications and technology integration.',
      image: '/faculty/math-teacher.jpg',
      email: 'yboateng@libertylyceum.edu.gh',
      achievements: ['Math Olympiad Coach', 'EdTech Innovation Award']
    }
  ]

  const stats = [
    { number: '85%', label: 'Hold Advanced Degrees' },
    { number: '12+', label: 'Years Average Experience' },
    { number: '1:8', label: 'Teacher to Student Ratio' },
    { number: '15+', label: 'Nationalities Represented' }
  ]

  const filteredFaculty = activeDepartment === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(teacher => teacher.department === activeDepartment)

  return (
    <>
      <Helmet>
        <title>Meet Our Faculty - Expert Teachers at Liberty Lyceum | International School</title>
        <meta name="description" content="Meet Liberty Lyceum's exceptional faculty team. Highly qualified teachers with advanced degrees and international experience in IB and Cambridge curricula." />
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">Meet Our Faculty</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of Christian educators brings world-class expertise, 
              passion for teaching, and commitment to nurturing each student's God-given potential.
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

      {/* Faculty Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredFaculty.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedTeacher(teacher)}
                >
                  <div className="aspect-square bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                    <p className="text-liberty-600 font-semibold mb-3">{teacher.position}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{teacher.bio}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{teacher.experience}</span>
                      <button className="text-liberty-600 font-semibold text-sm hover:text-liberty-700 transition-colors">
                        View Profile →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Our Teaching Philosophy</h2>
              <div className="w-24 h-1 bg-gradient-liberty mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Student-Centered Learning',
                  description: 'We believe in tailoring education to individual learning styles and needs'
                },
                {
                  icon: Users,
                  title: 'Collaborative Approach',
                  description: 'Teachers work together across disciplines to provide integrated learning experiences'
                },
                {
                  icon: Award,
                  title: 'Continuous Growth',
                  description: 'Our faculty engages in ongoing professional development and educational research'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="bg-gradient-liberty w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            Join Our Faculty Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
          >
            Are you a passionate educator committed to Christian values and academic excellence? 
            Explore career opportunities at Liberty Lyceum.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View Current Openings
          </motion.button>
        </div>
      </section>

      {/* Teacher Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTeacher(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center">
                  <Users className="w-24 h-24 text-white opacity-80" />
                </div>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedTeacher.name}</h2>
                    <p className="text-xl text-liberty-600 font-semibold mb-4">{selectedTeacher.position}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="p-2 bg-liberty-100 text-liberty-600 rounded-full hover:bg-liberty-200 transition-colors">
                      <Mail size={20} />
                    </button>
                    <button className="p-2 bg-liberty-100 text-liberty-600 rounded-full hover:bg-liberty-200 transition-colors">
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">About</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedTeacher.bio}</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                    <ul className="space-y-2 mb-6">
                      {selectedTeacher.education.map((edu, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-600">
                          <GraduationCap className="w-5 h-5 text-liberty-600 mt-0.5 flex-shrink-0" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
                    <p className="text-gray-600 mb-6">{selectedTeacher.experience}</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h3>
                    <ul className="space-y-2">
                      {selectedTeacher.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-600">
                          <Award className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Faculty