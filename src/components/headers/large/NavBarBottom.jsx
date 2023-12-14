import React from "react";
import { NavLink } from "react-router-dom";

const NavBarBottom = () => {
  return (
    <div className="hidden lg:block w-10/12 m-auto">
      <div className="flex justify-between space-x-0 items-center text-gray-400 text-sm">
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
  );
};

export default NavBarBottom;
