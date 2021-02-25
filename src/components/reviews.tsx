import React from "react"
import { Review } from "./review"
import { graphql, useStaticQuery } from "gatsby"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      a: file(relativePath: { eq: "a.webp" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      b: file(relativePath: { eq: "b.webp" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="px-12 py-8">
      <h2 className="text-2xl font-semibold text-center text-gray-700 font-proxima">
        What people people say about us
      </h2>

      <div className="flex justify-center space-x-12">
        <Review
          name="ellie andrews"
          quote1="I spent £7.50 on an order that would have been £15! -"
          quote2="I'm never going to pay full price again."
          location=""
          image={data.a}
        />

        <Review
          name="Remo Italiano"
          quote1={
            <span>
              I feel like I've wasted a lot of money not using discountify
              before <span className="not-italic"> 😭😭😭</span>
            </span>
          }
          //   quote2="I like to recommend my family, and get free meals."
          location=""
          image={data.b}
        />
      </div>
    </div>
  )
}
