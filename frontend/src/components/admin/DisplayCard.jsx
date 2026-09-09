export default function DisplayCard({ device, onConfigure, onRestart }) {
  return (
    <div
      className="
bg-white
border
rounded-xl
p-6
"
    >
      <div
        className="
flex
justify-between
items-start
"
      >
        <div>
          <h2
            className="
font-semibold
text-slate-900
"
          >
            {device.label}
          </h2>

          <p
            className="
text-xs
text-slate-400
mt-1
"
          >
            {device.deviceId}
          </p>
        </div>

        <p
          className={`
text-sm
font-semibold
${device.status === "Online" ? "text-emerald-600" : "text-red-500"}
`}
        >
          {device.status}
        </p>
      </div>

      <div
        className="
mt-5
space-y-3
text-sm
"
      >
        <div className="flex justify-between">
          <span className="text-slate-400">Building</span>

          <span>{device.building}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Last Sync</span>

          <span>{device.lastSynced}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Current Slide</span>

          <span>{device.currentSlide}</span>
        </div>
      </div>

      <div
        className="
  mt-6
  flex
  gap-3
  "
      >
        {/* Configure Button */}

        <button
          onClick={onConfigure}
          className="
    flex-1
    bg-blue-50
    border
    border-blue-200
    text-blue-700
    rounded-lg
    py-2
    text-sm
    font-semibold
    hover:bg-blue-100
    transition
    "
        >
          Configure
        </button>

        {/* Restart Button */}

        <button
          onClick={onRestart}
          className="
    flex-1
    bg-orange-50
    border
    border-orange-200
    text-orange-700
    rounded-lg
    py-2
    text-sm
    font-semibold
    hover:bg-orange-100
    transition
    "
        >
          Restart
        </button>
      </div>
    </div>
  );
}
