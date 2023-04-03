import { shuffledReviews } from '@/contents/reviews'
import { Container } from '@/components/Container'
import EmptyReviewCard from './EmptyReviewCard'
import ReviewCard from './ReviewCard'
import { useTranslation } from 'next-i18next'

const ReviewSection = () => {
  const { t } = useTranslation('home')

  return (
    <section id="testimonials">
      <Container>
        <div className="px-4 py-16 mx-auto md:max-w-full md:px-24 lg:px-8 lg:py-20">
          <div className="mb-10 text-center md:mx-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              {/* Testimonial and Reviews */}
              {t('testimonials.heading')}
            </h2>

            <div className="mt-4 text-xl text-gray-600">
              <p className="text-3xl font-extrabold tracking-tight uppercase text-primary-500">
                {/* We love */}
                {t('testimonials.tagline')}
              </p>
              <span>
                {/* What people say about us */}
                {t('testimonials.sub-heading')}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {shuffledReviews.slice(0, 8).map((review) => (
              <ReviewCard {...review} key={'review-card-' + review.id} />
            ))}
            <EmptyReviewCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ReviewSection
