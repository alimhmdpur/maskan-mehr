import React, { useState } from "react";
import Notifications from "./Notifications";
import Estate from "./Estate";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { openCollapseArrow, closeCollapseArrow } from "../assets/images/images";
function EstateList() {
  const [estateListCollapse, setEstateListCollapse] = useState("openList");
  const hndleEstateListCollapse = () => {
    if (estateListCollapse === "closeList") {
      setEstateListCollapse("openList");
    } else {
      setEstateListCollapse("closeList");
    }
  };
  return (
    <>
      <div
        tabIndex={0}
        className={`collapse ${
          estateListCollapse === "closeList"
            ? "collapse-close"
            : "collapse-open"
        } border border-base-300 bg-base-100 rounded-2xl`}
      >
        <div
          className="collapse-title flex justify-between pr-4 text-xl max-[425px]:text-lg font-[YB-Heavy]"
          onClick={hndleEstateListCollapse}
        >
          <label className="block">لیست املاک</label>
          <img
            className="block"
            src={`${
              estateListCollapse === "closeList"
                ? closeCollapseArrow
                : openCollapseArrow
            }`}
            alt=""
          />
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <Link to="/dashboard" className="border-dashed border-[#1C4B82] border-2 rounded-lg flex justify-center items-center max-sm:py-[3.25rem]">
              <div className="flex justify-center items-center gap-3 text-[#1C4B82]">
                <h4 className="text-lg font-[YB-Bold] text-[#1C4B82]">
                  افزودن ملک جدید
                </h4>
                <AiOutlinePlusCircle className="text-lg font-[YB-Bold] text-[#1C4B82]" />
              </div>
            </Link>
            <Estate />
          </div>
          <Link to="/estate-management">
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

export default EstateList;
