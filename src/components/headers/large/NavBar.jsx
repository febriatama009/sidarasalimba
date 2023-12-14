import React from "react";
import NavBarBottom from "./NavBarBottom";
import Button from "../../Button";
import MobileNav from "../small/MobileNav";

const NavBar = () => {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden lg:block w-full bg-white">
        {/* Top */}
        <div className="border-b-2 border-gray-200">
          <div className="flex justify-between p-5 w-10/12 mx-auto items-center">
            <div>
              <img
                src="/logosidarasalimba.png"
                alt="Logo Sidarasalimba"
                width={80}
              />
            </div>
            <div>
              <img src={"/logo-sidarasalimba.svg"} alt="Your SVG" width={260} />
            </div>
            <Button>Login</Button>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 drop-shadow-xl bg-white ">
        <NavBarBottom />
      </div>

      {/* Small Screen */}
      <div>
        <MobileNav />
      </div>
    </>
  );
};

export default NavBar;
