import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { TbArrowRight, TbChevronUp, TbMenu2 } from 'react-icons/tb'
import { ButtonLink } from './Button'
import Carousel from './carousel/Carousel'
import { Container } from './Container'
import PlayStoreDownload from './footer/PlayStoreDownload'
import LocaleSwitcher from './language/LocaleSwitcher'
import { Logo } from './Logo'
import { navigationLinks, NavLinks } from './NavLinks'
import { useTranslation } from 'next-i18next'

interface MobileNavProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

function MobileNavLink({ children, ...props }: MobileNavProps) {
  return (
    <Popover.Button
      as="a"
      className="block px-3 py-2 text-base font-medium text-gray-700 duration-150 rounded-md hover:bg-primary-100"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header({ carousel = false, dark = true }) {
  const router = useRouter()
  const currentRoute = router.pathname
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation('common')
  const Tnavigation = t('navigation-links', {
    returnObjects: true,
  })

  return (
    <header className="relative">
      {carousel && (
        <div className="absolute top-0 h-[50vh] right-0 w-full">
          <Carousel />
        </div>
      )}
      <nav className={clsx(dark ? 'bg-primary-500' : 'bg-transparent')}>
        <Container
          className={clsx(
            'relative z-50 flex justify-between py-4',
            carousel ? 'mb-[40vh]' : 'mb-0'
          )}
        >
          <Popover as={Fragment}>
            {({ open }) => (
              <>
                <div className="relative z-10 flex items-center justify-between flex-grow gap-16">
                  <Link href="/" aria-label="Home">
                    {open ? (
                      <Logo
                        dark
                        className="w-auto h-10 drop-shadow lg:hidden"
                      />
                    ) : (
                      <Logo className="w-auto h-10 drop-shadow" />
                    )}
                  </Link>
                  <div className="hidden mr-10 lg:flex lg:gap-10">
                    <NavLinks />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden font-semibold lg:block">
                    <LocaleSwitcher onClick={() => setMobileMenuOpen(false)} />
                  </div>

                  <ButtonLink
                    href="/login"
                    variant="outline-white"
                    className="hidden font-semibold lg:block"
                  >
                    {/* Download the app */}
                    {t('download')}
                  </ButtonLink>
                  <ButtonLink
                    href="#"
                    variant={dark ? 'black' : 'regular'}
                    className="items-center justify-center hidden space-x-2 font-semibold lg:inline-flex"
                  >
                    <span>
                      {/* Login */}
                      {t('login')}
                    </span>{' '}
                    <TbArrowRight />
                  </ButtonLink>
                  {/* <Popover className='lg:hidden'>
              {({ open }) => (
                <> */}
                  <div className="lg:hidden">
                    <Popover.Button
                      className="relative z-10 inline-flex items-center p-2 -m-2 rounded-lg stroke-primary-50 hover:bg-primary-200/50 hover:stroke-primary-600 active:stroke-primary-900 focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <TbChevronUp className="w-6 h-6" />
                        ) : (
                          <TbMenu2 className="w-6 h-6 text-white" />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-black/50 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 px-6 pb-6 origin-top shadow-2xl rounded-b-2xl bg-gray-50 pt-28 shadow-gray-900/20"
                          >
                            <div className="space-y-4">
                              {navigationLinks.map((item, index) => (
                                <MobileNavLink
                                  href={item.link}
                                  className={clsx(
                                    'inline-flex items-center w-full px-3 py-2 space-x-2 text-lg rounded-md font-medium',
                                    currentRoute === item.link &&
                                      'bg-primary-100'
                                  )}
                                  key={'Mobile-navigation-' + item.id}
                                >
                                  <span>{Tnavigation[index].label}</span>
                                </MobileNavLink>
                              ))}
                              <div className="px-3 py-2">
                                <LocaleSwitcher
                                  onClick={() => setMobileMenuOpen(false)}
                                />
                              </div>
                            </div>

                            <div className="flex flex-col gap-4 px-3 mt-4">
                              {/* <ButtonLink
                              href='/login'
                              variant='outline'
                              size='large'
                              className='w-full text-center'
                            >
                              Download the app
                            </ButtonLink> */}
                              <PlayStoreDownload />
                              <ButtonLink
                                href="#!"
                                size="large"
                                className="w-full text-center"
                              >
                                {/* Login to your account */}
                                {t('download')}
                              </ButtonLink>
                              <div className="text-center">
                                <span className="text-sm text-gray-500">
                                  {/* Don&apos;t have an account? */}
                                  {t('new')}
                                </span>
                                <ButtonLink href="#!" variant="link">
                                  {/* Register */}
                                  {t('register')}
                                </ButtonLink>
                              </div>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* </>
              )}
            </Popover> */}
                </div>
              </>
            )}
          </Popover>
        </Container>
      </nav>
    </header>
  )
}
