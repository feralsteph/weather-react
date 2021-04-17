import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Type a city..."
        />
        <button type="button">
          🔍
        </button>
      </form>
    </div>
  );
}
