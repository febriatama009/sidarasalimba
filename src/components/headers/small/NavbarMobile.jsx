import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const NavBarMobile = ({ toggleMenu }) => {
  const [animationClass, setAnimationClass] = useState("animate-fadeInRight");

  const handleClose = () => {
    setAnimationClass("animate-fadeOutRight");
    setTimeout(() => {
      toggleMenu();
      setAnimationClass("animate-fadeInRight");
    }, 500);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("animate-fadeOutRight", "overflow-hidden");
    };
  }, [toggleMenu]);

  return (
    <div
      className={`flex items-center justify-center absolute inset-0 w-screen h-screen bg-white animate ${animationClass}`}
    >
      <div className="flex items-center justify-center absolute inset-0 w-screen h-screen bg-white animate-fadeInRight">
        <div className="grid text-gray-500 text-sm text-center">
          <button
            className="flex items-start justify-center mt-[-60px] hover:text-red-500"
            onClick={toggleMenu}
          >
            <IoClose className="text-3xl" />
          </button>
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white hover:text-red-500`}>Beranda</p>
          </NavLink>
          <NavLink
            to={`tentang`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Tentang</p>
          </NavLink>
          <NavLink
            to={`peta-sebaran`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Sebaran</p>
          </NavLink>
          <NavLink
            to={`desa`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Desa</p>
          </NavLink>
          <NavLink
            to={`grafik`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Grafik</p>
          </NavLink>
          <NavLink
            to={`struktur-organisasi`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Struktur Organisasi</p>
          </NavLink>
          <NavLink
            to={`referensi-hukum`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Referensi Hukum</p>
          </NavLink>
          <NavLink
            to={`pengaduan`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
            onClick={handleClose}
          >
            <p className={`py-6 border-b-white`}>Pengaduan</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
