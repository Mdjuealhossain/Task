import React from "react";

const Plan = () => {
  return (
    <div className="bg-dark-light rounded-lg max-sm:mx-3 md:mx-0  max-sm:mt-2 md:pt-0">
      <div className=" py-4 px-6  border-b border-Bdivider">
        <h2 className=" text-xl">Plan </h2>
      </div>
      <div className="px-6 pt-4 flex flex-col gap-3 pb-14">
        <div className=" flex  gap-4">
          <img src=" /icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor</p>
        </div>
        <div className=" flex  gap-4">
          <img src=" /icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor ipsum</p>
        </div>
        <div className=" flex  gap-4">
          <img src=" /icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor ipsum omit</p>
        </div>
        <div className=" flex   gap-4 ">
          <img src=" /icons/plan.svg" />
          <p className=" text-base">
            Lorem Ipsum Dolor ipsum omit Notor Choose
          </p>
        </div>
      </div>
      <button className=" flex justify-center items-center font-semibold text-paper md:py-3 py-2 w-full bg-regal-orange rounded-br-lg rounded-bl-lg">
        Contact Sales
      </button>
    </div>
  );
};

export default Plan;
