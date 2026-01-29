'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Users, AlertTriangle, Shield, Heart, Activity, Clock,
  ChevronRight, Mail, Phone, Stethoscope, FileText
} from 'lucide-react'

const medicalTerms = [
  {
    category: 'General Medical Terms',
    terms: [
      {
        term: 'HIPAA (Health Insurance Portability and Accountability Act)',
        definition: 'A federal law that protects the privacy of an individual\'s personal health information and provides rights regarding that information.'
      },
      {
        term: 'Electronic Health Record (EHR)',
        definition: 'A digital version of a patient\'s paper chart. EHRs are real-time, patient-centered records that make information available instantly and securely to authorized users.'
      },
      {
        term: 'Telemedicine',
        definition: 'The use of electronic information and communication technologies to provide and support healthcare when distance separates participants.'
      },
      {
        term: 'Primary Care',
        definition: 'Day-to-day healthcare provided by a healthcare provider. Typically this provider acts as the first point of contact and principal point of continuing care for patients.'
      }
    ]
  },
  {
    category: 'Consent and Authorization',
    terms: [
      {
        term: 'Informed Consent',
        definition: 'The process of getting permission before conducting a healthcare intervention on a person, or for disclosing personal information. This requires that the patient or client understands and agrees to the procedure.'
      },
      {
        term: 'Medical Authorization',
        definition: 'Permission given by a patient that allows healthcare providers to share their medical information with other parties, such as insurance companies or other healthcare providers.'
      },
      {
        term: 'Consent to Treat',
        definition: 'Agreement by a patient to receive medical treatment after being informed of the nature of the treatment, potential risks, and alternatives.'
      }
    ]
  },
  {
    category: 'Privacy and Confidentiality',
    terms: [
      {
        term: 'Protected Health Information (PHI)',
        definition: 'Any information about health status, provision of healthcare, or payment for healthcare that can be linked to an individual. This is interpreted rather broadly and includes any part of a medical record or payment history.'
      },
      {
        term: 'Confidentiality',
        definition: 'The principle that physicians and healthcare providers will not reveal any information discussed in a private healthcare setting without the explicit consent of the patient.'
      },
      {
        term: 'Privileged Communication',
        definition: 'A legal concept that protects certain communications from being used as evidence in court. Doctor-patient communications are typically considered privileged.'
      }
    ]
  },
  {
    category: 'Treatment and Procedures',
    terms: [
      {
        term: 'Standard of Care',
        definition: 'The degree of prudence and caution required of an individual who is under a duty of care. In medical terms, it refers to the level of care that a reasonably competent healthcare professional would provide under similar circumstances.'
      },
      {
        term: 'Diagnosis',
        definition: 'The identification of the nature and cause of a certain phenomenon. Diagnosis is used in many different disciplines with variations in the use of logic, analytics, and experience.'
      },
      {
        term: 'Treatment Plan',
        definition: 'A detailed plan with information about a patient\'s disease, the prescribed treatment, and the expected outcome of the treatment.'
      },
      {
        term: 'Referral',
        definition: 'The process of sending a patient to another physician or healthcare provider for consultation or specialized care.'
      }
    ]
  },
  {
    category: 'Emergency and Urgent Care',
    terms: [
      {
        term: 'Emergency Medical Condition',
        definition: 'A medical condition manifesting itself by acute symptoms of sufficient severity (including severe pain) such that the absence of immediate medical attention could reasonably be expected to result in serious jeopardy to patient health.'
      },
      {
        term: 'Urgent Care',
        definition: 'Medical care provided for conditions that require prompt attention but do not pose an immediate, serious health threat.'
      },
      {
        term: 'Emergency Room (ER)',
        definition: 'A department of a hospital where patients receive treatment for emergencies, trauma, and other urgent medical conditions.'
      }
    ]
  }
]

const disclaimers = [
  {
    icon: AlertTriangle,
    title: 'Medical Emergency Disclaimer',
    content: 'These terms are for informational purposes only and do not constitute medical advice. For medical emergencies, call 911 or visit the nearest emergency room immediately.'
  },
  {
    icon: Shield,
    title: 'Legal Disclaimer',
    content: 'These definitions are general in nature and may vary by jurisdiction. Always consult with qualified healthcare professionals for specific medical advice.'
  },
  {
    icon: Heart,
    title: 'Patient Rights',
    content: 'As a patient, you have the right to understand all medical terms and procedures used in your care. Always ask your provider to explain anything you don\'t understand.'
  }
]

const contactInfo = {
  medical: 'medical@onemedical.com',
  phone: '1-800-555-0125',
  address: 'One Medical Education Department, 123 Medical Plaza, New York, NY 10001'
}

export default function MedicalTermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Stethoscope className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Medical Terms & Definitions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding healthcare terminology to help you make informed decisions about your care.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {disclaimers.map((disclaimer, index) => {
              const IconComponent = disclaimer.icon
              return (
                <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-start">
                    <IconComponent className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-800 mb-2">
                        {disclaimer.title}
                      </h3>
                      <p className="text-red-700 text-sm">
                        {disclaimer.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Medical Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Glossary</h2>
                <p className="text-gray-600 leading-relaxed">
                  This glossary provides definitions for common medical and healthcare terms you may encounter 
                  during your treatment with One Medical. Understanding these terms can help you make informed 
                  decisions about your healthcare.
                </p>
              </div>

              {medicalTerms.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.terms.map((term, termIndex) => (
                      <div key={termIndex} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {term.term}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <FileText className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Handbook</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive guide to your rights and responsibilities.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Download PDF
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Rights</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about your rights as a healthcare patient.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Activity className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Procedures Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Step-by-step guides for common medical procedures.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                View Guide
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
            
            <a href="#" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Heart className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Library</h3>
              <p className="text-gray-600 text-sm mb-4">
                Educational resources on various health topics.
              </p>
              <span className="text-primary-600 font-medium flex items-center">
                Explore Library
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See a Term?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you encounter a medical term you don't understand, ask your healthcare provider or contact our education team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Your Provider</h3>
              <p className="text-gray-600 text-sm mb-4">
                Your healthcare provider is your best resource for understanding medical terms related to your care.
              </p>
              <button className="text-primary-600 font-medium flex items-center justify-center">
                Schedule Appointment
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Our Team</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our education team can help clarify medical terminology and concepts.
              </p>
              <a href={`mailto:${contactInfo.medical}`} className="text-primary-600 font-medium flex items-center justify-center">
                Send Email
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Support</h3>
              <p className="text-gray-600 text-sm mb-4">
                Speak with our care team for immediate assistance with medical questions.
              </p>
              <a href={`tel:${contactInfo.phone}`} className="text-primary-600 font-medium flex items-center justify-center">
                Call Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education Department Contact
            </h2>
            <p className="text-xl text-gray-600">
              For questions about medical terminology or educational resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.medical}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                {contactInfo.medical}
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
              <Stethoscope className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mail</h3>
              <p className="text-gray-600">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
