import React from "react";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const NavBarMobile = ({ toggleMenu }) => {
  return (
    <div
      className={`flex items-center justify-center absolute inset-0 w-screen h-screen bg-white transition-opacity duration-100 ease-in-out ${
        toggleMenu ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center absolute inset-0 w-screen h-screen bg-white animate-fadeInRight">
        <div className="grid text-gray-500 text-sm text-center">
          <div
            className="flex items-start justify-center mt-[-60px]"
            onClick={toggleMenu}
          >
            <IoClose className="text-3xl" />
          </div>
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 w-full border-b-white hover:text-red-500`}>
              Beranda
            </p>
          </NavLink>
          <NavLink
            to={`tentang`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Tentang</p>
          </NavLink>
          <NavLink
            to={`peta-sebaran`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Sebaran</p>
          </NavLink>
          <NavLink
            to={`desa`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Desa</p>
          </NavLink>
          <NavLink
            to={`grafik`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Grafik</p>
          </NavLink>
          <NavLink
            to={`struktur-organisasi`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Struktur Organisasi</p>
          </NavLink>
          <NavLink
            to={`referensi-hukum`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Referensi Hukum</p>
          </NavLink>
          <NavLink
            to={`pengaduan`}
            className={({ isActive }) => (isActive ? "text-red-500 " : "")}
          >
            <p className={`py-6 border-b-white`}>Pengaduan</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
