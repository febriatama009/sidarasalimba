import React from "react";

const RekapanData = () => {
  return (
    <div className="w-10/12 items-center mx-auto grid gap-y-8">
      <div className="text-red-500 text-xl mb-12 font-bold">
        Data Rekapan Sidarasalimba
      </div>
      <div className="grid lg:flex gap-6">
        {/* Card 1 */}
        <div className="grid gap-y-8 w-full p-6 border border-gray-200 rounded-lg">
          <img src="/svg/icons/water.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-gray-500">Air Limbah Domestik</p>
            <p className="text-3xl font-bold text-red-500">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <button className="text-left">Lihat Detail</button>
        </div>

        {/* Card 2 */}
        <div className="grid gap-y-8 w-full p-6 border border-gray-200  rounded-lg">
          <img src="/svg/icons/recycle.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-gray-500">Persampahan</p>
            <p className="text-3xl font-bold text-red-500">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <button className="text-left">Lihat Detail</button>
        </div>

        {/* Card 3 */}
        <div className="grid gap-y-8 w-full p-6 border border-gray-200  rounded-lg">
          <img src="/svg/icons/pipes.svg" alt="Water" />
          <div className="grid gap-y-2">
            <p className="text-gray-500">Drainase</p>
            <p className="text-3xl font-bold text-red-500">126 Sebaran</p>
          </div>
          <hr className="w-2/12" />
          <button className="text-left">Lihat Detail</button>
        </div>
      </div>
    </div>
  );
};

export default RekapanData;
