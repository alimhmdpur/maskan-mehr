import React from "react";
import { warningIcon, errorIcon, confirmIcon } from "../assets/images/images";
function Notifications() {
  const notifInfo = [
    {
      text: "درخواست تسهیلات ظرح ویژه بهسازی و مسکن روستایی با کد رهگیری ۶۵۳۱۲۷۹۵۱۳ نیاز به بازبینی و تکمیل مدارک دارد.",
      liClass:
        "rounded-lg flex items-center gap-[10px] mb-2 p-[10px] bg-[#FFF1E1] text-[#FF8A00] font-[YB-Bold] text-sm max-[425px]:text-xs",
      idNotif: "warning",
      icon: warningIcon,
      iconClass: "",
    },
    {
      text: "درخواست خدمات فنی صدور پروانه برای تخریب و نوسازی ملک مورد تائید قرار گرفت.",
      liClass:
        "rounded-lg flex items-center gap-[10px] mb-2 p-[10px] bg-[#E9FFEE] text-[#49C264] font-[YB-Bold] text-sm max-[425px]:text-xs",
      idNotif: "confirm",
      icon: confirmIcon,
      iconClass: "",
    },
    {
      text: "مدارکت مالکیتی ثبت شده برای ملک با شناسه ۵۳۱۲ مورد تائید واقع نشد و نیاز بررسی دارد.",
      liClass:
        "rounded-lg flex items-center gap-[10px] mb-0 p-[10px] bg-[#FFE5E5] text-[#E91919] font-[YB-Bold] text-sm max-[425px]:text-xs",
      idNotif: "error",
      icon: errorIcon,
      iconClass: "",
    },
  ];
  return (
    <>
      {notifInfo.map((item, index) => {
        return (
          <li className={item.liClass}>
            <img src={item.icon} alt="" />
            <span className="block">{item.text}</span>
          </li>
        );
      })}
    </>
  );
}

export default Notifications;
