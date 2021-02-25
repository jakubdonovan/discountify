import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
interface TermsProps {}

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <div className="relative p-8">
      <nav className="absolute w-full p-4 -m-8 bg-orange-400">
        <Link to="/" className="tracking-wider text-white font-logo">
          discountify
        </Link>
      </nav>
      <SEO title="Terms" />
      <h1 className="text-2xl font-bold font-proxima">Terms and Conditions</h1>
    </div>
  )
}

export default Terms
