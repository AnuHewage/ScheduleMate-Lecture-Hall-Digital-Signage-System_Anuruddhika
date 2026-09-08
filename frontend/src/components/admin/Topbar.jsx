import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();

const pageTitles = {
  "/admin/dashboard": "Dashboard",
  "/admin/buildings": "Buildings & Floors",
  "/admin/rooms": "Rooms & Labs",
  "/admin/modules": "Modules",
  "/admin/lecturers": "Lecturers",
  "/admin/schedule": "Schedule Management",
};

const title = pageTitles[location.pathname] || "Dashboard";

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="
    bg-white
    border-b
    border-gray-200
    px-6
    py-4
    flex
    items-center
    justify-between
  "
    >
      {/* Left */}

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
      </div>

      {/* Right */}

      <div
        className="
flex
items-center
gap-3
"
      >
        {/* Date */}

        <div
          className="
bg-gray-50
border
border-gray-200
rounded-lg
px-3
py-2
text-sm
text-slate-600
"
        >
          {formattedDate} — {formattedTime}
        </div>

        {/* New Session */}

        <button
          className="
flex
items-center
gap-2
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
          <Plus size={16} />
          New Session
        </button>

        {/* Avatar */}

        <div
          className="
w-10
h-10
rounded-full
bg-yellow-500
flex
items-center
justify-center
font-bold
text-sm
text-black
"
        >
          SJ
        </div>
      </div>
    </div>
  );
}
