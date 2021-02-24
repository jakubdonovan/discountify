import React from "react"
import { FaFacebookF } from "react-icons/fa"

type quote = string | HTMLSpanElement | any

interface ReviewProps {
  name: string
  image: string
  quote1: quote
  quote2?: quote
  location: string
}

export const Review: React.FC<ReviewProps> = ({
  name,
  image,
  quote1,
  quote2,
  location,
}) => {
  return (
    <div className="relative flex items-center max-w-md p-8 mt-12 text-base bg-white border-gray-200 rounded-md shadow-lg font-proxima">
      <div className="flex flex-col justify-around text-gray-700 font-proxima">
        <div className="italic">
          {quote1}

          <p className="absolute top-0 left-0 leading-none text-gray-400 opacity-25 text-9xl">
            "
          </p>
        </div>
        <p className="italic">
          <p>{quote2}</p>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <p className="mt-4 text-base font-bold tracking-widest text-gray-800 uppercase font-inter">
                {name}
              </p>
              <p className="text-sm text-gray-500 font-inter">Happy Customer</p>
            </div>
            <img
              className="w-12 h-12 mt-4 rounded-full shadow-md"
              src={require(`../images/${image}.png`)}
              alt=""
            />
          </div>
        </div>

        <a href={`https://facebook.com/${location}`}>
          <FaFacebookF className="absolute bottom-0 right-0 w-8 h-8 m-8 text-gray-400 opacity-25 cursor-pointer hover:text-blue-500 hover:opacity-100" />
        </a>
      </div>
    </div>
  )
}
