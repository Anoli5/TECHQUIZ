import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // reuse header dropdown styles

const More = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="more-menu" ref={dropdownRef}>
      <button className="more-btn" onClick={() => setOpen(!open)}>
        More
      </button>

      {open && (
        <div className="more-dropdown">
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact Us
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>

          <NavLink to="/theme" onClick={() => setOpen(false)}>
            Theme
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default More;
