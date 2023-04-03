import AboutHero from '@/components/about/AboutHero'
import OurJourney from '@/components/about/OurJourney'
import OurVision from '@/components/about/OurVision'
import Team from '@/components/about/Team'
import FAQ from '@/components/faq/FAQ'
import Layout from '@/components/layout/Layout'
import { GetStaticProps } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')
  return (
    <Layout title={t('title')}>
      <AboutHero />
      <OurVision />
      <OurJourney />
      <Team />
      <FAQ />
    </Layout>
  )
}

export default AboutPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['about', 'common'])),
  },
})
