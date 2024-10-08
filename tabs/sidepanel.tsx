import ClockComponent from "~components/ClockComponent"

import { timezones } from "./timezones"

import "./style.css"

import React, { useEffect, useState } from "react"

import SettingsForm from "~components/SettingsForm"

const SidePanelClockApp: React.FC = () => {
  interface ClockData {
    currentTime: string
    showSeconds: boolean
    use24Hour: boolean
    currentTheme: string
    mainClockTimezone: string
    mainClockName: string
    locations: Array<{ name: string; timezone: string; time: string }>
    notes: string[]
    showQuote: boolean
    showSettings: boolean
  }
  // Consolidated State Management
  const [appData, setAppData] = useState<ClockData>({
    currentTime: "00:00:00",
    showSeconds: true,
    use24Hour: false,
    currentTheme: "dark",
    mainClockTimezone: Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.toString(),
    mainClockName: "Local",
    locations: [],
    notes: [],
    showQuote: true,
    showSettings: false
  })

  const [newLocationName, setNewLocationName] = useState<string>("")
  const [newLocationTimezone, setNewLocationTimezone] = useState<string>("")

  // Save to LocalStorage whenever appData changes
  useEffect(() => {
    localStorage.setItem("clockAppData", JSON.stringify(appData))
  }, [newLocationTimezone, newLocationName])

  // Load from LocalStorage
  useEffect(() => {
    // console.log("first")
    const savedData = localStorage.getItem("clockAppData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setAppData(data)
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [newLocationTimezone, newLocationName])

  // Update Clock
  const updateClock = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: appData.showSeconds ? "2-digit" : undefined,
      hour12: !appData.use24Hour,
      timeZone: appData.mainClockTimezone
    }
    const updatedTime = now.toLocaleTimeString("en-GB", options)
    setAppData((prevData) => ({
      ...prevData,
      currentTime: updatedTime
    }))
    updateAllLocationTimes()
  }

  // Update times for all locations
  const updateAllLocationTimes = () => {
    const updatedLocations = appData.locations.map((location) => ({
      ...location,
      time: getLocationTime(location.timezone)
    }))
    setAppData((prevData) => ({
      ...prevData,
      locations: updatedLocations
    }))
  }

  // Get the time for a specific timezone
  const getLocationTime = (timezone: string): string => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: appData.showSeconds ? "2-digit" : undefined,
      hour12: !appData.use24Hour,
      timeZone: timezone
    }
    return now.toLocaleTimeString("en-GB", options).toUpperCase()
  }

  // Handle adding a new location
  const handleAddLocation = () => {
    const newLocation = {
      name: newLocationName,
      timezone: newLocationTimezone,
      time: getLocationTime(newLocationTimezone)
    }
    console.log(newLocation)
    setAppData((prevData) => ({
      ...prevData,
      locations: [...prevData.locations, newLocation]
    }))
    setNewLocationName("")
    setNewLocationTimezone("")
  }

  return (
    <div className="p-4 space-y-2">
      <div className="nav-container flex justify-end items-end">
        <button
          className=" border-b-2 border-gray-300 pb-2 mb-2 bg-green-500 hover:bg-green-700 text-white p-2 rounded-lg"
          onClick={() =>
            setAppData((prevData) => ({
              ...prevData,
              showSettings: !prevData.showSettings
            }))
          }>
          Edit
        </button>
      </div>

      {/* Main Clock */}
      <ClockComponent
        currentTime={appData.currentTime}
        mainClockName={appData.mainClockName}
      />

      {/* Other Clocks */}
      {appData.locations.map((location, index) => (
        <ClockComponent
          key={index}
          currentTime={location.time}
          mainClockName={location.name}
        />
      ))}

      {appData.showSettings ? (
        <SettingsForm
          newLocationName={newLocationName}
          setNewLocationName={setNewLocationName}
          newLocationTimezone={newLocationTimezone}
          setNewLocationTimezone={setNewLocationTimezone}
          timezones={timezones}
          handleAddLocation={handleAddLocation}
        />
      ) : null}
    </div>
  )
}

export default SidePanelClockApp
