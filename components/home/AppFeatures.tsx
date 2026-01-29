import { MessageCircle, Calendar as CalendarIcon, Pill, Smartphone } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Secure messaging with providers',
    description: 'Get quick answers to your health questions from your care team.'
  },
  {
    icon: CalendarIcon,
    title: 'Appointment scheduling',
    description: 'Book, reschedule, or cancel appointments with just a few taps.'
  },
  {
    icon: Pill,
    title: 'Prescription renewals',
    description: 'Request prescription refills and track your medications easily.'
  },
  {
    icon: Smartphone,
    title: '24/7 virtual care',
    description: 'Connect with healthcare providers anytime, anywhere through video visits.'
  }
]

export default function AppFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - App mockup */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone screen */}
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 h-96 flex flex-col">
                    {/* Status bar */}
                    <div className="bg-primary-600 px-4 py-2 flex justify-between items-center">
                      <span className="text-white text-xs font-medium">9:41 AM</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 p-4 space-y-4">
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
                          <CalendarIcon className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Next Appointment</p>
                            <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex items-center">
                          <Pill className="w-5 h-5 text-primary-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Prescriptions</p>
                            <p className="text-xs text-gray-500">1 refill available</p>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-primary-600 text-white rounded-lg py-3 font-medium text-sm hover:bg-primary-700 transition-colors">
                        Start Virtual Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          {/* Right side - Features list */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Healthcare in Your Pocket
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Manage your health anytime, anywhere with our mobile app designed for modern life.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-8">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Download the App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
