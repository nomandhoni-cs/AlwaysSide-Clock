import React from "react"

interface ClockComponentProps {
  currentTime: string
  mainClockName: string
}

const ClockComponent: React.FC<ClockComponentProps> = ({
  currentTime,
  mainClockName
}) => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-24 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <h2 className="text-sm font-semibold text-gray-600 mb-1">
        {mainClockName}
      </h2>
      <p className="text-5xl font-bold text-gray-800 uppercase">
        {currentTime}
      </p>
    </div>
  )
}

export default ClockComponent
