import React from "react";
import "./badge.css";

export interface BadgeProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
}

export const Badge = ({
  primary = false,
  backgroundColor,
  label,
}: BadgeProps) => {
  const mode = primary ? "badge--primary" : "badge--secondary";
  return (
    <span className={["badge", mode].join(" ")} style={{ backgroundColor }}>
      {label}
    </span>
  );
};
