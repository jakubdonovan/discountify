import React from "react"
import SEO from "../components/seo"
interface TermsProps {}

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <div>
      <SEO title="Terms" />
      <h1 className="text-2xl font-bold font-proxima">Terms and Conditions</h1>
    </div>
  )
}

export default Terms
