import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const Widget = () => {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
  }
  return (
    <div className="z-100 w-full h-full">
      <div
        className="bg-black w-full h-full flex justify-center items-center rounded-full"
        onClick={toggle}
      >
        {active ? (
          <IoCloseSharp className="text-white" size={42} />
        ) : (
          <img src="/public/intercom-icon.svg" className="w-[80%] h-[80%]" />
        )}
      </div>
      {active ? (
        <div className="absolute rounded-xl bottom-10 right-10 w-32 h-32 bg-white">
          Hello
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Widget;
