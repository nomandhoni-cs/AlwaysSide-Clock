import ClockComponent from "~components/ClockComponent"

import "./style.css"

import React, { useEffect, useState } from "react"

const SidePanelClockApp: React.FC = () => {
  // State Management
  const [currentTime, setCurrentTime] = useState<string>("00:00:00")
  const [showSeconds, setShowSeconds] = useState<boolean>(true)
  const [use24Hour, setUse24Hour] = useState<boolean>(true)
  const [mainClockTimezone, setMainClockTimezone] =
    useState<string>("Europe/Dublin")
  const [mainClockName, setMainClockName] = useState<string>("Ireland")
  const [locations, setLocations] = useState<
    Array<{ name: string; timezone: string; time: string }>
  >([
    { name: "Bangladesh", timezone: "Asia/Dhaka", time: "00:00:00" },
    { name: "India", timezone: "Asia/Kolkata", time: "00:00:00" },
    { name: "South Africa", timezone: "Africa/Johannesburg", time: "00:00:00" }
  ])

  // Load from LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem("clockAppData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setShowSeconds(data.showSeconds)
      setUse24Hour(data.use24Hour)
      setMainClockTimezone(data.mainClockTimezone)
      setMainClockName(data.mainClockName)
      setLocations(data.locations)
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  // Update Clock
  const updateClock = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !use24Hour,
      timeZone: mainClockTimezone
    }
    if (showSeconds) options.second = "2-digit"
    setCurrentTime(now.toLocaleTimeString("en-GB", options))
    // updateAllLocationTimes()
  }
  return (
    <div className="p-4">
      <ClockComponent currentTime={currentTime} mainClockName={mainClockName} />
    </div>
  )
}

export default SidePanelClockApp
