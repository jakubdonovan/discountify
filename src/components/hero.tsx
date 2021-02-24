import React from "react"
import { isMobile } from "react-device-detect"
interface HeroProps {
  handleClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ handleClick }) => {
  const text = isMobile ? (
    "Get half price on every ubereats order"
  ) : (
    <>
      {" "}
      Get all your{" "}
      <span style={{ textDecorationColor: "" }} className="italic underline ">
        {" "}
        ubereats{" "}
      </span>{" "}
      orders at half the price!{" "}
    </>
  )
  return (
    <div className="flex flex-col items-center justify-center px-4 md:items-start md:px-0">
      <h2 className="hidden font-semibold tracking-wide text-orange-100 uppercase md:block font-inter 2xl:text-2xl">
        come hungry, leave happy.
      </h2>
      <h1
        style={{ lineHeight: `${isMobile ? "110%" : "115%"}` }}
        className="mt-1 font-bold text-white md:max-w-lg text-mobile md:text-5xl font-proxima"
      >
        {text}
      </h1>

      <button
        onClick={handleClick}
        className="py-3 mt-12 font-bold tracking-wider text-white uppercase rounded-full shadow-md hover:from-green-500 px-7 bg-gradient-to-t from-green-400 to-green-500 font-proxima"
      >
        order now
      </button>
    </div>
  )
}
