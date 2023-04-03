import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Title from '../Title'
import { useTranslation } from 'next-i18next'

const SoilHealth = () => {
  const { t } = useTranslation('services')

  return (
    <section className="px-6 py-12 overflow-hidden bg-gradient-to-br to-transparent from-white lg:px-0 lg:pt-24 lg:pb-12">
      <Title title={t('soil-health.heading')} para={t('soil-health.tagline')} />

      <article className="mx-auto md:py-4 sm:grid sm:grid-cols-2 max-w-7xl sm:items-center">
        <div className="py-8 lg:py-12">
          <div className="max-w-xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {/* The Search for the Meaning of Soil Health: Lessons from Human
              Health & Ecosystem Health */}
              {t('soil-health.topic')}
            </h2>

            <p className="mt-4 text-gray-500 md:">
              {/* Soil is central to human wellbeing through its provision of
              critical ecosystem services, including food and clean water. These
              services emerge through the self-organising nature of the soil
              system. Here, we consider the lessons learnt from the evolution of
              the understanding of human and ecosystem health for the
              conceptualisation and application of soil health. We share the
              fundamental and practical challenges of managing the land with
              respect to soil health, and the need for policy to drive the
              protection of soil as one of our most important non-renewable
              natural resources. */}
              {t('soil-health.about')}
            </p>
            <h3 className="mt-4 text-xl font-bold text-gray-900 md:text-2xl">
              {/* Current Definitions of Soil Health */}
              {t('soil-health.subtopic')}
            </h3>

            <p className="mt-4 text-gray-500 md:">
              {/* Soil health is currently defined via the following iterations:
              “the capacity of a living soil to function, within natural or
              managed ecosystem boundaries, to sustain plant and animal
              productivity, maintain or enhance water and air quality, and
              promote plant and animal health”. */}
              {t('soil-health.des')}
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#!"
                className="inline-block px-12 py-3 text-sm font-semibold text-white transition rounded-md bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-200"
              >
                {/* Learn More */}
                {t('soil-health.learn-more')}
              </a>
            </div>
          </div>
        </div>

        <Image
          alt="SoilSense Flowchart"
          src="/assets/illustration/soil-health.png"
          width={100}
          unoptimized
          height={100}
          className="object-contain w-full h-full sm:self-end rounded-3xl"
        />
      </article>
    </section>
  )
}

export default SoilHealth
