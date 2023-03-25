import Layout from '@/components/layout/Layout'
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { TbArrowRight } from 'react-icons/tb'
import Link from 'next/link'

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
          }, 2500)
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
    <Layout title="Home - Soil Sense | Plantation with Tech">
      <Container className="py-8 md:py-12">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Key Features</h1>
        </div>
      </Container>
      <div className="p-4">
        <div ref={sliderRef} className="keen-slider">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={'slider-component' + index}
              className="grid items-center justify-center grid-cols-1 p-4 border-2 border-gray-200/50 md:p-8 md:grid-cols-2 bg-gray-50 rounded-3xl keen-slider__slide"
            >
              <div className="flex flex-col items-start justify-start order-last h-full">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400">
                  CATEGORY
                </h2>
                <h1 className="mb-3 text-xl font-semibold text-gray-900 md:text-3xl">
                  The Catalyzer
                </h1>
                <p className="mb-3 leading-relaxed">Photo booth fam kinfolk</p>
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
              <div className="flex items-center justify-center w-full h-full p-4">
                <Image
                  alt="slider image component"
                  width={100}
                  height={100}
                  className="object-contain w-full h-full aspect-square"
                  src="/assets/images/why-03.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
