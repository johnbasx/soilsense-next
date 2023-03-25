// import { AppStoreLink } from "@/components/AppStoreLink";
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import AppStoreDownload from '@/components/footer/AppStoreDownload'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-primary-500 py-24 sm:py-20"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center px-4">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get your first tips today
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            It takes 30 seconds to sign up. Download the app and create an
            account today and let&apos;s start making progress.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreDownload />
          </div>
        </div>
      </Container>
    </section>
  )
}
