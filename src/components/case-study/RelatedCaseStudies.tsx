import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { relatedStudiesData } from './relatedStudiesData'

const RelatedCaseStudies = () => {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50">
      <div className="max-w-screen-xl px-6 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-gray-900">
          Related case studies
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {relatedStudiesData.map((item) => (
            <article key={'related-case-study-item-' + item.id}>
              <Link href={`/case-study/${item.id}`}>
                <Image
                  src={item.image}
                  height={100}
                  width={100}
                  className="w-full mb-5 aspect-video rounded-2xl"
                  alt={'Image-' + item.title}
                />
              </Link>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 duration-150 hover:text-primary-600">
                <Link href={`/case-study/${item.id}`}>{item.title}</Link>
              </h2>
              <p className="mb-4 font-light text-gray-500 line-clamp-2">
                {item.summary}
              </p>
              <Link
                href={`/case-study/${item.id}`}
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 hover:no-underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RelatedCaseStudies
