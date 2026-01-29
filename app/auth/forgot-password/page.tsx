'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Mail, ArrowLeft, CheckCircle, AlertCircle, Shield,
  Lock, ArrowRight, Phone
} from 'lucide-react'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [method, setMethod] = useState<'email' | 'phone'>('email')
  const [contactValue, setContactValue] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactValue) {
      setError(`Please enter your ${method}`)
      return
    }

    if (method === 'email' && !/\S+@\S+\.\S+/.test(contactValue)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSuccess(true)
    } catch (err) {
      setError('Failed to send reset instructions. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMethodChange = (newMethod: 'email' | 'phone') => {
    setMethod(newMethod)
    setContactValue('')
    setError('')
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reset Instructions Sent
              </h2>
              <p className="text-gray-600 mb-8">
                We've sent password reset instructions to your {method}.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's next?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Check your {method === 'email' ? 'email inbox (and spam folder)' : 'SMS messages'}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Click the reset link in the message
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    Create a new password
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 mt-8">
                <button
                  onClick={() => router.push('/auth/login')}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Back to Login
                </button>
                
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Reset Password</h2>
            <p className="mt-2 text-gray-600">
              Enter your email or phone number to receive password reset instructions
            </p>
          </div>

          {/* Method Selection */}
          <div className="bg-gray-50 rounded-lg p-1 flex">
            <button
              onClick={() => handleMethodChange('email')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                method === 'email'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </button>
            <button
              onClick={() => handleMethodChange('phone')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                method === 'phone'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Shield className="w-4 h-4 mr-2" />
              Phone
            </button>
          </div>

          {/* Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                {method === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {method === 'email' ? (
                    <Mail className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Shield className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <input
                  id="contact"
                  type={method === 'email' ? 'email' : 'tel'}
                  required
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder={method === 'email' ? 'Enter your email' : 'Enter your phone number'}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Reset Instructions'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </button>
            </div>
          </form>

          {/* Security Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-blue-800 mb-1">Security Notice</h3>
                <p className="text-blue-700 text-sm">
                  For your security, we'll send a secure link that expires in 24 hours. 
                  If you don't receive the email within a few minutes, check your spam folder.
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">Other ways to reset your password:</p>
            <div className="space-y-2">
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Support: 1-800-ONE-MEDICAL
              </button>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Support Team
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Need Help?</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Can't access your email?</span>
                <span>Contact our support team for assistance.</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Forgot your email/phone?</span>
                <span>We can help verify your identity.</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Account locked?</span>
                <span>Try waiting 30 minutes or contact support.</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/faq" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
