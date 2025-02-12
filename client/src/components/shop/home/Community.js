// Community.js
import React from "react";

const Community = () => {
  const handleClick = () => {
    alert("Welcome to the Community!");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Join Community
    </button>
  );
};

export default Community;
