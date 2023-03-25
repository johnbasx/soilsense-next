import React from 'react'
import { TbEye, TbFocus2, TbTarget, TbTelescope } from 'react-icons/tb'
// import { useTranslation } from 'next-i18next'
import { nanoid } from 'nanoid'

const visionData = [
  {
    id: nanoid(),
    name: 'Our Vision',
    about:
      'To make a sustainable future in agriculture Industry with the right inclusion of technology and innovation',
    Icon: TbEye,
  },
  {
    id: nanoid(),
    name: 'Our Mission',
    about:
      'To provide a cost effective method to increase the yeild with the help of organic means and technology',
    Icon: TbFocus2,
  },
  {
    id: nanoid(),
    name: 'Our Future',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla necessitatibus voluptates praesentium quas maiores aspernatur voluptate sequi enim eveniet illo id ut natus, dolores cumque hic alias est facilis?',
    Icon: TbTarget,
  },
  {
    id: nanoid(),
    name: 'Our Drive',
    about:
      'Sequi enim eveniet illo id ut natus, dolores cumque hic alias est facilis. aspernatur voluptate sequi enim eveniet illo id ut natus, dolores cumque hic alias est facili',
    Icon: TbTelescope,
  },
]

const OurVision = () => {
  // const { t } = useTranslation("about");
  // const visionTranslations = t("our-vision.data", { returnObjects: true });

  return (
    <div className="py-24 mx-auto max-w-7xl lg:py-32">
      <section className="px-6 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold lg:text-5xl">
            What we aim to provide
            {/* {t("our-vision.heading")} */}
          </h1>
          <p className="text-gray-600">
            IoT based devices and sensors to monitor the soil health (crop
            field). The information is easy to access and provides a wide sense
            of field conditions.
            {/* {t("our-vision.description")} */}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2">
          {visionData.map((item) => (
            <div
              key={'our-vision-' + item.id}
              className="flex flex-col items-center justify-center gap-3 p-6 text-center border rounded-2xl"
            >
              <item.Icon className="w-16 h-16 text-primary-500" />
              <h2 className="text-2xl font-bold text-primary-600">
                {item.name}
                {/* {visionTranslations[idx].name} */}
              </h2>
              <p className="text-lg line-clamp-2">
                {item.about}
                {/* {visionTranslations[idx].about} */}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurVision
