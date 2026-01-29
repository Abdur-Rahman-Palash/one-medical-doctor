'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Video, Clock, Shield, Smartphone, Users, CheckCircle, 
  Play, Calendar, MessageCircle, Star, ArrowRight
} from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Schedule Your Visit',
    description: 'Book a virtual appointment online or through our mobile app. Same-day appointments often available.',
    icon: Calendar
  },
  {
    number: '2',
    title: 'Join the Video Call',
    description: 'Receive a secure link via email or text. Click to join your virtual visit from any device.',
    icon: Video
  },
  {
    number: '3',
    title: 'Meet Your Provider',
    description: 'Connect with your healthcare provider via secure video for diagnosis and treatment.',
    icon: Users
  },
  {
    number: '4',
    title: 'Get Your Care Plan',
    description: 'Receive prescriptions, lab orders, and follow-up care recommendations instantly.',
    icon: CheckCircle
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    condition: 'Cold & Flu',
    rating: 5,
    text: 'I was feeling terrible and didn\'t want to leave home. The virtual visit was quick, professional, and I got my prescription within minutes.',
    location: 'New York, NY'
  },
  {
    name: 'Michael Chen',
    condition: 'Anxiety',
    rating: 5,
    text: 'Virtual care has been a game-changer for managing my anxiety. I can see my provider from the comfort of my home.',
    location: 'San Francisco, CA'
  },
  {
    name: 'Emily Rodriguez',
    condition: 'Skin Rash',
    rating: 5,
    text: 'The provider was able to examine my rash through video and prescribe the right treatment. So convenient!',
    location: 'Austin, TX'
  }
]

const conditions = [
  'Cold & Flu', 'Allergies', 'Skin Conditions', 'Anxiety & Depression',
  'UTI & Bladder Issues', 'Medication Refills', 'Follow-up Visits',
  'Preventive Care', 'Chronic Disease Management', 'Mental Health'
]

export default function VirtualCarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Video className="w-8 h-8 text-primary-600 mr-3" />
                <span className="text-primary-600 font-medium">Virtual Healthcare</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Quality Healthcare, 
                <span className="text-primary-600 block">Wherever You Are</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with board-certified providers via secure video visits. Get diagnosis, 
                treatment, and prescriptions from the comfort of your home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Video className="w-5 h-5 mr-2" />
                  Start Virtual Visit
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  How It Works
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2 text-green-500" />
                  <span>Mobile Friendly</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                    <Video className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-primary-200 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-primary-300 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Virtual Visits Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting care virtually is simple and takes just a few minutes to set up.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Treated Conditions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our providers can diagnose and treat a wide range of conditions virtually.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 text-center"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your condition? Call us to see if virtual care is right for you.
            </p>
            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              View All Conditions
              <ArrowRight className="w-4 h-4 ml-1 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Healthcare in Your Pocket
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Download the One Medical app to access virtual care, schedule appointments, 
                message your provider, and manage your health from anywhere.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mobile Virtual Visits</h3>
                    <p className="text-gray-600">Join video calls directly from your phone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Secure Messaging</h3>
                    <p className="text-gray-600">Chat with your care team anytime</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Easy Scheduling</h3>
                    <p className="text-gray-600">Book appointments with one tap</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Download for iOS
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Download for Android
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-96 flex flex-col">
                    <div className="bg-primary-600 px-4 py-2 flex justify-between items-center">
                      <span className="text-white text-xs font-medium">9:41 AM</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 space-y-4">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center">
                          <Video className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Start Virtual Visit</p>
                            <p className="text-xs text-gray-500">Available now</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center">
                          <MessageCircle className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Messages</p>
                            <p className="text-xs text-gray-500">2 new messages</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Appointments</p>
                            <p className="text-xs text-gray-500">Next: Tomorrow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from patients who've used our virtual care services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Healthcare Organizations
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['HIPAA Compliant', 'Board Certified', '24/7 Available', 'Secure Platform'].map((trust) => (
              <div key={trust} className="text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{trust}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Try Virtual Care?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who get quality healthcare from the comfort of their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Video className="w-5 h-5 mr-2" />
              Start Virtual Visit Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Learn More About Virtual Care
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
