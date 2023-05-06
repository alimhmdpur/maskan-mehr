import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { openCollapseArrow, closeCollapseArrow } from "../assets/images/images";

function HistoryRequest() {
  const [requestCollapse, setRequestCollapse] = useState("open");
  const hndleRequestCollapse = () => {
    if (requestCollapse === "close") {
      setRequestCollapse("open");
    } else {
      setRequestCollapse("close");
    }
  };
  return (
    <>
      <div
        tabIndex={0}
        className={`collapse ${
          requestCollapse === "close" ? "collapse-close" : "collapse-open"
        }  bg-white rounded-2xl mb-3`}
      >
        <div
          className="collapse-title flex justify-between pr-4 text-xl max-[425px]:text-lg font-[YB-Heavy]"
          onClick={hndleRequestCollapse}
        >
          <label className="block">اعلانات</label>
          <img
            className="block"
            src={`${
              requestCollapse === "close" ? closeCollapseArrow : openCollapseArrow
            }`}
            alt=""
          />
        </div>
        <div className="collapse-content">
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-[#DDDDDD] p-2 mb-3">
              <div className="w-1/4 text-sm font-[YB-Bold]">نوع درخواست</div>
              <div className="w-[16.6%] text-sm font-[YB-Bold] text-center">تاریخ ثبت</div>
              <div className="w-[16.6%] text-sm font-[YB-Bold] text-center">وضعیت</div>
              <div className="w-[16.6%] text-sm font-[YB-Bold] text-center">کد رهگیری</div>
              <div className="w-[16.6%] text-sm font-[YB-Bold] text-center">عملیات</div>
            </div>
            <div className="flex justify-between border-[#DDDDDD] p-2">
              <div className="w-1/4 text-sm font-[YB-Medium]">درخواست تعیین حدود وضعیت</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">۱۲ آبان ۱۴۰۱</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">تکمیل</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">۲۱۳۵۷۹۰۲۶۴</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center flex items-center justify-center gap-2"><span>مشاهده</span><BsEye className="mb-[2px]"/></div>
            </div>
            <div className="flex justify-between border-[#DDDDDD] p-2">
              <div className="w-1/4 text-sm font-[YB-Medium]">درخواست تسهیلات قرض الحسنه</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">۱۲ آبان ۱۴۰۱</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">نیاز به باز بینی</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center">۲۱۳۵۷۹۰۲۶۴</div>
              <div className="w-[16.6%] text-sm font-[YB-Medium] text-center flex items-center justify-center gap-2"><span>مشاهده</span><BsEye className="mb-[2px]"/></div>
            </div>
          </div>
          <Link to="/main/notification">
            <div className="flex items-center justify-center mt-6 font-[YB-Bold] text-[#1C4B82] text-sm max-[425px]:text-xs">
              <span className="block">مشاهده همه موارد</span>
              <MdOutlineKeyboardArrowLeft className="text-[1.5rem] max-[425px]:text-base" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HistoryRequest;
