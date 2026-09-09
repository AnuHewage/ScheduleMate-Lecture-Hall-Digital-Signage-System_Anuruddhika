import { useState } from "react";

export default function CancelSessionModal({ session, onClose, onConfirm }) {
  const [reason, setReason] = useState("");

  if (!session) return null;

  const handleConfirm = () => {
    onConfirm({
      ...session,
      reason,
    });

    setReason("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {/* Accent */}
        <div className="h-1 bg-rose-500 rounded-t-2xl" />

        {/* Header */}
        <div className="flex justify-between items-start px-6 py-5 border-b">
          <div className="flex gap-3">
            <div
              className="
              h-10 w-10 
              rounded-full 
              bg-rose-100 
              text-rose-600
              flex items-center justify-center
              font-bold
            "
            >
              !
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Cancel this session?
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                This will mark the session as cancelled on all connected digital
                displays immediately.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {/* Session Info */}
        <div className="px-6 py-5 space-y-4">
          <div
            className="
          bg-slate-50
          rounded-xl
          p-4
          text-sm
          space-y-2
          "
          >
            <p className="font-semibold text-slate-900">{session.module}</p>

            <p className="text-slate-600">
              {session.day} · {session.time}
            </p>

            <p className="text-slate-600">
              {session.room} · {session.lecturer}
            </p>
          </div>

          <div>
            <label
              className="
            text-xs
            font-semibold
            text-slate-500
            uppercase
            "
            >
              Reason for cancellation
            </label>

            <input
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter cancellation reason"
              className="
              mt-2
              w-full
              border
              rounded-lg
              px-3
              py-2
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="
        flex
        gap-3
        px-6
        py-5
        border-t
        "
        >
          <button
            onClick={onClose}
            className="
            flex-1
            border
            rounded-lg
            py-2.5
            text-sm
            font-semibold
            "
          >
            Keep session
          </button>

          <button
            onClick={handleConfirm}
            className="
            flex-1
            bg-rose-500
            text-white
            rounded-lg
            py-2.5
            text-sm
            font-semibold
            "
          >
            Cancel session
          </button>
        </div>
      </div>
    </div>
  );
}
