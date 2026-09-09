export default function AccountSummary({ admin }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h2 className="font-semibold">Account Summary</h2>

      <div className="mt-4 space-y-3 text-sm">
        <p>
          ID :<b>{admin.id}</b>
        </p>

        <p>
          Joined :<b>{admin.joined}</b>
        </p>

        <p>
          Last Login :<b>{admin.lastLogin}</b>
        </p>

        <p>
          Status :
          <span
            className="
ml-2
bg-green-100
text-green-600
px-3
py-1
rounded-full
text-xs
"
          >
            Active
          </span>
        </p>
      </div>
    </div>
  );
}
