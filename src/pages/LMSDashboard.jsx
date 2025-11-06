// LMSDashboard.jsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
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
  List
} from 'lucide-react';

const LMSDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [viewMode, setViewMode] = useState('grid');

  // IB/Cambridge inspired curriculum data
  const courses = [
    {
      id: 1,
      title: 'IB Mathematics HL',
      code: 'MATH-HL-001',
      instructor: 'Dr. Kwame Appiah',
      progress: 75,
      nextLesson: 'Calculus Applications',
      dueDate: '2024-12-20',
      color: 'bg-blue-600',
      level: 'Higher Level',
      grade: '6/7',
      sessions: 'Mon, Wed, Fri',
      resources: 12,
      assignments: 5
    },
    {
      id: 2,
      title: 'Cambridge Physics A-Level',
      code: 'PHYS-AL-002',
      instructor: 'Dr. Ama Serwaa',
      progress: 60,
      nextLesson: 'Quantum Physics',
      dueDate: '2024-12-18',
      color: 'bg-green-600',
      level: 'A-Level',
      grade: 'A',
      sessions: 'Tue, Thu',
      resources: 8,
      assignments: 3
    },
    {
      id: 3,
      title: 'IB English Literature HL',
      code: 'ENG-HL-003',
      instructor: 'Ms. Esi Mensah',
      progress: 45,
      nextLesson: 'Poetry Analysis - Yeats',
      dueDate: '2024-12-22',
      color: 'bg-purple-600',
      level: 'Higher Level',
      grade: '5/7',
      sessions: 'Mon, Wed',
      resources: 15,
      assignments: 4
    },
    {
      id: 4,
      title: 'Cambridge Chemistry A-Level',
      code: 'CHEM-AL-004',
      instructor: 'Prof. Kofi Mensah',
      progress: 85,
      nextLesson: 'Organic Mechanisms',
      dueDate: '2024-12-15',
      color: 'bg-orange-600',
      level: 'A-Level',
      grade: 'A*',
      sessions: 'Tue, Thu, Fri',
      resources: 10,
      assignments: 6
    }
  ];

  // IB/Cambridge style assignments
  const assignments = [
    {
      id: 1,
      title: 'Mathematics IA - Modelling Project',
      course: 'IB Mathematics HL',
      dueDate: '2024-12-20',
      status: 'pending',
      priority: 'high',
      type: 'Internal Assessment',
      weight: '20%',
      estimatedTime: '15 hours'
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
      estimatedTime: '10 hours'
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
      estimatedTime: '12 hours'
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
      estimatedTime: '2 hours'
    }
  ];

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'calendar', name: 'Academic Calendar', icon: Calendar },
    { id: 'grades', name: 'Gradebook', icon: Award },
    { id: 'resources', name: 'Learning Resources', icon: Bookmark },
    { id: 'discussions', name: 'Discussion Forum', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const stats = [
    { 
      label: 'Current GPA', 
      value: '3.8/4.0', 
      icon: Award, 
      trend: '+0.2', 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'IB Predicted', 
      value: '38/45', 
      icon: Target, 
      trend: '+3', 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Assignments Due', 
      value: '3', 
      icon: FileText, 
      trend: '-2', 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    { 
      label: 'Study Hours', 
      value: '24.5', 
      icon: Clock, 
      trend: '+4.2', 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentActivities = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Liberty Lyceum LMS</h1>
                  <p className="text-sm text-gray-600">International Baccalaureate & Cambridge Programs</p>
                </div>
              </div>
              
              <nav className="hidden lg:flex space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses, resources..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 text-sm"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <img
                  className="h-8 w-8 rounded-full border-2 border-blue-500"
                  src={user.avatar}
                  alt={user.name}
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role} • Grade 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600 mb-4">
                You're making excellent progress in your International Baccalaureate and Cambridge programs.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center space-x-1 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>On track for graduation</span>
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Next exam session: May 2025</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <div className="flex border border-gray-300 rounded-lg">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">{stat.trend}</span>
                    <span className="text-sm text-gray-500">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All Courses
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                {courses.map((course) => (
                  <motion.div
                    key={course.id}
                    whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                    className="p-6 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`${course.color} h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-base font-semibold text-gray-900">
                              {course.title}
                            </h4>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              course.level.includes('HL') 
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {course.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{course.instructor} • {course.code}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{course.sessions}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FileText className="h-4 w-4" />
                              <span>{course.resources} resources</span>
                            </span>
                          </div>

                          <div className="mb-3">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-gray-600">Course Progress</span>
                              <span className="font-medium text-gray-900">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${course.color.replace('bg-', 'bg-')}`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="flex items-center space-x-1 text-gray-600">
                                <PlayCircle className="h-4 w-4" />
                                <span>Next: {course.nextLesson}</span>
                              </span>
                              <span className="flex items-center space-x-1 text-gray-600">
                                <Award className="h-4 w-4" />
                                <span>Current: {course.grade}</span>
                              </span>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Assignments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Assignments</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <motion.div
                    key={assignment.id}
                    whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                    className="p-4 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-900">
                            {assignment.title}
                          </h4>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            assignment.priority === 'high' 
                              ? 'bg-red-100 text-red-800'
                              : assignment.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {assignment.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{assignment.course}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded ${
                              assignment.status === 'completed' 
                                ? 'bg-green-100 text-green-800'
                                : assignment.status === 'in-progress'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {assignment.status.replace('-', ' ')}
                            </span>
                            <span>{assignment.type}</span>
                            <span>{assignment.weight}</span>
                          </span>
                          <span>Due: {assignment.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${activity.color.replace('text-', 'bg-')} bg-opacity-10`}>
                        <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.action}</span>{' '}
                          {activity.item}
                          {activity.grade && (
                            <span className="font-medium text-blue-600"> • {activity.grade}</span>
                          )}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{activity.course}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                  <span className="text-sm font-medium">Download Study Materials</span>
                  <Download className="h-4 w-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                  <span className="text-sm font-medium">View Academic Calendar</span>
                  <Calendar className="h-4 w-4" />
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                  <span className="text-sm font-medium">Request Teacher Support</span>
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LMSDashboard;