// import { AppStoreLink } from "@/components/AppStoreLink";
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import AppStoreDownload from '@/components/footer/AppStoreDownload'
import { useTranslation } from 'next-i18next'

export function CallToAction() {
  const { t } = useTranslation('home')
  return (
    <section
      id="get-free-shares-today"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-400 to-primary-500 sm:py-20"
    >
      <div className="absolute -translate-y-1/2 top-1/2 left-20 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="max-w-md px-4 mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {/* Get your first tips today */}
            {t('call-to-action.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            {/* It takes 30 seconds to sign up. Download the app and create an
            account today and let&apos;s start making progress. */}
            {t('call-to-action.about')}
          </p>
          <div className="flex justify-center mt-8">
            <AppStoreDownload />
          </div>
        </div>
      </Container>
    </section>
  )
}
