export default function StatusBadge({ status }) {
  const styles = {
    "Ongoing Now": "bg-emerald-100 text-emerald-700",

    "Upcoming Soon": "bg-blue-100 text-blue-700",

    Available: "bg-slate-100 text-slate-600",

    "Temporarily Unavailable": "bg-rose-100 text-rose-700",
  };

  const dots = {
    "Ongoing Now": "bg-emerald-500",

    "Upcoming Soon": "bg-blue-500",

    Available: "bg-slate-400",

    "Temporarily Unavailable": "bg-rose-500",
  };

  return (
    <span
      className={`
inline-flex
items-center
gap-2
rounded-full
px-3
py-1
text-xs
font-semibold
${styles[status]}
`}
    >
      <span
        className={`
h-1.5
w-1.5
rounded-full
${dots[status]}
`}
      />

      {status}
    </span>
  );
}
