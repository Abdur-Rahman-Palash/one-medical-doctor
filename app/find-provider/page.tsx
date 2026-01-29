'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Search, MapPin, Filter, Star, Calendar, Video, Users,
  Heart, Stethoscope, Brain, Activity, Baby, ChevronDown,
  Clock, Phone, Mail, ArrowRight
} from 'lucide-react'

const specialties = [
  { id: 'all', name: 'All Specialties' },
  { id: 'primary-care', name: 'Primary Care' },
  { id: 'cardiology', name: 'Cardiology' },
  { id: 'dermatology', name: 'Dermatology' },
  { id: 'mental-health', name: 'Mental Health' },
  { id: 'pediatrics', name: 'Pediatrics' },
  { id: 'obgyn', name: 'OB/GYN' },
  { id: 'orthopedics', name: 'Orthopedics' }
]

const providers = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Primary Care',
    credentials: 'MD, MPH',
    experience: '15 years',
    rating: 4.9,
    reviews: 234,
    image: '/api/placeholder/200/200',
    location: 'Manhattan - Union Square',
    distance: '0.5 miles',
    nextAvailable: 'Today, 2:00 PM',
    virtualCare: true,
    languages: ['English', 'Spanish'],
    education: 'Harvard Medical School',
    acceptsNewPatients: true,
    specialties: ['Primary Care', 'Preventive Medicine']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    credentials: 'MD, FACC',
    experience: '12 years',
    rating: 4.8,
    reviews: 189,
    image: '/api/placeholder/200/200',
    location: 'San Francisco - FiDi',
    distance: '2.1 miles',
    nextAvailable: 'Tomorrow, 10:00 AM',
    virtualCare: true,
    languages: ['English', 'Mandarin'],
    education: 'Johns Hopkins University',
    acceptsNewPatients: true,
    specialties: ['Cardiology', 'Internal Medicine']
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Mental Health',
    credentials: 'MD, Psychiatry',
    experience: '8 years',
    rating: 4.9,
    reviews: 156,
    image: '/api/placeholder/200/200',
    location: 'Los Angeles - Santa Monica',
    distance: '3.8 miles',
    nextAvailable: 'Today, 4:30 PM',
    virtualCare: true,
    languages: ['English', 'Spanish'],
    education: 'UCLA School of Medicine',
    acceptsNewPatients: true,
    specialties: ['Psychiatry', 'Mental Health']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Pediatrics',
    credentials: 'MD, FAAP',
    experience: '10 years',
    rating: 4.7,
    reviews: 203,
    image: '/api/placeholder/200/200',
    location: 'Boston - Back Bay',
    distance: '1.2 miles',
    nextAvailable: 'Tomorrow, 9:00 AM',
    virtualCare: false,
    languages: ['English'],
    education: 'Boston University School of Medicine',
    acceptsNewPatients: true,
    specialties: ['Pediatrics', 'Adolescent Medicine']
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Dermatology',
    credentials: 'MD, FAAD',
    experience: '14 years',
    rating: 4.8,
    reviews: 178,
    image: '/api/placeholder/200/200',
    location: 'Manhattan - Union Square',
    distance: '0.5 miles',
    nextAvailable: 'Friday, 11:00 AM',
    virtualCare: true,
    languages: ['English', 'French'],
    education: 'Yale School of Medicine',
    acceptsNewPatients: false,
    specialties: ['Dermatology', 'Cosmetic Dermatology']
  },
  {
    id: '6',
    name: 'Dr. Robert Davis',
    specialty: 'Orthopedics',
    credentials: 'MD, FAAOS',
    experience: '18 years',
    rating: 4.9,
    reviews: 267,
    image: '/api/placeholder/200/200',
    location: 'San Francisco - FiDi',
    distance: '2.1 miles',
    nextAvailable: 'Thursday, 3:00 PM',
    virtualCare: false,
    languages: ['English'],
    education: 'Stanford University School of Medicine',
    acceptsNewPatients: true,
    specialties: ['Orthopedic Surgery', 'Sports Medicine']
  }
]

const specialtyIcons = {
  'Primary Care': Stethoscope,
  'Cardiology': Heart,
  'Mental Health': Brain,
  'Pediatrics': Baby,
  'Dermatology': Activity,
  'Orthopedics': Activity
}

