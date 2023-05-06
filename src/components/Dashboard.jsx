import React from "react";
import { NotifBox, EstateList } from "./index";
import { confirmIcon } from "../assets/images/images";
function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <NotifBox />
      <div className="grid md:max-lg:grid-cols-2 lg:max-xl:grid-rows-2 xl:grid-cols-2 gap-5">
        <div className="px-3 py-5 bg-white rounded-2xl">
          <h3 className="text-xl text-black max-[425px]:text-lg font-[YB-Bold] mb-7">
            وضعیت حساب کاربری
          </h3>
          <div className="w-full h-[10px] max-[425px]:h-2 bg-[#1C4B82] rounded-xl relative mb-4">
            <div className="p-[6px] bg-[#1C4B82] absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] aspect-square font-[YB-Medium] text-white text-[12px] leading-[14px]">
              ۱۰۰
            </div>
          </div>
          <div className="flex items-start gap-[10px]">
            <img className="block" src={confirmIcon} alt="" />
            <span className="block text-sm max-[425px]:text-xs font-[YB-Medium]">
              اطلاعات حساب کاربری شما تکمیل و تائید شده است.
            </span>
          </div>
        </div>
        <div className="px-5 py-5 bg-white rounded-2xl">
          <h3 className="text-xl text-black max-[425px]:text-lg font-[YB-Bold] mb-6">
            درخواست ها
          </h3>
          <div className="grid grid-cols-4 xl:gap-x-10  content-start">
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="p-[6px] w-8 bg-[#49C264] rounded-full aspect-square text-white text-[13px] leading-4 text-center">
                ۱۵
              </div>
              <span className="block text-sm max-[425px]:text-xs font-[YB-Bold] text-center">
                تکمیل
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="p-[6px] w-8 bg-[#AAB7C6] rounded-full aspect-square text-white text-[13px] leading-4 text-center">
                ۲۲
              </div>
              <span className="block text-sm max-[425px]:text-xs font-[YB-Bold] text-center">
                در دست بررسی
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="p-[6px] w-8 bg-[#FF8A00] rounded-full aspect-square text-white text-[13px] leading-4 text-center">
                ۷
              </div>
              <span className="block text-sm max-[425px]:text-xs font-[YB-Bold] text-center">
                نیاز به بازبینی
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="p-[6px] w-8 bg-[#E91919] rounded-full aspect-square text-white text-[13px] leading-4 text-center">
                ۲
              </div>
              <span className="block text-sm max-[425px]:text-xs font-[YB-Bold] text-center">
                رد شده
              </span>
            </div>
          </div>
        </div>
      </div>
      <EstateList />
    </div>
  );
}

export default Dashboard;
