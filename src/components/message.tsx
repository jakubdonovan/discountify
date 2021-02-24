import { checkPropTypes } from "prop-types"
import React from "react"
interface MessageProps {
  name: string
  text: string
  time: Date
  staff?: boolean
  profile?: string
}

export const Message: React.FC<MessageProps> = ({
  name,
  text,
  profile,
  time,
  staff,
}) => {
  return (
    <div
      className={`w-1/3 ${!staff && "ml-auto"} rounded-lg p-4 ${
        staff ? "bg-orange-200" : "bg-blue-200"
      }`}
    >
      <div className="flex space-x-4 text-gray-500 font-proxima">
        <img
          className="w-12 h-12 rounded-full shadow-md"
          src={require(`../images/${
            profile ? profile : "default-profile.png"
          }`)}
        />

        <div className="flex flex-col">
          <div className="font-bold text-gray-700">{text}</div>
          <div className="flex items-center text-sm font-inter">
            <p className="font-inter">{name}</p>
            <div className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </div>
            <p className="text-xs">
              {time.getMinutes()}{" "}
              <span className="text-gray-500">mins ago</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
