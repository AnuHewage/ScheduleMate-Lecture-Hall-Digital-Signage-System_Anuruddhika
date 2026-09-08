export default function OccupancyCard({ occupancy }) {
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
        Building Occupancy
      </div>

      {occupancy.map((item) => (
        <div
          key={item.name}
          className="
            px-5
            py-4
          "
        >
          <div
            className="
              flex
              justify-between
              text-sm
              font-medium
            "
          >
            <span>{item.name}</span>

            <span>{item.percentage}%</span>
          </div>

          <p
            className="
              text-xs
              text-slate-500
              mt-1
            "
          >
            {item.detail}
          </p>

          <div
            className="
              mt-3
              h-2
              bg-gray-100
              rounded-full
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                bg-blue-500
              "
              style={{
                width: `${item.percentage}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
