// Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className="relative"
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
          onFocus={toggleDropdown} // Optional for keyboard navigation
          onBlur={closeDropdown} // Optional for keyboard navigation
        >
          <Link to="/courses">Courses</Link>
          {isOpen && (
            <ul className="absolute bg-white text-gray-800 shadow-lg py-2 rounded-md mt-1">
              <li>
                <Link to="/courses/bab">BAB</Link>
              </li>
              <li>
                <Link to="/courses/bsis-act">BSIS/ACT</Link>
              </li>
              <li>
                <Link to="/courses/bsa-bsais">BSA/BSAIS</Link>
              </li>
              <li>
                <Link to="/courses/bssw">BSSW</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
        {/* Add authenticated page links */}
        <li>
          <Link to="/teleradio">Teleradio</Link>
        </li>
        <li>
          <Link to="/archives">Archives</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
