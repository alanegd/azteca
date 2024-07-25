import React from "react";
import "./card.css";

export interface CardProps {
  title: string;
  content: string;
  image?: string;
  outlined?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  outlined = false,
}) => {
  const mode = outlined ? "card--outlined" : "";
  return (
    <div className={["card", mode].join(" ")}>
      {image && (
        <img src={image} alt={title} className="card-image" loading="lazy" />
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};
