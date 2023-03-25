import { controlParametersData } from '@/contents/controlParameters'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

const MonitorAndControl = () => {
  return (
    <section>
      <Container>
        <div className="px-4 py-20 sm:px-4 lg:px-4">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-xl lg:order-last space-y-6 text-left lg:mx-0">
              <h2 className="text-4xl font-bold sm:text-5xl">
                We monitor and control 8 soil parameters
              </h2>

              <p className="mt-4 text-gray-600">
                The purpose of developing a monitoring and control process is to
                take advantage of opportunities to improve a situation; that is,
                to make changes when alternatives are available, and to avoid
                crisis management. In farming, a goal of monitoring and
                controlling could be: being prepared to make necessary changes
                during the production season, rather than between production
                seasons.
              </p>

              <Button
                size="large"
                className="inline-flex items-center space-x-2"
              >
                <span>Let&apos;s start monitoring</span>
                <FaArrowRight />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {controlParametersData.map((data, index) => (
                <div
                  key={'Monitor&Control-' + data.id + index}
                  className="block rounded-2xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 duration-150 hover:ring-gray-200 focus:outline-none focus:ring"
                >
                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                    <Image
                      height={100}
                      width={100}
                      alt={data.name}
                      className="h-8 w-8 object-contain"
                      src={data.image}
                    />
                  </span>

                  <h2 className="mt-2 font-bold">{data.name}</h2>

                  <p className="hidden sm:mt-1 truncate sm:block text-sm sm:text-gray-600">
                    {data.description}
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
