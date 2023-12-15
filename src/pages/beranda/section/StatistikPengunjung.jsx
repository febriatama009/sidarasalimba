import React from "react";

const StatistikPengunjung = () => {
  return (
    <div className={`w-full bg-red-500 text-center `}>
      <div className="py-[50px] w-10/12 items-center justify-center m-auto">
        <div className="grid gap-y-4">
          {/* Title */}
          <div className={`text-white`}>Statistik Pengunjung</div>

          {/* Statistik */}
          <div className="grid lg:flex gap-4">
            <div className={`bg-white w-full p-8 rounded-lg`}>
              <p className="text-lg font-medium">213 Pengunjung</p>
              <p className="text-textColor text-sm">Hari Ini</p>
            </div>
            <div className={`bg-white w-full p-8 rounded-lg`}>
              <p className="text-lg font-medium">371 Pengunjung</p>
              <p className="text-textColor text-sm">Bulan Ini</p>
            </div>
            <div className={`bg-white w-full p-8 rounded-lg`}>
              <p className="text-lg font-medium">4365 Pengunjung</p>
              <p className="text-textColor text-sm">Tahun Ini</p>
            </div>
            <div className={`bg-white w-full p-8 rounded-lg`}>
              <p className="text-lg font-medium">4365 Pengunjung</p>
              <p className="text-textColor text-sm">Total</p>
            </div>
          </div>

          {/* Left */}
          <div className="grid lg:flex gap-4">
            <div className="grid gap-y-4 w-full">
              <div className={`bg-white rounded-lg p-8 `}>
                <div className="flex gap-x-6 text-left">
                  <img src="/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Alamat</p>
                    <p className="text-sm text-textColor leading-loose">
                      Jalan Sabang Merah Komplek Perkantoran Semboja, Kelurahan
                      Bunut Sanggau
                    </p>
                  </div>
                </div>
              </div>
              <div className={`bg-white rounded-lg p-8 `}>
                <div className="flex gap-x-6 text-left">
                  <img src="/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Telp</p>
                    <p className="text-sm text-textColor leading-loose">
                      (0564) 2020636
                    </p>
                  </div>
                </div>
              </div>
              <div className={`bg-white rounded-lg p-8 `}>
                <div className="flex gap-x-6 text-left">
                  <img src="/svg/icons/02.svg" alt="" />
                  <div className="grid gap-y-2">
                    <p className="">Email</p>
                    <p className="text-sm text-textColor leading-loose">
                      dpcktrp@sanggau.go.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.264041335624!2d109.3426422!3d-0.06165495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d598ffeaa7c83%3A0x8733f84693d660a!2sTanjungpura%20University%2C%20Pontianak%2C%20Indonesia.!5e0!3m2!1sen!2sid!4v1702635792715!5m2!1sen!2sid"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatistikPengunjung;
