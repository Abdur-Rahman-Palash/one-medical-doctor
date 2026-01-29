import { ArrowRight, MapPin } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Join One Medical Today
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience healthcare that puts you first. Get started with same-day appointments, 
          24/7 virtual care, and providers who truly listen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="w-full sm:w-auto bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-200 flex items-center justify-center">
            <MapPin className="mr-2 w-5 h-5" />
            Find a Provider
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-100">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            No referral needed
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Most insurance accepted
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}
