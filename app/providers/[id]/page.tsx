'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Calendar, Clock, MapPin, Star, Video, Phone, Mail,
  Heart, Stethoscope, Brain, Activity, Baby, Users,
  CheckCircle, ArrowRight, Download, Shield, Languages
} from 'lucide-react'

const specialtyIcons = {
  'Primary Care': Stethoscope,
  'Cardiology': Heart,
  'Mental Health': Brain,
  'Pediatrics': Baby,
  'Dermatology': Activity,
  'Orthopedics': Activity
}

const providerData = {
  '1': {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Primary Care',
    credentials: 'MD, MPH',
    experience: '15 years',
    rating: 4.9,
    reviews: 234,
    image: '/api/placeholder/400/400',
    location: 'Manhattan - Union Square',
    address: '14 Union Square West, New York, NY 10003',
    phone: '(212) 555-0101',
    email: 'sarah.johnson@onemedical.com',
    languages: ['English', 'Spanish'],
    education: 'Harvard Medical School',
    residency: 'Massachusetts General Hospital',
    boardCertifications: ['Internal Medicine', 'Preventive Medicine'],
    specialties: ['Primary Care', 'Preventive Medicine'],
    acceptsNewPatients: true,
    virtualCare: true,
    bio: 'Dr. Sarah Johnson is a board-certified primary care physician with over 15 years of experience in preventive medicine and chronic disease management. She is passionate about helping patients achieve optimal health through personalized care plans and evidence-based treatments.',
    philosophy: 'I believe in building long-term relationships with my patients based on trust and open communication. My approach focuses on preventive care and empowering patients to take an active role in their health journey.',
    clinicalInterests: ['Preventive Medicine', 'Chronic Disease Management', 'Women\'s Health', 'Mental Health'],
    awards: ['Top Doctor New York 2023', 'Patients\' Choice Award 2022']
  }
}

const timeSlots = [
  'Today, 2:00 PM',
  'Today, 3:30 PM',
  'Today, 5:00 PM',
  'Tomorrow, 9:00 AM',
  'Tomorrow, 10:30 AM',
  'Tomorrow, 2:00 PM',
  'Friday, 11:00 AM',
  'Friday, 1:00 PM'
]

const reviews = [
  {
    id: '1',
    patientName: 'Jennifer M.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Dr. Johnson is exceptional! She takes the time to listen and really understands my concerns. Her approach to preventive care has helped me stay healthy for years.',
    condition: 'Annual Physical'
  },
  {
    id: '2',
    patientName: 'Robert K.',
    rating: 5,
    date: '1 month ago',
    comment: 'Best doctor I\'ve ever had. Dr. Johnson is thorough, compassionate, and always explains things clearly. Highly recommend!',
    condition: 'Diabetes Management'
  },
  {
    id: '3',
    patientName: 'Maria S.',
    rating: 4,
    date: '2 months ago',
    comment: 'Very professional and caring. The only reason I\'m giving 4 stars is because sometimes the wait time can be long, but it\'s worth it for the quality of care.',
    condition: 'Cold & Flu'
  }
]

export default function ProviderProfilePage() {
  const params = useParams()
  const providerId = params.id as string
  const provider = providerData[providerId as keyof typeof providerData] || providerData['1']
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  const IconComponent = specialtyIcons[provider.specialty as keyof typeof specialtyIcons] || Users

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Provider Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">{provider.name}</h1>
                    {provider.acceptsNewPatients && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        Accepting New Patients
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-600">
                    <span className="font-medium">{provider.credentials}</span>
                    <span>•</span>
                    <span>{provider.experience} experience</span>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center">
                      <IconComponent className="w-5 h-5 text-primary-600 mr-2" />
                      <span className="font-medium text-gray-900">{provider.specialty}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900 ml-1">{provider.rating}</span>
                      <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {provider.location}
                    </div>
                    <div className="flex items-center">
                      <Languages className="w-4 h-4 mr-2" />
                      {provider.languages.join(', ')}
                    </div>
                    {provider.virtualCare && (
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-2 text-primary-600" />
                        Virtual care available
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Next available:</p>
                  <p className="font-medium text-green-600">{timeSlots[0]}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-3">Select time:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.slice(0, 6).map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-2 text-sm rounded-lg border transition-colors ${
                          selectedTimeSlot === slot
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </button>
                  {provider.virtualCare && (
                    <button className="w-full border border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
                      <Video className="w-5 h-5 mr-2" />
                      Schedule Virtual Visit
                    </button>
                  )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Phone:</span>
                    <a href={`tel:${provider.phone}`} className="text-primary-600 hover:text-primary-700">
                      {provider.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['overview', 'education', 'reviews', 'locations'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. Johnson</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {provider.bio}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Care Philosophy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {provider.philosophy}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {provider.clinicalInterests.map((interest, index) => (
                        <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Board Certifications</h3>
                    <ul className="space-y-2">
                      {provider.boardCertifications.map((cert, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Training</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary-600 pl-4">
                        <h4 className="font-semibold text-gray-900">Medical School</h4>
                        <p className="text-gray-600">{provider.education}</p>
                        <p className="text-sm text-gray-500">2000-2004</p>
                      </div>
                      <div className="border-l-4 border-primary-600 pl-4">
                        <h4 className="font-semibold text-gray-900">Residency</h4>
                        <p className="text-gray-600">{provider.residency}</p>
                        <p className="text-sm text-gray-500">2004-2007</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Recognition</h3>
                    <div className="space-y-3">
                      {provider.awards.map((award, index) => (
                        <div key={index} className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-3" />
                          <span className="text-gray-700">{award}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">Patient Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 font-medium text-gray-900">{provider.rating}</span>
                      <span className="ml-1 text-gray-500">({provider.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                            <div>
                              <p className="font-medium text-gray-900">{review.patientName}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">Condition: {review.condition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'locations' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Practice Location</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{provider.location}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{provider.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 mr-3" />
                          <a href={`tel:${provider.phone}`} className="text-primary-600 hover:text-primary-700">
                            {provider.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-3" />
                          <span>Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                          Get Directions
                          <ArrowRight className="w-4 h-4 ml-1 inline" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">Interactive Map</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="text-gray-700">Book Appointment</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                    <Video className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="text-gray-700">Virtual Consultation</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
                    <Download className="w-5 h-5 mr-3 text-primary-600" />
                    <span className="text-gray-700">Download Patient Forms</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Insurance Accepted</h3>
                <div className="space-y-2">
                  {['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'United Healthcare', 'Medicare'].map((insurance) => (
                    <div key={insurance} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{insurance}</span>
                    </div>
                  ))}
                </div>
                <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors mt-3">
                  View all insurance plans
                </button>
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Verified Provider</h3>
                </div>
                <p className="text-sm text-gray-600">
                  This provider is board-certified and has completed our rigorous verification process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
