import { useState } from "react";

export default function ChangePassword() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border rounded-xl p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="font-semibold">Security</h2>

          <p className="text-sm text-slate-500">Update account password</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="
border
px-4
py-2
rounded-lg
text-sm
"
        >
          {open ? "Cancel" : "Change Password"}
        </button>
      </div>

      {open && (
        <div className="mt-5 space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg px-3 py-2 w-full"
          />

          <button
            className="
bg-[#0b1220]
text-white
px-5
py-2
rounded-lg
"
          >
            Update Password
          </button>
        </div>
      )}
    </div>
  );
}
