import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { adminUsers } from "../../data/adminData";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@sparkline.edu");

  const [password, setPassword] = useState("");

  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = adminUsers.find(
      (admin) => admin.email === email && admin.password === password,
    );

    if (user) {
      if (keepSignedIn) {
        localStorage.setItem("admin", JSON.stringify(user));
      } else {
        sessionStorage.setItem("admin", JSON.stringify(user));
      }

      setError("");

      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-slate-950
      p-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-2xl
        bg-white
        p-9
        shadow-2xl
        "
      >
        <h1
          className="
          text-2xl
          font-bold
          text-slate-900
          "
        >
          Admin sign in
        </h1>

        <p
          className="
          mt-2
          text-sm
          text-slate-500
          "
        >
          Sign in to manage schedules, rooms and displays.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <label
            className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-slate-500
            "
          >
            Work email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@sparkline.edu"
            className="
            mt-2
            w-full
            rounded-lg
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            text-sm
            text-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-slate-900
            "
          />

          <label
            className="
            mt-5
            block
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-slate-500
            "
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            className="
            mt-2
            w-full
            rounded-lg
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            text-sm
            text-slate-800
            focus:outline-none
            focus:ring-2
            focus:ring-slate-900
            "
          />

          <button
            type="submit"
            className="
            mt-5
            w-full
            rounded-lg
            bg-slate-900
            py-3
            text-sm
            font-semibold
            text-white
            hover:bg-slate-800
            "
          >
            Sign in
          </button>

          <div
            className="
            mt-4
            flex
            items-center
            justify-between
            text-sm
            "
          >
            <label
              className="
              flex
              items-center
              gap-2
              text-slate-600
              "
            >
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="
                h-4
                w-4
                rounded
                border-slate-300
                "
              />
              Keep me signed in
            </label>

            <button
              type="button"
              className="
              font-semibold
              text-slate-900
              hover:underline
              "
            >
              Forgot password?
            </button>
          </div>

          <div
            className={`
            mt-6
            rounded-lg
            py-4
            text-center
            text-sm
            ${error ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"}
            `}
          >
            {error || 'Error message placeholder (e.g. "Invalid credentials")'}
          </div>
        </form>
      </div>
    </div>
  );
}
