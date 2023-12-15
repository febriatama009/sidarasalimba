import React from "react";

const TabelRankKec = () => {
  return (
    <div className="overflow-x-auto">
      <div className="w-10/12 justify-center items-center m-auto">
        <div className="text-red-500 text-xl mb-12 font-bold">
          Usulan Perankingan Skala Kecamatan
        </div>

        <table className="w-full text-sm text-left text-gray-500  border border-gray-100 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Kecamatan
              </th>
              <th scope="col" className="px-6 py-3">
                Rangking 1
              </th>
              <th scope="col" className="px-6 py-3">
                Rangking 2
              </th>
              <th scope="col" className="px-6 py-3">
                Rangking 3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Balai
              </th>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Beduai (Beduwai)
              </th>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Bonti
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelRankKec;
