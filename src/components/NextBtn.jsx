import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function NextBtn(props) {
  return (
    <>
      <button
        onClick={props.click}
        onSubmit={props.submit}
        type={props.typeBtn}
        className="bg-[#49C264] text-white px-4 py-3 rounded-lg  font-[YB-Medium] flex justify-center items-center gap-2"
      >
        <span className="block text-[14px]">{props.text}</span>
        <IoIosArrowBack className="block" />
      </button>
    </>
  );
}

export default NextBtn;
