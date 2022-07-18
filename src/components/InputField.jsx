import React from "react";

const InputField = ({ label, type, placeholder, onChange, name, value }) => {
  return (
    <div>
      <div>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => {
          onChange(e.target.name, e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default InputField;
