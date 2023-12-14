import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-10/12 m-auto mt-8 items-center">
        <div className="w-full border-t mx-auto border-t-gray-300">
          <div className="grid gap-y-12 lg:flex justify-between p-5 mx-auto items-start mt-10">
            {/*  */}
            {/* Keterangan */}
            <div className="grid gap-y-6 w-full lg:w-5/12">
              <img
                src="/logo-sidarasalimba.svg"
                alt="Logo Sidarasalimba"
                width={260}
              />
              <p className="text-gray-700 leading-loose">
                Sebuah Sistem Informasi yang menampilkan data-data yang
                berkaitan dengan Sanitasi dan Air Limbah di Kabupaten Sanggau.
              </p>
            </div>

            {/* Bantuan */}
            <div className="grid gap-y-6">
              <p className="text-red-500">Bantuan</p>
              <ul className="grid gap-y-6">
                <NavLink to={`tentang`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Tentang
                  </li>
                </NavLink>
                <NavLink to={`sebaran`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Sebaran Spasial
                  </li>
                </NavLink>
                <NavLink to={`desa`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Desa Sanggau
                  </li>
                </NavLink>
                <NavLink to={`grafik`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Grafik
                  </li>
                </NavLink>
                <NavLink to={`struktur-organisasi`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Struktur Organisasi
                  </li>
                </NavLink>
                <NavLink to={`referensi-hukum`}>
                  <li className="text-sm text-gray-400 hover:text-red-500">
                    Referensi Hukum
                  </li>
                </NavLink>
              </ul>
            </div>

            {/* Link Terkait */}
            <div className="grid gap-y-6">
              <p className="text-red-500">Link Terkait</p>
              <ul className="grid gap-y-6">
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Web Sanggau
                </li>
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Satu Data Kalbar
                </li>
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Lapor Data
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="grid gap-y-6">
              <p className="text-red-500">Sosial Media</p>
              <ul className="grid gap-y-6">
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Youtube
                </li>
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Facebook
                </li>
                <li className="text-sm text-gray-400 hover:text-red-500">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CopyRight */}
        <div className="text-center text-sm text-gray-400 p-12">
          Copyright © 2023. Sidarasalimba. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
