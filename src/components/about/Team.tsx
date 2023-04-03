import Image from 'next/image'
import React from 'react'
import { nanoid } from 'nanoid'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'

export const teamData = [
  {
    id: nanoid(),
    name: 'Praveen Soni',
    designation: 'Director',
    work: 'Tech and Marketing',
    image: '/assets/team/praveen.jpg',
    linkedIn: '',
    instagram: '',
    twitter: '',
  },
  {
    id: nanoid(),
    name: 'Nitish Narula',
    designation: 'Director',
    work: 'Public Relation & Investment',
    image: '/assets/team/nitish.jpg',
    linkedIn: '',
    instagram: '',
    twitter: '',
  },
]

const Team = () => {
  const { t } = useTranslation('about')

  return (
    <div id="team" className="flex flex-col py-24 bg-primary-500">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center mb-12 text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h1 className="mb-4 text-4xl font-bold text-primary-50 md:text-5xl">
              {/* Meet Our Team */}
              {t('team.heading')}
            </h1>

            <p className="text-lg text-primary-50">
              {/* With over 40+ years of combined experience, we&apos;ve got a
              well-seasoned team at the helm. */}
              {t('team.description')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {teamData.map((member) => (
            <div
              className="w-full p-6 border-2 rounded-2xl bg-primary-300/50 border-primary-300/20 drop-shadow"
              key={'Team Member' + member.id}
            >
              <div className="flex flex-col">
                <a href="#!" className="mx-auto">
                  <Image
                    alt={member.name + member.id}
                    height={300}
                    width={300}
                    className="object-cover rounded-full aspect-square"
                    src={member.image}
                  />
                </a>

                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-primary-50">
                    {member.name}
                  </h3>

                  <div className="text-lg font-semibold text-primary-100">
                    <h4>{member.designation}</h4>
                  </div>
                  <span className="font-medium text-primary-100">
                    ({member.work})
                  </span>

                  <div className="flex items-center justify-center transition-opacity duration-300">
                    <a
                      href="#!"
                      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-indigo-50"
                    >
                      <FaLinkedinIn className="mx-auto text-indigo-600" />
                    </a>

                    <a
                      href="#!"
                      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-sky-50"
                    >
                      <FaTwitter className="mx-auto text-sky-500" />
                    </a>

                    <a
                      href="#!"
                      className="flex items-center justify-center w-10 h-10 text-center rounded-full hover:bg-orange-50"
                    >
                      <FaInstagram className="mx-auto text-orange-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
