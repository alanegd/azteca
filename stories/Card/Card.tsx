import React from "react";
import "./card.css";

export interface CardProps {
  title?: string;
  content?: string;
  image?: string;
  outlined?: boolean;
  backgroundColor?: string;
  color?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  outlined = false,
  backgroundColor,
  color,
  footer,
}) => {
  const mode = outlined ? "card--outlined" : "";
  return (
    <div
      className={["card", mode].join(" ")}
      style={{ backgroundColor, color }}
    >
      {image && (
        <img src={image} alt={title} className="card-image" loading="lazy" />
      )}
      {(title || content) && (
        <div className="card-body">
          {title && <h2 className="card-title">{title}</h2>}
          {content && <p className="card-content">{content}</p>}
        </div>
      )}
      {footer && <footer className="card-footer">{footer}</footer>}
    </div>
  );
};

export const cardFooterContent = (
  <div
    style={{
      backgroundColor: "orangered",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <a>Lorem Ipsum</a>
  </div>
);
