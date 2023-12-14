import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavBarMobile from "./NavbarMobile";

const MobileNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="block lg:hidden w-full sticky top-0 drop-shadow-xl bg-white">
      {/* Top */}
      <div className="border-b-2 border-gray-200">
        <div className="flex justify-between py-6 w-10/12 mx-auto items-center">
          <div>
            <img src={"/logo-sidarasalimba.svg"} alt="Your SVG" width={124} />
          </div>
          <CgMenuRight
            size={24}
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "bg-red-500" : "text-red-500"
            }
          />
        </div>
      </div>
      {isMenuOpen && (
        <NavBarMobile toggleMenu={toggleMenu} className="opacity-100" />
      )}
    </div>
  );
};

export default MobileNav;
