import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { ourAppsStepsData } from '@/contents/oursAppsSteps'
import Image from 'next/image'

const OurAppsSteps = () => {
  return (
    <Container>
      <div className="px-4 py-8 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mx-auto">
          <h2 className="text-4xl font-bold sm:text-5xl">Our amazing apps</h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            We aim to provide the best solutions with advanced technology and
            features from optimizing plantations and organic yields to while
            reaching the customers through our digital platform.
          </p>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-primary-400 lg:w-full lg:h-px" />
          </div>
          {ourAppsStepsData.map((data, idx) => (
            <div
              key={'Our-apps-steps-' + data.id}
              className="p-5 duration-300 transform bg-white border rounded-2xl shadow-sm hover:-translate-y-2 overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg font-bold leading-5 sr-only">
                  {data.name}
                </h2>
                <Image
                  height={100}
                  width={100}
                  src={data.image}
                  alt={data.name + '-logo'}
                  className="h-16 md:h-20 w-auto object-contain"
                />
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-primary-50">
                  {idx + 1}
                </p>
              </div>

              <p className="text-sm text-gray-900 line-clamp-2">
                {data.description}
              </p>
              <div className="text-center flex justify-start mt-4">
                <ButtonLink href={data.link}>Learn more</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
export default OurAppsSteps
