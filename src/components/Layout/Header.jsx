import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  Search,
  Plus,
  Minus,
  Eye,
  Mail,
  User,
  BookOpen,
  GraduationCap,
  LogOut
} from 'lucide-react'
import { useAccessibility } from '../../contexts/AccessibilityContext'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  
  const {
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery
  } = useAccessibility()

  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about#story' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Values & Mission', href: '/about#values' },
        { name: 'Accreditations', href: '/about#accreditations' }
      ]
    },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: [
        { name: 'IB Programme', href: '/academics#ib' },
        { name: 'Cambridge Curriculum', href: '/academics#cambridge' },
        { name: 'Early Years', href: '/academics#early-years' },
        { name: 'Primary School', href: '/academics#primary' },
        { name: 'Secondary School', href: '/academics#secondary' }
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      dropdown: [
        { name: 'Application Process', href: '/admissions#process' },
        { name: 'Tuition & Fees', href: '/admissions#fees' },
        { name: 'Scholarships', href: '/scholarships' },
        { name: 'Schedule Tour', href: '/campus-tour' }
      ]
    },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const handleApplyClick = () => {
    navigate('/application')
  }

  const handleLogout = () => {
    logout()
    setUserDropdownOpen(false)
    navigate('/')
  }

  const handleLMSNavigation = () => {
    if (user) {
      navigate('/lms')
    } else {
      navigate('/login', { state: { from: { pathname: '/lms' } } })
    }
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+233 24 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Baatsona Spintex, Accra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@libertylyceum.edu.gh</span>
              </div>
            </div>

            {/* Accessibility Tools & Quick Actions */}
            <div className="flex items-center space-x-4">
              {/* Accessibility Tools */}
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-3 py-1">
                <button
                  onClick={decreaseFontSize}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Decrease font size"
                >
                  <Minus size={14} />
                </button>
                <span className="text-xs">A</span>
                <button
                  onClick={increaseFontSize}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="Increase font size"
                >
                  <Plus size={14} />
                </button>
                <button
                  onClick={toggleHighContrast}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                  title="High contrast mode"
                >
                  <Eye size={14} />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>Open House: Jan 15, 2025</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/campus-tour')}
                  className="bg-yellow-500 text-blue-900 px-4 py-1 rounded-full text-xs font-bold hover:bg-yellow-400 transition-colors"
                >
                  BOOK TOUR
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="bg-gradient-to-r from-blue-600 to-yellow-500 p-3 rounded-xl text-white">
                <div className="w-8 h-8 font-bold text-center flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900 font-serif">Liberty Lyceum</h1>
                <p className="text-xs text-yellow-600 font-semibold">Winners More Than Conquerors</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm">
                        <span>{item.name}</span>
                        <ChevronDown size={14} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors text-sm ${
                        location.pathname === item.href
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="Search"
              >
                <Search size={20} />
              </button>

              {/* User Auth Section */}
              {user ? (
                <div className="flex items-center space-x-3">
                  {/* LMS Access Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLMSNavigation}
                    className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-green-700 transition-all flex items-center space-x-2"
                  >
                    <BookOpen size={16} />
                    <span>LMS</span>
                  </motion.button>

                  {/* User Profile Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700 max-w-32 truncate">
                        {user.name}
                      </span>
                      <ChevronDown size={16} className="text-gray-500" />
                    </button>

                    <AnimatePresence>
                      {userDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                          </div>
                          
                          <Link
                            to="/lms"
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <BookOpen size={16} />
                            <span>LMS Dashboard</span>
                          </Link>
                          
                          <Link
                            to="/profile"
                            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                            onClick={() => setUserDropdownOpen(false)}
                          >
                            <User size={16} />
                            <span>My Profile</span>
                          </Link>
                          
                          <button
                            onClick={handleLogout}
                            className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors text-sm"
                          >
                            <LogOut size={16} />
                            <span>Logout</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  {/* Login Button */}
                  <button
                    onClick={() => navigate('/login')}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    Login
                  </button>

                  {/* Sign Up Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/signup')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all flex items-center space-x-2"
                  >
                    <User size={16} />
                    <span>Sign Up</span>
                  </motion.button>

                  {/* Apply Now Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleApplyClick}
                    className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                  >
                    <User size={16} />
                    <span>Apply Now</span>
                  </motion.button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600"
              >
                <Search size={20} />
              </button>
              <button
                className="p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white/95 backdrop-blur-md mt-4 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="px-4 py-2">
                          <div className="font-medium text-gray-700 mb-2 text-sm">{item.name}</div>
                          <div className="space-y-1 ml-4">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block py-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile Auth Section */}
                  <div className="px-4 pt-4 border-t">
                    {user ? (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-10 h-10 rounded-full border-2 border-blue-500"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => {
                            handleLMSNavigation()
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center space-x-2"
                        >
                          <BookOpen size={16} />
                          <span>LMS Dashboard</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            handleLogout()
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center space-x-2"
                        >
                          <LogOut size={16} />
                          <span>Logout</span>
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <button 
                          onClick={() => {
                            navigate('/login')
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center space-x-2"
                        >
                          <User size={16} />
                          <span>Login</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            navigate('/signup')
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center space-x-2"
                        >
                          <User size={16} />
                          <span>Sign Up</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            handleApplyClick()
                            setIsMobileMenuOpen(false)
                          }}
                          className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center justify-center space-x-2"
                        >
                          <User size={16} />
                          <span>Apply Now</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <Search className="text-gray-400" size={24} />
                  <input
                    type="text"
                    placeholder="Search for programs, events, news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearch}
                    className="flex-1 text-lg border-0 focus:outline-none focus:ring-0"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Quick Search Suggestions */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Searches</h4>
                    <div className="space-y-1">
                      {['IB Programme', 'Tuition Fees', 'Summer Camp', 'Sports'].map((term) => (
                        <button
                          key={term}
                          onClick={() => {
                            setSearchQuery(term)
                            navigate(`/search?q=${encodeURIComponent(term)}`)
                            setIsSearchOpen(false)
                          }}
                          className="block text-gray-600 hover:text-blue-600 w-full text-left"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>
                    <div className="space-y-1">
                      {[
                        { name: 'Academic Calendar', href: '/calendar' },
                        { name: 'Application Form', href: '/application' },
                        { name: 'Contact Info', href: '/contact' },
                        { name: 'School Blog', href: '/blog' }
                      ].map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="block text-gray-600 hover:text-blue-600"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
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

export default Header