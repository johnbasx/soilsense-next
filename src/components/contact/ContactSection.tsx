import React from 'react'
// import ContactCover from "@public/images/hero/simon.jpg";
// import { Button } from "@/components/Button";
import {
  HiArrowRight,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import { useTranslation } from 'next-i18next'

const ContactSection = () => {
  const { t } = useTranslation('contact')

  return (
    <section>
      <div className="relative bg-white">
        <div className="grid grid-cols-1 gap-8 px-6 py-12 mx-auto max-w-7xl md:py-24 md:grid-cols-2">
          <div className="px-6 py-12 text-white md:px-10 bg-primary-500 rounded-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {/* Let&apos;s work together */}
              {t('contact-section.heading')}
            </h2>
            <address className="flex flex-col items-start justify-center gap-2 py-6 not-italic font-medium text-left">
              <h4 className="text-xl font-semibold">
                {/* Office Details */}
                {t('contact-section.office-details')}
              </h4>
              <div className="flex flex-col gap-4 mt-4">
                <a
                  className="inline-flex items-start space-x-2 duration-150 hover:text-primary-50 hover:underline"
                  href="https://goo.gl/maps/PUURpzbKMuJyCdzA6"
                >
                  <HiOutlineLocationMarker className="flex-shrink-0 w-5 h-5 mt-1 text-primary-50" />
                  <p className="max-w-sm">
                    {/* A26/12, 1st Floor, Chadha Market, Naya Bazar, Chandni Chowk,
                    Punjab - 110728 */}
                    {t('contact-section.address')}
                  </p>
                </a>
                <div className="inline-flex items-start space-x-2 font-medium">
                  <HiOutlinePhone className="flex-shrink-0 w-5 h-5 mt-px text-emerald-50" />
                  <div>
                    <a
                      href="tel:+91-8987662772"
                      className="duration-150 hover:text-emerald-50 hover:underline"
                    >
                      +91-8987662772
                    </a>
                    ,{' '}
                    <a
                      href="tel:+91-+91-8078998999"
                      className="duration-150 hover:text-emerald-50 hover:underline"
                    >
                      +91-8078998999
                    </a>
                  </div>
                </div>

                <a
                  className="inline-flex items-center justify-start space-x-2 duration-150 hover:text-emerald-50 hover:underline"
                  href="mailto:webmaster@somedomain.com"
                >
                  <HiOutlineMail className="flex-shrink-0 w-5 h-5 mt-px text-emerald-50" />
                  <span className="sr-only">Email: </span>
                  <span>support@soilsense.com</span>
                </a>
              </div>
            </address>
          </div>
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 mt-6 gap-y-4 sm:grid-cols-2 sm:gap-x-6"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                {/* First name */}
                {t('contact-section.form.first-name')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Your first name"
                  autoComplete="first-name"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                {/* Last name */}
                {t('contact-section.form.last-name')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last name/family name"
                  autoComplete="last-name"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {/* Email */}
                {t('contact-section.form.email')}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="yourname@abc.com"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                {/* Company */}
                {t('contact-section.form.company')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="Company / Institute / Organisation"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  {/* Phone */}
                  {t('contact-section.form.phone')}
                </label>
                <span id="phone-description" className="text-sm text-gray-400">
                  {/* Optional */}
                  {t('contact-section.form.optional')}
                </span>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="+91-9986659098"
                  aria-describedby="phone-description"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label
                  htmlFor="how-can-we-help"
                  className="block text-sm font-medium text-gray-700"
                >
                  {/* How can we help you? */}
                  {t('contact-section.form.message')}
                </label>
                <span
                  id="how-can-we-help-description"
                  className="text-sm text-gray-500"
                >
                  {/* Max. 500 characters */}
                  {t('contact-section.form.max')}
                </span>
              </div>
              <div className="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  placeholder="Something you wanna say to us..."
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="how-did-you-hear-about-us"
                className="block text-sm font-medium text-gray-700"
              >
                {/* How did you hear about us? */}
                {t('contact-section.form.reference')}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="how-did-you-hear-about-us"
                  id="how-did-you-hear-about-us"
                  placeholder="Friends / Website / Advertisements / Facebook?"
                  className="block w-full px-3 py-3 border border-gray-200 rounded-md shadow-sm hover:border-primary-500 sm:text-sm focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="mt-2 text-right sm:col-span-2">
              <button className="inline-flex items-center justify-center px-8 py-2 space-x-2 font-semibold text-center text-white duration-200 rounded-md bg-primary-500 hover:bg-emerald-600">
                <span>
                  {/* Submit form */}
                  {t('contact-section.form.submit')}
                </span>
                <HiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
