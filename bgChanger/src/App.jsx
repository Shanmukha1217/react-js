/* eslint-disable no-unused-vars */

import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const handleClick = (e) => {
    setColor(e.target.name);
  };
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="h-full flex flex-wrap justify-center flex-col w-20 fixed items-center left-5">
        <div className="flex flex-wrap justify-center  bg-white px-6 py-2 rounded-3xl gap-4 shadow-2xl">
          <button
            className="text-white px-4 py-1 shadow-lg rounded-full w-20"
            style={{ backgroundColor: "red" }}
            name="red"
            onClick={handleClick}
          >
            Red
          </button>
          <button
            className="text-white px-4 py-1 rounded-full w-20"
            style={{ backgroundColor: "green" }}
            name="green"
            onClick={handleClick}
          >
            Green
          </button>
          <button
            className="text-white px-4 py-1 rounded-full w-20"
            style={{ backgroundColor: "blue" }}
            name="blue"
            onClick={handleClick}
          >
            Blue
          </button>
          <button
            className="text-white px-4 py-1 rounded-full w-20"
            style={{ backgroundColor: "purple" }}
            name="purple"
            onClick={handleClick}
          >
            Purple
          </button>
          <button
            className="text-white px-4 py-1 rounded-full w-20"
            style={{ backgroundColor: "grey" }}
            name="grey"
            onClick={handleClick}
          >
            Grey
          </button>
          <button
            className="text-black outline px-4 py-1 rounded-full w-20"
            style={{ backgroundColor: "transparent" }}
            name="olive"
            onClick={handleClick}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
