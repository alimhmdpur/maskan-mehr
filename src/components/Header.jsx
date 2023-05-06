import React from "react";
import {
  LoginLogo,
  notifIcon,
  settingIcon,
  searchIcon,
} from "../assets/images/images";
import { HiOutlineSearch } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMenuButtonWideFill } from "react-icons/bs";
function Header(props) {
  return (
    <>
      <div className="bg-white shadow-sm z-20 fixed w-full">
        <div className="`">
          <div className="flex justify-between items-center py-3 px-2 sm:px-6">
            <div className="flex items-center gap-1 ml-1">
              <img
                className="block mx-auto text-xs font-[YB-Medium]"
                src={LoginLogo}
                alt="لوگوی بنیاد مسکن"
              />
              <h1 className="max-md:hidden font-[YB-Bold] text-lg text-[#1C4B82]">بنیاد مسکن ایران</h1>
            </div>
            <div className="flex items-center">
              <div className="max-[375px]:ml-0 ml-2 sm:ml-4 sm:w-[310px] flex items-center">
                <input
                  className="bg-[#F5F6FA] block px-6 py-4 max-[375px]:py-3 max-[375px]:px-4 text-sm rounded-s-[3rem] text-[#AAB7C6] w-3/4 md:w-4/5 focus:!outline-none font-[YB-Medium]"
                  type="text"
                  placeholder="جستجو..."
                />
                <div className="rounded-e-[3rem] bg-[#F5F6FA] px-6 py-4 max-[375px]:py-3 max-[375px]:px-4 w-1/4 md:w-1/5">
                  <HiOutlineSearch className="text-[#AAB7C6] text-lg text-center mr-auto" />
                </div>
              </div>
              <div className="max-lg:hidden">
                <button className="btn px-2 bg-transparent border-none hover:bg-transparent">
                  <div className="indicator">
                    <img src={notifIcon} alt="" />
                    <span className="badge badge-sm bg-[#49C264] border-[#49C264] indicator-item text-[0.6rem] py-[8.7px]">
                      2
                    </span>
                  </div>
                </button>
              </div>
              <div className="max-lg:hidden">
                <img className="cursor-pointer" src={settingIcon} alt="" />
              </div>
              <div className="lg:hidden rounded-lg cursor-pointer active:bg-[#1C4B8266] p-[6px]" onClick={props.handleMenuMode}>
                <BsMenuButtonWideFill className="text-[#1C4B82] text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
