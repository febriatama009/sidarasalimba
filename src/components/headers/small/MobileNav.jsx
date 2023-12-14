import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import NavBarMobile from "./NavbarMobile";

const MobileNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="block lg:hidden">
      {/* Top */}
      <div className="border-b-2 border-gray-200">
        <div className="flex justify-between py-6 w-10/12 mx-auto items-center">
          <div>
            <img src={"/logo-sidarasalimba.svg"} alt="Your SVG" width={124} />
          </div>
          <button onClick={toggleMenu} className="hover:text-red-500">
            <CgMenuRight size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && <NavBarMobile toggleMenu={toggleMenu} />}
    </div>
  );
};

export default MobileNav;
