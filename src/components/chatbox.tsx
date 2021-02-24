import React from "react"
import { orderFormProps } from "../pages"
import { Message } from "./message"
interface ChatBoxProps extends orderFormProps {}

export const ChatBox: React.FC<ChatBoxProps> = ({ address, notes, url }) => {
  return (
    <div className="relative w-full h-full">
      <Message
        name="pepe"
        text="Hey, how can I help!"
        time={new Date()}
        profile="pepe.jpg"
        staff
      />

      {notes && (
        <Message
          name="guest"
          text={`Hey, I'd like to place an order at ${url}. My address is ${address.street}, ${address.postcode}.`}
          time={new Date()}
          profile="pepe.jpg"
        />
      )}

      <div className="static bottom-0 flex items-center w-full mt-4 space-x-4">
        <textarea className="w-full h-20 p-2 text-gray-900 bg-gray-200 rounded-md font-proxima focus:outline-white" />
        <button className="flex items-center gap-2 px-4 py-4 font-bold tracking-widest uppercase bg-blue-400 rounded-full focus:outline-none font-proxima">
          <div className="w-5 h-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
