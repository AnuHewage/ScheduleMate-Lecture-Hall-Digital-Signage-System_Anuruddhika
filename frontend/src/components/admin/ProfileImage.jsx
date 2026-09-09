export default function ProfileImage({ image, name, editing, onChange }) {
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);

      onChange(url);
    }
  };

  return (
    <div className="relative">
      {image ? (
        <img
          src={image}
          className="
          w-20
          h-20
          rounded-full
          object-cover
          "
        />
      ) : (
        <div
          className="
          w-20
          h-20
          rounded-full
          bg-yellow-500
          flex
          items-center
          justify-center
          text-xl
          font-bold
          text-white
          "
        >
          {name.substring(0, 2).toUpperCase()}
        </div>
      )}

      {editing && (
        <label
          className="
            absolute
            bottom-0
            right-0
            bg-slate-900
            text-white
            text-xs
            px-2
            py-1
            rounded-full
            cursor-pointer
            "
        >
          ✏
          <input type="file" hidden accept="image/*" onChange={handleImage} />
        </label>
      )}
    </div>
  );
}
