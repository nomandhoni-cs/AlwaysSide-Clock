import type { TimezoneGroup } from "~types/timezoneTypes"

interface SettingsFormProps {
  newLocationName: string
  setNewLocationName: (name: string) => void
  newLocationTimezone: string
  setNewLocationTimezone: (timezone: string) => void
  timezones: TimezoneGroup[]
  handleAddLocation: () => void
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  newLocationName,
  setNewLocationName,
  newLocationTimezone,
  setNewLocationTimezone,
  timezones,
  handleAddLocation
}) => {
  return (
    <div className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Enter location name"
        value={newLocationName}
        onChange={(e) => setNewLocationName(e.target.value)}
        className="border p-1"
      />
      <select
        value={newLocationTimezone}
        onChange={(e) => setNewLocationTimezone(e.target.value)}
        className="border p-1 ml-2">
        {timezones.map((group: TimezoneGroup, groupIndex: number) => (
          <optgroup key={groupIndex} label={group.group}>
            {group.zones.map((zone, zoneIndex: number) => (
              <option key={zoneIndex} value={zone.zone}>
                {zone.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <button
        onClick={handleAddLocation}
        className="bg-green-500 hover:bg-green-700 text-white p-2 ml-2 rounded-lg">
        Add Location
      </button>
    </div>
  )
}

export default SettingsForm
