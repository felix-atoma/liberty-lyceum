import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  Crown,
  Shield,
  GraduationCap,
  Heart,
  Lock
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Contact', href: '/contact' },
  ]

  const programs = [
    { name: 'IB Diploma Programme', href: '/academics#ib' },
    { name: 'Cambridge Curriculum', href: '/academics#cambridge' },
    { name: 'Early Years', href: '/academics#early-years' },
    { name: 'Primary School', href: '/academics#primary' },
    { name: 'Secondary School', href: '/academics#secondary' },
    { name: 'Summer Program', href: '/summer-program' },
  ]

  const resources = [
    { name: 'School Calendar', href: '/resources/calendar' },
    { name: 'Parent Portal', href: '/portal' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Virtual Tour', href: '/virtual-tour' },
  ]

  const webConnections = Array.from({ length: 12 }, (_, i) => i * 30)

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Enhanced Spider Web Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        {/* Central Hub */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-400 rounded-full shadow-lg shadow-gold-400/50"
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 20px rgba(251, 191, 36, 0.5)',
              '0 0 40px rgba(251, 191, 36, 0.8)',
              '0 0 20px rgba(251, 191, 36, 0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Radial Web Strands */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {webConnections.map((angle, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 0'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
            >
              <div className="w-96 h-0.5 bg-gradient-to-r from-gold-400/40 via-gold-400/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Circular Web Rings with Net Pattern */}
        {[80, 160, 240, 320].map((radius, ringIndex) => (
          <motion.div
            key={ringIndex}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: ringIndex * 0.2, duration: 1 }}
          >
            {/* Ring Circle */}
            <div 
              className="border-2 border-gold-400/30 rounded-full"
              style={{
                width: `${radius}px`,
                height: `${radius}px`,
                boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'
              }}
            />
            
            {/* Net Connection Points */}
            {Array.from({ length: 8 }).map((_, pointIndex) => {
              const angle = (pointIndex * 45) * (Math.PI / 180)
              const x = (radius / 2) * Math.cos(angle)
              const y = (radius / 2) * Math.sin(angle)
              return (
                <motion.div
                  key={pointIndex}
                  className="absolute w-2 h-2 bg-gold-400/60 rounded-full"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: pointIndex * 0.2 
                  }}
                />
              )
            })}
          </motion.div>
        ))}

        {/* Floating Web Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Honeycomb Comb Structure */}
      <div className="relative z-10">
        {/* Newsletter Section with Enhanced Comb Design */}
        <div className="bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90 py-12 relative backdrop-blur-sm">
          {/* Top Decorative Comb Teeth */}
          <div className="absolute -top-4 left-0 right-0 flex justify-center space-x-8">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
              >
                <div className="w-4 h-8 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 rounded-t-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl" />
                </div>
                {/* Honeycomb Top */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gold-400/50 clip-hexagon" />
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative">
            {/* Decorative Corner Webs */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,0 Q25,25 0,50 Q25,25 50,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-400"/>
                <path d="M0,0 Q12.5,12.5 0,25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-400"/>
                <circle cx="0" cy="0" r="2" fill="currentColor" className="text-gold-400"/>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-5 border-2 border-gold-400/30 shadow-lg shadow-gold-400/20"
            >
              <Crown className="w-5 h-5 text-gold-400" />
              <span className="text-gold-300 font-bold text-base tracking-wide">Join Our Royal Community</span>
              <Shield className="w-5 h-5 text-gold-400" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-4 font-serif bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent"
            >
              Stay Connected with Excellence
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
            >
              Get exclusive updates, educational insights, and community news delivered to your inbox
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row max-w-xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl border-2 border-white/20"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-300 outline-none rounded-xl text-base"
              />
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-yellow-600 text-gray-900 px-8 py-4 font-bold rounded-xl flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 mt-2 sm:mt-0"
              >
                <Send size={18} />
                <span>Subscribe Now</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Decorative Weave Pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-2 flex">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 h-full"
                style={{
                  background: i % 2 === 0 ? 'rgba(251, 191, 36, 0.2)' : 'transparent'
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* School Info with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-1 text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start space-y-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gold-400/20 rounded-2xl blur-xl" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-gold-400/30">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                        LL
                      </span>
                    </div>
                  </div>
                </motion.div>
                
                <div>
                  <h3 className="text-2xl font-bold font-serif bg-gradient-to-r from-white via-gold-200 to-white bg-clip-text text-transparent mb-2">
                    Liberty Lyceum
                  </h3>
                  <p className="text-gold-400 text-sm font-semibold flex items-center justify-center md:justify-start space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Winners More Than Conquerors</span>
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed text-center md:text-left">
                Premier Christian international school offering world-class IB and Cambridge curricula with innovative edutainment.
              </p>
              
              <div className="flex justify-center md:justify-start space-x-3">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-500', link: '#' },
                  { Icon: Twitter, color: 'hover:bg-blue-400', link: '#' },
                  { Icon: Instagram, color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500', link: '#' },
                  { Icon: Youtube, color: 'hover:bg-red-500', link: '#' }
                ].map(({ Icon, color, link }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={link}
                    className={`bg-gray-800/80 backdrop-blur-sm p-3 rounded-xl ${color} transition-all duration-300 border-2 border-gray-700 hover:border-gold-400 shadow-lg`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links with Comb Accent */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-2 h-16 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 rounded-r-xl shadow-lg shadow-gold-400/50" />
              <h4 className="text-lg font-bold mb-5 flex items-center space-x-3 text-gold-300">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-300 flex items-center space-x-3 group relative"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-gold-400/50" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-transparent group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs with Comb Accent */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-2 h-16 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 rounded-r-xl shadow-lg shadow-gold-400/50" />
              <h4 className="text-lg font-bold mb-5 flex items-center space-x-3 text-gold-300">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span>Programs</span>
              </h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <motion.li
                    key={program.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                  >
                    <Link
                      to={program.href}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-300 flex items-center space-x-3 group relative"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-gold-400/50" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{program.name}</span>
                      <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-transparent group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info with Enhanced Icons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-2 h-16 bg-gradient-to-b from-gold-400 via-gold-500 to-gold-600 rounded-r-xl shadow-lg shadow-gold-400/50" />
              <h4 className="text-lg font-bold mb-5 flex items-center space-x-3 text-gold-300">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span>Contact Us</span>
              </h4>
              <div className="space-y-4">
                {[
                  { Icon: MapPin, text: 'Baatsona, Spintex Road, Accra', href: '#' },
                  { Icon: Phone, text: '+233 24 123 4567', href: 'tel:+233241234567' },
                  { Icon: Mail, text: 'admissions@libertylyceum.edu.gh', href: 'mailto:admissions@libertylyceum.edu.gh' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.35 + index * 0.1 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className="p-2.5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl group-hover:from-gold-500 group-hover:to-gold-600 transition-all duration-300 shadow-lg border border-gray-700 group-hover:border-gold-400">
                      <item.Icon className="text-gold-400 group-hover:text-white transition-colors" size={16} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm flex-1 pt-1">
                      {item.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Resources Section with Honeycomb Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t-2 border-gray-700/50 relative"
          >
            {/* Decorative Comb Teeth */}
            <div className="absolute -top-5 left-0 right-0 flex justify-center space-x-10">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                >
                  <div className="w-4 h-8 bg-gradient-to-t from-gold-400 via-gold-500 to-gold-600 rounded-b-xl relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-b-xl" />
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="text-xl font-bold mb-6 text-center flex items-center justify-center space-x-3 text-gold-300">
              <Heart className="w-5 h-5 text-gold-400" />
              <span>Helpful Resources</span>
              <Heart className="w-5 h-5 text-gold-400" />
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-gold-400 transition-all duration-300 bg-gradient-to-br from-gray-800/80 to-gray-900/80 hover:from-gray-700 hover:to-gray-800 backdrop-blur-sm px-5 py-2.5 rounded-xl border-2 border-gray-700 hover:border-gold-400 shadow-lg hover:shadow-gold-400/20 font-medium"
                  >
                    {resource.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar with Admin Link */}
        <div className="border-t-2 border-gray-700/50 py-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-sm relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border border-gold-400 rounded-full"
                style={{
                  left: `${(i * 10) % 100}%`,
                  top: '50%',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Pulsing Center Ornament */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold-400 rounded-full shadow-lg shadow-gold-400/50"
            animate={{ 
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 20px rgba(251, 191, 36, 0.5)',
                '0 0 40px rgba(251, 191, 36, 0.9)',
                '0 0 20px rgba(251, 191, 36, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-sm flex items-center space-x-2"
              >
                <span>© {currentYear} Liberty Lyceum.</span>
                <span className="text-gold-400 font-semibold">All rights reserved.</span>
                <Shield className="w-4 h-4 text-gold-400" />
              </motion.p>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex space-x-6 text-gray-400">
                  {[
                    { name: 'Privacy Policy', href: '/privacy' },
                    { name: 'Terms of Service', href: '/terms' },
                    { name: 'Sitemap', href: '/sitemap' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className="hover:text-gold-400 transition-colors duration-300 font-medium"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Admin Login Link with Special Design */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/admin/login"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gold-500 hover:to-gold-600 rounded-lg border-2 border-gray-700 hover:border-gold-400 transition-all duration-300 group shadow-lg hover:shadow-gold-400/30"
                  >
                    <Lock className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-gray-400 group-hover:text-white font-semibold transition-colors">
                      Admin
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom Decorative Line */}
            <motion.div
              className="mt-6 h-1 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          {/* Weaving Pattern Animation */}
          <motion.div 
            className="flex h-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-4 h-full"
                style={{
                  background: i % 3 === 0 
                    ? 'linear-gradient(to bottom, rgba(251, 191, 36, 0.5), transparent)' 
                    : i % 3 === 1
                    ? 'linear-gradient(to bottom, rgba(147, 51, 234, 0.3), transparent)'
                    : 'transparent'
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Decorative Net Corner Elements */}
        <div className="absolute bottom-4 left-4 w-24 h-24 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Corner Web Design */}
            <path d="M0,100 L0,50 Q0,25 25,0 L50,0" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-400"/>
            <path d="M0,100 L0,75 Q0,50 50,0 L75,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-400"/>
            <circle cx="0" cy="100" r="3" fill="currentColor" className="text-gold-400"/>
            <circle cx="25" cy="75" r="2" fill="currentColor" className="text-gold-400"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gold-400"/>
          </svg>
        </div>

        <div className="absolute bottom-4 right-4 w-24 h-24 opacity-10 pointer-events-none transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Corner Web Design (mirrored) */}
            <path d="M0,100 L0,50 Q0,25 25,0 L50,0" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-400"/>
            <path d="M0,100 L0,75 Q0,50 50,0 L75,0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-400"/>
            <circle cx="0" cy="100" r="3" fill="currentColor" className="text-gold-400"/>
            <circle cx="25" cy="75" r="2" fill="currentColor" className="text-gold-400"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" className="text-gold-400"/>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer