import { controlParametersData } from '@/contents/controlParameters'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const MonitorAndControl = () => {
  const { t } = useTranslation('home')
  const Tparameters = t('monitor-and-control.parameters', {
    returnObjects: true,
  })

  return (
    <section>
      <Container>
        <div className="px-4 py-20 sm:px-4 lg:px-4">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="max-w-xl mx-auto space-y-6 text-left lg:order-last lg:mx-0">
              <h2 className="text-4xl font-bold sm:text-5xl">
                {/* We monitor and control 8 soil parameters */}
                {t('monitor-and-control.title')}
              </h2>

              <p className="mt-4 text-gray-600">
                {/* The purpose of developing a monitoring and control process is to
                take advantage of opportunities to improve a situation; that is,
                to make changes when alternatives are available, and to avoid
                crisis management. In farming, a goal of monitoring and
                controlling could be: being prepared to make necessary changes
                during the production season, rather than between production
                seasons. */}
                {t('monitor-and-control.about')}
              </p>

              <Button
                size="large"
                className="inline-flex items-center space-x-2"
              >
                <span>
                  {/* Let&apos;s start monitoring */}
                  {t('monitor-and-control.button')}
                </span>
                <FaArrowRight />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {controlParametersData.map((data, index) => (
                <div
                  key={'Monitor&Control-' + data.id + index}
                  className="block p-4 duration-150 border border-gray-100 shadow-sm rounded-2xl hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                >
                  <span className="inline-block p-3 rounded-lg bg-gray-50">
                    <Image
                      height={100}
                      width={100}
                      alt={data.name}
                      className="object-contain w-8 h-8"
                      src={data.image}
                    />
                  </span>

                  <h2 className="mt-2 font-bold">
                    {/* {data.name} */}
                    {Tparameters[index].name}
                  </h2>

                  <p className="hidden text-sm truncate sm:mt-1 sm:block sm:text-gray-600">
                    {/* {data.description} */}
                    {Tparameters[index].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MonitorAndControl
