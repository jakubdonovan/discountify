import React from "react"
import { Review } from "./review"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
  return (
    <div className="px-12 py-8">
      <h2 className="text-2xl font-semibold text-center text-gray-700 font-proxima">
        What people people say about us
      </h2>

      <div className="flex justify-center space-x-12">
        <Review
          name="ellie andrews"
          image="woman"
          quote1="I spent £7.50 on an order that would have been £15! -"
          quote2="I'm never going to pay full price again."
          location=""
        />

        <Review
          name="Remo Italiano"
          image="remo"
          quote1={
            <span>
              I feel like I've wasted a lot of money not using discountify
              before <span className="not-italic"> 😭😭😭</span>
            </span>
          }
          //   quote2="I like to recommend my family, and get free meals."
          location=""
        />
      </div>
    </div>
  )
}
