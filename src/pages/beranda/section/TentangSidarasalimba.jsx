import React from "react";

const TentangSidarasalimba = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-24 justify-between items-center ">
        {/*  */}
        {/* Deskripsi */}
        <div className="grid gap-y-6">
          <div className="text-red-500 text-xl font-bold">
            Apa Itu Sidarasalimba
          </div>
          <p className="text-sm text-gray-500 leading-9">
            Sidarasalimba merupakan aplikasi web berbasis spasial pemetaan.
            Berisi informasi terbaru terkait sebaran sanitasi Limbah Dikabupaten
            Sanggau. Serta menyajikan data-data sanitasi dan air limbah terkait
            kondisi eksisting yang akan dibangun, dan rekomendasi usulan
            pembangunan. Semoga dengan adanya SIDARASALIMBA dapat membantu
            Pemerintah Kabupaten Sanggau dalam merencanakan pembangunan
            kedepannya yang dilakukan oleh Dinas Perumahan, Cipta Karya, Tata
            Ruang Dan Pertanahan Kabupaten Sanggau.
          </p>
        </div>

        {/* Right Card */}
        <div className="grid gap-y-6">
          {/* 1 */}
          <div className="flex gap-x-6 bg-white border p-4 border-gray-200 rounded-lg">
            <img src="/icons/01.svg" alt="" />
            <div className="grid gap-y-2">
              <p className="font-medium">Sanitasi</p>
              <p className="text-sm text-gray-500 leading-loose">
                Sebaran eksisting sanitasi di kabupaten sanggau.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex gap-x-6 bg-white border p-4 border-gray-100 rounded-md">
            <img src="/icons/02.svg" alt="" />
            <div className="grid gap-y-2">
              <p className="font-medium">Informasi</p>
              <p className="text-sm text-gray-500 leading-loose">
                Informasi data terbaru, terkait sanitasi
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-x-6 bg-white border p-4 border-gray-100 rounded-md">
            <img src="/icons/03.svg" alt="" />
            <div className="grid gap-y-2">
              <p className="font-medium">Spasial</p>
              <p className="text-sm text-gray-500 leading-loose">
                Sistem Informasi berbasis spasial pemetaan.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex gap-x-6 bg-white border p-4 border-gray-100 rounded-md">
            <img src="/icons/04.svg" alt="" />
            <div className="grid gap-y-2">
              <p className="font-medium">Grafik</p>
              <p className="text-sm text-gray-500 leading-loose">
                Menampilkan data-data dengan grafiK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangSidarasalimba;
