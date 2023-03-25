import Image from 'next/image'
import React from 'react'
import ReactCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomDot, { carouselItems } from './CustomDot'
// import Image from "@/components/image/Image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Carousel = () => {
  return (
    <div className="relative overflow-hidden">
      <ReactCarousel
        responsive={responsive}
        infinite
        autoPlay
        swipeable={true}
        draggable
        showDots
        arrows={false}
        autoPlaySpeed={5000}
        keyBoardControl
        containerClass="max-h-[100vh] z-0"
        transitionDuration={1000}
        customDot={<CustomDot />}
      >
        {carouselItems.map((item, idx) => (
          <div
            key={'Carousel-' + item.id + idx}
            className="w-full h-[50vh] object-cover shadow-none overflow-hidden relative"
          >
            <div className="absolute w-full h-full p-6 text-white pointer-events-none bg-gradient-to-bl from-black/80 to-black/5">
              <div className="flex flex-col items-center justify-center max-w-5xl px-8 pt-32 pb-8 mx-auto space-y-4 text-center md:px-0 md:text-left md:items-start">
                <h1 className="text-5xl font-extrabold md:text-7xl drop-shadow">
                  {item.heading}
                </h1>
                <p className="text-xl md:text-2xl drop-shadow">
                  {item.tagline}
                </p>
              </div>
            </div>
            <Image
              height={100}
              width={100}
              src={item.src}
              unoptimized
              priority
              alt={'Image-carousel-' + item.heading}
              className="object-cover w-full h-[50vh]"
            />
            {/* <img
              src={item.src}
              alt={"Image-carousel-" + item.heading}
              className='object-cover w-full h-[50vh]'
            /> */}
          </div>
        ))}
      </ReactCarousel>
    </div>
  )
}

export default Carousel
