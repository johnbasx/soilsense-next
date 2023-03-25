import { ReviewsDataProps } from '@/contents/reviews'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { HiShieldCheck } from 'react-icons/hi'

const ReviewCard = ({ ...review }: ReviewsDataProps) => {
  return (
    <div key={review.id}>
      <div className="px-6 py-6 rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden">
        <div className="flex space-x-0.5">
          {[...new Array(5)].map((rating, index) =>
            index < review.rating ? (
              <AiFillStar
                key={rating + index}
                className="h-5 w-5 text-yellow-400"
              />
            ) : (
              <AiFillStar
                key={'gray' + index + rating}
                className="h-5 w-5 text-gray-300"
              />
            )
          )}
        </div>
        <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
          {review.date}
        </p>
        <div className="mt-6 inline-flex items-center space-x-1">
          <HiShieldCheck className="text-gray-500" />
          <p className="text-sm font-medium leading-5 text-gray-500">
            Verified customer
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-800">{review.title}</h3>
          <p className="text-sm font-medium line-clamp-2 leading-5 text-gray-600">
            {review.body}
          </p>
        </div>
        <div className="mt-6 flex items-center space-x-2">
          <div className="flex flex-shrink-0 rounded-full border border-gray-200 ">
            <Image
              height={100}
              width={100}
              className="w-10 h-10 object-cover rounded-full"
              src={review.image}
              alt="profile author"
            />
          </div>
          <span className="font-medium">{review.author}</span>
          <div className="">
            <BsPatchCheckFill className="text-primary-400 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
