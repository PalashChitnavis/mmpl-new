/* eslint-disable react/prop-types */
import React from "react";
const PDFRender = ({ type }) => {
  const data = [
    "https://drive.google.com/file/d/1WR8724r2lJHg3iW6cHR3DNwWk3fPdkZq/preview",
    "https://drive.google.com/file/d/1TFZeVjlVDzOTm45xzelcTTAMlsx4p4sn/preview",
    "https://drive.google.com/file/d/1A1bFB29CCdM1yoGmEF-hVa4ihX7putJu/preview",
    "https://drive.google.com/file/d/12d_Pcdj5RdVQDPz1YUQLxFVo_nn_aJIK/preview",
  ];
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <iframe
        src={data[type]}
        allow="autoplay"
        className="h-[90%] w-[95%] md:w-[70%]"
      ></iframe>
    </div>
  );
};

export default PDFRender;
