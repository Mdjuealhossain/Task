import React from "react";

const HelpCenter = () => {
  return (
    <div>
      <div className=" pb-12 border-b border-divider mb-8">
        <h2 className=" text-3xl font-normal pb-6">Ready to get started?</h2>
        <button className=" py-4 px-7  bg-regal-orange font-normal rounded-lg text-paper">
          Sign me up
        </button>
      </div>
      <p className=" text-2xl font-normal mb-7">Follow us</p>
      <div className=" flex  gap-6 items-center">
        <a href="#">
          <img src="/public/icons/Vector4.svg" />
        </a>
        <a href="#">
          <img src="/public/icons/Vector (1).svg" />
        </a>
        <a href="#">
          <img src="/public/icons/twiter.svg" />
        </a>
        <a href="#">
          <img src="/public/icons/Shape.svg" />
        </a>
        <a href="#">
          <img src="/public/icons/instragram.svg" />
        </a>
      </div>
    </div>
  );
};

export default HelpCenter;
