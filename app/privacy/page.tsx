'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Shield, Eye, Lock, Database, Users, AlertTriangle,
  ChevronRight, Mail, Phone, Cookie, Download, FileText
} from 'lucide-react'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as when you create an account, schedule appointments, or contact us. This includes personal identifiers, contact information, health information, and payment details.',
    subsections: [
      'Personal Information: Name, date of birth, contact details',
      'Health Information: Medical history, symptoms, treatments, test results',
      'Payment Information: Insurance details, credit card information',
      'Usage Data: How you interact with our services and platforms'
    ]
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use your information to provide healthcare services, communicate with you, process payments, and improve our services. We also use aggregated data for research and analytics.',
    subsections: [
      'To provide medical care and treatment',
      'To schedule appointments and manage your account',
      'To process payments and insurance claims',
      'To communicate with you about your health',
      'To improve our services and develop new features'
    ]
  },
  {
    title: '3. Information Sharing',
    content: 'We share your information only as necessary to provide healthcare services, comply with legal obligations, or as authorized by you. We never sell your personal health information.',
    subsections: [
      'With healthcare providers involved in your care',
      'With insurance companies for billing purposes',
      'With law enforcement when required by law',
      'With business associates who provide services to us'
    ]
  },
  {
    title: '4. Data Security',
    content: 'We implement industry-standard security measures to protect your information. This includes encryption, secure servers, access controls, and regular security audits.',
    subsections: [
      '256-bit encryption for data transmission and storage',
      'Secure authentication and access controls',
      'Regular security monitoring and testing',
      'Staff training on privacy and security protocols'
    ]
  },
  {
    title: '5. Your Rights',
    content: 'You have rights regarding your personal health information under HIPAA and applicable laws. These include the right to access, amend, and obtain an accounting of disclosures.',
    subsections: [
      'Right to access your health information',
      'Right to request corrections to your information',
      'Right to know how your information is used and shared',
      'Right to request restrictions on certain uses and disclosures'
    ]
  },
  {
    title: '6. Cookies and Tracking',
    content: 'We use cookies and similar technologies to enhance your experience on our website and mobile apps. You can control cookie settings through your browser preferences.',
    subsections: [
      'Essential cookies for basic functionality',
      'Analytics cookies to understand usage patterns',
      'Personalization cookies to customize your experience',
      'Advertising cookies for relevant content'
    ]
  },
  {
    title: '7. Data Retention',
    content: 'We retain your health information as required by law and for legitimate business purposes. Different types of information have different retention periods.',
    subsections: [
      'Medical records: Retained for minimum legal requirements',
      'Account information: Retained while you are a member',
      'Analytics data: Retained in aggregated, anonymized form'
    ]
  },
  {
    title: '8. Children\'s Privacy',
    content: 'Our services are not intended for children under 18 without parental consent. We do not knowingly collect personal information from children under 13.',
    subsections: [
      'Parental consent required for minors',
      'Limited data collection for pediatric patients',
      'Special protections for children\'s health information'
    ]
  }
]

const contactInfo = {
  privacy: 'privacy@onemedical.com',
  phone: '1-800-555-0124',
  address: 'One Medical Privacy Officer, 123 Medical Plaza, New York, NY 10001'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect and use your health information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Notice */}
      <section className="py-8 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h2 className="text-2xl font-bold text-white">
                HIPAA Compliant
              </h2>
            </div>
            <p className="text-primary-100">
              One Medical is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA) 
              and all applicable privacy regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Privacy Commitment</h2>
                <p className="text-gray-600 leading-relaxed">
                  At One Medical, we are committed to protecting your privacy and safeguarding your personal 
                  health information. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
              </div>

              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  
                  {section.subsections && (
                    <ul className="space-y-2">
                      {section.subsections.map((subsection, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <Lock className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{subsection}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Important Privacy Features */}
              <div className="mt-12 space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Your Rights Under HIPAA
                      </h3>
                      <p className="text-green-700">
                        You have the right to access your medical records, request corrections, 
                        and know how your information is used. Contact our Privacy Officer to exercise these rights.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Database className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        Data Security Measures
                      </h3>
                      <p className="text-blue-700">
                        We use industry-leading security measures including encryption, secure servers, 
                        and regular security audits to protect your information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Cookie className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Cookie Preferences
                      </h3>
                      <p className="text-yellow-700">
                        You can control how we use cookies through your browser settings. 
                        Essential cookies cannot be disabled as they are required for basic functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Tools & Controls
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Eye className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Your Data</h3>
              <p className="text-gray-600 text-sm mb-4">
                Request a copy of all your personal and health information.
              </p>
              <button className="text-primary-600 font-medium flex items-center">
                Request Data
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Download className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Your Records</h3>
              <p className="text-gray-600 text-sm mb-4">
                Export your medical records in a portable format.
              </p>
              <button className="text-primary-600 font-medium flex items-center">
                Download Records
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Permissions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Control who can access your health information.
              </p>
              <button className="text-primary-600 font-medium flex items-center">
                Manage Access
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Privacy Officer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Our Privacy Officer
            </h2>
            <p className="text-xl text-gray-600">
              For privacy concerns, data requests, or to exercise your rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.privacy}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                {contactInfo.privacy}
              </a>
            </div>
            
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mail</h3>
              <p className="text-gray-600">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Documents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/terms" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <FileText className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms & Conditions</h3>
              <p className="text-gray-600 text-sm mb-4">
                Read our terms of service and user agreements.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Read Terms
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="/medical-terms" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Terms</h3>
              <p className="text-gray-600 text-sm mb-4">
                Important medical and healthcare-related terms.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Read Medical Terms
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="/contact" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Mail className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm mb-4">
                Have questions about privacy? Contact our team.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Contact Support
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
