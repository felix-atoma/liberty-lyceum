// pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Mail, 
  DollarSign, 
  Settings,
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  UserPlus,
  Download,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Shield,
  Building,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { analyticsAPI, applicationsAPI, usersAPI } from '../services/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    fetchDashboardData();
  }, [timeRange]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all dashboard data in parallel
      const [analyticsResponse, applicationsResponse, usersResponse] = await Promise.all([
        analyticsAPI.getDashboardStats(),
        applicationsAPI.getApplications({ status: 'pending', limit: 5 }),
        usersAPI.getUsers({ limit: 10 })
      ]);

      setStats(analyticsResponse.data.data || {});
      setPendingApplications(applicationsResponse.data.data || []);
      
      // Mock recent activity
      setRecentActivity([
        {
          id: 1,
          action: 'New Application',
          user: 'Kwame Asante',
          time: '2 hours ago',
          type: 'application',
          icon: UserPlus,
          color: 'text-blue-600'
        },
        {
          id: 2,
          action: 'Payment Received',
          user: 'Ama Serwaa',
          time: '4 hours ago',
          type: 'payment',
          icon: DollarSign,
          color: 'text-green-600'
        },
        {
          id: 3,
          action: 'User Registered',
          user: 'David Ofori',
          time: '6 hours ago',
          type: 'user',
          icon: Users,
          color: 'text-purple-600'
        },
        {
          id: 4,
          action: 'Message Received',
          user: 'Fatima Mohammed',
          time: '1 day ago',
          type: 'message',
          icon: Mail,
          color: 'text-orange-600'
        }
      ]);

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Fallback to mock data
      setStats(mockStats);
      setPendingApplications(mockApplications);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockStats = {
    totalStudents: 1247,
    totalTeachers: 84,
    pendingApplications: 23,
    revenue: 184500,
    attendanceRate: 94.2,
    satisfactionRate: 4.8
  };

  const mockApplications = [
    {
      id: 1,
      name: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      program: 'IB Diploma Programme',
      date: '2024-01-15',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Ama Serwaa',
      email: 'ama.serwaa@email.com',
      program: 'Cambridge A-Levels',
      date: '2024-01-14',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'David Ofori',
      email: 'david.ofori@email.com',
      program: 'Primary School',
      date: '2024-01-13',
      status: 'pending',
      priority: 'low'
    }
  ];

  const dashboardStats = [
    {
      label: 'Total Students',
      value: stats.totalStudents || 1247,
      change: '+5.2%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: 'up'
    },
    {
      label: 'Teaching Staff',
      value: stats.totalTeachers || 84,
      change: '+2.4%',
      icon: GraduationCap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: 'up'
    },
    {
      label: 'Pending Applications',
      value: stats.pendingApplications || 23,
      change: '+12.8%',
      icon: BookOpen,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: 'up'
    },
    {
      label: 'Monthly Revenue',
      value: `GHS ${(stats.revenue || 184500).toLocaleString()}`,
      change: '+8.1%',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: 'up'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Applications',
      description: 'Review and process student applications',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/applications',
      count: stats.pendingApplications || 23
    },
    {
      title: 'User Management',
      description: 'Manage students, teachers, and staff',
      icon: Users,
      color: 'from-green-500 to-green-600',
      link: '/admin/users',
      count: null
    },
    {
      title: 'Financial Reports',
      description: 'View financial analytics and reports',
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/finance',
      count: null
    },
    {
      title: 'System Settings',
      description: 'Configure system preferences',
      icon: Settings,
      color: 'from-gray-500 to-gray-600',
      link: '/admin/settings',
      count: null
    }
  ];

  const navigation = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'applications', name: 'Applications', icon: BookOpen },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'messages', name: 'Messages', icon: Mail },
    { id: 'reports', name: 'Reports', icon: Download },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Liberty Lyceum International School</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Welcome back, Admin</p>
                <p className="text-xs text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-2xl p-2 shadow-sm border border-gray-200 mb-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className={`h-4 w-4 ${
                            stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`} />
                          <span className={`text-sm font-medium ${
                            stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stat.change}
                          </span>
                          <span className="text-sm text-gray-500">vs last period</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="xl:col-span-2">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
                      <span className="text-sm text-gray-500">Frequently used tasks</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {quickActions.map((action, index) => (
                        <motion.button
                          key={action.title}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 text-left hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                <action.icon className="h-6 w-6 text-white" />
                              </div>
                              <h4 className="font-semibold text-gray-900 mb-1">{action.title}</h4>
                              <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                              {action.count && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {action.count} pending
                                </span>
                              )}
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                      <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">View all</span>
                    </div>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <motion.div
                          key={activity.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className={`p-2 rounded-lg ${activity.color.replace('text-', 'bg-')} bg-opacity-10`}>
                            <activity.icon className={`h-4 w-4 ${activity.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                            <p className="text-xs text-gray-500">{activity.user}</p>
                          </div>
                          <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* System Status */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">System Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Server Uptime</span>
                        <span className="text-sm font-medium text-green-600">99.9%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Active Users</span>
                        <span className="text-sm font-medium text-blue-600">247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Storage Usage</span>
                        <span className="text-sm font-medium text-orange-600">68%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Last Backup</span>
                        <span className="text-sm font-medium text-gray-600">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Applications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Pending Applications</h3>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                        <Filter className="h-4 w-4" />
                        <span>Filter</span>
                      </button>
                      <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                        <Download className="h-4 w-4" />
                        <span>Export</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pendingApplications.map((application) => (
                        <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{application.name}</div>
                              <div className="text-sm text-gray-500">{application.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{application.program}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {new Date(application.date).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(application.priority)}`}>
                              {application.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-600 hover:text-blue-900 transition-colors">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-900 transition-colors">
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                                <MoreVertical className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View all applications →
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications Management</h2>
                <p className="text-gray-600">Comprehensive application management interface coming soon...</p>
              </div>
            </motion.div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
                <p className="text-gray-600">User management interface coming soon...</p>
              </div>
            </motion.div>
          )}

          {/* Add other tabs similarly */}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDashboard;