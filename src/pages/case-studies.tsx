import { Container } from '@/components/Container'
import Layout from '@/components/layout/Layout'

import React from 'react'
import CaseStudyBlock from '@/components/case-study/CaseStudyBlock'
import Title from '@/components/Title'
import RelatedCaseStudies from '@/components/case-study/RelatedCaseStudies'
import { caseStudiesData } from '@/components/case-study/caseStudiesData'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const CaseStudiesPage = () => {
  const { t } = useTranslation('casestudy')
  return (
    <Layout title={t('title')}>
      <Container>
        <Title
          title={t('heading')}
          para={t('tagline')}
          containerStyles="mt-12"
        />
        <ul className="flex flex-col gap-4 my-8">
          {caseStudiesData.map((item) => (
            <CaseStudyBlock key={'case-study-item-' + item.id} {...item} />
          ))}
        </ul>
      </Container>

      <RelatedCaseStudies />
    </Layout>
  )
}

export default CaseStudiesPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'casestudy',
      'common',
    ])),
  },
})
