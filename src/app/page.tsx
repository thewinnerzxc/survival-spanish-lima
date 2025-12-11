import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

import EnglishOffering from '@/components/EnglishOffering'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ContactForm />
      <About />
      <HowItWorks />
      <EnglishOffering />
      <VideoSection />
      <FAQ />
      <Footer />
    </main>
  )
}
