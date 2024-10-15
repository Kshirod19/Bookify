import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase"; // Import Firebase context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useFirebase(); // Get currentUser and logout function from context
  const navigate = useNavigate(); // For redirection

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await logout(); // Call the logout function from context
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-[#202020] fixed w-full h-16 z-10">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl py-4 mx-auto px-7 ">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Bookify" />
            <span className="self-center text-2xl font-light text-white font-girassol whitespace-nowrap">
            Bookify
            </span>
          </a>

          {/* Hamburger Icon */}
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="items-center justify-between hidden w-full text-lg font-normal lg:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 mt-4 md:p-0 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${
                      isActive ? "text-blue-700" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book/list"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${
                      isActive ? "text-blue-700" : ""
                    }`
                  }
                >
                  Add Listing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book/orders"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${
                      isActive ? "text-blue-700" : ""
                    }`
                  }
                >
                  Orders
                </NavLink>
              </li>
              <li>
                {/* Conditional Log In/Log Out Button */}
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700"
                  >
                    Log In
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Dropdown Menu for md and sm */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } lg:hidden overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <ul className="flex flex-col p-4 space-y-2 bg-gray-800">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded hover:bg-gray-700 ${
                    isActive ? "text-blue-700" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book/list"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded hover:bg-gray-700 ${
                    isActive ? "text-blue-700" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Add Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book/orders"
                className={({ isActive }) =>
                  `block py-2 px-3 text-white rounded hover:bg-gray-700 ${
                    isActive ? "text-blue-700" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Orders
              </NavLink>
            </li>
            <li>
              {/* Conditional Log In/Log Out Button for smaller screens */}
              {currentUser ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false); // Close menu on logout
                  }}
                  className="px-3 py-2 text-white rounded hover:bg-gray-700"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleLogin();
                    setIsOpen(false); // Close menu on login
                  }}
                  className="px-3 py-2 text-white rounded hover:bg-gray-700"
                >
                  Log In
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
