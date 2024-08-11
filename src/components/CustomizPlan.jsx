import { useState } from "react";

import Billing from "./Billing";
import Features from "./Features";

const CustomizPlan = () => {
  const [isActive, setIsActive] = useState("1");

  return (
    <div className=" ">
      <div className=" flex md:py-4 py-2  md:px-6 px-3  items-center max-sm:justify-center md:justify-start gap-6  border-b border-Bdivider">
        <img src="/public/icons/ep_back.svg" />
        <h2 className=" text-xl">Customize Your Plan </h2>
      </div>
      <div className=" pt-4 pb-6 md:px-6 px-3">
        <p className=" pb-4">Choose Billing Type</p>
        <div className=" flex items-center md:gap-6 gap-3">
          <button
            onClick={() => setIsActive("1")}
            className={`md:px-6 px-4 py-2 ${
              isActive === "1" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md cursor-pointer `}
          >
            Billed Monthly
          </button>
          <button
            onClick={() => setIsActive("2")}
            className={`md:px-6 px-4 py-2  ${
              isActive === "2" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md cursor-pointer`}
          >
            Billed Quarterly
          </button>
          <button
            onClick={() => setIsActive("3")}
            className={`md:px-6 px-4 py-2  ${
              isActive === "3" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md cursor-pointer`}
          >
            Billed Yearly
          </button>
        </div>
        {isActive === "1" ? (
          <Billing title="fgbfdgvb" />
        ) : isActive === "2" ? (
          <Billing title="hi" />
        ) : (
          <Billing title="fuck" />
        )}
      </div>
      <Features />
    </div>
  );
};

export default CustomizPlan;
