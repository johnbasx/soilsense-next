import AboutHero from '@/components/about/AboutHero'
import OurJourney from '@/components/about/OurJourney'
import OurVision from '@/components/about/OurVision'
import Team from '@/components/about/Team'
import Layout from '@/components/layout/Layout'
import React from 'react'

const AboutPage = () => {
  return (
    <Layout title="About - Soil Sense | Plantation with Technology">
      <AboutHero />
      <OurVision />
      <OurJourney />
      <Team />
    </Layout>
  )
}

export default AboutPage