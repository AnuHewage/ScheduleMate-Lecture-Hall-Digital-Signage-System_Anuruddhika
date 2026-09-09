import { useState } from "react";

export default function ProfileCard({ admin }) {
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);
  const [phone, setPhone] = useState(admin.phone);

  const [image, setImage] = useState(admin.image);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white rounded-xl border p-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <label className="cursor-pointer">
            <div
              className="
w-16 h-16
rounded-full
bg-yellow-500
flex
items-center
justify-center
font-bold
text-xl
text-black
overflow-hidden
"
            >
              {image ? (
                <img src={image} className="w-full h-full object-cover" />
              ) : (
                "SJ"
              )}
            </div>

            <input type="file" hidden accept="image/*" onChange={handleImage} />
          </label>

          <div>
            <h2 className="font-semibold text-lg">{name}</h2>

            <p className="text-sm text-slate-500">{admin.role}</p>
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
font-semibold
"
        >
          {editing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-6 border-t pt-6">
        <div>
          <label className="text-xs text-slate-400">FULL NAME</label>

          {editing ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
          ) : (
            <p>{name}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-slate-400">EMAIL</label>

          {editing ? (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
          ) : (
            <p>{email}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-slate-400">PHONE</label>

          {editing ? (
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
          ) : (
            <p>{phone}</p>
          )}
        </div>

        <div>
          <label className="text-xs text-slate-400">ROLE</label>

          <p>{admin.role}</p>
        </div>
      </div>

      {editing && (
        <div className="flex justify-end mt-5">
          <button
            onClick={() => setEditing(false)}
            className="
bg-[#0b1220]
text-white
px-5
py-2
rounded-lg
"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
