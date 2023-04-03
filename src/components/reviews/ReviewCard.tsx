import { ReviewsDataProps } from '@/contents/reviews'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { HiShieldCheck } from 'react-icons/hi'
import { useTranslation } from 'next-i18next'

const ReviewCard = ({ ...review }: ReviewsDataProps) => {
  const { t } = useTranslation('home')
  return (
    <div key={review.id}>
      <div className="px-6 py-6 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-2xl">
        <div className="flex space-x-0.5">
          {[...new Array(5)].map((rating, index) =>
            index < review.rating ? (
              <AiFillStar
                key={rating + index}
                className="w-5 h-5 text-yellow-400"
              />
            ) : (
              <AiFillStar
                key={'gray' + index + rating}
                className="w-5 h-5 text-gray-300"
              />
            )
          )}
        </div>
        <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
          {review.date}
        </p>
        <div className="inline-flex items-center mt-6 space-x-1">
          <HiShieldCheck className="text-gray-500" />
          <p className="text-sm font-medium leading-5 text-gray-500">
            {/* Verified customer */}
            {t('testimonials.verified-customer')}
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-800">{review.title}</h3>
          <p className="text-sm font-medium leading-5 text-gray-600 line-clamp-2">
            {review.body}
          </p>
        </div>
        <div className="flex items-center mt-6 space-x-2">
          <div className="flex flex-shrink-0 border border-gray-200 rounded-full ">
            <Image
              height={100}
              width={100}
              className="object-cover w-10 h-10 rounded-full"
              src={review.image}
              alt="profile author"
            />
          </div>
          <span className="font-medium">{review.author}</span>
          <div className="">
            <BsPatchCheckFill className="w-5 h-5 text-primary-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
