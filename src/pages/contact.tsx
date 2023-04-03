import ContactSection from '@/components/contact/ContactSection'
import Location from '@/components/contact/Location'
import LookingForCareer from '@/components/contact/LookingForCareer'
import Layout from '@/components/layout/Layout'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { useTranslation } from 'next-i18next'

const ContactPage = () => {
  const { t } = useTranslation('contact')
  return (
    <Layout title={t('title')}>
      <ContactSection />
      <Location />
      <LookingForCareer />
    </Layout>
  )
}

export default ContactPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['contact', 'common'])),
  },
})
