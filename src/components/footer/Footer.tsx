import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import FooterLinks from './FooterLinks'
import Copyrights from './Copyrights'
import Image from 'next/image'

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      id="footer"
      className="relative text-white"
    >
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-green-land -z-10 brightness-75">
        <Image
          src="/assets/images/green-land.jpg"
          alt="Footer background image"
          height={100}
          width={100}
          priority
          unoptimized
          className="object-cover w-full h-full brightness-75"
        />
      </div>
      <Container>
        <div className="bg-transparent">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-start lg:gap-8">
              <div className="flex items-start justify-start w-auto h-24 md:h-40">
                <Logo className="w-1/2 h-full md:w-full aspect-auto" />
              </div>

              <FooterLinks />
            </div>

            <Copyrights />
          </div>
        </div>
      </Container>
    </footer>
  )
}
