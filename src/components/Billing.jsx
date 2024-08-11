import { useState } from "react";
import Select from "react-dropdown-select";

const Billing = ({ question1, question2, question3 }) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
  };

  return (
    <div className=" flex flex-col gap-4 pt-6">
      <p>{question1}</p>
      <div className=" max-w-[384px]">
        <Select
          options={options}
          values={selected}
          onChange={handleChange}
          multi={false}
          placeholder="10"
          dropdownPosition="auto"
          className="text-base font-medium "
          style={{
            border: "1px solid #C9C9C9",
            borderRadius: "0.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
          }}
          dropdownGap={5}
        />
      </div>
      <p>{question2}</p>
      <div className=" max-w-[384px]">
        <Select
          options={options}
          values={selected}
          onChange={handleChange}
          multi={false}
          placeholder="10"
          dropdownPosition="auto"
          className="text-base font-medium "
          style={{
            border: "1px solid #C9C9C9",
            borderRadius: "0.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
          }}
          dropdownGap={5}
        />
      </div>
      <p>{question3}</p>
      <div className=" max-w-[384px]">
        <Select
          options={options}
          values={selected}
          onChange={handleChange}
          multi={false}
          placeholder="10"
          dropdownPosition="auto"
          className="text-base font-medium "
          style={{
            border: "1px solid #C9C9C9",
            borderRadius: "0.5rem",
            paddingLeft: "1.75rem",
            paddingRight: "1.75rem",
          }}
          dropdownGap={5}
        />
      </div>
    </div>
  );
};

export default Billing;

const options = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
];
