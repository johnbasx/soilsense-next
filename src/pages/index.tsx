import { CallToAction } from '@/components/CTA/CallToAction'
import MonitorAndControl from '@/components/CTA/MonitorAndControl'
import OurAppsSteps from '@/components/CTA/OurAppsSteps'
import PersonalisedFarming from '@/components/CTA/PersonalisedFarming'
import { WhySoilSense } from '@/components/hero/WhySoilSense'
import ReviewSection from '@/components/reviews/ReviewSection'
import Layout from '@/components/layout/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <Layout title={t('title')} carousel dark={false}>
      {/* <Carousel /> */}
      <WhySoilSense />
      <PersonalisedFarming />
      <MonitorAndControl />
      <OurAppsSteps />
      <ReviewSection />
      <CallToAction />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['home', 'common'])),
  },
})
