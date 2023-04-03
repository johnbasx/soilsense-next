import { ButtonLink } from '@/components/Button'
import React from 'react'
import { footerLinksData } from '@/contents/footerLinks'
import AppStoreDownload from './AppStoreDownload'
import PlayStoreDownload from './PlayStoreDownload'
import { SocialLinks } from './SocialLinks'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const FooterLinks = () => {
  const { t } = useTranslation('common')
  const TfooterLinks = t('footer', { returnObjects: true })
  return (
    <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
      <div className="col-span-2">
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow">
            {/* SoilSense Private Limited */}
            {t('company')}
          </h2>

          <p className="mt-4 text-gray-100 drop-shadow">
            {/* Let&apos;s dive into the future of Agriculture & Plantation with the
            power of advanced technologies. */}
            {t('about')}
          </p>
        </div>
      </div>
      <div className="col-span-3 space-y-6 lg:col-span-3 lg:flex lg:items-end lg:justify-end gap-x-4">
        <div className="grid grid-cols-1 space-y-4">
          <ButtonLink
            href="#!"
            variant="white"
            className="font-semibold text-center"
          >
            {/* Request a demo */}
            {t('demo')}
          </ButtonLink>
          <AppStoreDownload />
          <PlayStoreDownload />
        </div>
      </div>
      {footerLinksData.map((data, index) => (
        <div
          className="col-span-2 sm:col-span-1"
          key={'Footer-link-' + data.id}
        >
          <p className="font-medium text-white drop-shadow">
            {/* {data.footerHead} */}
            {TfooterLinks[index].footerHead}
          </p>

          <nav aria-label="Footer Navigation - Services" className="mt-6">
            <ul className="space-y-4 text-sm">
              {data.footers.map((footerLink, j) => (
                <li key={'Footer-nav-' + footerLink.id}>
                  <Link
                    href={footerLink.link}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-gray-100 transition drop-shadow hover:opacity-75"
                  >
                    {/* {footerLink.name} */}
                    {TfooterLinks[index].links[j]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ))}
      <SocialLinks />
    </div>
  )
}

export default FooterLinks
