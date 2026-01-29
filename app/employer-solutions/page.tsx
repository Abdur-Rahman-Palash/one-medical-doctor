'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Building2, Users, TrendingUp, Shield, Clock, Heart,
  CheckCircle, ArrowRight, Award, Phone, Mail, Star,
  Briefcase, Target, Zap
} from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Improved Employee Health',
    description: 'Comprehensive care leads to healthier, more productive employees with fewer sick days.',
    stats: '40% reduction in absenteeism'
  },
  {
    icon: TrendingUp,
    title: 'Cost Savings',
    description: 'Preventive care and better health outcomes reduce overall healthcare costs.',
    stats: '25% lower healthcare costs'
  },
  {
    icon: Users,
    title: 'Higher Retention',
    description: 'Quality healthcare benefits are a key factor in employee satisfaction and retention.',
    stats: '30% higher retention rates'
  },
  {
    icon: Shield,
    title: 'Compliance Support',
    description: 'We help you navigate healthcare regulations and ensure compliance.',
    stats: '100% regulatory compliance'
  }
]

const caseStudies = [
  {
    company: 'TechCorp Inc.',
    industry: 'Technology',
    employees: '500-1000',
    results: [
      '35% reduction in employee sick days',
      '28% decrease in healthcare costs',
      '92% employee satisfaction rate'
    ],
    quote: 'One Medical has transformed our employee benefits. Our team is healthier and more productive than ever.',
    logo: 'TC'
  },
  {
    company: 'Global Finance Group',
    industry: 'Financial Services',
    employees: '1000-5000',
    results: [
      '42% improvement in preventive care uptake',
      '31% reduction in emergency room visits',
      '88% employee retention improvement'
    ],
    quote: 'The ROI on our One Medical partnership has exceeded all expectations. It\'s a win-win for everyone.',
    logo: 'GFG'
  },
  {
    company: 'Retail Solutions Co.',
    industry: 'Retail',
    employees: '1000+',
    results: [
      '25% lower healthcare premiums',
      '40% increase in virtual care usage',
      '95% employee satisfaction'
    ],
    quote: 'Our employees love the convenience and quality of care. It\'s become a key differentiator in recruiting.',
    logo: 'RSC'
  }
]

const partnerLogos = [
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Google', logo: 'G' },
  { name: 'Amazon', logo: 'AMZ' },
  { name: 'Apple', logo: 'AP' },
  { name: 'Meta', logo: 'M' },
  { name: 'Netflix', logo: 'NF' }
]

const solutions = [
  {
    title: 'Small Business',
    employeeCount: '1-100 employees',
    price: 'Custom pricing',
    features: [
      'Group membership rates',
      'On-site health screenings',
      'Virtual care for all employees',
      'Health and wellness programs',
      'Dedicated account manager'
    ]
  },
  {
    title: 'Mid-Market',
    employeeCount: '101-1000 employees',
    price: 'Custom pricing',
    features: [
      'Everything in Small Business',
      'On-site primary care clinic',
      'Specialist consultations',
      'Executive health programs',
      'Advanced analytics and reporting'
    ]
  },
  {
    title: 'Enterprise',
    employeeCount: '1000+ employees',
    price: 'Custom pricing',
    features: [
      'Everything in Mid-Market',
      'Multiple on-site clinics',
      'Global medical coverage',
      'Custom wellness programs',
      'Dedicated clinical team',
      'White-labeled mobile app'
    ]
  }
]

export default function EmployerSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="w-8 h-8 text-primary-600 mr-3" />
                <span className="text-primary-600 font-medium">Employer Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Transform Your
                <span className="text-primary-600 block">Employee Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Provide your team with world-class healthcare that improves productivity, 
                reduces costs, and boosts employee satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Get Quote
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-500" />
                  <span>500+ Companies Trust Us</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-green-500" />
                  <span>4.9/5 Employer Rating</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-green-500" />
                  <span>Best Workplace Benefits</span>
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
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Employee Health Score</span>
                        <span className="text-sm text-green-600 font-semibold">+15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Cost Savings</span>
                        <span className="text-sm text-green-600 font-semibold">$2.4M</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">Employee Satisfaction</span>
                        <span className="text-sm text-green-600 font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Companies Choose One Medical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deliver exceptional healthcare benefits that drive business results.
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
                  <p className="text-gray-600 mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-primary-600 font-semibold text-sm">
                    {benefit.stats}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Business Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable healthcare solutions tailored to your organization's needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-2">{solution.employeeCount}</p>
                  <p className="text-2xl font-bold text-primary-600">{solution.price}</p>
                </div>
                
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies are transforming their employee healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{study.logo}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{study.industry}</p>
                    <p className="text-sm text-gray-600">{study.employees}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{study.quote}"
                </blockquote>
                
                <div className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <Target className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-lg">{partner.logo}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Employee Benefits?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies providing world-class healthcare to their teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Get Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
