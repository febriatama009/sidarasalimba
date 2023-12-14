import React from "react";

const Button = ({ children, className }) => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`${className} text-red-500 bg-white hover:bg-red-500 hover:text-white font-medium rounded-md border-red-500 border-2 text-sm px-5 py-2.5 text-center items-center`}
        type="button"
      >
        {children}
      </button>

      {/* The Dropdown */}
      <nav
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              E-Arsip
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Admin
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Button;
