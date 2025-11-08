// pages/AdminMessages.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Search, 
  Filter, 
  Download, 
  Archive, 
  Trash2, 
  Reply,
  Eye,
  EyeOff,
  Star,
  Clock,
  Calendar,
  User,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
  CheckCircle,
  XCircle,
  MessageSquare,
  BarChart3,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react';
import { applicationsAPI } from '../services/api';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [replyContent, setReplyContent] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await applicationsAPI.getApplications();
      // Transform API response to match our message structure
      const messagesData = response.data.data || [];
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Fallback to mock data
      setMessages(mockMessages);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockMessages = [
    {
      id: 1,
      name: 'Kwame Asante',
      email: 'kwame.asante@email.com',
      phone: '+233 24 123 4567',
      subject: 'Admission Inquiry for Grade 11',
      message: 'I am interested in enrolling my daughter in Grade 11 for the upcoming academic year. Could you please share information about the admission process and required documents?',
      type: 'admissions',
      status: 'new',
      priority: 'high',
      date: '2024-01-15T10:30:00Z',
      read: false,
      starred: true,
      attachments: [],
      studentAge: '15 years',
      programInterest: 'IB Diploma Programme',
      contactMethod: 'email'
    },
    {
      id: 2,
      name: 'Ama Serwaa',
      email: 'ama.serwaa@email.com',
      phone: '+233 50 987 6543',
      subject: 'Scholarship Application Status',
      message: 'I submitted a scholarship application last month and would like to know the current status. Also, are there any additional documents required?',
      type: 'scholarships',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-01-14T14:20:00Z',
      read: true,
      starred: false,
      attachments: ['application_form.pdf'],
      studentAge: '16 years',
      programInterest: 'Cambridge A-Levels',
      contactMethod: 'both'
    },
    {
      id: 3,
      name: 'David Ofori',
      email: 'david.ofori@email.com',
      phone: '+233 55 111 2233',
      subject: 'Campus Tour Booking',
      message: 'We would like to schedule a campus tour for next week. Please let us know available dates and times.',
      type: 'general',
      status: 'completed',
      priority: 'low',
      date: '2024-01-13T09:15:00Z',
      read: true,
      starred: false,
      attachments: [],
      studentAge: '12 years',
      programInterest: 'Middle School',
      contactMethod: 'phone'
    },
    {
      id: 4,
      name: 'Fatima Mohammed',
      email: 'fatima.mohammed@email.com',
      phone: '+233 27 444 5566',
      subject: 'International Student Application',
      message: 'I am an international student from Nigeria interested in the IB Diploma program. Could you provide information about visa requirements and accommodation?',
      type: 'international',
      status: 'new',
      priority: 'high',
      date: '2024-01-12T16:45:00Z',
      read: false,
      starred: true,
      attachments: ['passport_copy.pdf', 'academic_records.pdf'],
      studentAge: '17 years',
      programInterest: 'IB Diploma Programme',
      contactMethod: 'email'
    }
  ];

  const stats = [
    { label: 'Total Messages', value: '247', icon: Mail, color: 'text-blue-600', bgColor: 'bg-blue-50', change: '+12%' },
    { label: 'Unread', value: '23', icon: EyeOff, color: 'text-orange-600', bgColor: 'bg-orange-50', change: '-5%' },
    { label: 'High Priority', value: '15', icon: TrendingUp, color: 'text-red-600', bgColor: 'bg-red-50', change: '+8%' },
    { label: 'Resolved Today', value: '8', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-50', change: '+3%' }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      filterStatus === 'all' || 
      message.status === filterStatus ||
      (filterStatus === 'unread' && !message.read);

    return matchesSearch && matchesFilter;
  });

  const handleReply = async (messageId) => {
    // Implement reply functionality
    console.log('Replying to message:', messageId, replyContent);
    setReplyContent('');
  };

  const handleStatusChange = async (messageId, newStatus) => {
    // Implement status change
    console.log('Changing status for message:', messageId, 'to', newStatus);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
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
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Messages Dashboard</h1>
                <p className="text-sm text-gray-600">Manage all incoming inquiries and communications</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500">from yesterday</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Messages List */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              {/* Header with Filters */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1 sm:flex-initial">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="all">All Messages</option>
                      <option value="unread">Unread</option>
                      <option value="new">New</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages List */}
              <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                <AnimatePresence>
                  {filteredMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                      className={`p-6 cursor-pointer transition-all ${!message.read ? 'bg-blue-50/50' : ''}`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {message.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900 truncate">
                                {message.name}
                              </h3>
                              {!message.read && (
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                              )}
                              {message.starred && (
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              )}
                            </div>
                            <p className="text-sm font-medium text-gray-900 mb-1">{message.subject}</p>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-3">{message.message}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Mail className="h-4 w-4" />
                                <span>{message.email}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{formatDate(message.date)}</span>
                              </span>
                            </div>

                            <div className="flex items-center space-x-2 mt-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(message.status)}`}>
                                {message.status.replace('-', ' ')}
                              </span>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(message.priority)}`}>
                                {message.priority} priority
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                                {message.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Message Detail Sidebar */}
          <div className="xl:col-span-1">
            <AnimatePresence>
              {selectedMessage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 sticky top-8"
                >
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Message Details</h3>
                      <button
                        onClick={() => setSelectedMessage(null)}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <XCircle className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {/* Sender Info */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <User className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{selectedMessage.name}</p>
                            <p className="text-xs text-gray-500">Sender</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900">{selectedMessage.email}</p>
                            <p className="text-xs text-gray-500">Email</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900">{selectedMessage.phone}</p>
                            <p className="text-xs text-gray-500">Phone</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Message Details</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-500">Subject</p>
                          <p className="text-sm font-medium text-gray-900">{selectedMessage.subject}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Received</p>
                          <p className="text-sm text-gray-900">{formatDate(selectedMessage.date)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Student Age/Grade</p>
                          <p className="text-sm text-gray-900">{selectedMessage.studentAge}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Program Interest</p>
                          <p className="text-sm text-gray-900">{selectedMessage.programInterest}</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Content */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Message</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700 leading-relaxed">{selectedMessage.message}</p>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-900">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="flex items-center justify-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          <Reply className="h-4 w-4" />
                          <span>Reply</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>Resolve</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                          <Archive className="h-4 w-4" />
                          <span>Archive</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                          <Trash2 className="h-4 w-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>

                    {/* Reply Section */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Reply</h4>
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Type your response here..."
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      />
                      <button
                        onClick={() => handleReply(selectedMessage.id)}
                        disabled={!replyContent.trim()}
                        className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Send Response
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;