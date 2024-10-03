import ClockComponent from "~components/ClockComponent"

import "./style.css"

import React, { useEffect, useState } from "react"

const SidePanelClockApp: React.FC = () => {
  // State Management
  const [currentTime, setCurrentTime] = useState<string>("00:00:00")
  const [showSeconds, setShowSeconds] = useState<boolean>(true)
  const [use24Hour, setUse24Hour] = useState<boolean>(true)
  const [showQuote, setShowQuote] = useState<boolean>(true)
  const [currentTheme, setCurrentTheme] = useState<string>("dark")
  const [mainClockTimezone, setMainClockTimezone] =
    useState<string>("Asia/Dhaka")
  const [mainClockName, setMainClockName] = useState<string>("Bangladesh")
  const [locations, setLocations] = useState<
    Array<{ name: string; timezone: string; time: string }>
  >([
    { name: "India", timezone: "Asia/Kolkata", time: "00:00:00" },
    { name: "South Africa", timezone: "Africa/Johannesburg", time: "00:00:00" },
    { name: "Canada", timezone: "America/Toronto", time: "00:00:00" },
    { name: "Australia", timezone: "Australia/Sydney", time: "00:00:00" }
  ])
  const [currentQuote, setCurrentQuote] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [websites, setWebsites] = useState<string[]>([
    "https://github.com/hasinhayder/",
    "https://github.com/hasinhayder/cronos",
    "https://www.linkedin.com/in/thestoryteller/",
    "https://www.facebook.com/hasin",
    "https://twitter.com/hasin",
    "https://medium.com/@hasinhayder"
  ])
  const [alarmTime, setAlarmTime] = useState<string>("")
  const [alarmRang, setAlarmRang] = useState<boolean>(false)
  const [alarmOpen, setAlarmOpen] = useState<boolean>(false)

  const alarmSound = new Audio(
    "//www.soundjay.com/misc/sounds/bell-ringing-02.mp3"
  )

  // Load from LocalStorage
  useEffect(() => {
    const savedData = localStorage.getItem("clockAppData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setShowSeconds(data.showSeconds)
      setUse24Hour(data.use24Hour)
      setCurrentTheme(data.currentTheme)
      setMainClockTimezone(data.mainClockTimezone)
      setMainClockName(data.mainClockName)
      setLocations(data.locations)
      setNotes(data.notes)
      setWebsites(data.websites)
      setShowQuote(data.showQuote)
      setAlarmTime(data.alarmTime)
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    const quoteInterval = setInterval(updateQuote, 60000) // Update quote every minute
    return () => {
      clearInterval(interval)
      clearInterval(quoteInterval)
    }
  }, [])

  // Update Clock
  const updateClock = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !use24Hour,
      timeZone: mainClockTimezone
    }
    if (showSeconds) options.second = "2-digit"
    setCurrentTime(now.toLocaleTimeString("en-GB", options))
    updateAllLocationTimes()
  }

  // Update times for all locations
  const updateAllLocationTimes = () => {
    const updatedLocations = locations.map((location) => ({
      ...location,
      time: getLocationTime(location.timezone)
    }))
    setLocations(updatedLocations)
  }

  // Get the time for a specific timezone
  const getLocationTime = (timezone: string): string => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !use24Hour,
      timeZone: timezone
    }
    return now.toLocaleTimeString("en-GB", options).toUpperCase()
  }

  // Apply Theme (You can add the logic for applying theme if needed)
  const applyTheme = () => {
    // Theme application logic here (related to particles or UI elements)
  }

  // Alarm Management
  useEffect(() => {
    const interval = setInterval(checkAlarm, 1000)
    return () => clearInterval(interval)
  }, [alarmTime, alarmRang])

  const checkAlarm = () => {
    if (!alarmTime || alarmRang) return
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: mainClockTimezone
    }
    const currentAlarmTime = now
      .toLocaleTimeString("en-GB", options)
      .slice(0, 5) // HH:MM format
    if (currentAlarmTime === alarmTime) triggerAlarm()
  }

  const triggerAlarm = () => {
    setAlarmRang(true)
    alarmSound.play()
  }

  const stopAlarm = () => {
    alarmSound.pause()
    setAlarmRang(false)
  }

  // Handle Quote Updates
  const quotes = [
    "The only way to do great work is to love what you do - Steve Jobs",
    "Time is what we want most, but we often use it the least effectively - William Penn",
    "The two most powerful warriors are patience and time - Leo Tolstoy"
  ]

  const updateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  // Save to LocalStorage
  const saveToLocalStorage = () => {
    const data = {
      showSeconds,
      use24Hour,
      currentTheme,
      mainClockTimezone,
      mainClockName,
      locations,
      notes,
      websites,
      showQuote,
      alarmTime
    }
    localStorage.setItem("clockAppData", JSON.stringify(data))
  }

  return (
    <div className="p-4 space-y-2">
      <span className="text-lg font-bold border-b-2 border-gray-300 pb-2 mb-2">
        Main Clock ({mainClockName})
      </span>
      {/* Main Clock */}
      <ClockComponent currentTime={currentTime} mainClockName={mainClockName} />

      {/* Other Clocks */}
      {locations.map((location, index) => (
        <ClockComponent
          key={index}
          currentTime={location.time}
          mainClockName={location.name}
        />
      ))}
    </div>
  )
}

export default SidePanelClockApp
