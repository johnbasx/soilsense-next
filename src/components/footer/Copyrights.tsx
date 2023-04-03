import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

const Copyrights = () => {
  const { t } = useTranslation('common')
  return (
    <div className="pt-8 mt-8 border-t border-gray-100">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <p className="flex items-center text-xs text-left text-gray-200">
          &copy; Copyright {new Date().getFullYear()} SoilSense. All rights
          reserved.
        </p>

        {/* DO NOT REMOVE THIS TRADEMARK!!! */}
        <div className="flex items-center justify-start gap-2">
          <p className="text-xs font-medium">Powered by </p>
          <Link
            href="https://fox-beta.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="text-lg font-bold tracking-tight"
          >
            <span className="sr-only">Foxbeta</span>
            <Image
              height={100}
              width={100}
              className="object-contain w-auto h-4"
              alt="Foxbeta"
              src="/foxbeta-web.png"
            />
          </Link>
        </div>

        <nav aria-label="Footer Navigation - Support">
          <ul className="flex flex-wrap items-center justify-start gap-4 text-xs lg:justify-end">
            <li>
              <Link
                href="!#"
                className="text-gray-200 transition hover:opacity-75"
              >
                {/* Terms & Conditions */}
                {t('terms')}
              </Link>
            </li>

            <li>
              <a
                href="!#"
                className="text-gray-200 transition hover:opacity-75"
              >
                {/* Privacy Policy */}
                {t('privacy')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Copyrights
