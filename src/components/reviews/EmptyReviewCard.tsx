import React from 'react'
import { ButtonLink } from '../Button'

const EmptyReviewCard = () => {
  return (
    <div className="px-6 py-6 rounded-2xl border border-gray-200 shadow-sm bg-white overflow-hidden justify-center flex flex-col">
      <div className="flex flex-col items-center text-center justify-center space-y-4">
        <h3 className="text-gray-500">
          Want to view more testimonials & reviews of our awesome customers?
        </h3>
        <ButtonLink>View more</ButtonLink>
      </div>
    </div>
  )
}

export default EmptyReviewCard
