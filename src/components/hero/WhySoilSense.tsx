import clsx from 'clsx'
import { PhoneFrame } from '@/components/hero/PhoneFrame'

import { AppStoreLink } from '@/components/AppStoreLink'
import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import mobileScreen from '/public/assets/screens/screen-01.png'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'
import PlayStoreDownload from '@/components/footer/PlayStoreDownload'
import {
  currentServicesData,
  futureServicesData,
} from '@/contents/heroServices'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export function WhySoilSense() {
  const { t } = useTranslation('home')
  const TcurrentServices = t('why-soil-sense.current-services', {
    returnObjects: true,
  })
  const TfutureServices = t('why-soil-sense.future-services', {
    returnObjects: true,
  })

  return (
    <div className="pt-12 pb-20 overflow-hidden sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="flex justify-start px-4 mb-8 sm:mb-3 md:px-0">
          <PlayStoreDownload />
        </div>
        <div className="px-4 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 md:px-0">
          <div className="relative z-10 max-w-2xl mx-auto lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
              {/* Why soil sense? */}
              {t('why-soil-sense.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {/* By leveraging the technology and Agricultural insights, you’ll
              know exactly when and to give nutrients to plants, weather
              forecast, irrigation scheduling, all these to help you maximize
              profits and yield more. */}
              {t('why-soil-sense.about')}
            </p>
            <div className="flex flex-wrap items-center justify-center mt-8 md:justify-start gap-x-4 gap-y-4">
              <div className="flex items-center content-center justify-center">
                <AppStoreLink svgClassName="h-10" />
              </div>
              <ButtonLink
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
                className="inline-flex items-center justify-center"
              >
                <MdOutlinePlayCircleOutline className="flex-none w-6 h-6" />
                <span className="ml-2.5">
                  {/* Watch the video */}
                  {t('why-soil-sense.watch-video')}
                </span>
              </ButtonLink>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]">
                <div>
                  <Image
                    height={100}
                    width={100}
                    src={mobileScreen}
                    alt="mobile-screen"
                    unoptimized
                    priority
                    className="object-contain w-full h-full"
                  />
                </div>
              </PhoneFrame>
            </div>
          </div>
          <div className="relative mt-10 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-3xl font-bold text-center text-gray-900 lg:text-left">
              {/* Our Current services */}
              {t('why-soil-sense.our-current-services')}
            </p>
            <ul
              role="list"
              className="flex flex-wrap justify-center max-w-xl mx-auto mt-8 gap-x-6 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {currentServicesData.map(({ id, name, image }, index) => (
                <li
                  key={'current-service' + id + name}
                  className={clsx(
                    'flex flex-col justify-center items-center space-y-2 w-20 text-center'
                  )}
                >
                  <Image
                    height={100}
                    width={100}
                    src={image}
                    alt={name}
                    className="w-16 h-16 md:h-12 md:w-12"
                  />
                  <p className="text-xs font-medium">
                    {/* {name} */}
                    {TcurrentServices[index].name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-10 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-3xl font-semibold text-center text-gray-900 lg:text-left">
              {/* Future services */}
              {t('why-soil-sense.our-future-services')}
            </p>
            <ul
              role="list"
              className="flex flex-wrap justify-center max-w-xl mx-auto mt-8 gap-x-4 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {futureServicesData.map(({ id, name, image }, index) => (
                <li
                  key={'future-service-' + id + name}
                  className={clsx(
                    'flex flex-col justify-center items-center w-24 text-center space-y-1'
                  )}
                >
                  <Image
                    height={100}
                    width={100}
                    src={image}
                    alt={name}
                    className="w-16 h-16 aspect-square md:h-12 md:w-12"
                  />
                  <p className="text-xs font-medium">
                    {/* {name} */}
                    {TfutureServices[index].name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
