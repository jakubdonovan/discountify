import React from "react"
import { Steps } from "./steps"
interface HowProps {}

export const How: React.FC<HowProps> = ({}) => {
  return (
    <div
      style={{ borderRadius: "45px" }}
      className="p-8 bg-white shadow-lg md:-mx-12 lg:mx-0 md:px-8 md:rounded-3xl"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="mx-auto text-xl font-bold tracking-widest text-center uppercase md:text-left font-proxima md:text-base">
          how it works
        </h2>

        <hr className="w-5/12 h-1 bg-orange-400" />
      </div>
      <div className="flex flex-col justify-between h-full mt-6 space-y-3 ">
        <Steps
          img="network.svg"
          text="We get thousands of referal coupons from our coupon blogs."
        />

        <hr className="w-full text-gray-100" />

        <Steps
          img="checklist.svg"
          text="You send us the link to the restaurant you want to order from, your address and the menu."
        />
        <hr className="w-full text-gray-100" />
        <Steps
          img="cc.svg"
          text="We place your order instantly and send you a tracking link with the discount."
        />

        <Steps
          img="success.svg"
          text="You receive your food at half the cost!"
          className="w-auto p-8 -m-8 font-bold shadow-lg bg-gray-50"
          style={{ borderRadius: "0 0 45px 45px" }}
        />
      </div>
    </div>
  )
}
