import { useState } from "react";

const Feature = ({ description, title, id, icon }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const label = "Add Module";

  return (
    <div className=" px-6 py-3 bg-dark-white rounded-lg">
      <div className=" flex items-center justify-between">
        <div className="max-w-[453px] w-full ">
          <div className=" flex items-center gap-4 pb-2 ">
            <img src={icon} alt="empl" />
            <p className=" text-base font-medium">{title}</p>
          </div>
          <span className=" text-sm font-light ">{description}</span>
        </div>
        <div className="flex items-center space-x-2 bg-paper px-4 py-2 gap-2 rounded-md">
          <input
            type="checkbox"
            id={label}
            checked={isChecked}
            onChange={handleChange}
            className="h-4 w-4 border-checkbox rounded "
          />
          <label htmlFor={label} className=" font-medium text-base">
            {label}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Feature;
