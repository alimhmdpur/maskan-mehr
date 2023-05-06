import React, { useState } from "react";
import { notifIconGreen } from "../assets/images/images";
import { Link } from "react-router-dom";
import { openCollapseArrow, closeCollapseArrow } from "../assets/images/images";
function Aside(props) {
  const menuItem = [
    {
      label: "داشبورد",
      id: 0,
      link: "main/Dashboard",
    },
    {
      label: "مدیریت املاک",
      id: 1,
      link: "main/estate-management",
    },
    {
      label: "امور مالی",
      id: 2,
      link: "main/financial-affairs",
    },
    {
      label: "کارتابل",
      id: 3,
      // link: "",
      listItem: ["خدمات فنی", "تسهیلات", "فنی و مهندسی", "خدمات مالکیتی"],
    },
    {
      label: "اطلاعات هویتی",
      id: 4,
      link: "main/identity-information",
    },
    {
      label: "پشتیبانی",
      id: 5,
      link: "main/support",
    },
    {
      label: "خروج",
      id: 6,
      link: "main/login",
    },
  ];
  const [kartabelCollapse, setKartabelCollapse] = useState("close");
  const hndleKartabelCollapse = () => {
    if (kartabelCollapse === "close") {
      setKartabelCollapse("open");
    } else {
      setKartabelCollapse("close");
    }
  };
  return (
    <>
      <div
        className={`bg-white z-10 flex flex-col gap-3 max-lg:shadow-[0_0px_25px_-20px_rgba(0,0,0,0.8)]  ${
          props.menuMode === "openMenu" ? "max-lg:flex" : "max-lg:hidden"
        } delay-500 max-md:focus:flex p-3 w-[250px] absolute right-0 bottom-0 pt-[90px] min-h-full`}
      >
        <div className="border-[1px] border-[#F5F6FA] rounded-lg p-3">
          <label className="font-[YB-Heavy] block mx-auto text-sm  text-center">
            محمدرضا فراهانی اصل
          </label>
          <span className="block font-[YB-Medium] text-[#A4A4A4] mx-auto text-[13px] text-center">
            ۰۹۰۱۵۶۷۶۷۸۷
          </span>
          <div className="bg-[#D4FFDE] flex items-center justify-start gap-3 p-3 rounded-lg mt-2">
            <img className="block" src={notifIconGreen} alt="" />
            <p className="text-[#49C264] font-[YB-Bold] text-sm">
              شما <span>2</span> اعلان جدید دارید
            </p>
          </div>
        </div>
        <div>
          <ul>
            {menuItem.map((item, index) => {
              if (item.id === 3) {
                return (
                  <li
                    tabIndex={1}
                    className={`collapse  ${
                      kartabelCollapse === "close"
                        ? "collapse-close"
                        : "collapse-open bg-[#F5F6FA]"
                    } cursor-pointer  font-[YB-Medium] my-[6px] py-0 px-4 rounded-lg`}
                    id={`${item.id}`}
                  >
                    <div
                      className="collapse-title flex justify-between items-center px-0 py-[10px]"
                      onClick={hndleKartabelCollapse}
                    >
                      <label className="block">{item.label}</label>
                      <img
                        className="block"
                        src={`${
                          kartabelCollapse === "close"
                            ? closeCollapseArrow
                            : openCollapseArrow
                        }`}
                        alt=""
                      />
                    </div>
                    <div className="collapse-content">
                      <ul className="list-disc">
                        {item.listItem.map((items, index) => {
                          return (
                            <li className="p-1 hover:bg-[#1C4B82] hover:text-white rounded-lg">
                              <Link to="">{items}</Link>
                            </li>
                          );
                        })}
                        {/* <li><Link to="">خدمات فنی</Link></li>
                          <li><Link to="">تسهیلات</Link></li>
                          <li><Link to="">فنی و مهندسی</Link></li>
                          <li><Link to="">خدمات مالکیتی</Link></li> */}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <Link className="last:text-[#E91919]" to={`/${item.link}`}>
                  <li
                    className="cursor-pointer font-[YB-Medium] my-[6px] py-[10px] px-4 rounded-lg"
                    id={`${item.id}`}
                  >
                    {item.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Aside;
