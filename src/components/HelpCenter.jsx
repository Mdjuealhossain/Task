import React from "react";

const HelpCenter = () => {
  return (
    <div>
      <div className=" md:pb-12 pb-4 border-b border-divider mb-8 max-sm:flex justify-center items-center flex-col">
        <h2 className=" text-3xl font-normal font-proxima md:pb-6 pb-4  ">
          Ready to get start?
        </h2>
        <button className=" py-4 px-7  bg-regal-orange font-thin font-proxima rounded-lg text-paper">
          Sign me up
        </button>
      </div>
      <p className=" text-2xl font-normal mb-7">Follow us</p>
      <div className=" flex  gap-6 items-center max-sm:justify-center md:justify-start">
        <a href="#">
          <img src=" /icons/Vector4.svg" />
        </a>
        <a href="#">
          <img src=" /icons/Vector (1).svg" />
        </a>
        <a href="#">
          <img src=" /icons/twiter.svg" />
        </a>
        <a href="#">
          <img src=" /icons/Shape.svg" />
        </a>
        <a href="#">
          <img src=" /icons/instragram.svg" />
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;
