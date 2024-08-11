import React from "react";

const Plan = () => {
  return (
    <div className="bg-dark-light rounded-lg ">
      <div className=" py-4 px-6  border-b border-Bdivider">
        <h2 className=" text-xl">Plan </h2>
      </div>
      <div className="px-6 pt-4 flex flex-col gap-3 pb-14">
        <div className=" flex  gap-4">
          <img src="/public/icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor</p>
        </div>
        <div className=" flex  gap-4">
          <img src="/public/icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor ipsum</p>
        </div>
        <div className=" flex  gap-4">
          <img src="/public/icons/plan.svg" />
          <p className=" text-base">Lorem Ipsum Dolor ipsum omit</p>
        </div>
        <div className=" flex   gap-4 w-[254px]">
          <img src="/public/icons/plan.svg" />
          <p className=" text-base">
            Lorem Ipsum Dolor ipsum omit Notor Choose
          </p>
        </div>
      </div>
      <button className=" flex justify-center items-center font-semibold text-paper py-3 w-full bg-regal-orange rounded-br-lg rounded-bl-lg">
        Contact Sales
      </button>
    </div>
  );
};

export default Plan;
