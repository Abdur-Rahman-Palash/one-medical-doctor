'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Calendar, Clock, Heart, MessageCircle, FileText, Users,
  Activity, TrendingUp, Bell, Search, Filter, ChevronRight,
  Video, Phone, MapPin, AlertCircle, CheckCircle
} from 'lucide-react'

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/api/placeholder/100/100'
  })
  
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'appointment', message: 'Appointment with Dr. Sarah Johnson tomorrow at 2:00 PM', time: '2 hours ago', read: false },
    { id: 2, type: 'message', message: 'New message from Dr. Michael Chen regarding your test results', time: '5 hours ago', read: false },
    { id: 3, type: 'system', message: 'Your annual physical is due for renewal', time: '1 day ago', read: true }
  ])

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      provider: 'Dr. Sarah Johnson',
      specialty: 'Primary Care',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'In-Person',
      location: 'Manhattan - Union Square',
      status: 'confirmed'
    },
    {
      id: 2,
      provider: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      date: '2024-01-20',
      time: '10:30 AM',
      type: 'Virtual',
      location: 'Video Call',
      status: 'confirmed'
    }
  ])

  const [healthStats, setHealthStats] = useState([
    { label: 'Blood Pressure', value: '120/80', status: 'normal', icon: Heart },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', icon: Activity },
    { label: 'BMI', value: '24.5', status: 'normal', icon: TrendingUp },
    { label: 'Last Checkup', value: '3 months ago', status: 'attention', icon: Calendar }
  ])

  const [recentMessages, setRecentMessages] = useState([
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      message: 'Your lab results look great! Everything is within normal range.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      sender: 'Care Team',
      message: 'Reminder: Your annual physical is coming up next month.',
      time: '1 day ago',
      unread: false
    }
  ])

  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      medication: 'Lisinopril 10mg',
      dosage: '1 tablet daily',
      refills: 3,
      nextRefill: '2024-02-01',
      status: 'active'
    },
    {
      id: 2,
      medication: 'Vitamin D3 1000 IU',
      dosage: '1 capsule daily',
      refills: 5,
      nextRefill: '2024-03-15',
      status: 'active'
    }
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const userName = localStorage.getItem('userName')
    
    if (!isLoggedIn) {
      window.location.href = '/auth/login'
    } else if (userName) {
      setUser(prev => ({ ...prev, name: userName }))
    }
  }, [])

  const markNotificationAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <Link href="/dashboard" className="flex items-center px-4 py-2 text-primary-600 bg-primary-50 rounded-lg">
                <Activity className="w-5 h-5 mr-3" />
                Dashboard
              </Link>
              <Link href="/dashboard/appointments" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Appointments
              </Link>
              <Link href="/dashboard/messages" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <MessageCircle className="w-5 h-5 mr-3" />
                Messages
                {unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {unreadCount}
                  </span>
                )}
              </Link>
              <Link href="/dashboard/prescriptions" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <FileText className="w-5 h-5 mr-3" />
                Prescriptions
              </Link>
              <Link href="/dashboard/test-results" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Activity className="w-5 h-5 mr-3" />
                Test Results
              </Link>
              <Link href="/dashboard/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 mr-3" />
                Profile
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name.split(' ')[0]}!</h1>
              <p className="text-gray-600">Here's your health overview</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-2">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <button className="bg-primary-600 text-white rounded-lg p-4 hover:bg-primary-700 transition-colors">
              <Calendar className="w-6 h-6 mb-2" />
              <p className="font-semibold">Book Appointment</p>
            </button>
            
            <button className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <Video className="w-6 h-6 mb-2 text-primary-600" />
              <p className="font-semibold">Virtual Visit</p>
            </button>
            
            <button className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <MessageCircle className="w-6 h-6 mb-2 text-primary-600" />
              <p className="font-semibold">Message Doctor</p>
            </button>
            
            <button className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <Phone className="w-6 h-6 mb-2 text-primary-600" />
              <p className="font-semibold">Call Support</p>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {healthStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      stat.status === 'normal' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {stat.status === 'normal' ? 'Normal' : 'Attention'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                  <Link href="/dashboard/appointments" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{apt.provider}</h3>
                      <p className="text-sm text-gray-600">{apt.specialty}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {apt.date} at {apt.time}
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        {apt.type === 'Virtual' ? (
                          <><Video className="w-4 h-4 mr-1" />Video Call</>
                        ) : (
                          <><MapPin className="w-4 h-4 mr-1" />{apt.location}</>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {apt.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
                  <Link href="/dashboard/messages" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{message.sender}</h3>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{message.message}</p>
                    </div>
                    {message.unread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Prescriptions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Prescriptions</h2>
                  <Link href="/dashboard/prescriptions" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    View All
                  </Link>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {prescriptions.map((prescription) => (
                  <div key={prescription.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{prescription.medication}</h3>
                      <p className="text-sm text-gray-600">{prescription.dosage}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {prescription.refills} refills left
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Refill:</p>
                      <p className="text-sm font-medium text-gray-900">{prescription.nextRefill}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Health Tips */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Tips for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <Heart className="w-8 h-8 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Stay Active</h3>
                  <p className="text-gray-700 text-sm">Aim for 30 minutes of moderate exercise most days of the week.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Activity className="w-8 h-8 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Eat Well</h3>
                  <p className="text-gray-700 text-sm">Focus on a balanced diet rich in fruits and vegetables.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-8 h-8 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sleep Well</h3>
                  <p className="text-gray-700 text-sm">Get 7-9 hours of quality sleep each night.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
