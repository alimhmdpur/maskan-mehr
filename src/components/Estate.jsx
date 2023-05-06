import React, { useState } from "react";
import { Link } from "react-router-dom";

function Estate() {
  const [estate, setEstate] = useState([
    {
      title: "ساختمان تجاری بهار",
      Address: "تهران،پردیس،بومهن،گلخندات،طاهرآباد",
      ownership: "سند شش دانگ",
      meterage: 675,
    },
    {
      title: "زمین مسکونی روستایی",
      Address: "البرز،کرج،بخش مرکزی،کمال آباد،آتشگاه",
      ownership: "قولنامه",
      meterage: 249,
    },
    {
      title: "ساختمان تجاری بهار",
      Address: "تهران،پردیس،بومهن،گلخندات،طاهرآباد",
      ownership: "سند شش دانگ",
      meterage: 675,
    },
    {
      title: "زمین مسکونی روستایی",
      Address: "البرز،کرج،بخش مرکزی،کمال آباد،آتشگاه",
      ownership: "قولنامه",
      meterage: 249,
    },
    {
      title: "ساختمان تجاری بهار",
      Address: "تهران،پردیس،بومهن،گلخندات،طاهرآباد",
      ownership: "سند شش دانگ",
      meterage: 675,
    },
  ]);
  return (
    <>
      {estate.map((item, index) => {
        return (
          <Link to="/main/estate-management/realstate" className=" p-4 rounded-lg bg-[#F5F6FA] flex flex-col">
            <h4 className="font-[YB-Bold] text-[#1C4B82] text-lg mb-3 max-[425px]:text-base">
              {item.title}
            </h4>
            <div className="grid grid-flow-col text-sm max-[425px]:text-[13px]">
              <div className="flex flex-col">
                <span className="font-[YB-Bold] block">موقعیت</span>
                <span className="font-[YB-Bold] block">مالکیت</span>
                <span className="font-[YB-Bold] block">متراژ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-[YB-Medium] block">{item.Address}</span>
                <span className="font-[YB-Medium] block">{item.ownership}</span>
                <span className="font-[YB-Medium] block">
                  {item.meterage} متر مربع
                </span>
              </div>
              {/* <div className='flex items-center text-sm'><span className='font-[YB-Bold] block ml-3'>موقعیت</span><span className='font-[YB-Medium] block'>{item.Address}</span></div> */}
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Estate;
