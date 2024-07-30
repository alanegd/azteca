import React, { useState } from "react";
import "./input.css";

interface InputProps {
  type: string;
  placeholder?: string;
  aria_label: string;
  required?: boolean;
  locked?: boolean;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  aria_label,
  required = false,
  locked = false,
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        aria-label={aria_label}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`input ${value || isFocused ? "filled" : ""} ${locked ? "locked" : ""}`}
        disabled={locked}
      />
      <label className={`input-label ${value || isFocused ? "filled" : ""}`}>
        {placeholder} {required && <span className="required-asterisk">*</span>}
      </label>
    </div>
  );
};
