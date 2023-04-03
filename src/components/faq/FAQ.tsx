import React from 'react'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { nanoid } from 'nanoid'
import { useTranslation } from 'next-i18next'

const faqData = [
  {
    id: nanoid(),
    question: 'How can I get the services from Soil Sense?',
    answer:
      'Superiority good fearful faithful ascetic marvelous inexpedient against chaos faith. Play grandeur disgust prejudice fearful moral intentions. Grandeur overcome faithful madness joy snare truth of ultimate moral mountains',
  },
  {
    id: nanoid(),
    question: 'What does Soil quality management exactly mean?',
    answer:
      'Ubermensch spirit suicide moral noble christian fearful sexuality justice decrepit. Selfish love hatred zarathustra intentions grandeur good self contradict ultimate hatred. Truth marvelous faithful horror salvation dead justice pious virtues burying pious intentions noble. Selfish ascetic holiest holiest society morality.',
  },
  {
    id: nanoid(),
    question: 'What is the most important thing about soil?',
    answer:
      'Soil plays an important role in both air and water quality. Poor quality soil that is not covered with plants or residues blows with the wind, causing dust storms. It will erode with the rain, adding nutrients to streams, rivers and lakes, and makes them muddy. Soil that has good quality resists wind and water erosion. The rain that falls on good quality soil moves into the ground to be used by plants, or to recharge aquifers. The water is purified as it moves through the soil because the soil is a natural filter that removes pollutants in three ways: chemically, physically, and biologically. Clay particles in soil have a negative charge, and they attract positively charged pollutants and hold them in the soil. Most heavy metal pollutants have positive charges and so are chemically trapped in soils so they do not reach water tables',
  },

  {
    id: nanoid(),
    question:
      'What is the difference between Soil Temperature and Soil Humidity?',
    answer:
      'Suicide endless endless hatred battle ultimate revaluation. Decieve will horror ultimate abstract ideal justice reason chaos convictions selfish noble. Intentions madness pinnacle christianity derive madness justice salvation society. Holiest oneself joy self virtues christian. Decieve faith inexpedient horror derive contradict moral joy gains war selfish.',
  },
  {
    id: nanoid(),
    question: 'Can I use Soil Sense technology for free?',
    answer:
      'No, Derive dead play inexpedient hatred fearful spirit war morality madness hatred. Fearful dead convictions fearful enlightenment decrepit ultimate oneself depths revaluation.',
  },
  {
    id: nanoid(),
    question:
      'I want to hire for more than one project with Soil Sense. Is that possible?',
    answer:
      'Yes, Fearful dead convictions fearful enlightenment decrepit ultimate oneself depths.',
  },

  {
    id: nanoid(),
    question: 'What is some of the technology you use when you are working?',
    answer:
      'Technology? Wow! What a question! Soil scientists work with many types of technology, from extremely simple (hands, picks, and water bottles) to extremely complex. Some of the advanced technologies include: geographic positioning systems, geographic information systems, laser surveying systems, infrared thermometry, multispectral imagery, X-ray spectroscopy (mineralogists), several types of spectrophotometers (atomic absorption, plasma emission, etc.; fertility and environmental specialists), respirometers (biologists studying the activity of soil organisms), time domain reflectometry and various types of psychrometry (soil physicists studying water in the soil)',
  },
  {
    id: nanoid(),
    question: 'How does support work?',
    answer:
      'Sarathustra intentions grandeur good self contradict ultimate hatred. Truth marvelous faithful horror salvation dead justice pious virtues burying pious intentions noble.',
  },
]

const FAQ = () => {
  const { t } = useTranslation('about')
  // const Tfaq = t('faq.questions', {returnObjects: true})
  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-20 mx-auto sm:py-32 lg:px-6">
        <h2 className="mb-8 text-5xl font-bold tracking-tight text-gray-900">
          {/* Frequently asked questions (FAQs) */}
          {t('faq.heading')}
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
          {/* 1st Column */}
          <div>
            {faqData.slice(0, faqData.length / 2).map((item, index) => (
              <FAQBlock
                index={index}
                {...item}
                key={'faq-left-item-' + item.id}
              />
            ))}
          </div>
          {/* 2nd Column */}
          <div>
            {faqData
              .slice(faqData.length / 2, faqData.length)
              .map((item, index) => (
                <FAQBlock
                  index={index + faqData.length / 2}
                  {...item}
                  key={'faq-right-item-' + item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export type FAQBlockType = {
  id: string
  question: string
  answer: string
  index: number
}
export type FAQsType = FAQBlockType[]

export const FAQBlock = ({ index, ...item }: FAQBlockType) => {
  const { t } = useTranslation('about')
  const Tfaq = t('faq.questions', { returnObjects: true })
  return (
    <div className="mb-10" key={'faq-item-' + item.id}>
      <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
        <HiQuestionMarkCircle className="flex-shrink-0 w-5 h-5 mr-2 text-primary-400" />
        {/* {item.question} */}
        {Tfaq[index].question}
      </h3>
      <p className="p-4 text-gray-600 bg-slate-200/50 rounded-3xl">
        {/* {item.answer} */}
        {Tfaq[index].answer}
      </p>
    </div>
  )
}
export default FAQ
