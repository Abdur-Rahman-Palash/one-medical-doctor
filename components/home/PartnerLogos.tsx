'use client'

import { partners } from '@/data/partners'

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of employees from top companies who trust One Medical for their healthcare needs.
          </p>
        </div>
        
        {/* Auto-scrolling logos container */}
        <div className="relative overflow-hidden group">
          <div className="flex space-x-12 animate-scroll">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-gray-700 font-semibold text-lg">
                  {partner.name}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-duplicate`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-gray-700 font-semibold text-lg">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Partner with us to provide exceptional healthcare to your team
          </p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Learn About Business Plans
          </button>
        </div>
      </div>
    </section>
  )
}
