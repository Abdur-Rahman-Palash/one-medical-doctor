'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  MapPin, Calendar, Clock, Users, Shield, Stethoscope, 
  Heart, Activity, Droplet, CheckCircle, ArrowRight, Phone
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    description: 'Comprehensive healthcare for adults including preventive care, chronic disease management, and acute illness treatment.',
    features: ['Annual physicals', 'Vaccinations', 'Health screenings', 'Chronic care management']
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Specialized heart care including diagnostics, treatment, and ongoing management of cardiovascular conditions.',
    features: ['EKG & Echocardiograms', 'Stress testing', 'Cardiac monitoring', 'Heart disease management']
  },
  {
    icon: Activity,
    title: 'Physical Therapy',
    description: 'Rehabilitation services to help you recover from injury, surgery, or manage chronic pain conditions.',
    features: ['Injury rehabilitation', 'Pain management', 'Sports medicine', 'Post-surgical recovery']
  },
  {
    icon: Droplet,
    title: 'Laboratory Services',
    description: 'On-site lab testing for quick results and convenient diagnostic services.',
    features: ['Blood work', 'Urinalysis', 'Rapid testing', 'Pathology services']
  },
  {
    icon: Users,
    title: 'Mental Health',
    description: 'In-person counseling and psychiatric services for comprehensive mental healthcare.',
    features: ['Individual therapy', 'Medication management', 'Group therapy', 'Crisis intervention']
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Proactive health services to prevent illness and maintain optimal wellness.',
    features: ['Health screenings', 'Vaccinations', 'Lifestyle counseling', 'Risk assessments']
  }
]

const locations = [
  {
    name: 'Manhattan - Union Square',
    address: '14 Union Square West, New York, NY 10003',
    phone: '(212) 555-0101',
    hours: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM',
    services: ['Primary Care', 'Lab Services', 'Mental Health']
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

const benefits = [
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Early morning, evening, and weekend appointments available to fit your schedule.'
  },
  {
    icon: Users,
    title: 'Expert Providers',
    description: 'Board-certified physicians and specialists dedicated to your health.'
  },
  {
    icon: Shield,
    title: 'Comprehensive Care',
    description: 'Full-service healthcare under one roof for your convenience.'
  },
  {
    icon: MapPin,
    title: 'Convenient Locations',
    description: 'Multiple locations easily accessible by public transportation.'
  }
]

export default function InOfficeCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-primary-600 mr-3" />
                <span className="text-primary-600 font-medium">In-Office Healthcare</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Quality Care,
                <span className="text-primary-600 block">In Person</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience comprehensive healthcare in our modern, comfortable facilities. 
                From primary care to specialized services, get the care you need from our expert providers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Location
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  <span>Extended Hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Same-Day Appointments</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  <span>Board-Certified Providers</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-100 flex items-center justify-center">
                    <Stethoscope className="w-24 h-24 text-primary-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Medical Facilities</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      State-of-the-art equipment and comfortable waiting areas designed for your wellbeing.
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      Take a virtual tour
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our In-Office Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services available at all our locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose In-Office Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of traditional healthcare with modern convenience.
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
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find a Location Near You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple locations to serve you better. All locations offer comprehensive care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Phone className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{location.hours}</span>
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
                    Book Here
                  </button>
                  <button className="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors text-sm">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Locations
              <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What to Expect During Your Visit
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Check-In</h3>
                    <p className="text-gray-600">Arrive 15 minutes early for paperwork. Our staff will help you get checked in quickly.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Vital Signs</h3>
                    <p className="text-gray-600">A medical assistant will record your blood pressure, temperature, and other vital signs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consultation</h3>
                    <p className="text-gray-600">Meet with your provider for a thorough examination and discussion of your health concerns.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Treatment Plan</h3>
                    <p className="text-gray-600">Receive your diagnosis, treatment plan, and any necessary prescriptions or referrals.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Preparation Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bring your insurance card and photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">List current medications and dosages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Write down questions for your provider</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bring recent lab results or medical records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Wear comfortable clothing for exams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule your in-office appointment today and experience quality healthcare in a comfortable setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Find Nearest Location
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
