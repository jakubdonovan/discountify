import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      a: file(relativePath: { eq: "404.webp" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 380, height: 380) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="relative h-screen p-8">
      <nav className="absolute w-full p-4 -m-8 bg-orange-400">
        <Link to="/" className="tracking-wider text-white font-logo">
          discountify
        </Link>
      </nav>
      <SEO title="404" />
      <div className="grid justify-center">
        <h1 className="w-full mt-12 text-2xl font-bold font-proxima">
          404: Not Found
        </h1>
        <p clssName="text-gray-700 font-inter">
          You just hit a route that doesn't exist... the sadness.
        </p>
        <Img className="mt-12" fixed={data.a.childImageSharp.fixed} />
      </div>
    </div>
  )
}

export default NotFoundPage
