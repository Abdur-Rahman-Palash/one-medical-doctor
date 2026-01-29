'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, Send,
  Users, Building2, Shield, ArrowRight, CheckCircle
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak with our care team for immediate assistance',
    contact: '1-800-ONE-MEDICAL',
    hours: '24/7 for emergencies, 7AM-8PM for general inquiries',
    action: 'Call Now'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    contact: 'Available on our website and mobile app',
    hours: '7AM-10PM daily',
    action: 'Start Chat'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions or requests',
    contact: 'support@onemedical.com',
    hours: 'Response within 24 hours',
    action: 'Send Email'
  }
]

const locations = [
  {
    name: 'Manhattan - Union Square',
    address: '14 Union Square West, New York, NY 10003',
    phone: '(212) 555-0101',
    hours: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM',
    services: ['Primary Care', 'Virtual Care', 'Lab Services']
  },
  {
    name: 'San Francisco - FiDi',
    address: '123 Market Street, San Francisco, CA 94105',
    phone: '(415) 555-0202',
    hours: 'Mon-Fri: 7AM-7PM, Sat: 9AM-3PM',
    services: ['Primary Care', 'Cardiology', 'Physical Therapy']
  },
  {
    name: 'Los Angeles - Santa Monica',
    address: '456 Ocean Avenue, Santa Monica, CA 90401',
    phone: '(310) 555-0303',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    services: ['Primary Care', 'Preventive Care', 'Lab Services']
  },
  {
    name: 'Boston - Back Bay',
    address: '789 Boylston Street, Boston, MA 02116',
    phone: '(617) 555-0404',
    hours: 'Mon-Fri: 7AM-7PM, Sat: 9AM-4PM',
    services: ['Primary Care', 'Mental Health', 'Physical Therapy']
  }
]

const departments = [
  {
    name: 'Patient Support',
    email: 'patients@onemedical.com',
    phone: '1-800-555-0101',
    description: 'Help with appointments, billing, and account issues'
  },
  {
    name: 'Technical Support',
    email: 'tech@onemedical.com',
    phone: '1-800-555-0102',
    description: 'Assistance with mobile app, virtual visits, and online services'
  },
  {
    name: 'Billing & Insurance',
    email: 'billing@onemedical.com',
    phone: '1-800-555-0103',
    description: 'Questions about payments, insurance, and membership plans'
  },
  {
    name: 'Partnerships',
    email: 'partnerships@onemedical.com',
    phone: '1-800-555-0104',
    description: 'Employer solutions and business partnerships'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Reach out to our care team for any questions, 
              concerns, or support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-primary-600 font-medium">
                      {method.contact}
                    </p>
                    <p className="text-sm text-gray-500">
                      {method.hours}
                    </p>
                  </div>
                  
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    {method.action}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700">
                Thank you for contacting us. We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="patient">Patient Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Insurance</option>
                    <option value="partnerships">Partnerships</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop by any of our locations for in-person care and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-primary-600" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-primary-600" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-primary-600" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Services Available:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm">
                    Get Directions
                  </button>
                  <button className="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors text-sm">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Specific Departments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out directly to the department that can best help you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary-600" />
                    <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-primary-600" />
                    <a href={`tel:${dept.phone}`} className="text-primary-600 hover:text-primary-700">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              Emergency Care
            </h2>
            <p className="text-xl text-red-800 mb-8 max-w-2xl mx-auto">
              For life-threatening emergencies, call 911 or visit the nearest emergency room immediately.
            </p>
            <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
              <p className="text-gray-700 mb-4">
                If you're experiencing a medical emergency but it's not life-threatening, 
                our 24/7 virtual care service can help determine if you need emergency care.
              </p>
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Start Virtual Emergency Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
