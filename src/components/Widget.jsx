import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Widget = () => {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
  }
  return (
    <div className="z-100 w-full h-full cursor-pointer ">
      <div
        className="bg-black w-full h-full flex justify-center items-center rounded-full border-2 border-white"
        onClick={toggle}
      >
        <img src="/intercom-icon.svg" className="w-[80%] h-[80%]" />
      </div>
      <div
        className={`fixed right-0 bottom-0 w-40 h-40 md:w-52 md:h-52 ${
          active ? "translate-x-0" : "translate-x-full translate-y-full "
        } ease-in-out duration-300 transition-all`}
      >
        <div className="w-full flex flex-col h-full bg-blue-950 rounded-tl-xl rounded">
          <div className="w-full h-8">
            <IoCloseSharp
              onClick={toggle}
              className="text-white cursor-pointer text-[32px] md:text-[40px]"
            />
          </div>

          <table className="text-white text-xs md:text-lg md:border-spacing-1 border-separate">
            <tr>
              <td>
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                  href="https://api.whatsapp.com/send?phone=919850098535"
                >
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src="/whatsapp.svg"
                    alt=""
                  />
                  <div>WhatsApp</div>
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                  href="mailto:tusharchitnavis@gmail.com"
                >
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src="/mail.svg"
                    alt=""
                  />
                  <div>Mail Us</div>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                  href="tel:+919850098535"
                >
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src="/call.svg"
                    alt=""
                  />
                  <div>Call Us</div>
                </a>
              </td>
              <td>
                <a
                  target="_blank"
                  className="flex flex-col justify-center items-center"
                  href="https://www.google.com/maps/place/Macro+Metals+Private+Limited/@19.1810458,73.1894548,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7935d1d07884d:0x9422637620cf7413!8m2!3d19.1810408!4d73.1920297!16s%2Fg%2F11g6bnwmst?entry=ttu"
                >
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src="/maps.svg"
                    alt=""
                  />
                  <div>Reach Us</div>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Widget;
