'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { services } from '@/data/services'
import { Brain, Heart, Flower, Activity, Users, HeartHandshake, Filter, ArrowRight } from 'lucide-react'

const iconMap = {
  brain: Brain,
  heart: Heart,
  flower: Flower,
  pulse: HeartHandshake,
  activity: Activity,
  users: Users,
}

const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'mental', name: 'Mental Health' },
  { id: 'physical', name: 'Physical Health' },
  { id: 'preventive', name: 'Preventive Care' },
  { id: 'chronic', name: 'Chronic Conditions' },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => {
        // Simple categorization logic - in real app, this would come from data
        if (selectedCategory === 'mental') return ['Depression', 'Anxiety'].includes(service.title)
        if (selectedCategory === 'physical') return ['Heart Health', 'Allergies'].includes(service.title)
        if (selectedCategory === 'preventive') return ['Women\'s Health'].includes(service.title)
        if (selectedCategory === 'chronic') return ['Diabetes', 'Heart Health'].includes(service.title)
        return true
      })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Healthcare Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive care for your physical and mental health, from preventive services to chronic disease management.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              
              if (!IconComponent) return null

              return (
                <a
                  key={service.id}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              )
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our care team is here to help you find the right healthcare services for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Call Us: 1-800-ONE-MEDICAL
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
