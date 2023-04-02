import Layout from '@/components/layout/Layout'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { TbArrowRight } from 'react-icons/tb'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import FutureServices from '@/components/services/FutureServices'
import ServicesHero from '@/components/services/ServicesHero'
import SoilHealth from '@/components/services/SoilHealth'

const featuresData = [
  {
    id: nanoid(),
    name: 'Soil Nutrient Balance (NPK)',
    about:
      'It is an essential feature for maintaining and raising the crop. As nutrient surplus indicates a risk of polluting soil, water and air while nutrient deficit indicates declining soil fertility. It is measured in kilograms of nutrients per hectare of agricultural land.',
    image: '/assets/images/why-03.png',
  },
  {
    id: nanoid(),
    name: 'Precise irrigation (Moisture)',
    about:
      'It is an efficient and sustainable approach towards agriculture which allows the efficient use of water at the right time to provide optimal growing conditions for the crops.',
    image: '/assets/images/why-01.png',
  },
  {
    id: nanoid(),
    name: 'Weather forecast (Temperature, Humidity)',
    about:
      'Accurate weather data can assist farmers in determining when they should work most efficiently in their day-to-day operations. Its forecast helps in controlling the pests and other crop diseases to spread over the field',
    image: '/assets/images/why-02.png',
  },
  {
    id: nanoid(),
    name: 'Soil Health (Electrical conductivity, pH)',
    about:
      'Soil type is considered to be one of the most vital factors which may determine the yield of the crops. Different crops require different soil types with varying parameters.',
    image: '/assets/images/why-04.png',
  },
]

const ServicesPage = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 15,
      },
      breakpoints: {
        '(min-width: 400px)': {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 20 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )
  return (
    <Layout title="Services - Soil Sense | Plantation with Technology">
      <ServicesHero />
      <Container className="py-8 md:py-12">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Key Features</h1>
        </div>
      </Container>
      <div className="p-4 mx-auto max-w-7xl">
        <div ref={sliderRef} className="keen-slider">
          {featuresData.map((item, index) => (
            <div
              key={'slider-component' + index}
              className="grid items-center justify-center grid-cols-1 p-4 border-2 border-gray-200/50 md:p-8 md:grid-cols-2 bg-gray-50 rounded-3xl keen-slider__slide"
            >
              <div className="flex flex-col items-start justify-start order-last h-full">
                <h1 className="mb-3 text-lg font-semibold text-gray-900 leading-1 md:text-lg">
                  {item.name}
                </h1>
                <p className="mb-3 leading-relaxed line-clamp-1 md:line-clamp-3">
                  {item.about}
                </p>
                <div className="flex flex-wrap items-center ">
                  <Link
                    href="#!"
                    className="inline-flex items-center gap-2 text-primary-500 md:mb-2 lg:mb-0"
                  >
                    Know More
                    <TbArrowRight />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full px-6 py-8">
                <Image
                  alt="slider image component"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full aspect-square"
                  src={item.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <SoilHealth />
      <FutureServices />
    </Layout>
  )
}

export default ServicesPage
