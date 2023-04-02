import { AnimatePresence, motion } from 'framer-motion'
import { createID } from '@/utils/helpers'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { clsx } from 'clsx'
import { useTranslation } from 'next-i18next'
export const navigationLinks = [
  {
    id: createID(),
    label: 'Services',
    link: '/services',
  },
  {
    id: createID(),
    label: 'About',
    link: '/about',
  },
  {
    id: createID(),
    label: 'Case Studies',
    link: '/case-studies',
  },
  {
    id: createID(),
    label: 'Contact',
    link: '/contact',
  },
]

export function NavLinks() {
  // let [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const router = useRouter()
  const currentRoute = router.pathname
  const { t } = useTranslation('common')
  const navigationTranslated = t('navigation-links', {
    returnObjects: true,
  })

  return (
    <>
      {navigationLinks.map(({ label, id, link }, index) => (
        <Link
          href={link}
          key={'navigation-' + id}
          className={clsx(
            'relative px-3 py-2 -mx-3 -my-2 text-sm font-semibold text-white transition-colors duration-200 rounded-lg hover:text-primary-50 hover:bg-primary-100/20',
            currentRoute === link && 'bg-primary-100/20 text-primary-50'
          )}
          // onMouseEnter={() => setHoveredIndex(index)}
          // onMouseLeave={() => setHoveredIndex(0)}
        >
          <AnimatePresence>
            {/* {hoveredIndex === index && ( */}
            <motion.span
              className="absolute inset-0 rounded-lg"
              // layoutId='hoverBackground'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
            {/* )} */}
          </AnimatePresence>
          <span className="relative z-10">
            {navigationTranslated[index].label}
          </span>
        </Link>
      ))}
    </>
  )
}
