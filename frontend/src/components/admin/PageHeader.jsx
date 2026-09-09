import { useNavigate } from "react-router-dom";

export default function PageHeader({
  title,
  description,
  actionText,
  actionPath,
  onAction,
}) {
  const navigate = useNavigate();

  const handleAction = () => {
    // Modal open / custom action
    if (onAction) {
      onAction();
      return;
    }

    // Page navigation
    if (actionPath) {
      navigate(actionPath);
    }
  };

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
          onClick={handleAction}
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
