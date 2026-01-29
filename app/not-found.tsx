'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Home, Search, ArrowLeft, Heart, Users, MessageCircle,
  Phone, Mail, MapPin
} from 'lucide-react'

const quickLinks = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Find a Provider', href: '/find-provider', icon: Users },
  { title: 'Services', href: '/services', icon: Heart },
  { title: 'Virtual Care', href: '/virtual-care', icon: MessageCircle },
  { title: 'Contact Us', href: '/contact', icon: Mail },
  { title: 'Locations', href: '/find-provider', icon: MapPin }
]

const helpfulResources = [
  {
    title: 'Schedule an Appointment',
    description: 'Book a visit with one of our healthcare providers',
    href: '/find-provider',
    icon: Users
  },
  {
    title: 'Virtual Care',
    description: 'Get medical care from the comfort of your home',
    href: '/virtual-care',
    icon: MessageCircle
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions',
    href: '/faq',
    icon: Search
  },
  {
    title: 'Contact Support',
    description: 'Reach out to our care team for assistance',
    href: '/contact',
    icon: Phone
  }
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* 404 Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-200">404</h1>
            </div>
            
            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Oops! The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track to quality healthcare.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous Page
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for what you need..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      window.location.href = `/blog?search=${encodeURIComponent(e.currentTarget.value)}`
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600">
              Find what you're looking for with these popular destinations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 hover:border-primary-200 border border-transparent transition-all duration-300"
                >
                  <IconComponent className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{link.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Helpful Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-gray-600">
              Here are some ways we can assist you right now
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpfulResources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Link
                  key={index}
                  href={resource.href}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <span className="text-primary-600 font-medium flex items-center">
                    Get Started
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Can't Find What You Need?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our care team is here to help you find the right services and answer your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <a
              href="tel:1-800-ONE-MEDICAL"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 1-800-ONE-MEDICAL
            </a>
          </div>
        </div>
      </section>

      {/* Error Reporting */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Report a Broken Link
            </h3>
            <p className="text-gray-600 mb-6">
              Help us improve our website by reporting broken links or errors you encounter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your email (optional)"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="URL of the broken link"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <textarea
              placeholder="Describe the issue (optional)"
              rows={3}
              className="w-full mt-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button className="mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Report Issue
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
