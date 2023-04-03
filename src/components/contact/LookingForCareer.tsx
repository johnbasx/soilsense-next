import React from 'react'
import { TbExternalLink } from 'react-icons/tb'
import { ButtonLink } from '../Button'
import { useTranslation } from 'next-i18next'

const LookingForCareer = () => {
  const { t } = useTranslation('contact')

  return (
    <section>
      <div className="bg-primary-500">
        <div className="max-w-md px-4 py-10 mx-auto space-y-6 text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="block text-4xl font-extrabold text-white sm:text-5xl">
            {/* Looking for a new career? */}
            {t('looking-for-career.heading')}
          </h2>
          <span className="block text-4xl text-emerald-50">
            {/* We’re hiring. */}
            {t('looking-for-career.tagline')}
          </span>

          <ButtonLink
            href="https://sn-silos.vercel.app/career"
            variant="white"
            size="large"
            className="inline-flex items-center justify-center space-x-2"
          >
            <span>
              {/* See open positions */}
              {t('looking-for-career.see-positions')}
            </span>
            <TbExternalLink
              className="w-5 h-5 ml-3 text-gray-400"
              aria-hidden="true"
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default LookingForCareer
