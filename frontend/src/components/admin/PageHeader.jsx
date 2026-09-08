export default function PageHeader({ title, description, actionText }) {
  return (
    <div className="flex justify-between items-center">
      {/* Title */}

      <div>
        <h1
          className="
          text-xl
          font-bold
          text-slate-900
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
            text-sm
            text-slate-500
            mt-1
            "
          >
            {description}
          </p>
        )}
      </div>

      {/* Action Button */}

      {actionText && (
        <button
          className="
          bg-[#0b1220]
          text-white
          px-4
          py-2
          rounded-lg
          text-sm
          font-semibold
          hover:bg-slate-800
          transition
          "
        >
          + {actionText}
        </button>
      )}
    </div>
  );
}
