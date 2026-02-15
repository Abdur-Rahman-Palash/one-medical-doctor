import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  services: [
    { name: 'Primary Care', href: '#' },
    { name: 'Mental Health', href: '#' },
    { name: 'Pediatrics', href: '#' },
    { name: 'Virtual Care', href: '#' }
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Health Library', href: '#' },
    { name: 'Patient Portal', href: '#' },
    { name: 'FAQ', href: '#' }
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Medical Terms', href: '#' },
    { name: 'Accessibility', href: '#' }
  ]
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
]

const locations = [
  'New York, NY',
  'San Francisco, CA',
  'Los Angeles, CA',
  'Boston, MA',
  'Washington, DC',
  'Seattle, WA'
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <span className="text-xl font-semibold">One Medical</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Comprehensive healthcare made simple. Get same-day appointments, 24/7 virtual care, 
              and personalized treatment from providers who listen.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>1-800-ONE-MEDICAL</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@onemedical.com</span>
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Locations */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Office Locations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-400">
                {locations.map((location) => (
                  <span key={location}>{location}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} One Medical. All rights reserved.</p>
          <p className="mt-2">
            One Medical Group™ and One Medical are trademarks of One Medical Group, Inc.
          </p>
          <p className="mt-4 text-lg font-semibold text-white">
            Powered by- <a href="https://neubyte.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">neubyte.tech</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
