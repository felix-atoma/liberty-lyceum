import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Search,
  ArrowRight,
  BookOpen,
  Share2,
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  Bookmark,
  TrendingUp,
  Award,
  GraduationCap,
  Lightbulb,
  Heart
} from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroCarousel = [
    {
      id: 1,
      image: '/api/placeholder/1920/800',
      title: 'Educational Excellence in Ghana',
      subtitle: 'Insights from Liberty Lyceum',
      description: 'Discover the latest trends in international education and how we\'re shaping future leaders',
      cta: 'Read Latest Articles',
      stats: ['50+ Articles', 'Expert Educators', 'Research-Based Insights']
    },
    {
      id: 2,
      image: '/api/placeholder/1920/800',
      title: 'Parenting in Modern Education',
      subtitle: 'Guides for Supporting Your Child',
      description: 'Practical advice and resources for parents navigating the educational journey',
      cta: 'Explore Parent Resources',
      stats: ['Parent Guides', 'Expert Tips', 'Community Support']
    },
    {
      id: 3,
      image: '/api/placeholder/1920/800',
      title: 'Faith-Based Learning',
      subtitle: 'Integrating Values with Education',
      description: 'How Christian principles enhance academic excellence and character development',
      cta: 'Learn About Our Values',
      stats: ['Spiritual Growth', 'Moral Development', 'Academic Success']
    },
    {
      id: 4,
      image: '/api/placeholder/1920/800',
      title: 'Innovative Teaching Methods',
      subtitle: 'The Future of Education',
      description: 'Exploring cutting-edge educational approaches and technology integration',
      cta: 'Discover Innovations',
      stats: ['EdTech', 'Creative Methods', 'Student Engagement']
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarousel.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCarousel.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCarousel.length) % heroCarousel.length)
  }

  const categories = [
    { id: 'all', name: 'All Articles', count: 28, icon: BookOpen },
    { id: 'academics', name: 'Academics', count: 12, icon: GraduationCap },
    { id: 'admissions', name: 'Admissions', count: 6, icon: Award },
    { id: 'student-life', name: 'Student Life', count: 8, icon: Heart },
    { id: 'parent-resources', name: 'Parent Resources', count: 9, icon: User },
    { id: 'faith', name: 'Faith & Values', count: 7, icon: Lightbulb }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Why Choose IB Diploma Programme in Ghana?',
      excerpt: 'Exploring the benefits of International Baccalaureate education and how it prepares students for global universities with comprehensive curriculum and international recognition.',
      category: 'academics',
      author: 'Dr. Grace Mensah',
      authorRole: 'Head of Academics',
      date: '2024-01-15',
      readTime: '6 min read',
      image: '/blog/ib-programme.jpg',
      featured: true,
      views: 1247,
      comments: 23,
      likes: 89
    },
    {
      id: 2,
      title: 'Nurturing Christian Values in Modern Education',
      excerpt: 'How Liberty Lyceum integrates faith-based learning with 21st century educational practices to develop morally grounded and academically excellent students.',
      category: 'faith',
      author: 'Rev. Michael Asante',
      authorRole: 'Chaplain',
      date: '2024-01-12',
      readTime: '8 min read',
      image: '/blog/christian-values.jpg',
      featured: true,
      views: 892,
      comments: 18,
      likes: 67
    },
    {
      id: 3,
      title: 'A Day in the Life of a Liberty Lyceum Student',
      excerpt: 'Follow our students through their daily routine from morning devotion to extracurricular activities, showcasing our holistic approach to education.',
      category: 'student-life',
      author: 'Mrs. Ama Serwaa',
      authorRole: 'Student Affairs Director',
      date: '2024-01-10',
      readTime: '5 min read',
      image: '/blog/student-life.jpg',
      views: 1563,
      comments: 31,
      likes: 112
    },
    {
      id: 4,
      title: 'Understanding the Cambridge Curriculum Advantage',
      excerpt: 'Breaking down the benefits of Cambridge assessment system for Ghanaian students seeking international education and global opportunities.',
      category: 'academics',
      author: 'Mr. Kwame Asante',
      authorRole: 'Cambridge Coordinator',
      date: '2024-01-08',
      readTime: '7 min read',
      image: '/blog/cambridge-advantage.jpg',
      views: 987,
      comments: 15,
      likes: 54
    },
    {
      id: 5,
      title: 'Parent Guide: Supporting Your Child\'s Educational Journey',
      excerpt: 'Practical tips for parents to actively participate in their child\'s learning experience at Liberty Lyceum and foster academic success.',
      category: 'parent-resources',
      author: 'Mrs. Efua Badu',
      authorRole: 'Parent Liaison Officer',
      date: '2024-01-05',
      readTime: '10 min read',
      image: '/blog/parent-guide.jpg',
      views: 2341,
      comments: 42,
      likes: 156
    },
    {
      id: 6,
      title: 'The Edutainment Approach: Learning Through Fun',
      excerpt: 'How Liberty Lyceum combines education with entertainment to create engaging learning experiences that boost retention and enthusiasm.',
      category: 'academics',
      author: 'Dr. Kofi Anim',
      authorRole: 'Innovation Director',
      date: '2024-01-03',
      readTime: '6 min read',
      image: '/blog/edutainment.jpg',
      views: 765,
      comments: 12,
      likes: 43
    },
    {
      id: 7,
      title: 'Admissions Process Demystified',
      excerpt: 'A step-by-step guide to applying to Liberty Lyceum and what to expect during the assessment process for prospective families.',
      category: 'admissions',
      author: 'Admissions Team',
      authorRole: 'Admissions Department',
      date: '2024-01-01',
      readTime: '8 min read',
      image: '/blog/admissions-process.jpg',
      views: 1876,
      comments: 28,
      likes: 91
    },
    {
      id: 8,
      title: 'STEM Education: Preparing Future Innovators',
      excerpt: 'Inside our state-of-the-art science and technology facilities and innovative STEM programs that inspire the next generation of scientists.',
      category: 'academics',
      author: 'Mr. Yaw Boateng',
      authorRole: 'STEM Department Head',
      date: '2023-12-28',
      readTime: '9 min read',
      image: '/blog/stem-education.jpg',
      views: 1123,
      comments: 19,
      likes: 78
    }
  ]

  const popularPosts = [
    {
      id: 1,
      title: 'Top 10 Study Tips for Academic Success',
      category: 'academics',
      views: 2543,
      date: '2023-12-20'
    },
    {
      id: 2,
      title: 'Understanding School Fees and Scholarships',
      category: 'admissions',
      views: 1987,
      date: '2023-12-15'
    },
    {
      id: 3,
      title: 'The Role of Extracurricular in Development',
      category: 'student-life',
      views: 1765,
      date: '2023-12-10'
    },
    {
      id: 4,
      title: 'Building Character Through Service Learning',
      category: 'faith',
      views: 1432,
      date: '2023-12-05'
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const searchedPosts = searchTerm 
    ? filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredPosts

  return (
    <>
      <Helmet>
        <title>Blog - Educational Insights & News | Liberty Lyceum</title>
        <meta name="description" content="Read the latest articles about international education, parenting tips, academic insights, and school news from Liberty Lyceum in Accra, Ghana." />
      </Helmet>

      {/* Enhanced Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-liberty-900 via-liberty-800 to-gray-900"
            style={{
              backgroundImage: `url(${heroCarousel[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold mb-4 font-serif"
              >
                {heroCarousel[currentSlide].title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl text-gold-400 mb-6 font-light"
              >
                {heroCarousel[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                {heroCarousel[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {heroCarousel[currentSlide].stats.map((stat, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-gold-400 font-semibold">{stat}</span>
                  </div>
                ))}
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-gold-500 text-liberty-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gold-400 transition-all"
              >
                {heroCarousel[currentSlide].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Blog Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <BookOpen className="w-12 h-12 text-liberty-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Articles Published</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Eye className="w-12 h-12 text-liberty-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600 font-semibold">Monthly Readers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <User className="w-12 h-12 text-liberty-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Expert Writers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <MessageCircle className="w-12 h-12 text-liberty-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Community Comments</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Featured Articles</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-liberty-600 to-gold-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked insights and expert perspectives from our educational community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-200 cursor-pointer group"
                >
                  <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative overflow-hidden">
                    <BookOpen className="w-16 h-16 text-white opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center space-x-1 bg-liberty-50 text-liberty-700 px-3 py-1 rounded-full text-sm">
                        <Tag size={12} />
                        <span>{categories.find(c => c.id === post.category)?.name}</span>
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-liberty-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-liberty-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-liberty-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-400 hover:text-liberty-600 transition-colors">
                          <Bookmark size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-liberty-600 transition-colors">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-gold-500">
                        <Heart size={14} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-6 mb-12">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Search articles, authors, or topics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-liberty-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                          activeCategory === category.id
                            ? 'bg-liberty-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                        }`}
                      >
                        <category.icon size={16} />
                        {category.name}
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {searchedPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200 cursor-pointer group"
                    >
                      <div className="aspect-video bg-gradient-to-br from-liberty-500 to-gold-500 flex items-center justify-center relative">
                        <BookOpen className="w-12 h-12 text-white opacity-80" />
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                            <Eye size={12} />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center space-x-1 bg-liberty-50 text-liberty-700 px-3 py-1 rounded-full text-sm">
                            <Tag size={12} />
                            <span>{categories.find(c => c.id === post.category)?.name}</span>
                          </span>
                          <span className="text-sm text-gray-500 flex items-center space-x-1">
                            <Clock size={12} />
                            <span>{post.readTime}</span>
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif group-hover:text-liberty-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={14} />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1 hover:text-liberty-600 cursor-pointer transition-colors">
                              <MessageCircle size={14} />
                              <span>{post.comments} comments</span>
                            </div>
                            <div className="flex items-center space-x-1 hover:text-gold-500 cursor-pointer transition-colors">
                              <Heart size={14} />
                              <span>{post.likes}</span>
                            </div>
                          </div>
                          <Link
                            to={`/blog/${post.id}`}
                            className="inline-flex items-center space-x-2 text-liberty-600 font-semibold hover:text-liberty-700 transition-colors"
                          >
                            <span>Read More</span>
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Empty State */}
                {searchedPosts.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-6">
                      {searchTerm 
                        ? `No articles matching "${searchTerm}"`
                        : `No articles in ${categories.find(c => c.id === activeCategory)?.name}`
                      }
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setActiveCategory('all')
                      }}
                      className="text-liberty-600 font-semibold hover:text-liberty-700 transition-colors"
                    >
                      View all articles
                    </button>
                  </motion.div>
                )}

                {/* Load More */}
                {searchedPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mt-12"
                  >
                    <button className="bg-liberty-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-liberty-700 transition-colors shadow-lg hover:shadow-xl">
                      Load More Articles
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Popular Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 rounded-2xl p-6 mb-8"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <TrendingUp size={20} />
                    <span>Popular Articles</span>
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                        <div className="w-2 h-2 bg-liberty-600 rounded-full mt-2 group-hover:bg-gold-500 transition-colors"></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-liberty-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                            <span>{categories.find(c => c.id === post.category)?.name}</span>
                            <span>•</span>
                            <span>{post.views} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Categories Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                          activeCategory === category.id
                            ? 'bg-liberty-600 text-white'
                            : 'bg-white text-gray-600 hover:bg-liberty-50 hover:text-liberty-600'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <category.icon size={16} />
                          <span>{category.name}</span>
                        </div>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-liberty-600 to-gold-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6 font-serif"
            >
              Stay Updated with Our Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-liberty-100 mb-8 max-w-2xl mx-auto"
            >
              Subscribe to our newsletter and get educational resources, parenting tips, 
              and school updates delivered to your inbox every week.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 text-gray-900 outline-none"
              />
              <button className="bg-gold-500 text-liberty-900 px-8 py-4 font-semibold hover:bg-gold-400 transition-colors">
                Subscribe
              </button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-liberty-100 text-sm mt-4"
            >
              Join 5,000+ parents and educators in our community
            </motion.p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog