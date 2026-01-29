'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CheckCircle, Star, Users, Shield, Clock, Video, ArrowRight, HelpCircle, Award } from 'lucide-react'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 199,
    period: 'year',
    description: 'Essential healthcare for individuals and families',
    popular: false,
    features: ['Unlimited primary care visits', '24/7 virtual care', 'Preventive screenings', 'Basic lab tests'],
    cta: 'Get Started'
  },
  {
    id: 'plus',
    name: 'Plus',
    price: 299,
    period: 'year',
    description: 'Comprehensive care with added benefits',
    popular: true,
    features: ['Everything in Basic', 'Specialist consultations', 'Advanced imaging', 'Priority scheduling'],
    cta: 'Choose Plus'
  },
  {
    id: 'executive',
    name: 'Executive',
    price: 599,
    period: 'year',
    description: 'Premium healthcare with concierge services',
    popular: false,
    features: ['Everything in Plus', 'Executive health screening', 'Concierge services', 'Direct provider access'],
    cta: 'Choose Executive'
  }
]

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-8 h-8 text-primary-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Healthcare Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Get the care you need.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full mx-4"
              style={{ backgroundColor: billingCycle === 'annual' ? '#0284c7' : '#d1d5db' }}
            >
              <span
                className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                style={{ transform: billingCycle === 'annual' ? 'translateX(1.25rem)' : 'translateX(0.25rem)' }}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-primary-600' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${billingCycle === 'annual' ? plan.price : Math.round(plan.price / 12)}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'annual' ? 'year' : 'month'}
                      </span>
                    </div>
                    
                    <button
                      className={`w-full py-3 rounded-lg font-semibold ${
                        plan.popular
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Join Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Compare Plans
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
