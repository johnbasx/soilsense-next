import clsx from 'clsx'
import logoImage from '/public/assets/logos/soilsense-logo.png'
import logoDarkImage from '/public/assets/logos/soilsense.png'
import Image, { StaticImageData } from 'next/image'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image?: StaticImageData
  dark?: boolean
}

export function Logo({ image = logoImage, dark = false, ...props }: LogoProps) {
  return (
    <Image
      className={clsx('object-contain', props.className)}
      alt="SoilSense Logo"
      height={100}
      width={100}
      src={dark ? logoDarkImage : image}
    />
  )
}
