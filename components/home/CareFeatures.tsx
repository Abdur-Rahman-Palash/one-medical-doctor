import { Calendar, Clock, Droplet, Shield } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Same-day or next-day appointments',
    description: 'Get the care you need when you need it with flexible scheduling options.'
  },
  {
    icon: Clock,
    title: 'Longer, unrushed visits',
    description: 'Our providers spend quality time with you to understand your health concerns.'
  },
  {
    icon: Droplet,
    title: 'Drop-in lab services',
    description: 'Convenient on-site lab services with no appointment needed for most tests.'
  },
  {
    icon: Shield,
    title: 'Insurance coverage',
    description: 'We accept most major insurance plans to make healthcare accessible and affordable.'
  }
]

export default function CareFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Better Care, Designed for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience healthcare that puts your needs first with convenient, comprehensive services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
