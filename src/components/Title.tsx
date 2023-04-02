import clsx from 'clsx'
import React from 'react'

type TitleProps = {
  title: string
  para?: string
  containerStyles?: string | string[]
  titleStyles?: string | string[]
}

const Title = ({ title, para, containerStyles, titleStyles }: TitleProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center max-w-2xl gap-4 py-8 mx-auto text-center',
        containerStyles
      )}
    >
      <h2 className={clsx('text-4xl font-bold lg:text-5xl', titleStyles)}>
        {title}
        {/* {t("end-to-end-supply.heading")} */}
      </h2>
      <p className="text-gray-600">
        {para}
        {/* {t("end-to-end-supply.description")} */}
      </p>
    </div>
  )
}

export default Title