export default function FindProviderPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedDistance, setSelectedDistance] = useState('25')
  const [virtualOnly, setVirtualOnly] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'all' || provider.specialties.includes(selectedSpecialty)
    const matchesVirtual = !virtualOnly || provider.virtualCare
    
    return matchesSearch && matchesSpecialty && matchesVirtual
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Provider
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with board-certified providers who match your healthcare needs and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search Bar */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by provider name, specialty, or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Specialty Filter */}
            <div className="relative">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {specialties.map(specialty => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            
            {/* Distance Filter */}
            <div className="relative">
              <select
                value={selectedDistance}
                onChange={(e) => setSelectedDistance(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="5">Within 5 miles</option>
                <option value="10">Within 10 miles</option>
                <option value="25">Within 25 miles</option>
                <option value="50">Within 50 miles</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
          
          {/* Additional Filters */}
          <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={virtualOnly}
                  onChange={(e) => setVirtualOnly(e.target.checked)}
                  className="mr-2 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">Virtual care only</span>
              </label>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <div className="grid grid-cols-2 gap-1 w-4 h-4">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <div className="space-y-1 w-4 h-4">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredProviders.length}</span> providers
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>
      </section>

      {/* Provider List/Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => {
                const IconComponent = specialtyIcons[provider.specialty as keyof typeof specialtyIcons] || Users
                
                return (
                  <div key={provider.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                          <p className="text-sm text-gray-600">{provider.credentials}</p>
                        </div>
                      </div>
                      {provider.acceptsNewPatients && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Accepting New Patients
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <IconComponent className="w-4 h-4 text-primary-600 mr-2" />
                      <span className="text-sm text-gray-700">{provider.specialty}</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{provider.location} • {provider.distance}</span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-3">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900 ml-1">{provider.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({provider.reviews})</span>
                      </div>
                      {provider.virtualCare && (
                        <Video className="w-4 h-4 text-primary-600" />
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Next available:</p>
                      <p className="text-sm font-medium text-green-600">{provider.nextAvailable}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <a
                        href={`/providers/${provider.id}`}
                        className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors text-center"
                      >
                        View Profile
                      </a>
                      <button className="flex-1 border border-primary-600 text-primary-600 px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProviders.map((provider) => {
                const IconComponent = specialtyIcons[provider.specialty as keyof typeof specialtyIcons] || Users
                
                return (
                  <div key={provider.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start flex-1">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mr-6"></div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 mr-3">{provider.name}</h3>
                            {provider.acceptsNewPatients && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Accepting New Patients
                              </span>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
                            <span>{provider.credentials}</span>
                            <span>•</span>
                            <span>{provider.experience} experience</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="font-medium text-gray-900 ml-1">{provider.rating}</span>
                              <span className="ml-1">({provider.reviews} reviews)</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm">
                            <div className="flex items-center">
                              <IconComponent className="w-4 h-4 text-primary-600 mr-2" />
                              <span className="text-gray-700">{provider.specialty}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-gray-600">{provider.location} • {provider.distance}</span>
                            </div>
                            {provider.virtualCare && (
                              <div className="flex items-center">
                                <Video className="w-4 h-4 text-primary-600 mr-2" />
                                <span className="text-gray-700">Virtual care available</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm">
                            <div>
                              <p className="text-gray-600">Next available:</p>
                              <p className="font-medium text-green-600">{provider.nextAvailable}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Languages:</p>
                              <p className="font-medium text-gray-900">{provider.languages.join(', ')}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Education:</p>
                              <p className="font-medium text-gray-900">{provider.education}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-6">
                        <a
                          href={`/providers/${provider.id}`}
                          className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
                        >
                          View Profile
                        </a>
                        <button className="border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          
          {filteredProviders.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedSpecialty('all')
                  setVirtualOnly(false)
                }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Providers Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive map showing all provider locations and availability.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">Map integration will be available here</p>
              <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Enable Location Services
                <ArrowRight className="w-4 h-4 ml-1 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Finding a Provider?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our care team is available to help you find the perfect provider for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call (800) ONE-MEDICAL
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
