import React from "react";

const SiparisClient = () => {
  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-4 block whitespace-nowrap text-center">
                Sipariş No
              </td>
              <td className="py-4 whitespace-nowrap text-center">Tarih</td>
              <td className="py-4 whitespace-nowrap text-center">Durum</td>
              <td className="py-4 whitespace-nowrap text-center">Fiyat</td>
              <td className="py-4 whitespace-nowrap  text-center"></td>
            </tr>
            {/* table heading end */}
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <span className="text-lg text-qgray font-medium">#11</span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qgray  whitespace-nowrap">
                  27/08/2024
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                  Tamamlandı
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                  1432₺
                </span>
              </td>
              <td className="text-center py-4">
                <button
                  type="button"
                  className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                >
                  Detaylar
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <span className="text-lg text-qgray font-medium">#11</span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qgray  whitespace-nowrap">
                  27/08/2024
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                  Tamamlandı
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                  1432₺
                </span>
              </td>
              <td className="text-center py-4">
                <button
                  type="button"
                  className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                >
                  Detaylar
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <span className="text-lg text-qgray font-medium">#11</span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qgray  whitespace-nowrap">
                  27/08/2024
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                  Tamamlandı
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                  1432₺
                </span>
              </td>
              <td className="text-center py-4">
                <button
                  type="button"
                  className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                >
                  Detaylar
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="text-center py-4">
                <span className="text-lg text-qgray font-medium">#11</span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qgray  whitespace-nowrap">
                  27/08/2024
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                  Tamamlandı
                </span>
              </td>
              <td className="text-center py-4 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                  1432₺
                </span>
              </td>
              <td className="text-center py-4">
                <button
                  type="button"
                  className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                >
                  Detaylar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SiparisClient;
