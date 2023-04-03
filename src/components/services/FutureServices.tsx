import Image from 'next/image'
import React from 'react'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { TbArrowRight } from 'react-icons/tb'

export const futureServicesData = [
  {
    id: nanoid(),
    heading: 'Satellite Mapping',
    tagline: 'Satellite Imagery Solutions',
    image:
      'https://images.unsplash.com/photo-1528499908559-b8e4e8b89bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2F0ZWxsaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    points: [
      {
        id: nanoid(),
        about:
          'Satellite imagery shows how the Earth’s surface looks from above. It depicts the Earth’s surface at various spectral, temporal, radiometric, and increasingly detailed spatial resolutions.',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Remote farming',
    tagline: 'A New Technology Underway',
    image: '/assets/future/remote-farming.jpg',
    points: [
      {
        id: nanoid(),
        about:
          'It is defined as monitoring and managing farms remotely through the application of the Internet, with less/ without direct human intervention.',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Pest/Disease forecast',
    tagline: 'Pest dynamics in relation to climate change ',
    image:
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVzdCUyMGNvbnRyb2wlMjBmYXJtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    points: [
      {
        id: nanoid(),
        about:
          'It is the accurate monitoring of pests and predicting pest outbreaks through analyzing relevant data based on biology, mathematics, statistics, etc.',
      },
    ],
  },
  {
    id: nanoid(),
    heading: 'Robots & Drones',
    tagline: 'Intrduction to robots and drones for farming',
    image:
      'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHJvYm90c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    points: [
      {
        id: nanoid(),
        about:
          'The use of drones in almost every sector of the economy is growing fast, but drone usage in the agricultural industry is booming. According to some reports, the agricultural drone market is expected to grow from a $1.2 billion(USD) industry in 2019 to $4.8 billion in 2024. From scouting to security, drone use will become more ubiquitous on large and small scale farms in a few short years.',
      },
    ],
  },
]

const FutureServices = () => {
  const { t } = useTranslation('services')
  const Tservices = t('future-services.data', {
    returnObjects: true,
  })
  return (
    <div className="container px-6 mx-auto my-16 max-w-7xl">
      <div className="flex flex-col items-center justify-center max-w-2xl gap-4 py-8 mx-auto text-center">
        <h2 className="text-4xl font-bold lg:text-5xl">
          {/* Future Services */}
          {t('future-services.heading')}
        </h2>
        <p className="text-gray-600">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, a
          expedita? Sed laudantium saepe quod. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. */}
          {t('future-services.tagline')}
        </p>
      </div>
      {futureServicesData.map((item, index) => (
        <section key={item.id}>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div
              className={clsx(
                'w-full',
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              )}
            >
              <div className="flex lg:py-12">
                <Image
                  src={item.image}
                  className="object-cover w-full shadow-lg aspect-video rounded-2xl"
                  width={200}
                  height={200}
                  alt={item.heading}
                />
              </div>
            </div>

            <div
              className={clsx(
                'w-full',
                index % 2 === 0 ? 'order-2' : 'order-1'
              )}
            >
              <div className="flex items-center h-full py-6 text-left text-black rounded-lg lg:p-6 lg:pl-12 lg:text-left">
                <div className="flex flex-col gap-3 lg:pl-12">
                  <h2 className="text-2xl font-bold lg:text-3xl">
                    {/* {item.heading} */}
                    {Tservices[index].heading}
                  </h2>
                  <span className="font-semibold tracking-wider uppercase text-primary-500">
                    {/* {item.tagline} */}
                    {Tservices[index].tagline}
                  </span>
                  <ul className="">
                    {item.points.map((point, jdx) => (
                      <li
                        key={point.id}
                        className="inline-flex items-start gap-2"
                      >
                        <TbArrowRight className="flex-shrink-0 w-5 h-5 mt-1 text-xl" />
                        <span className="line-clamp-4">
                          {/* {point.about} */}
                          {Tservices[index].points[jdx].about}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default FutureServices
