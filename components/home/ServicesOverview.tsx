import { services } from '@/data/services'
import { Brain, Heart, Flower, Activity, Users, HeartHandshake } from 'lucide-react'

const iconMap = {
  brain: Brain,
  heart: Heart,
  flower: Flower,
  pulse: HeartHandshake,
  activity: Activity,
  users: Users,
}

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care for a wide range of health conditions, from preventive care to chronic disease management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            if (!IconComponent) {
              console.warn(`Icon not found for service: ${service.icon}`)
              return null
            }
            
            return (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            View all services
            <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
