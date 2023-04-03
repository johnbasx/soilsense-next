import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  TbArrowLeft,
  TbArrowRight,
  TbBook,
  TbFileInfo,
  TbMessage2,
} from 'react-icons/tb'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'

const Custom404Page = () => {
  const { t } = useTranslation('error')
  const errorCards = t('cards', {
    returnObjects: true,
  })

  const router = useRouter()
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
        <div className="w-full ">
          <div className="flex flex-col items-center max-w-lg mx-auto text-center">
            <p className="text-2xl font-semibold text-primary-600">
              {/* 404 error! */}
              {t('error')}
            </p>
            <h1 className="mt-3 text-5xl font-bold text-gray-800 md:text-7xl">
              {/* We lost this page */}
              {t('heading')}
            </h1>
            <p className="mt-4 text-gray-500">
              {/* We couldn’t find what you’re looking for in our website. Let’s
              find a better place for you to go. */}
              {t('about')}
            </p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
              <button
                onClick={router.back}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-200 rounded-md gap-x-2 sm:w-auto hover:bg-gray-50"
              >
                <TbArrowLeft />

                <span>
                  {/* Go back */}
                  {t('go-back')}
                </span>
              </button>

              <Link
                href="/"
                className="w-1/2 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 rounded-md bg-primary-500 shrink-0 sm:w-auto hover:bg-primary-600"
              >
                {/* Take me home */}
                {t('home')}
              </Link>
            </div>
          </div>

          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl bg-primary-50">
              <span className="text-gray-500">
                <TbFileInfo className="w-8 h-8" />
              </span>

              <h3 className="mt-6 font-medium text-gray-700">
                {/* About SN Silos */}
                {errorCards[0].heading}
              </h3>

              <p className="mt-2 text-gray-500">
                {/* Want to know more about us? */}
                {errorCards[0].tagline}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center mt-4 text-sm text-primary-500 gap-x-2 hover:underline"
              >
                <span>
                  {/* Know more */}
                  {errorCards[0]['link-text']}
                </span>

                <TbArrowRight />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-primary-50">
              <span className="text-gray-500">
                <TbBook className="w-8 h-8" />
              </span>

              <h3 className="mt-6 font-medium text-gray-700">
                {/* Our blog & press */}
                {errorCards[1].heading}
              </h3>

              <p className="mt-2 text-gray-500">
                {/* Read the latest posts and photos. */}
                {errorCards[1].tagline}
              </p>

              <Link
                href="/press"
                className="inline-flex items-center mt-4 text-sm text-primary-500 gap-x-2 hover:underline"
              >
                <span>
                  {/* View lastest posts */}
                  {errorCards[0]['link-text']}
                </span>

                <TbArrowRight />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-primary-50">
              <span className="text-gray-500">
                <TbMessage2 className="w-8 h-8" />
              </span>

              <h3 className="mt-6 font-medium text-gray-700">
                {/* Want to talk with us? */}
                {errorCards[2].heading}
              </h3>

              <p className="mt-2 text-gray-500">
                {/* Can’t find what you’re looking for? */}
                {errorCards[2].tagline}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center mt-4 text-sm text-primary-500 gap-x-2 hover:underline"
              >
                <span>
                  {/* Chat with our team */}
                  {errorCards[0]['link-text']}
                </span>

                <TbArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Custom404Page

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['error', 'common'])),
  },
})
