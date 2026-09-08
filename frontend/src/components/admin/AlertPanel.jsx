export default function AlertPanel({ alerts }) {
  return (
    <div
      className="
        bg-white
        border
        border-gray-200
        rounded-lg
      "
    >
      <div
        className="
          px-5
          py-4
          border-b
          font-semibold
          text-slate-900
        "
      >
        Needs Attention
      </div>

      {alerts.map((alert) => (
        <div
          key={alert.title}
          className="
            px-5
            py-3
            border-b
            last:border-none
          "
        >
          <p
            className="
              text-sm
              font-semibold
              text-slate-800
            "
          >
            {alert.title}
          </p>

          <p
            className="
              text-xs
              text-slate-500
              mt-1
            "
          >
            {alert.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
