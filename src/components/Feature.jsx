import { useState } from "react";

import PropTypes from "prop-types";

const Feature = ({ description, title, icon }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const label = "Add Module";

  return (
    <div className=" md:px-6 px-3 md:py-3 py-2 bg-dark-white rounded-lg">
      <div className=" flex items-center justify-between gap-2">
        <div className=" max-w-128 w-full ">
          <div className=" flex items-center gap-4 ">
            <img src={icon} alt="empl" />
            <p className=" text-base font-medium">{title}</p>
          </div>
          <span className=" text-sm font-light  ">{description}</span>
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

Feature.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Feature;
