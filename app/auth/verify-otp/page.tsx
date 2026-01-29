'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Shield, AlertCircle, ArrowLeft, Mail, Phone,
  CheckCircle, RefreshCw, ArrowRight
} from 'lucide-react'

export default function VerifyOTPPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [otp, setOtp] = useState(['', '', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes
  const [isResending, setIsResending] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  
  const email = searchParams.get('email') || ''
  const phone = searchParams.get('phone') || ''
  const method = searchParams.get('method') || 'email' // email or phone

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOtpChange = (index: number, value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/\D/g, '')
    
    const newOtp = [...otp]
    newOtp[index] = numericValue.slice(0, 1)
    setOtp(newOtp)
    
    // Auto-focus next input
    if (numericValue && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement
      if (nextInput) nextInput.focus()
    }
    
    // Clear error
    if (error) setError('')
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement
      if (prevInput) {
        prevInput.focus()
        const newOtp = [...otp]
        newOtp[index - 1] = ''
        setOtp(newOtp)
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = pastedData.split('').slice(0, 6)
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const otpValue = otp.join('')
    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Mock OTP verification (accepts 123456 for demo)
      if (otpValue === '123456') {
        setIsVerified(true)
        
        // Store verification status
        localStorage.setItem('isVerified', 'true')
        
        // Redirect to dashboard after success
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      } else {
        setError('Invalid OTP. Please try again.')
      }
    } catch (err) {
      setError('Verification failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResend = async () => {
    setIsResending(true)
    setError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset timer
      setTimeLeft(120)
      setOtp(['', '', '', '', '', ''])
      
      // Focus first input
      const firstInput = document.getElementById('otp-0') as HTMLInputElement
      if (firstInput) firstInput.focus()
    } catch (err) {
      setError('Failed to resend OTP. Please try again.')
    } finally {
      setIsResending(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (isVerified) {
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
                Verification Successful!
              </h2>
              <p className="text-gray-600 mb-8">
                Your account has been verified successfully.
              </p>
              
              <div className="animate-pulse">
                <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
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
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Verify Your Account</h2>
            <p className="mt-2 text-gray-600">
              We've sent a 6-digit code to {method === 'email' ? 'your email' : 'your phone number'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {method === 'email' ? email : phone}
            </p>
          </div>

          {/* OTP Input */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Enter verification code
              </label>
              <div className="flex justify-center space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-12 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    inputMode="numeric"
                    autoComplete="off"
                  />
                ))}
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700 text-sm">{error}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Demo Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-blue-700 text-sm">
                <strong>Demo:</strong> Use code <span className="font-mono">123456</span> to verify
              </p>
            </div>

            {/* Timer and Resend */}
            <div className="text-center">
              {timeLeft > 0 ? (
                <p className="text-gray-600 text-sm">
                  Resend code in <span className="font-semibold">{formatTime(timeLeft)}</span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Resend Code
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  Verify Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>

            {/* Back Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            </div>
          </form>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Didn't receive the code?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Check your {method === 'email' ? 'spam folder' : 'SMS messages'}
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Make sure your {method === 'email' ? 'email address' : 'phone number'} is correct
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                Wait a few minutes and try again
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Need help? Contact our support team:</p>
              <div className="space-y-1">
                <a href="tel:1-800-ONE-MEDICAL" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  1-800-ONE-MEDICAL
                </a>
                <a href="mailto:support@onemedical.com" className="text-primary-600 hover:text-primary-700 text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  support@onemedical.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
