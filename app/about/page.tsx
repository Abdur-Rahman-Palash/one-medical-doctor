'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Heart, Users, Target, Award, Globe, Clock, Shield,
  ArrowRight, CheckCircle, Star, TrendingUp, Building2
} from 'lucide-react'

const stats = [
  {
    number: '500K+',
    label: 'Patients Served',
    description: 'Across all our locations'
  },
  {
    number: '50+',
    label: 'Locations',
    description: 'In major cities nationwide'
  },
  {
    number: '1,000+',
    label: 'Healthcare Providers',
    description: 'Board-certified experts'
  },
  {
    number: '4.9/5',
    label: 'Patient Satisfaction',
    description: 'Based on 10,000+ reviews'
  }
]

const values = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'We put our patients at the center of everything we do, providing personalized, compassionate care that addresses individual needs.'
  },
  {
    icon: Shield,
    title: 'Quality & Safety',
    description: 'We maintain the highest standards of medical care, following evidence-based practices and rigorous safety protocols.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously evolve our services and technology to provide the most advanced and convenient healthcare experience.'
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'We believe quality healthcare should be accessible to everyone, offering flexible scheduling and virtual care options.'
  }
]

const leadership = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'CEO & Chief Medical Officer',
    bio: 'Board-certified internal medicine physician with 20+ years of experience in healthcare leadership and innovation.',
    image: '/api/placeholder/200/200',
    education: 'Harvard Medical School, MBA from Stanford'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Healthcare technology expert focused on digital health solutions and patient experience innovation.',
    image: '/api/placeholder/200/200',
    education: 'MIT, Computer Science & Healthcare Innovation'
  },
  {
    name: 'Dr. James Rodriguez',
    role: 'Chief Medical Officer',
    bio: 'Cardiologist and healthcare executive dedicated to improving patient outcomes through integrated care models.',
    image: '/api/placeholder/200/200',
    education: 'Johns Hopkins, MBA from Wharton'
  },
  {
    name: 'Emily Thompson',
    role: 'Chief Operating Officer',
    bio: 'Healthcare operations expert with extensive experience in scaling medical practices and improving efficiency.',
    image: '/api/placeholder/200/200',
    education: 'Yale, Healthcare Administration'
  }
]

const timeline = [
  {
    year: '2010',
    title: 'Founded',
    description: 'One Medical was founded with a mission to transform healthcare delivery.'
  },
  {
    year: '2012',
    title: 'First Location',
    description: 'Opened our first medical office in New York City.'
  },
  {
    year: '2015',
    title: 'Virtual Care Launch',
    description: 'Introduced 24/7 virtual care services for members.'
  },
  {
    year: '2018',
    title: 'National Expansion',
    description: 'Expanded to 10 major cities across the United States.'
  },
  {
    year: '2020',
    title: 'Digital Innovation',
    description: 'Launched our mobile app and enhanced telehealth capabilities.'
  },
  {
    year: '2024',
    title: '500K Patients',
    description: 'Reached the milestone of serving over 500,000 patients nationwide.'
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Best Healthcare Innovation',
    organization: 'Health Tech Awards 2023',
    description: 'Recognized for our innovative approach to primary care delivery.'
  },
  {
    icon: Star,
    title: 'Top-Rated Healthcare Provider',
    organization: 'Patient Choice Awards 2023',
    description: 'Highest patient satisfaction scores in the industry.'
  },
  {
    icon: Globe,
    title: 'Excellence in Telemedicine',
    organization: 'Digital Health Summit 2022',
    description: 'Leading provider of virtual healthcare services.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About One Medical
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're transforming healthcare by putting patients first with convenient, 
              high-quality medical care that fits your life.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To transform healthcare by providing convenient, high-quality, and personalized medical care that puts patients first.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe healthcare should be simple, accessible, and focused on building long-term relationships between patients and providers. Through innovative technology and compassionate care, we're making this vision a reality.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                A world where everyone has access to exceptional healthcare that improves their quality of life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're building a healthcare system that's proactive, preventive, and personalized—where technology enhances the human connection between patients and providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a single office to a national healthcare leader.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2 px-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="text-primary-600 font-bold mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts guiding our mission to transform healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {leader.bio}
                </p>
                <p className="text-gray-500 text-xs">
                  {leader.education}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honored for our commitment to excellence in healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of the healthcare revolution. Whether you're a patient, provider, or partner, 
            there's a place for you at One Medical.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Become a Member
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
