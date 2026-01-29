'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Briefcase, Users, Heart, Target, MapPin, Clock, DollarSign,
  Search, Filter, ChevronRight, Award, Building2, ArrowRight
} from 'lucide-react'

const departments = [
  { id: 'all', name: 'All Departments' },
  { id: 'medical', name: 'Medical' },
  { id: 'technology', name: 'Technology' },
  { id: 'operations', name: 'Operations' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'finance', name: 'Finance' }
]

const locations = [
  { id: 'all', name: 'All Locations' },
  { id: 'new-york', name: 'New York' },
  { id: 'san-francisco', name: 'San Francisco' },
  { id: 'los-angeles', name: 'Los Angeles' },
  { id: 'boston', name: 'Boston' },
  { id: 'chicago', name: 'Chicago' },
  { id: 'remote', name: 'Remote' }
]

const jobTypes = [
  { id: 'all', name: 'All Types' },
  { id: 'full-time', name: 'Full Time' },
  { id: 'part-time', name: 'Part Time' },
  { id: 'contract', name: 'Contract' },
  { id: 'internship', name: 'Internship' }
]

const openPositions = [
  {
    id: '1',
    title: 'Primary Care Physician',
    department: 'medical',
    location: 'New York',
    type: 'full-time',
    experience: '3+ years',
    description: 'Join our team of primary care physicians providing exceptional patient care in a modern healthcare setting.',
    requirements: ['MD or DO degree', 'Board certification in Internal Medicine or Family Medicine', 'Valid medical license', 'Excellent communication skills'],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Senior Software Engineer',
    department: 'technology',
    location: 'San Francisco',
    type: 'full-time',
    experience: '5+ years',
    description: 'Build innovative healthcare technology solutions that improve patient outcomes and provider efficiency.',
    requirements: ['Bachelor\'s in Computer Science or related field', '5+ years of software development experience', 'Experience with React, Node.js, and cloud platforms', 'Healthcare industry experience preferred'],
    posted: '1 week ago'
  },
  {
    id: '3',
    title: 'Medical Assistant',
    department: 'medical',
    location: 'Los Angeles',
    type: 'full-time',
    experience: '1+ years',
    description: 'Support our clinical team in providing excellent patient care and ensuring smooth clinic operations.',
    requirements: ['Medical Assistant certification', '1+ years of clinical experience', 'BLS certification', 'Strong organizational skills'],
    posted: '3 days ago'
  },
  {
    id: '4',
    title: 'Product Manager',
    department: 'technology',
    location: 'Remote',
    type: 'full-time',
    experience: '3+ years',
    description: 'Lead product strategy and development for our digital health platforms and patient experience.',
    requirements: ['3+ years of product management experience', 'Healthcare technology experience', 'Strong analytical and communication skills', 'MBA or related advanced degree preferred'],
    posted: '1 week ago'
  },
  {
    id: '5',
    title: 'Practice Manager',
    department: 'operations',
    location: 'Boston',
    type: 'full-time',
    experience: '5+ years',
    description: 'Oversee daily operations of our medical practice, ensuring excellent patient care and efficient workflows.',
    requirements: ['5+ years of healthcare management experience', 'Strong leadership and communication skills', 'Knowledge of healthcare regulations', 'MBA or MHA preferred'],
    posted: '2 weeks ago'
  },
  {
    id: '6',
    title: 'UX Designer',
    department: 'technology',
    location: 'Remote',
    type: 'full-time',
    experience: '3+ years',
    description: 'Design intuitive and accessible user experiences for our mobile app and web platforms.',
    requirements: ['3+ years of UX design experience', 'Portfolio demonstrating healthcare or consumer app experience', 'Proficiency in Figma, Sketch, or similar tools', 'Understanding of accessibility standards'],
    posted: '4 days ago'
  }
]

const benefits = [
  {
    icon: Heart,
    title: 'Comprehensive Health Benefits',
    description: 'Medical, dental, and vision insurance for you and your family'
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Market-leading salaries and performance bonuses'
  },
  {
    icon: Clock,
    title: 'Flexible Work',
    description: 'Remote options and flexible scheduling'
  },
  {
    icon: Users,
    title: 'Professional Development',
    description: 'Continuous learning opportunities and career growth'
  },
  {
    icon: Target,
    title: 'Meaningful Work',
    description: 'Make a real impact on healthcare and people\'s lives'
  },
  {
    icon: Award,
    title: 'Great Culture',
    description: 'Collaborative environment with amazing colleagues'
  }
]

const cultureValues = [
  {
    title: 'Patient First',
    description: 'Everything we do starts with the patient. We put their needs at the center of every decision.'
  },
  {
    title: 'Innovation',
    description: 'We challenge the status quo and constantly seek better ways to deliver healthcare.'
  },
  {
    title: 'Collaboration',
    description: 'We work together as a team, leveraging diverse perspectives to solve complex problems.'
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical behavior in all we do.'
  }
]

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation
    const matchesType = selectedType === 'all' || position.type === selectedType
    const matchesSearch = position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesDepartment && matchesLocation && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Briefcase className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us transform healthcare. Join a team of passionate professionals 
              dedicated to making quality care accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work at One Medical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a mission-driven company where your work makes a real difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that guide how we work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity with us.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                {filteredPositions.length} {filteredPositions.length === 1 ? 'position' : 'positions'} found
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedDepartment('all')
                  setSelectedLocation('all')
                  setSelectedType('all')
                }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="space-y-4">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {position.type.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        {position.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.posted}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {req}
                        </span>
                      ))}
                      {position.requirements.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{position.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="ml-6 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedDepartment('all')
                  setSelectedLocation('all')
                  setSelectedType('all')
                }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join us in transforming healthcare and improving lives across the country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View All Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Join Talent Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
