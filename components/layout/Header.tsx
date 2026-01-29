'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Search, MapPin, User, Briefcase, BookOpen, ChevronDown, Heart, Activity, Users, FileText, Shield, Phone, Mail, Calendar, MessageCircle, Stethoscope, AlertTriangle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isForYouOpen, setIsForYouOpen] = useState(false)
  const [isBusinessOpen, setIsBusinessOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">One Medical</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Locations Dropdown */}
            <div className="relative" onMouseEnter={() => setIsLocationsOpen(true)} onMouseLeave={() => setIsLocationsOpen(false)}>
              <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                <MapPin className="w-4 h-4 mr-1" />
                Locations
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isLocationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/find-provider" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Find a Provider
                  </Link>
                  <Link href="/in-office-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    In-Office Care
                  </Link>
                  <Link href="/virtual-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Virtual Care
                  </Link>
                </div>
              )}
            </div>
            
            {/* For You Dropdown */}
            <div className="relative" onMouseEnter={() => setIsForYouOpen(true)} onMouseLeave={() => setIsForYouOpen(false)}>
              <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                <User className="w-4 h-4 mr-1" />
                For You
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isForYouOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Services
                  </Link>
                  <Link href="/membership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Membership Plans
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Health Blog
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    FAQ
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* For Business Dropdown */}
            <div className="relative" onMouseEnter={() => setIsBusinessOpen(true)} onMouseLeave={() => setIsBusinessOpen(false)}>
              <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                <Briefcase className="w-4 h-4 mr-1" />
                For Business
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isBusinessOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link href="/employer-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Employer Solutions
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600">
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link href="/services" className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              isActive('/services') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
            }`}>
              <Heart className="w-4 h-4 mr-1" />
              Services
            </Link>
            
            <Link href="/virtual-care" className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              isActive('/virtual-care') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
            }`}>
              <Activity className="w-4 h-4 mr-1" />
              Virtual Care
            </Link>
            
            <Link href="/blog" className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
              isActive('/blog') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
            }`}>
              <BookOpen className="w-4 h-4 mr-1" />
              Blog
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/auth/login" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </Link>
            
            <Link href="/auth/signup" className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Locations */}
              <div className="space-y-1">
                <Link href="/find-provider" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find a Provider
                </Link>
                <Link href="/in-office-care" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  In-Office Care
                </Link>
                <Link href="/virtual-care" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Activity className="w-4 h-4 mr-2" />
                  Virtual Care
                </Link>
              </div>

              {/* Mobile For You */}
              <div className="space-y-1">
                <Link href="/services" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Services
                </Link>
                <Link href="/membership" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Membership Plans
                </Link>
                <Link href="/blog" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Blog
                </Link>
                <Link href="/faq" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  FAQ
                </Link>
                <Link href="/contact" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>

              {/* Mobile Business */}
              <div className="space-y-1">
                <Link href="/employer-solutions" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Employer Solutions
                </Link>
                <Link href="/careers" className="flex items-center w-full text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  Careers
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-3">
                  <Link href="/auth/login" className="flex-1 text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium">
                    Login
                  </Link>
                  <Link href="/auth/signup" className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-primary-700">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
