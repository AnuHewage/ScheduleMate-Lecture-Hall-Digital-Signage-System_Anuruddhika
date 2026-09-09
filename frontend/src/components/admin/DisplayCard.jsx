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
        <button
          onClick={onConfigure}
          className="
flex-1
border
rounded-lg
py-2
text-sm
font-semibold
"
        >
          Configure
        </button>

        <button
          onClick={onRestart}
          className="
flex-1
border
rounded-lg
py-2
text-sm
font-semibold
"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
