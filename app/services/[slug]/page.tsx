'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { services } from '@/data/services'
import { 
  Brain, Heart, Flower, Activity, Users, HeartHandshake, 
  Calendar, Clock, MapPin, CheckCircle, ArrowRight, Star,
  Phone, MessageCircle, Video
} from 'lucide-react'

const iconMap = {
  brain: Brain,
  heart: Heart,
  flower: Flower,
  pulse: HeartHandshake,
  activity: Activity,
  users: Users,
}

// Mock data for service details
const serviceDetails: Record<string, any> = {
  'depression': {
    title: 'Depression',
    description: 'Comprehensive mental health support and treatment options for depression.',
    fullDescription: 'Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities. At One Medical, we provide comprehensive care including medication management, therapy referrals, and ongoing support to help you regain your quality of life.',
    symptoms: [
      'Persistent feelings of sadness or emptiness',
      'Loss of interest in activities you once enjoyed',
      'Changes in appetite or weight',
      'Sleep disturbances',
      'Fatigue or loss of energy',
      'Feelings of worthlessness or guilt',
      'Difficulty concentrating or making decisions',
      'Thoughts of death or suicide'
    ],
    treatments: [
      'Medication management with antidepressants',
      'Psychotherapy (CBT, interpersonal therapy)',
      'Lifestyle modifications and exercise programs',
      'Stress management techniques',
      'Regular follow-up and monitoring',
      'Coordination with mental health specialists'
    ],
    whatToExpect: 'Your initial visit will include a comprehensive evaluation of your symptoms, medical history, and lifestyle factors. We\'ll work together to create a personalized treatment plan that may include medication, therapy referrals, and lifestyle recommendations.',
    relatedServices: ['Anxiety', 'Women\'s Health']
  },
  'anxiety': {
    title: 'Anxiety',
    description: 'Expert care for anxiety disorders and stress management.',
    fullDescription: 'Anxiety disorders involve more than temporary worry or fear. For a person with an anxiety disorder, the anxiety does not go away and can get worse over time. Our providers offer evidence-based treatments to help you manage anxiety and improve your daily functioning.',
    symptoms: [
      'Excessive worry or fear',
      'Restlessness or feeling on edge',
      'Difficulty concentrating',
      'Irritability',
      'Sleep disturbances',
      'Physical symptoms like rapid heartbeat or sweating',
      'Avoidance of anxiety-provoking situations'
    ],
    treatments: [
      'Anti-anxiety medications',
      'Cognitive behavioral therapy',
      'Stress reduction techniques',
      'Mindfulness and meditation training',
      'Regular exercise recommendations',
      'Sleep hygiene improvement'
    ],
    whatToExpect: 'During your visit, we\'ll assess your anxiety symptoms, discuss triggers, and develop a comprehensive treatment plan. This may include medication, therapy referrals, and practical coping strategies.',
    relatedServices: ['Depression', 'Heart Health']
  },
  'heart-health': {
    title: 'Heart Health',
    description: 'Preventive care and management for cardiovascular conditions.',
    fullDescription: 'Heart health is crucial for overall wellness. Our providers offer comprehensive cardiovascular care including risk assessment, preventive screenings, and management of heart conditions to help you maintain a healthy heart.',
    symptoms: [
      'Chest pain or discomfort',
      'Shortness of breath',
      'Irregular heartbeat',
      'Fatigue or weakness',
      'Swelling in legs, ankles, or feet',
      'Dizziness or lightheadedness'
    ],
    treatments: [
      'Cardiovascular risk assessment',
      'Blood pressure management',
      'Cholesterol monitoring and treatment',
      'Lifestyle counseling',
      'Medication management',
      'Referral to cardiology specialists'
    ],
    whatToExpect: 'Your heart health evaluation will include a thorough medical history, physical exam, and necessary screenings. We\'ll create a personalized plan to manage risk factors and maintain cardiovascular health.',
    relatedServices: ['Diabetes', 'Preventive Care']
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  // Find the service or use a default
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === slug) || services[0]
  const details = serviceDetails[slug] || serviceDetails['depression']
  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  {IconComponent && <IconComponent className="w-6 h-6 text-primary-600" />}
                </div>
                <span className="text-primary-600 font-medium">Healthcare Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {details.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {details.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book an Appointment
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl h-96 flex items-center justify-center">
                {IconComponent && <IconComponent className="w-32 h-32 text-primary-300" />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['overview', 'symptoms', 'treatments', 'what-to-expect'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </nav>
          </div>

          <div className="prose max-w-none">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {details.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {details.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose One Medical</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Same-day or next-day appointments available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Extended visit times for thorough care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">24/7 virtual care support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Coordination with specialists when needed</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Visit Duration</p>
                        <p className="text-sm text-gray-600">30-60 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Available At</p>
                        <p className="text-sm text-gray-600">All locations</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Video className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Virtual Care</p>
                        <p className="text-sm text-gray-600">Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'symptoms' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Symptoms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.symptoms.map((symptom: string, index: number) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{symptom}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800">
                    <strong>Important:</strong> If you're experiencing severe symptoms or a medical emergency, please call 911 or visit the nearest emergency room.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'treatments' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Options</h2>
                <div className="space-y-4">
                  {details.treatments.map((treatment: string, index: number) => (
                    <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'what-to-expect' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                <div className="prose max-w-3xl">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {details.whatToExpect}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Before Your Visit</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bring a list of current medications</li>
                    <li>• Note any symptoms or concerns</li>
                    <li>• Have your insurance information ready</li>
                    <li>• Arrive 15 minutes early for paperwork</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">After Your Visit</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Follow-up appointments will be scheduled as needed</li>
                    <li>• Prescriptions can be sent to your preferred pharmacy</li>
                    <li>• Lab results will be communicated through the patient portal</li>
                    <li>• 24/7 virtual support is available for questions</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.relatedServices.map((serviceName: string) => {
              const relatedService = services.find(s => s.title === serviceName)
              if (!relatedService) return null
              
              const RelatedIconComponent = iconMap[relatedService.icon as keyof typeof iconMap]
              if (!RelatedIconComponent) return null

              return (
                <a
                  key={relatedService.id}
                  href={`/services/${relatedService.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <RelatedIconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedService.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book an appointment today and take the first step toward better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Virtual Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
