// Icons
import { BsFillShareFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

// Hooks
import { useState } from "react";

const App = () => {
  const [click, setClick] = useState(false);

  const changeState = () => {
    setClick(!click);
  };

  return (
    <div className="relative h-screen flex items-center justify-center font-poppins bg-white">
      <button
        onClick={changeState}
        className="flex items-center bg-blue-500 p-2 text-white rounded shadow-gray-300 shadow-md hover:-translate-y-1 transition-all hover:shadow-lg "
      >
        <span className="mr-2">Share</span>
        <BsFillShareFill />
      </button>
      {click && (
        <div className="absolute h-40 w-80 bg-white z-20 flex items-center justify-center rounded-lg">
          <h1 className="text-2xl">Share with your friends</h1>
          <button className="absolute top-2 right-2">
            <AiFillCloseCircle onClick={changeState} className="h-6 w-6" />
          </button>
        </div>
      )}
      {click && (
        <div
          onClick={changeState}
          className="absolute w-full h-full bg-[rgba(0,0,0,0.4)] z-10 cursor-pointer"
        ></div>
      )}
    </div>
  );
};

export default App;
