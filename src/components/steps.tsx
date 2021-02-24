import React from "react"
interface StepsProps {
  img: string
  text: string
  style?: { borderRadius: string }
  className?: string
}

export const Steps: React.FC<StepsProps> = props => {
  return (
    <div
      style={props.style || {}}
      className={`flex items-center space-x-4 ${props.className}`}
    >
      <div className="flex items-center justify-center">
        <div
          className="w-16 h-16 bg-no-repeat"
          style={{
            backgroundImage: `url(${require("../images/" + props.img)})`,
          }}
        />
      </div>

      <p className="text-gray-700 text-g font-proxima">{props.text}</p>
    </div>
  )
}
