import { Container } from '@/components/Container'
import Layout from '@/components/layout/Layout'

import React from 'react'
import CaseStudyBlock from '@/components/case-study/CaseStudyBlock'
import Title from '@/components/Title'
import RelatedCaseStudies from '@/components/case-study/RelatedCaseStudies'
import { caseStudiesData } from '@/components/case-study/caseStudiesData'

const CaseStudiesPage = () => {
  return (
    <Layout title="Home - Soil Sense | Plantation with Tech">
      <Container>
        <Title
          title="Soil Sense - Case Studies"
          para="Sample records for case studies soil hat pertain to the concept of soil quality are discussed below including a discussion of what can and cannot be changed with management"
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
