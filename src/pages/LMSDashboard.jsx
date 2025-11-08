// LMSDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  BarChart3, 
  Users, 
  Settings,
  Bell,
  Search,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Clock,
  Award,
  Target,
  TrendingUp,
  Bookmark,
  Download,
  MessageSquare,
  Star,
  Filter,
  Grid,
  List,
  MoreVertical,
  Eye,
  BookCheck,
  Brain,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';
import { lmsAPI, analyticsAPI } from '../services/api';

const LMSDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [viewMode, setViewMode] = useState('grid');
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [stats, setStats] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch data from backend API
      const [coursesResponse, assignmentsResponse, statsResponse] = await Promise.all([
        lmsAPI.getCourses(),
        lmsAPI.getAssignments({ status: 'pending' }),
        analyticsAPI.getDashboardStats()
      ]);

      setCourses(coursesResponse.data.data || []);
      setAssignments(assignmentsResponse.data.data || []);
      setStats(statsResponse.data.data || []);

      // Mock recent activities for now
      setRecentActivities([
        { 
          action: 'Submitted', 
          item: 'Mathematics IA Draft', 
          time: '2 hours ago', 
          color: 'text-green-600',
          icon: CheckCircle,
          course: 'IB Mathematics HL'
        },
        { 
          action: 'Graded', 
          item: 'Physics Practical Report', 
          time: '1 day ago', 
          color: 'text-blue-600',
          icon: Award,
          course: 'Cambridge Physics A-Level',
          grade: 'A'
        },
        { 
          action: 'New Resource', 
          item: 'Chemistry Revision Notes', 
          time: '2 days ago', 
          color: 'text-purple-600',
          icon: BookOpen,
          course: 'Cambridge Chemistry A-Level'
        },
        { 
          action: 'Feedback Received', 
          item: 'English Essay - Heart of Darkness', 
          time: '3 days ago', 
          color: 'text-orange-600',
          icon: MessageSquare,
          course: 'IB English Literature HL'
        }
      ]);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockCourses = [
    {
      id: 1,
      title: 'IB Mathematics HL',
      code: 'MATH-HL-001',
      instructor: 'Dr. Kwame Appiah',
      progress: 75,
      nextLesson: 'Calculus Applications',
      dueDate: '2024-12-20',
      color: 'from-blue-500 to-blue-600',
      level: 'Higher Level',
      grade: '6/7',
      sessions: 'Mon, Wed, Fri',
      resources: 12,
      assignments: 5,
      description: 'Advanced mathematical concepts and applications for higher level studies.'
    },
    {
      id: 2,
      title: 'Cambridge Physics A-Level',
      code: 'PHYS-AL-002',
      instructor: 'Dr. Ama Serwaa',
      progress: 60,
      nextLesson: 'Quantum Physics',
      dueDate: '2024-12-18',
      color: 'from-green-500 to-green-600',
      level: 'A-Level',
      grade: 'A',
      sessions: 'Tue, Thu',
      resources: 8,
      assignments: 3,
      description: 'Comprehensive study of physics principles and experimental methods.'
    },
    {
      id: 3,
      title: 'IB English Literature HL',
      code: 'ENG-HL-003',
      instructor: 'Ms. Esi Mensah',
      progress: 45,
      nextLesson: 'Poetry Analysis - Yeats',
      dueDate: '2024-12-22',
      color: 'from-purple-500 to-purple-600',
      level: 'Higher Level',
      grade: '5/7',
      sessions: 'Mon, Wed',
      resources: 15,
      assignments: 4,
      description: 'Critical analysis of literary texts from diverse cultures and periods.'
    },
    {
      id: 4,
      title: 'Cambridge Chemistry A-Level',
      code: 'CHEM-AL-004',
      instructor: 'Prof. Kofi Mensah',
      progress: 85,
      nextLesson: 'Organic Mechanisms',
      dueDate: '2024-12-15',
      color: 'from-orange-500 to-orange-600',
      level: 'A-Level',
      grade: 'A*',
      sessions: 'Tue, Thu, Fri',
      resources: 10,
      assignments: 6,
      description: 'In-depth study of chemical principles and laboratory techniques.'
    }
  ];

  const mockAssignments = [
    {
      id: 1,
      title: 'Mathematics IA - Modelling Project',
      course: 'IB Mathematics HL',
      dueDate: '2024-12-20',
      status: 'pending',
      priority: 'high',
      type: 'Internal Assessment',
      weight: '20%',
      estimatedTime: '15 hours',
      description: 'Develop a mathematical model to solve a real-world problem.'
    },
    {
      id: 2,
      title: 'Physics Practical Investigation',
      course: 'Cambridge Physics A-Level',
      dueDate: '2024-12-18',
      status: 'in-progress',
      priority: 'high',
      type: 'Practical Assessment',
      weight: '15%',
      estimatedTime: '10 hours',
      description: 'Design and conduct experiments on wave phenomena.'
    },
    {
      id: 3,
      title: 'English World Literature Essay',
      course: 'IB English Literature HL',
      dueDate: '2024-12-22',
      status: 'pending',
      priority: 'medium',
      type: 'Written Assignment',
      weight: '25%',
      estimatedTime: '12 hours',
      description: 'Comparative analysis of post-colonial literature themes.'
    },
    {
      id: 4,
      title: 'Chemistry Topic Test - Organic',
      course: 'Cambridge Chemistry A-Level',
      dueDate: '2024-12-15',
      status: 'completed',
      priority: 'low',
      type: 'Topic Test',
      weight: '10%',
      estimatedTime: '2 hours',
      description: 'Assessment on organic chemistry mechanisms and reactions.'
    }
  ];

  const mockStats = [
    { 
      label: 'Current GPA', 
      value: '3.8/4.0', 
      icon: Crown, 
      trend: '+0.2', 
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      trendColor: 'text-emerald-600'
    },
    { 
      label: 'IB Predicted', 
      value: '38/45', 
      icon: Target, 
      trend: '+3', 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trendColor: 'text-blue-600'
    },
    { 
      label: 'Assignments Due', 
      value: '3', 
      icon: FileText, 
      trend: '-2', 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trendColor: 'text-orange-600'
    },
    { 
      label: 'Study Hours', 
      value: '24.5', 
      icon: Clock, 
      trend: '+4.2', 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trendColor: 'text-purple-600'
    }
  ];

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3, active: true },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'calendar', name: 'Academic Calendar', icon: Calendar },
    { id: 'grades', name: 'Gradebook', icon: Award },
    { id: 'resources', name: 'Learning Resources', icon: Bookmark },
    { id: 'discussions', name: 'Discussion Forum', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const quickActions = [
    { label: 'Download Study Materials', icon: Download, color: 'bg-blue-500' },
    { label: 'View Academic Calendar', icon: Calendar, color: 'bg-green-500' },
    { label: 'Request Teacher Support', icon: MessageSquare, color: 'bg-purple-500' },
    { label: 'Access Library Resources', icon: BookCheck, color: 'bg-orange-500' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">Loading your academic dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Enhanced Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Liberty Lyceum LMS
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">International Baccalaureate & Cambridge Programs</p>
                </div>
              </motion.div>
              
              <nav className="hidden lg:flex space-x-1">
                {navigation.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 bg-white/50 backdrop-blur-sm text-sm transition-all"
                />
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-white hover:shadow-md transition-all"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              
              <motion.div 
                className="flex items-center space-x-3 pl-3 border-l border-gray-200"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="relative">
                  <img
                    className="h-10 w-10 rounded-xl border-2 border-white shadow-lg"
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}&background=2684FF&color=fff&bold=true`}
                    alt={user?.name}
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 capitalize font-medium">{user?.role} • Grade 12</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{user?.name}</span>!
                </h1>
              </div>
              <p className="text-lg text-gray-600 mb-4 max-w-2xl">
                You're making excellent progress in your International Baccalaureate and Cambridge programs. 
                <span className="font-semibold text-blue-600"> Keep up the great work!</span>
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <span className="flex items-center space-x-2 text-emerald-600 font-medium">
                  <TrendingUp className="h-4 w-4" />
                  <span>On track for graduation</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="flex items-center space-x-2 text-gray-600">
                  <Brain className="h-4 w-4" />
                  <span>Next exam session: May 2025</span>
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all"
              >
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </motion.button>
              <div className="flex border border-gray-300 rounded-xl bg-white/50 backdrop-blur-sm">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2.5 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {mockStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/60 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className={`h-4 w-4 ${stat.trendColor}`} />
                    <span className={`text-sm font-medium ${stat.trendColor}`}>{stat.trend}</span>
                    <span className="text-sm text-gray-500">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Enhanced My Courses Section */}
          <div className="xl:col-span-2">
            <motion.div 
              className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="px-6 py-4 border-b border-gray-200/60 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span>My Courses</span>
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Your current academic courses and progress</p>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center space-x-1 transition-colors">
                  <span>View All</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="divide-y divide-gray-200/60">
                <AnimatePresence>
                  {filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                      className="p-6 cursor-pointer transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`bg-gradient-to-br ${course.color} h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {course.title}
                                </h4>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                  course.level.includes('HL') 
                                    ? 'bg-purple-100 text-purple-800 border border-purple-200'
                                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                                }`}>
                                  {course.level}
                                </span>
                              </div>
                              <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-lg transition-all">
                                <MoreVertical className="h-4 w-4 text-gray-400" />
                              </button>
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-3">{course.instructor} • {course.code}</p>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>
                            
                            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                              <span className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{course.sessions}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <FileText className="h-4 w-4" />
                                <span>{course.resources} resources</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Award className="h-4 w-4" />
                                <span>Current: {course.grade}</span>
                              </span>
                            </div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 font-medium">Course Progress</span>
                                <span className="font-bold text-gray-900">{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${course.progress}%` }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                  className={`h-2.5 rounded-full bg-gradient-to-r ${course.color} shadow-sm`}
                                ></motion.div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                              <div className="flex items-center space-x-4 text-sm">
                                <span className="flex items-center space-x-1 text-gray-600">
                                  <PlayCircle className="h-4 w-4" />
                                  <span>Next: {course.nextLesson}</span>
                                </span>
                              </div>
                              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Assignments */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-orange-600" />
                  <span>Upcoming Assignments</span>
                </h3>
              </div>
              <div className="divide-y divide-gray-200/60">
                <AnimatePresence>
                  {mockAssignments.map((assignment) => (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                      className="p-4 cursor-pointer transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {assignment.title}
                            </h4>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold border ${getPriorityColor(assignment.priority)} ml-2 flex-shrink-0`}>
                              {assignment.priority}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{assignment.course}</p>
                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{assignment.description}</p>
                          
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-3">
                              <span className={`inline-flex items-center px-2 py-1 rounded-md font-medium ${getStatusColor(assignment.status)}`}>
                                {assignment.status.replace('-', ' ')}
                              </span>
                              <span className="text-gray-500">{assignment.type}</span>
                              <span className="font-semibold text-blue-600">{assignment.weight}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-500">Due:</div>
                              <div className="font-semibold text-gray-900">{assignment.dueDate}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg border border-gray-200/60 overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="px-6 py-4 border-b border-gray-200/60 bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                  <span>Recent Activity</span>
                </h3>
              </div>
              <div className="divide-y divide-gray-200/60">
                <AnimatePresence>
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 hover:bg-gray-50/50 transition-all"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-xl ${activity.color.replace('text-', 'bg-')} bg-opacity-10 flex-shrink-0`}>
                          <activity.icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">{activity.action}</span>{' '}
                            {activity.item}
                            {activity.grade && (
                              <span className="font-bold text-blue-600 ml-1">• {activity.grade}</span>
                            )}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 font-medium">{activity.course}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enhanced Quick Actions */}
            <motion.div 
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-6 text-white overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span>Quick Actions</span>
                </h3>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${action.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all`}>
                          <action.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">{action.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LMSDashboard;