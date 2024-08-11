import React from "react";
import Feature from "./Feature";
import { featureData } from "../staticData";

const Features = () => {
  return (
    <div className="px-6">
      <p className=" pb-6">Choose Feature</p>
      <div className=" flex flex-col gap-4">
        {featureData.map((data) => {
          return (
            <Feature
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
