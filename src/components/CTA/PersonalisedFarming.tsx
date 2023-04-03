import React, { useEffect } from 'react'
import { Button } from '../Button'
import { Container } from '../Container'
import ssMobileMockup01 from '/public/assets/SS-mockup.png'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const PersonalisedFarming = () => {
  const { t } = useTranslation('home')
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="py-16 bg-gradient-to-r from-primary-400 to-primary-400 via-primary-500">
      <Container>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center"
        >
          <div className="px-2 lg:py-24">
            <div className="max-w-xl mx-auto text-center sm:text-left">
              <h2 className="text-4xl font-bold text-white md:text-5xl drop-shadow">
                {/* Personalized farming */}
                {t('personalised-farming.title')}
              </h2>

              <p className="block my-4 text-lg drop-shadow text-primary-50">
                {/* Customised farming just for you with our Techland app. Grow
                plants on 1,902 acres of land with our technology. */}
                {t('personalised-farming.about')}
              </p>

              <motion.div
                animate={controls}
                initial="hidden"
                variants={containerVariants}
                transition={{ delay: 0.2 }}
                className="my-10 md:my-8"
              >
                <Button size="large" variant="white">
                  {/* Get Started Today */}
                  {t('personalised-farming.get-started')}
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={mobileVariants}
            transition={{ delay: 0.6 }}
          >
            <Image
              height={100}
              width={100}
              alt="Violin"
              unoptimized
              src={ssMobileMockup01}
              className="object-contain w-full h-full drop-shadow"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: { opacity: 0, y: 100 },
}

const mobileVariants = {
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
  hidden: { opacity: 0, x: 200, scale: 0.9 },
}

export default PersonalisedFarming
