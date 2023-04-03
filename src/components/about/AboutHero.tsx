import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'next-i18next'

export const links = [
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Internship programs', href: 'https://sn-silos.vercel.app/career' },
  { name: 'Our vision', href: '/' },
  { name: 'Meet our leadership', href: '#team' },
]
export const stats = [
  { name: 'Clients worldwide', value: '89,897' },
  { name: 'Full-time employees', value: '50+' },
  { name: 'Stores', value: '200+' },
  { name: 'Hirings', value: '100+' },
]

const AboutHero = () => {
  const { t } = useTranslation('about')
  const Tlinks = t('about-hero.links', { returnObjects: true })
  const Tstats = t('about-hero.stats', { returnObjects: true })

  return (
    <div className="relative py-24 overflow-hidden bg-emerald-900 isolate sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNtYXJ0JTIwYWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=80&blend=344f25&sat=0&exp=5&blend-mode=multiply"
        alt="ABout Us backdrop image"
        height={100}
        width={100}
        unoptimized
        priority
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
      />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {/* About Soil Sense */}
            {t('about-hero.heading')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {/* Soil Sense collects soil and environment data around the farm and
            transforms it into useful information with the help of IoT based
            devices and sensors to monitor the soil health (crop field). The
            information is easy to access and provides a wide sense of field
            conditions. */}
            {t('about-hero.description')}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-y-6 gap-x-8 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link, idx) => (
              <Link key={link.name} href={link.href}>
                {/* {link.name} */}
                {Tlinks[idx].name}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {/* {stat.name} */}
                  {Tstats[index].name}
                </dt>
                <dd className="text-3xl font-bold leading-9 tracking-tight text-white">
                  {/* {stat.value} */}
                  {Tstats[index].value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
