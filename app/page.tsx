import Header from '@/components/layout/Header'
import HeroSection from '@/components/home/HeroSection'
import ServicesOverview from '@/components/home/ServicesOverview'
import CareFeatures from '@/components/home/CareFeatures'
import AppFeatures from '@/components/home/AppFeatures'
import PartnerLogos from '@/components/home/PartnerLogos'
import CTASection from '@/components/home/CTASection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <CareFeatures />
      <AppFeatures />
      <PartnerLogos />
      <CTASection />
      <Footer />
    </main>
  )
}
