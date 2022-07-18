import React from "react";

const Select = ({ label, options, onChange, name, value }) => {
  return (
    <>
      <div>{label}</div>
      <select
        name={name}
        onChange={(e) => {
          onChange(e.target.name, e.target.value);
        }}
        value={value}
      >
        <option value="">{`Choose ${label}`}</option>
        {options.map((element) => {
          return (
            <option key={element.key} value={element.value}>
              {element.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
