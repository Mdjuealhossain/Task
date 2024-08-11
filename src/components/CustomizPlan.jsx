import { useState } from "react";
import Billing from "./Billing";
import Features from "./Features";

const CustomizPlan = () => {
  const [isActive, setIsActive] = useState("1");

  return (
    <div className=" ">
      <div className=" flex py-4 px-6  items-center gap-6  border-b border-Bdivider">
        <img src="/public/icons/ep_back.svg" />
        <h2 className=" text-xl">Customize Your Plan </h2>
      </div>
      <div className=" pt-4 pb-6 px-6">
        <p className=" pb-4">Choose Billing Type</p>
        <div className=" flex items-center gap-6">
          <button
            onClick={() => setIsActive("1")}
            className={`px-6 py-2 ${
              isActive === "1" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md`}
          >
            Billed Monthly
          </button>
          <button
            onClick={() => setIsActive("2")}
            className={`px-6 py-2  ${
              isActive === "2" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md`}
          >
            Billed Quarterly
          </button>
          <button
            onClick={() => setIsActive("3")}
            className={`px-6 py-2  ${
              isActive === "3" ? " bg-regal-blue text-paper" : "bg-disable"
            } text-base rounded-md`}
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
