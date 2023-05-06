import React from "react";
import { MapsicalMap } from "../assets/images/images";
import HistoryRequest from "./HistoryRequest";
import NewRequest from "./NewRequest";
function RealState() {
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl flex max-md:flex-col-reverse justify-between items-end gap-2 mb-6">
        <div className="md:max-w-[55%] max-md:max-w-full">
          <h3 className="font-[YB-Bold] text-xl text-[#1C4B82] tracking-wide mb-6">
            ساختمان تجاری بهار
          </h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              {/* <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead> */}
              <tbody className="text-right">
                {/* row 1 */}
                <tr>
                  <th>استان</th>
                  <td>تهران</td>
                  <th>شهرستان</th>
                  <td>تهران</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>بخش</th>
                  <td>مرکزی</td>
                  <th>دهستان|شهر</th>
                  <td>تهران</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>روستا|شهر</th>
                  <td>تهران</td>
                  <th>مساحت</th>
                  <td>۲۵۰ مترمربع</td>
                </tr>
                <tr>
                  <th>نوع مالکیت</th>
                  <td>سند شش دانگ</td>
                  <th>آدرس</th>
                  <td>میدان ولیعصر،بلوار کشاورز،خیابان فلسطین شمالی،خیابان غفاری</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:max-w-[45%]">
          <img className="max-w-full mx-auto" src={MapsicalMap} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <HistoryRequest />
        <NewRequest/>
      </div>
    </>
  );
}

export default RealState;
