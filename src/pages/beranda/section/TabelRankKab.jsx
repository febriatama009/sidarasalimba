import React from "react";

const TabelRankKab = () => {
  return (
    <div className=" overflow-x-auto">
      <div className="w-10/12 justify-center items-center m-auto">
        <div className="text-red-500 text-xl mb-12 font-bold">
          Usulan Perankingan Skala Kabupaten
        </div>

        <table className="w-full text-sm text-left text-gray-500  border border-gray-100 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ranking
              </th>
              <th scope="col" className="px-6 py-3">
                Kecamatan
              </th>
              <th scope="col" className="px-6 py-3">
                Desa
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                1
              </th>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Janjang</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                2
              </th>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Layak Omang</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                3
              </th>
              <td className="px-6 py-4">-</td>
              <td className="px-6 py-4">Balai Ingin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelRankKab;
