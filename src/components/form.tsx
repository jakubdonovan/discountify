import { Formik, Form, Field, ErrorMessage } from "formik"
import AlgoliaPlaces from "algolia-places-react"
import React, { useState } from "react"
import { orderFormProps } from "../pages"

interface FormProps {
  initialValues: orderFormProps
  handleClick: () => void
  handleSubmit: (data: orderFormProps) => void
}

export const OrderForm: React.FC<FormProps> = ({
  initialValues,
  handleSubmit,
  handleClick,
}) => {
  const [address, setAddress] = useState<orderFormProps["address"]>(
    initialValues.address
  )

  const onSubmit = (value: any) => {
    const data = { ...value, address }
    handleSubmit(data)
    handleClick()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="relative flex flex-col items-start justify-center h-full p-8 m-auto space-y-8 text-gray-700 font-inter">
        <div className="grid w-full gap-3">
          <label className="font-bold" htmlFor="url">
            Restaurant url
          </label>
          <Field
            placeholder="www.ubereats.com/london/food-delivery/tiagos/u-OIm9FOR3iPLNd0Vsy0Qg"
            className="p-4 py-4 text-lg text-gray-600 border border-gray-100 font-proxima"
            type="text"
            name="url"
          />
          <ErrorMessage name="url" />
        </div>

        <div className="grid w-full gap-3 text-gray-700 font-inter">
          <label className="font-bold" htmlFor="address">
            Address
          </label>
          <AlgoliaPlaces
            className="py-8 text-lg text-gray-600 border border-gray-100"
            name="address"
            placeholder="32 Address Lane, HA3 4KE"
            options={{
              appId: process.env.ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_API_KEY,
              language: "en",
              countries: ["gb"],
              // Other options from https://community.algolia.com/places/documentation.html#options
            }}
            onChange={res => {
              setAddress({
                street: res.suggestion.name,
                postcode: res.suggestion.postcode,
              })
            }}
          />
        </div>

        <div className="grid w-full gap-3 text-gray-700 font-inter">
          <label className="font-bold" htmlFor="notes">
            Delivery Notes
          </label>
          <Field
            placeholder="Deliver to flat 3"
            className="p-4 py-4 text-lg text-gray-600 border border-gray-100 font-proxima"
            type="text"
            name="notes"
          />
          <ErrorMessage name="notes" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12">
          <button
            className="px-8 py-4 m-auto font-bold tracking-widest text-white uppercase rounded-lg shadow-xl hover:from-green-500 bg-gradient-to-t from-green-400 to-green-500 font-proxima"
            type="submit"
          >
            Submit
          </button>

          <p className="m-auto text-xl font-bold text-gray-500 font-proxima">
            Step 1 of 3
          </p>
        </div>

        <div
          onClick={handleClick}
          className="absolute top-0 left-0 w-8 h-8 m-4 mx-8 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Form>
    </Formik>
  )
}
