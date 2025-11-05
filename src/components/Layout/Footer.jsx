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
  Heart
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

  const webConnections = Array.from({ length: 8 }, (_, i) => i * 45)

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Spider Web Background */}
      <div className="absolute inset-0 opacity-10">
        {/* Radial Web */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {webConnections.map((angle, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-gold-400 rounded-full"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '0 0'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="w-1 h-32 bg-gradient-to-b from-gold-400/20 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Circular Web Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gold-400/20 rounded-full"
            style={{
              width: `${ring * 150}px`,
              height: `${ring * 150}px`
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: ring * 0.15, duration: 0.8 }}
          />
        ))}
      </div>

      {/* Comb Structure */}
      <div className="relative z-10">
        {/* Compact Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 py-10 relative">
          {/* Compact Comb Teeth */}
          <div className="absolute -top-3 left-0 right-0 flex justify-center space-x-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-6 bg-gradient-to-b from-gold-500 to-gold-600 rounded-t-lg"
                initial={{ y: -15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20"
            >
              <Crown className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 font-semibold text-sm">Join Our Community</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-3 font-serif bg-gradient-to-r from-white to-gold-200 bg-clip-text text-transparent"
            >
              Stay Connected
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row max-w-lg mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 outline-none rounded-lg text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-gold-500 to-yellow-600 text-gray-900 px-6 py-3 font-bold rounded-lg flex items-center justify-center space-x-2 text-sm hover:shadow-md transition-all"
              >
                <Send size={16} />
                <span>Subscribe</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Compact Main Footer */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* School Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-1 text-center md:text-left"
            >
              <div className="flex flex-col items-center md:items-start space-y-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                        LL
                      </span>
                    </div>
                  </div>
                </motion.div>
                
                <div>
                  <h3 className="text-xl font-bold font-serif bg-gradient-to-r from-white to-gold-200 bg-clip-text text-transparent">
                    Liberty Lyceum
                  </h3>
                  <p className="text-gold-400 text-xs font-semibold flex items-center justify-center md:justify-start space-x-1 mt-1">
                    <GraduationCap className="w-3 h-3" />
                    <span>Winners More Than Conquerors</span>
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed text-center md:text-left">
                Premier Christian international school offering world-class IB and Cambridge curricula.
              </p>
              
              <div className="flex justify-center md:justify-start space-x-2">
                {[
                  { Icon: Facebook, color: 'hover:text-blue-400' },
                  { Icon: Twitter, color: 'hover:text-blue-300' },
                  { Icon: Instagram, color: 'hover:text-pink-400' },
                  { Icon: Youtube, color: 'hover:text-red-400' }
                ].map(({ Icon, color }, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    className={`bg-gray-800 p-2 rounded-lg ${color} transition-all duration-300 border border-gray-700 hover:border-gold-400 text-sm`}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-3 top-0 w-1.5 h-12 bg-gradient-to-b from-gold-500 to-gold-600 rounded-r-lg" />
              <h4 className="text-md font-semibold mb-4 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-200 flex items-center space-x-2 group text-sm"
                    >
                      <div className="w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-3 top-0 w-1.5 h-12 bg-gradient-to-b from-gold-500 to-gold-600 rounded-r-lg" />
              <h4 className="text-md font-semibold mb-4 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                <span>Programs</span>
              </h4>
              <ul className="space-y-2">
                {programs.map((program, index) => (
                  <motion.li
                    key={program.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Link
                      to={program.href}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-200 flex items-center space-x-2 group text-sm"
                    >
                      <div className="w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{program.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -left-3 top-0 w-1.5 h-12 bg-gradient-to-b from-gold-500 to-gold-600 rounded-r-lg" />
              <h4 className="text-md font-semibold mb-4 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                <span>Contact</span>
              </h4>
              <div className="space-y-3">
                {[
                  { Icon: MapPin, text: 'Baatsona, Spintex Road, Accra' },
                  { Icon: Phone, text: '+233 24 123 4567' },
                  { Icon: Mail, text: 'admissions@libertylyceum.edu.gh' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-2 group cursor-pointer"
                  >
                    <div className="p-1.5 bg-gray-800 rounded group-hover:bg-gold-500 transition-colors">
                      <item.Icon className="text-gold-400 group-hover:text-white transition-colors" size={14} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-xs">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Compact Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 pt-6 border-t border-gray-700 relative"
          >
            {/* Bottom Comb Teeth */}
            <div className="absolute -top-3 left-0 right-0 flex justify-center space-x-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-6 bg-gradient-to-t from-gold-500 to-gold-600 rounded-b-lg"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                />
              ))}
            </div>

            <h4 className="text-md font-semibold mb-4 text-center flex items-center justify-center space-x-2">
              <Heart className="w-4 h-4 text-gold-400" />
              <span>Resources</span>
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-gold-400 transition-all duration-200 bg-gray-800/50 hover:bg-gray-700/50 px-3 py-1 rounded border border-gray-700 hover:border-gold-400 text-sm"
                  >
                    {resource.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-gray-700 py-6 bg-gray-800/50 backdrop-blur-sm relative">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full shadow"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 text-xs flex items-center space-x-1"
              >
                <span>© {currentYear} Liberty Lyceum.</span>
                <span className="text-gold-400">All rights reserved.</span>
              </motion.p>
              
              <div className="flex space-x-4 text-xs text-gray-400">
                {['Privacy', 'Terms', 'Sitemap'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="hover:text-gold-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer