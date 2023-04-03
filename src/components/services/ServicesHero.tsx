import React from 'react'
import { TbArrowRight } from 'react-icons/tb'
import { ButtonLink } from '../Button'
import { useTranslation } from 'next-i18next'

const ServicesHero = () => {
  const { t } = useTranslation('services')

  return (
    <section>
      <div className="bg-primary-500">
        <div className="max-w-md px-4 py-10 mx-auto space-y-6 text-center sm:max-w-3xl sm:py-24 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="block text-5xl font-bold text-white sm:text-7xl">
            {/* Providing the best farming solutions */}
            {t('services-hero.heading')}
          </h2>
          <span className="block text-xl text-primary-50">
            {/* Soil Sense farm management system is a user-friendly integrated
            hardware and software system that connects farm data, weather
            conditions and past agronomic knowledge to provide better and
            sustainable farming. */}
            {t('services-hero.tagline')}
          </span>

          <ButtonLink
            href="/career"
            variant="white"
            size="large"
            className="inline-flex items-center justify-center space-x-2"
          >
            <span>
              {/* Work with us */}
              {t('services-hero.button')}
            </span>
            <TbArrowRight
              className="w-5 h-5 ml-3 text-gray-400"
              aria-hidden="true"
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
