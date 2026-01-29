'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle,
  Phone, Mail, Users, Calendar, Shield, CreditCard
} from 'lucide-react'

const faqCategories = [
  { id: 'all', name: 'All Categories', icon: HelpCircle },
  { id: 'general', name: 'General', icon: Users },
  { id: 'appointments', name: 'Appointments', icon: Calendar },
  { id: 'billing', name: 'Billing & Insurance', icon: CreditCard },
  { id: 'virtual-care', name: 'Virtual Care', icon: MessageCircle },
  { id: 'membership', name: 'Membership', icon: Shield }
]

const faqs = [
  {
    id: '1',
    category: 'general',
    question: 'What is One Medical?',
    answer: 'One Medical is a modern healthcare platform that provides convenient, high-quality primary care through our mobile app, website, and physical locations. We offer 24/7 virtual care, same-day appointments, and a personalized approach to healthcare.'
  },
  {
    id: '2',
    category: 'general',
    question: 'How is One Medical different from traditional healthcare?',
    answer: 'One Medical offers longer appointment times, 24/7 virtual care, same-day or next-day appointments, a mobile app for easy scheduling and communication, and membership-based pricing that covers many services.'
  },
  {
    id: '3',
    category: 'appointments',
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule appointments through our mobile app, website, or by calling our care team. Simply choose your preferred provider, select a time slot, and confirm your appointment. Same-day appointments are often available.'
  },
  {
    id: '4',
    category: 'appointments',
    question: 'Can I cancel or reschedule my appointment?',
    answer: 'Yes, you can cancel or reschedule appointments through our app or website up to 2 hours before your scheduled time without any penalty. For late cancellations, a small fee may apply.'
  },
  {
    id: '5',
    category: 'virtual-care',
    question: 'How does virtual care work?',
    answer: 'Virtual care allows you to have video visits with providers from anywhere. Simply schedule a virtual appointment, and you\'ll receive a secure link to join the video call at your scheduled time. You can use your smartphone, tablet, or computer.'
  },
  {
    id: '6',
    category: 'virtual-care',
    question: 'What conditions can be treated through virtual care?',
    answer: 'Virtual care is suitable for many conditions including cold and flu, allergies, skin rashes, medication refills, mental health support, and follow-up visits. For emergencies or serious conditions, in-person care is recommended.'
  },
  {
    id: '7',
    category: 'billing',
    question: 'What does the membership fee cover?',
    answer: 'The membership fee covers unlimited primary care visits, 24/7 virtual care, preventive screenings, basic lab tests, and access to our mobile app. Depending on your plan, it may also include specialist visits and additional services.'
  },
  {
    id: '8',
    category: 'billing',
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance plans. Your membership covers services that may not be covered by insurance, and we can help you navigate your benefits to maximize your coverage.'
  },
  {
    id: '9',
    category: 'membership',
    question: 'Can I add family members to my membership?',
    answer: 'Yes, you can add family members to your membership at a discounted rate. Family members under 26 can be added to your plan at no additional cost, and other family members receive special pricing.'
  },
  {
    id: '10',
    category: 'membership',
    question: 'Is there a long-term commitment?',
    answer: 'Memberships are annual, but we offer a 30-day money-back guarantee if you\'re not satisfied. You can also cancel at any time with a prorated refund of your remaining membership fee.'
  },
  {
    id: '11',
    category: 'general',
    question: 'Where are your locations?',
    answer: 'We have locations in major cities across the United States, including New York, San Francisco, Los Angeles, Boston, Chicago, and more. You can find all locations and their services on our website.'
  },
  {
    id: '12',
    category: 'appointments',
    question: 'What should I bring to my appointment?',
    answer: 'Bring your insurance card, photo ID, list of current medications, and any questions or concerns you want to discuss. If it\'s your first visit, arrive 15 minutes early to complete paperwork.'
  }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const toggleAll = (expand: boolean) => {
    if (expand) {
      setExpandedItems(new Set(filteredFaqs.map(faq => faq.id)))
    } else {
      setExpandedItems(new Set())
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about One Medical services, 
              membership, and care options.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} found
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => toggleAll(true)}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
              >
                Expand All
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => toggleAll(false)}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm"
              >
                Collapse All
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{faq.question}</span>
                  </div>
                  {expandedItems.has(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedItems.has(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="pl-8 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or category filter</p>
              <button 
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our care team is here to help. Reach out through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our care team for immediate assistance</p>
              <a href="tel:1-800-ONE-MEDICAL" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                1-800-ONE-MEDICAL
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
              <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send detailed questions or requests</p>
              <a href="mailto:support@onemedical.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                support@onemedical.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick links to commonly asked questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Getting Started', count: 8 },
              { title: 'Membership Plans', count: 12 },
              { title: 'Virtual Care', count: 15 },
              { title: 'Billing & Insurance', count: 10 }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{topic.count} questions</p>
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-sm">
                  View Questions →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
