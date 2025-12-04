import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    navigate(`/search?q=${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none"
        placeholder="Search movies..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
