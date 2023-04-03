import Layout from '@/components/layout/Layout'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import FutureServices from '@/components/services/FutureServices'
import ServicesHero from '@/components/services/ServicesHero'
import SoilHealth from '@/components/services/SoilHealth'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import KeyFeatures from '@/components/services/KeyFeatures'
import { useTranslation } from 'next-i18next'

const ServicesPage = () => {
  const { t } = useTranslation('services')
  return (
    <Layout title={t('title')}>
      <ServicesHero />

      <KeyFeatures />
      <SoilHealth />
      <FutureServices />
    </Layout>
  )
}

export default ServicesPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['services', 'common'])),
  },
})
