import React, { useState } from "react";
import "./toggleswitch.css";

export interface ToggleSwitchProps {
  initialOn?: boolean;
  backgroundColor?: string;
  locked?: boolean;
}

export const ToggleSwitch = ({
  initialOn = false,
  backgroundColor,
  locked = false,
}: ToggleSwitchProps) => {
  const [on, setOn] = useState(initialOn);

  const handleClick = () => {
    if (!locked) {
      setOn(!on);
    }
  };

  const sliderStyle = {
    backgroundColor: on && backgroundColor ? backgroundColor : undefined,
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={on}
        onChange={handleClick}
        disabled={locked}
      />
      <span className="slider" style={sliderStyle} />
    </label>
  );
};
