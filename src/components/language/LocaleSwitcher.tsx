import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import hnFlag from '/public/assets/flag/hn-flag.svg'
import enFlag from '/public/assets/flag/en-flag.svg'
import Image from 'next/image'
// import { useTranslation } from 'next-i18next'

const LocaleSwitcher = ({ onClick }: { onClick: () => void }) => {
  //   const { t, i18n, ready } = useTranslation('common')

  const { locales, locale, pathname, query, asPath } = useRouter()
  const otherLocales = locales?.filter((l) => l !== locale) // Find all the locales apart from the current locale.

  return (
    <>
      {otherLocales?.map((locale) => {
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            as={asPath}
            className="flex items-center gap-3 font-medium text-white md:justify-center"
            locale={locale}
            onClick={onClick}
          >
            <div className="block md:hidden">
              <span>Change language</span>
              <span className="font-semibold underline">
                {locale == 'hn' && 'Hindi'}
                {locale == 'en' && 'English'}
              </span>
            </div>

            {locale == 'hn' && (
              <Image
                src={hnFlag}
                alt="Hindi"
                height={100}
                width={100}
                className="object-cover overflow-hidden rounded-full w-7 h-7"
              />
            )}
            {locale == 'en' && (
              <Image
                src={enFlag}
                alt="Hindi"
                height={100}
                width={100}
                className="object-cover overflow-hidden rounded-full w-7 h-7"
              />
            )}
          </Link>
        )
      })}
    </>
  )
}

export default LocaleSwitcher
