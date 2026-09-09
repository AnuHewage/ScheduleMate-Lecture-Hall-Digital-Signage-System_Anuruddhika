import { useState } from "react";

export default function EmergencyBroadcastModal({
  isOpen,
  onClose,
  onBroadcast,
}) {
  const [message, setMessage] = useState("");

  const [duration, setDuration] = useState("Until dismissed");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onBroadcast({
      message,
      duration,
      priority: "Emergency",
    });

    setMessage("");

    onClose();
  };

  return (
    <div
      className="
    fixed
    inset-0
    bg-black/50
    flex
    items-center
    justify-center
    z-50
    "
    >
      <div
        className="
      bg-white
      w-[500px]
      rounded-xl
      shadow-xl
      "
      >
        {/* Header */}

        <div
          className="
        px-6
        py-4
        border-b
        flex
        justify-between
        "
        >
          <h2
            className="
          text-lg
          font-semibold
          text-red-700
          "
          >
            Emergency Broadcast
          </h2>

          <button
            onClick={onClose}
            className="
          text-slate-500
          "
          >
            ✕
          </button>
        </div>

        {/* Body */}

        <div
          className="
        p-6
        space-y-5
        "
        >
          <div
            className="
          bg-red-50
          border
          border-red-200
          rounded-lg
          p-4
          "
          >
            <p
              className="
            text-sm
            text-red-700
            "
            >
              This message will immediately override normal digital signage
              slides.
            </p>
          </div>

          <div>
            <label
              className="
            text-sm
            text-slate-600
            "
            >
              Emergency Message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter emergency announcement..."
              rows="4"
              className="
            w-full
            mt-1
            border
            rounded-lg
            px-3
            py-2
            "
            />
          </div>

          <div>
            <label
              className="
            text-sm
            text-slate-600
            "
            >
              Display Duration
            </label>

            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="
            w-full
            mt-1
            border
            rounded-lg
            px-3
            py-2
            "
            >
              <option>Until dismissed</option>

              <option>30 Minutes</option>

              <option>1 Hour</option>

              <option>Today Only</option>
            </select>
          </div>
        </div>

        {/* Footer */}

        <div
          className="
        border-t
        px-6
        py-4
        flex
        justify-end
        gap-3
        "
        >
          <button
            onClick={onClose}
            className="
          border
          px-4
          py-2
          rounded-lg
          text-sm
          "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={!message}
            className="
          bg-red-600
          text-white
          px-5
          py-2
          rounded-lg
          text-sm
          font-semibold
          disabled:opacity-50
          "
          >
            Broadcast Now
          </button>
        </div>
      </div>
    </div>
  );
}
