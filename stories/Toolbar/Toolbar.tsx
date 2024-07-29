import React, { useState, useEffect } from "react";
import "./toolbar.css";

export interface ToolbarProps {
  logo: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  links?: { label: string; href: string }[];
  icons?: React.ElementType[];
}

export const Toolbar = ({
  logo,
  backgroundColor = "#fff",
  color = "#333",
  links = [],
  icons = [],
}: ToolbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const mobileMenu = document.getElementById("mobile-menu");
    if (!mobileMenu) return;

    if (isMenuOpen) {
      mobileMenu.classList.add("out");
      mobileMenu.classList.remove("in");
      setTimeout(() => {
        mobileMenu.classList.remove("show");
      }, 300);
    } else {
      mobileMenu.classList.add("show", "in");
      mobileMenu.classList.remove("out");
    }
  };

  const handleResize = () => {
    const matches = window.matchMedia("(min-width: 768px)").matches;
    setIsLargeScreen(matches);
    if (matches && isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="toolbar" style={{ backgroundColor }}>
        <div className="container">
          <a href="/" className="toolbar-logo" style={{ color }}>
            {logo}
          </a>

          <div className="left-section">
            <ul className="toolbar-navigation-links">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} style={{ color }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {icons.length > 0 && (
            <div className="right-section">
              {icons.map((Icon, index) => (
                <div key={index} className="icon-container">
                  <Icon />
                </div>
              ))}
            </div>
          )}

          <div className="menu-button">
            <button
              id="menu-button"
              onClick={toggleMenu}
              className="menu-toggle"
              style={{ color }}
            >
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className="mobile-menu"
        style={{ backgroundColor, color }}
      >
        <ul className="toolbar-mobile-navigation-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} style={{ color }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export const toolbarLogo = (
  <span className="toolbar-logo-container">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF"
        />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9"
        />
        <path
          d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
          fill="#91BAF8"
        />
      </g>
    </svg>
    <span className="toolbar-logo-text">Logo</span>
  </span>
);

export const Icon1: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width="24"
      height="24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
};

export const Icon2: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      width="24"
      height="24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
};
