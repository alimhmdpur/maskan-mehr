import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  openCollapseArrow,
  closeCollapseArrow,
  newRequest,
  vector,
} from "../assets/images/images";
function NewRequest() {
  const [newRequestCollapse, setNewRequestCollapse] = useState("open");
  const hndleNewRequestCollapse = () => {
    if (newRequestCollapse === "close") {
      setNewRequestCollapse("open");
    } else {
      setNewRequestCollapse("close");
    }
  };

  const requestOpt1 = [
    {
      img: newRequest.filecircleplus,
      label: "درخواست خدمات فنی صدور پروانه",
    },
    {
      img: newRequest.houseflag,
      label: "تعیین حدود و وضعیت",
    },
    {
      img: newRequest.filecertificate,
      label: "درخواست امکان صدور پایانکار/عدم خلافی",
    },
  ];
  const requestOpt2 = [
    {
      img: newRequest.housebuilding,
      label: "تسهیلات طرح ویژه بهسازی و مسکن روستایی",
    },
    {
      img: newRequest.moneybilltransfer,
      label: "تسهیلات قرض الحسنه",
    },
  ];
  const requestOpt3 = [
    {
      img: newRequest.roadcirclecheck,
      label: "درخواست اصلاح معابر",
    },
    {
      img: newRequest.housemedical,
      label: "درخواست تغییر کاربری",
    },
    {
      img: newRequest.memocirclecheck,
      label: "درخواست اصلاح ضوابط",
    },
    {
      img: newRequest.buildingcirclearrowright,
      label: "درخواست اصلاح محدوده",
    },
  ];
  const requestOpt4 = [
    {
      img: newRequest.filesignature,
      label: "صدور سند",
    },
    {
      img: newRequest.fileexport,
      label: "قرارداد واگذاری",
    },
    {
      img: newRequest.housecirclecheck,
      label: "قرارداد اجاره",
    },
  ];


  return (
    <>
      <div
        tabIndex={0}
        className={`collapse ${
          newRequestCollapse === "close" ? "collapse-close" : "collapse-open"
        }  bg-white rounded-2xl mb-3`}
      >
        <div
          className="collapse-title flex justify-between pr-4 text-xl max-[425px]:text-lg font-[YB-Heavy]"
          onClick={hndleNewRequestCollapse}
        >
          <label className="block">اعلانات</label>
          <img
            className="block"
            src={`${
              newRequestCollapse === "close"
                ? closeCollapseArrow
                : openCollapseArrow
            }`}
            alt=""
          />
        </div>
        <div className="collapse-content">
          <h2 className="font-[YB-Bold] text-xl mb-6">ثبت درخواست جدید</h2>
          <div className="flex items-center gap-2 mb-6">
            <img src={vector} alt="" />
            <p className="text-sm font-[YB-Bold]">
              اگر برای ثبت درخواست جدید اطلاعات کافی ندارید، می‌توانید از{" "}
              <span className="text-orange-600">راهنمای ثبت درخواست</span> کمک
              بگیرید.
            </p>
          </div>
          <div className="mb-8">
            <h4 className="font-[YB-Bold] mb-3">خدمات فنی صدور پروانه ساختمانی</h4>
            <div className="flex gap-2 sm:gap-4  flex-wrap">
            {requestOpt1.map((item, index) => {
              return (
                <div className="p-4 rounded-2xl border-base-200 border flex flex-col justify-evenly w-[171px] h-[128px]  max-w-[171px] max-h-[128px]">
                  <img className="block mx-auto mb-4" src={item.img} alt="" />
                  <label className="text-sm font-[YB-Medium] text-center">{item.label}</label>
                </div>
              );
            })}
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-[YB-Bold] mb-3">تسهیلات</h4>
            <div className="flex gap-2 sm:gap-4  flex-wrap">
            {requestOpt2.map((item, index) => {
              return (
                <div className="p-4 rounded-2xl border-base-200 border flex flex-col justify-evenly w-[171px] h-[128px]  max-w-[171px] max-h-[128px]">
                  <img className="block mx-auto mb-4" src={item.img} alt="" />
                  <label className="text-sm font-[YB-Medium] text-center">{item.label}</label>
                </div>
              );
            })}
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-[YB-Bold] mb-3">فنی و مهندسی</h4>
            <div className="flex gap-2 sm:gap-4  flex-wrap">
            {requestOpt3.map((item, index) => {
              return (
                <div className="p-4 rounded-2xl border-base-200 border flex flex-col justify-evenly w-[171px] h-[128px]  max-w-[171px] max-h-[128px]">
                  <img className="block mx-auto mb-4" src={item.img} alt="" />
                  <label className="text-sm font-[YB-Medium] text-center">{item.label}</label>
                </div>
              );
            })}
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-[YB-Bold] mb-3">خدمات مالکیتی</h4>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
            {requestOpt4.map((item, index) => {
              return (
                <div className="p-4 rounded-2xl border-base-200 border flex flex-col justify-evenly w-[171px] h-[128px]  max-w-[171px] max-h-[128px]">
                  <img className="block mx-auto mb-4" src={item.img} alt="" />
                  <label className="text-sm font-[YB-Medium] text-center">{item.label}</label>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRequest;
