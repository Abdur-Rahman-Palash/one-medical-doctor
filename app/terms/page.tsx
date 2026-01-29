'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  FileText, Shield, Users, CreditCard, AlertTriangle,
  ChevronRight, Calendar, Mail, Phone
} from 'lucide-react'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using One Medical services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
  },
  {
    title: '2. Description of Service',
    content: 'One Medical provides comprehensive healthcare services including primary care, virtual care, specialist consultations, and preventive health services. Our services are delivered through physical locations, mobile applications, and web platforms.'
  },
  {
    title: '3. Membership and Payment',
    content: 'Membership fees are billed annually or monthly as selected during registration. All fees are non-refundable except as specified in our cancellation policy. Payment methods accepted include credit cards, debit cards, and electronic funds transfer.'
  },
  {
    title: '4. Medical Services',
    content: 'Medical services are provided by licensed healthcare professionals. One Medical does not guarantee specific medical outcomes and all medical decisions are made at the discretion of treating physicians.'
  },
  {
    title: '5. Privacy and Data Protection',
    content: 'We are committed to protecting your privacy. All personal health information is handled in accordance with HIPAA regulations and our Privacy Policy. We implement appropriate security measures to protect your data.'
  },
  {
    title: '6. User Responsibilities',
    content: 'Users must provide accurate and complete information, follow medical advice appropriately, and respect healthcare providers and staff. Users are responsible for keeping their account information secure.'
  },
  {
    title: '7. Cancellation and Refunds',
    content: 'Memberships can be cancelled with 30 days notice. Refunds are provided on a prorated basis for the unused portion of your membership. No refunds are provided for services already rendered.'
  },
  {
    title: '8. Limitation of Liability',
    content: 'One Medical shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.'
  },
  {
    title: '9. Intellectual Property',
    content: 'All content, trademarks, and intellectual property on our platforms belong to One Medical. Users may not use, copy, or distribute any content without explicit permission.'
  },
  {
    title: '10. Termination',
    content: 'We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'
  }
]

const contactInfo = {
  email: 'legal@onemedical.com',
  phone: '1-800-555-0123',
  address: 'One Medical Legal Department, 123 Medical Plaza, New York, NY 10001'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using One Medical services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#membership" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              Membership
            </a>
            <a href="#privacy" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </a>
            <a href="#medical" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Medical Services
            </a>
            <a href="#contact" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to One Medical. These Terms and Conditions govern your use of our healthcare services, 
                  mobile applications, and website. By using our services, you agree to these terms.
                </p>
              </div>

              {sections.map((section, index) => (
                <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Additional Important Sections */}
              <div className="mt-12 space-y-8">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                        Important Medical Disclaimer
                      </h3>
                      <p className="text-yellow-700">
                        One Medical services are not intended for emergency medical care. 
                        For life-threatening emergencies, call 911 or visit the nearest emergency room immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        HIPAA Compliance
                      </h3>
                      <p className="text-blue-700">
                        We are fully compliant with HIPAA regulations and take every precaution 
                        to protect your personal health information. All our staff is trained in privacy and security protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            <a href="/privacy" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Shield className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how we collect, use, and protect your personal information.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Read Privacy Policy
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="/medical-terms" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Terms</h3>
              <p className="text-gray-600 text-sm mb-4">
                Important medical and healthcare-related terms and conditions.
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
                Have questions about our terms? Contact our legal team.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Contact Legal Team
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Legal Department Contact
            </h2>
            <p className="text-xl text-gray-600">
              For questions about these terms or legal matters, contact our legal team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                {contactInfo.email}
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
              <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mail</h3>
              <p className="text-gray-600">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              These Terms & Conditions were last updated on January 15, 2024 and are effective immediately.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              By continuing to use One Medical services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms & Conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
