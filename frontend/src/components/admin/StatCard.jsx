export default function StatCard({ item }) {
  return (
    <div
      className={`
bg-white
rounded-lg
border
border-gray-200
border-t-4
${item.color}
p-5
`}
    >
      <p
        className="
text-sm
text-slate-500
"
      >
        {item.title}
      </p>

      <div
        className="
mt-2
text-3xl
font-bold
text-slate-900
"
      >
        {item.value}

        {item.suffix && (
          <span
            className="
text-sm
text-slate-400
font-medium
"
          >
            {item.suffix}
          </span>
        )}
      </div>
    </div>
  );
}
