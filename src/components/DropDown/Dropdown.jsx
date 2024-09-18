import React, { useState } from "react";
import "./Dropdown.css"; // Include the styles

const DropdownButton = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span>Shop By Categories</span>
      </button>
      {open && (
        <ul className="dropdown-menu">
          <li className="dropdown-item text-white">
            <a to="/">Action 1</a>
          </li>
          <li className="dropdown-item text-white">
            <a to="/">Action 2</a>
          </li>
          <li className="dropdown-item text-white">
            <a to="/">Action 3</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
