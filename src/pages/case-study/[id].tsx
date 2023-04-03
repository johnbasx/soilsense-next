import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import { Container } from '@/components/Container'
import { format } from 'date-fns'
import { combinedStudiesData } from '@/components/case-study/caseStudiesData'
import Tag from '@/components/case-study/Tag'
import Link from 'next/link'
import { TbArrowLeft, TbExternalLink } from 'react-icons/tb'
import { ButtonLink } from '@/components/Button'
import { findCaseStudyById } from '@/utils/helpers'
import RelatedCaseStudies from '@/components/case-study/RelatedCaseStudies'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const CaseStudyDynamicPage = ({ id: caseId }: IParams) => {
  const { t } = useTranslation('casestudy')
  const router = useRouter()
  if (!caseId || caseId == undefined) {
    const tempCaseID = window.localStorage.getItem('CASEID')

    tempCaseID && router.replace('/case-study/' + JSON.parse(tempCaseID))
  }

  useEffect(() => {
    window.localStorage.setItem('CASEID', JSON.stringify(caseId))
  }, [])

  const singleCaseStudy = findCaseStudyById(caseId)

  if (!singleCaseStudy) {
    return <></>
  } else {
    return (
      <Layout title={t('single-title')}>
        <main className="pt-8 pb-16 bg-white lg:pt-16 lg:pb-24">
          <Container className="justify-between">
            <article className="w-full max-w-4xl px-3 mx-auto format format-sm sm:format-base lg:format-lg format-blue format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                {/* Author Details */}
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                    <Image
                      width={100}
                      height={100}
                      className="object-cover w-16 h-16 mr-4 rounded-full"
                      src={singleCaseStudy.author?.profileImage}
                      alt={singleCaseStudy.author?.name}
                    />
                    <div>
                      <Link
                        href="!#"
                        rel="author"
                        className="text-xl font-bold text-gray-900"
                      >
                        {singleCaseStudy.author.name}
                      </Link>
                      <p className="text-base font-light text-gray-500">
                        {singleCaseStudy.author.designation}
                      </p>
                      <p className="text-base font-light text-gray-500">
                        <time dateTime={singleCaseStudy.date.toISOString()}>
                          {format(singleCaseStudy.date, 'eeee, d LLL, yyyy')}
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                {/* Case Study Topic */}

                <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl">
                  {/* Best practices for successful prototypes */}
                  {singleCaseStudy.title}
                </h1>
                <div className="flex flex-wrap my-2">
                  {singleCaseStudy.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </header>
              <figure className="py-4 md:py-6">
                <Image
                  height={100}
                  width={100}
                  src={singleCaseStudy.image}
                  className="object-cover w-full rounded-xl"
                  alt="Research Image-1"
                />
                <figcaption className="text-sm italic text-gray-500">
                  Research pic by Anonymous
                </figcaption>
              </figure>
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                Summary
              </h2>
              <p className="lg:text-justify">{singleCaseStudy.summary}</p>
              {/* Introduction section */}
              <div>
                <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-800">
                  Introduction
                </h2>
                <ul className="list-disc list-inside">
                  {singleCaseStudy.introduction?.points.map((point, index) => (
                    <li key={'introduction-' + index} className="mb-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Sub-topics section */}
              {singleCaseStudy.subtopics?.map((subtopic, index) => (
                <div key={'subtopic-' + index} className="mb-3">
                  <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-800">
                    {subtopic.title}
                  </h2>
                  <p>{subtopic.description}</p>
                </div>
              ))}

              {/* Conclusion section */}
              <div>
                <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-800">
                  Conclusion
                </h2>

                <p className="mb-3">{singleCaseStudy.conclusion}</p>
              </div>
              {/* References section */}
              <div>
                <h2 className="mt-8 mb-3 text-2xl font-semibold text-gray-800">
                  References
                </h2>
                <ul className="list-decimal list-inside">
                  {singleCaseStudy.references?.map((reference, index) => (
                    <li key={'reference-' + index} className="mb-3">
                      {reference}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="flex flex-wrap gap-3 mt-8">
                {singleCaseStudy.links?.map(({ link, name }, index) => (
                  <Link
                    href={link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    key={'external-links-' + name + index}
                    className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-medium text-gray-800 duration-150 border border-transparent rounded bg-primary-50 hover:bg-primary-100 hover:border-primary-300"
                  >
                    {name}
                    <TbExternalLink />
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-center mt-10">
                <ButtonLink
                  href="/case-studies"
                  className="inline-flex items-center gap-2"
                >
                  <TbArrowLeft />
                  {/* Go back */}
                  {t('go-back')}
                </ButtonLink>
              </div>
            </article>
          </Container>
        </main>
        <RelatedCaseStudies />
      </Layout>
    )
  }
}

export default CaseStudyDynamicPage

// Below code is necessary for dynamically generating paths and also passing dynamic props to the dynamic page

interface IParams extends ParsedUrlQuery {
  id: string
}
export const getStaticPaths: GetStaticPaths = async () => {
  const arr = combinedStudiesData
  const paths = arr.map((item) => {
    return {
      params: { id: item.id },
    }
  })
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context
  const { id } = context.params as IParams
  if (!id) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
        // statusCode: 301
      },
    }
  }
  return {
    props: {
      id,
      ...(await serverSideTranslations(locale as string, [
        'casestudy',
        'common',
      ])),
    }, // will be passed to the page component as props
  }
}
