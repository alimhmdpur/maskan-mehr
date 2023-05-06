import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
function Inputs(props) {
  return (
    <div
      dir="rtl"
      className="border-[1px] border-[#DDDDDD] rounded-lg max-w-xl relative"
    >
      <label
        className="absolute translate-y-[-50%] right-3 bg-white px-[10px] font-[YB-Bold] block"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        className="min-w-full bg-white rounded-lg px-3 py-[0.6rem] font-[YB-Medium] active:border-[#1C4B82]"
        type={props.typeInput}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onInput={props.onInput}
        disabled={props.disabled}
        required={props.required}
        pattern={props.pattern}
        defaultValue={props.defaultValue}
      />
      {props.validateName}
      <div
        className={`absolute top-1/3 left-3 tooltip ${
          props.id == "phoneNum" ? "block" : "hidden"
        }`}
      >
        <RiErrorWarningLine />
      </div>
    </div>
  );
}

export default Inputs;
