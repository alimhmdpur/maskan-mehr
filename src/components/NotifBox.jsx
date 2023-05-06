import React, { useState } from "react";
import Notifications from "./Notifications";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { openCollapseArrow, closeCollapseArrow } from "../assets/images/images";
import HistoryRequest from "./HistoryRequest";
function NotifBox() {
  const [notifCollapse, setNotifCollapse] = useState("open");
  const hndleNotifCollapse = () => {
    if (notifCollapse === "close") {
      setNotifCollapse("open");
    } else {
      setNotifCollapse("close");
    }
  };
  return (
    <>
      <div
        tabIndex={0}
        className={`collapse  ${
          notifCollapse === "close" ? "collapse-close" : "collapse-open"
        }  bg-white rounded-2xl mb-3`}
      >
        <div
          className="collapse-title flex justify-between pr-4 text-xl max-[425px]:text-lg font-[YB-Heavy]"
          onClick={hndleNotifCollapse}
        >
          <label className="block">اعلانات</label>
          <img
            className="block"
            src={`${
              notifCollapse === "close" ? closeCollapseArrow : openCollapseArrow
            }`}
            alt=""
          />
        </div>
        <div className="collapse-content">
          <ul>
            <Notifications />
          </ul>
          <Link to="/main/notification">
            <div className="flex items-center justify-center mt-6 font-[YB-Bold] text-[#1C4B82] text-sm max-[425px]:text-xs">
              <span className="block">مشاهده همه موارد</span>
              <MdOutlineKeyboardArrowLeft className="text-[1.5rem] max-[425px]:text-base" />
            </div>
          </Link>
        </div>
      </div>
      <HistoryRequest />
    </>
  );
}

export default NotifBox;
