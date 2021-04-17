import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
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
