export default function ActivityLog({ logs }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="font-semibold">Recent Activity</h2>

      <div className="mt-4 space-y-4">
        {logs.map((item, index) => (
          <div key={index}>
            <p className="text-sm">{item.action}</p>

            <p className="text-xs text-slate-400">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
