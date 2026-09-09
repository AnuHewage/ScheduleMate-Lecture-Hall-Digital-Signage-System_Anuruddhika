import { useState } from "react";

import { adminData, activityLog } from "../../data/adminData";

import ProfileImage from "../../components/admin/ProfileImage";

function InfoField({ label, value, editing, onChange, type = "text" }) {
  return (
    <div>
      <label
        className="
text-xs
font-semibold
uppercase
text-slate-400
"
      >
        {label}
      </label>

      {editing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
mt-1
w-full
border
rounded-lg
px-3
py-2
text-sm
"
        />
      ) : (
        <p
          className="
mt-1
text-sm
font-semibold
text-slate-800
"
        >
          {value}
        </p>
      )}
    </div>
  );
}

export default function AdminProfile() {
  const [profile, setProfile] = useState(adminData);

  const [editing, setEditing] = useState(false);

  const [passwordOpen, setPasswordOpen] = useState(false);

  const updateField = (key, value) => {
    setProfile({
      ...profile,

      [key]: value,
    });
  };

  return (
    <div
      className="
space-y-6
"
    >
      <div>
        <h1
          className="
text-2xl
font-semibold
text-slate-900
"
        >
          Admin Profile
        </h1>

        <p
          className="
text-sm
text-slate-500
"
        >
          Manage your account details and security
        </p>
      </div>

      <div
        className="
grid
grid-cols-3
gap-6
"
      >
        {/* LEFT */}

        <div
          className="
col-span-2
space-y-6
"
        >
          {/* PROFILE */}

          <div
            className="
bg-white
rounded-xl
p-6
border
"
          >
            <div
              className="
flex
justify-between
items-center
"
            >
              <div
                className="
flex
gap-4
items-center
"
              >
                <ProfileImage
                  image={profile.image}
                  name={profile.name}
                  editing={editing}
                  onChange={(value) => updateField("image", value)}
                />

                <div>
                  <h2
                    className="
text-lg
font-semibold
"
                  >
                    {profile.name}
                  </h2>

                  <p
                    className="
text-sm
text-slate-500
"
                  >
                    {profile.role}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditing(!editing)}
                className="
border
px-4
py-2
rounded-lg
text-sm
"
              >
                {editing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            <div
              className="
grid
grid-cols-2
gap-5
mt-6
border-t
pt-6
"
            >
              <InfoField
                label="Full Name"
                value={profile.name}
                editing={editing}
                onChange={(v) => updateField("name", v)}
              />

              <InfoField
                label="Email"
                value={profile.email}
                editing={editing}
                onChange={(v) => updateField("email", v)}
                type="email"
              />

              <InfoField
                label="Phone"
                value={profile.phone}
                editing={editing}
                onChange={(v) => updateField("phone", v)}
              />

              <InfoField label="Role" value={profile.role} editing={false} />
            </div>

            {editing && (
              <div
                className="
flex
justify-end
mt-5
"
              >
                <button
                  onClick={() => setEditing(false)}
                  className="
bg-slate-900
text-white
px-5
py-2
rounded-lg
text-sm
"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* SECURITY */}

          <div
            className="
bg-white
rounded-xl
border
p-6
"
          >
            <div
              className="
flex
justify-between
"
            >
              <div>
                <h2
                  className="
font-semibold
"
                >
                  Security
                </h2>

                <p
                  className="
text-sm
text-slate-500
"
                >
                  Update password
                </p>
              </div>

              <button
                onClick={() => setPasswordOpen(!passwordOpen)}
                className="
border
px-4
py-2
rounded-lg
text-sm
"
              >
                Change Password
              </button>
            </div>

            {passwordOpen && (
              <div
                className="
mt-5
space-y-3
"
              >
                <input
                  type="password"
                  placeholder="Current Password"
                  className="
border
rounded-lg
px-3
py-2
w-full
"
                />

                <input
                  type="password"
                  placeholder="New Password"
                  className="
border
rounded-lg
px-3
py-2
w-full
"
                />

                <button
                  className="
bg-slate-900
text-white
px-4
py-2
rounded-lg
"
                >
                  Update Password
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
space-y-6
"
        >
          <div
            className="
bg-white
border
rounded-xl
p-6
"
          >
            <h2
              className="
font-semibold
"
            >
              Account Summary
            </h2>

            <div
              className="
mt-4
space-y-3
text-sm
"
            >
              <p>
                ID :<b>{profile.id}</b>
              </p>

              <p>
                Joined :<b>{profile.joined}</b>
              </p>

              <p>
                Last Login :<b>{profile.lastLogin}</b>
              </p>

              <p>
                Status :<b>{profile.status}</b>
              </p>
            </div>
          </div>

          <div
            className="
bg-white
border
rounded-xl
p-6
"
          >
            <h2
              className="
font-semibold
"
            >
              Recent Activity
            </h2>

            <div
              className="
mt-4
space-y-4
"
            >
              {activityLog.map((item, index) => (
                <div key={index}>
                  <p
                    className="
text-sm
"
                  >
                    {item.action}
                  </p>

                  <p
                    className="
text-xs
text-slate-400
"
                  >
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
