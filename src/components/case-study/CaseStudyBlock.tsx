import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CaseStudyBlockProps } from './caseStudiesData'
import Tag from './Tag'
import { useTranslation } from 'next-i18next'

const CaseStudyBlock = ({ ...item }: CaseStudyBlockProps) => {
  const { t } = useTranslation('casestudy')

  return (
    <li
      //   key={'case-study-item-' + index}
      className="px-6 py-6 border-2 md:py-8 border-gray-200/50 rounded-3xl"
    >
      <article>
        <div className="gap-6 space-y-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:items-baseline md:space-y-0">
          <Link href={`/case-study/${item.id}`}>
            <Image
              src={item.image}
              height={100}
              width={100}
              priority
              className="object-cover w-full aspect-square rounded-2xl"
              alt={'Image-' + item.title}
            />
          </Link>

          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <dl>
                <dt className="text-sm text-gray-400">
                  {/* Published on */}
                  {t('published-on')}
                </dt>
                <dd className="text-base font-medium leading-6 text-primary-500">
                  <time dateTime={item.date.toISOString()}>
                    {format(new Date(), 'eeee, d LLL, yyyy')}
                  </time>
                </dd>
              </dl>
              <div>
                <h2 className="text-2xl font-bold leading-8">
                  <Link
                    href={`/case-study/${item.id}`}
                    className="text-gray-900 duration-150 hover:text-primary-600"
                  >
                    {item.title}
                  </Link>
                </h2>
                <div className="flex flex-wrap mt-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className="prose text-gray-500 line-clamp-3 max-w-none">
                {item.summary}
              </div>
            </div>
            <div className="text-base font-medium leading-6">
              <Link
                href={`/case-study/${item.id}`}
                className="text-primary-500 hover:text-primary-600"
                aria-label={`Read "${item.title}"`}
              >
                {/* Read more  */}
                {t('read-more')} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default CaseStudyBlock
