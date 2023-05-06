import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Inputs, NextBtn, Timer } from "./index";
import { LoginLogo } from "../assets/images/images";
import { useForm } from "react-hook-form";
function LoginRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // login pages array
  // const loginPages = ["first", "second", "third"];
  const [loginPage, setLoginPage] = useState("first");
  // radio option array
  const radios = ["genuine", "rightsi"];
  const [Radio, setRadio] = useState([radios[0]]);
  const [formInfo, setFormInfo] = useState({
    nationalCode: "",
    errorNC: "",
    phoneNumber: "",
    isValid: false,
    errorNum: "",
    codeSms: "",
    errorCodeSms: "",
    password: "",
    confirmPassword: "",
    errorConfirm: "",
  });
  // login next button function
  function submitLoginPage(e) {
    e.preventDefault();
    // const regexNum = /^(\+98|0)?9\d{9}$/g;
    if (loginPage === "first") {
      if (formInfo.nationalCode.length != 10 && formInfo.nationalCode != "") {
        if (Radio == "genuine") {
          var errorNCText = "کد ملی وارد شده اشتباه است";
        } else if (Radio == "rightsi") {
          var errorNCText = "شناسه ملی وارد شده اشتباه است";
        } else {
          var errorNCText = "";
        }
        setFormInfo((formInfo) => ({
          ...formInfo,
          errorNC: errorNCText,
        }));
      } else {
        setLoginPage("second");
      }
    } else if (loginPage === "second") {
      if (formInfo.isValid) {
        setLoginPage("third");
      } else {
        setFormInfo((formInfo) => ({
          ...formInfo,
          errorNum: "شماره همراه وارد شده معتبر نمیباشد",
        }));
      }
    } else if (loginPage == "third") {
      // if (formInfo.codeSms.length != 4) {
      //   setFormInfo((formInfo) => ({
      //     ...formInfo,
      //     errorCodeSms: "کد وارد شده اشتباه است",
      //   }));
      // } else if (formInfo.password.length < 8) {
      // } else if (formInfo.confirmPassword !== formInfo.password) {
      //   setFormInfo((formInfo) => ({
      //     ...formInfo,
      //     errorConfirm: "رمز وارد شده مطابقت ندارد",
      //   }));
      // } else {
      //   setFormInfo((formInfo) => ({
      //     ...formInfo,
      //     errorCodeSms: "",
      //     errorConfirm: "",
      //   }));
      // localStorage.setItem("formInfo", JSON.stringify(formInfo));
      return true;
      // }
    }
  }
  // login prev button function
  function prevLoginPage() {
    if (loginPage == "third") {
      setLoginPage("second");
    } else if (loginPage == "second") {
      setLoginPage("first");
    }
  }
  // handle national code validate function
  const handleNC = (e) => {
    e.preventDefault();
    let updatedNC = e.target.value;
    // updatedValue = { nationalCode: e.target.value };
    setFormInfo((formInfo) => ({
      ...formInfo,
      nationalCode: updatedNC,
    }));
  };
  // handle phone numbder validate function
  const handlePhoneNum = (e) => {
    e.preventDefault();
    let updateNum = e.target.value;
    // let numRegex = /^(\+98|0)?9\d{9}$/g;
    // updateNum = { phoneNumber: parseInt(e.target.value) };
    setFormInfo((formInfo) => ({
      ...formInfo,
      phoneNumber: updateNum,
      isValid: /^(\+98|0)?9\d{9}$/g.test(updateNum),
    }));
  };
  // handle phone numbder validate function
  const handleSmsCode = (e) => {
    e.preventDefault();
    let sms = e.target.value;
    setFormInfo((formInfo) => ({
      ...formInfo,
      codeSms: sms,
    }));
  };
  const handlePassword = (e) => {
    e.preventDefault();
    let pass = e.target.value;
    setFormInfo((formInfo) => ({
      ...formInfo,
      password: pass,
    }));
  };
  const handleConfirmPsw = (e) => {
    e.preventDefault();
    let confirmPsw = e.target.value;
    setFormInfo((formInfo) => ({
      ...formInfo,
      confirmPassword: confirmPsw,
    }));
  };
  // const submitLoginForm = () => {
  //   preventDefault()
  //   if (confirmPsw != formInfo.password) {
  //     setFormInfo((formInfo) => ({
  //       ...formInfo,
  //       errorConfirm: "رمز وارد شده مطابقت ندارد",
  //     }));
  //     return false
  //   } else if(formInfo.codeSms.length != 4) {
  //     setFormInfo((formInfo) => ({
  //       ...formInfo,
  //       errorCodeSms: "کد وارد شده اشتباه است",
  //     }));
  //     return false
  //   } else {
  //     setItem
  //     return true
  //   }
  // }
  return (
    <div className="bg-loginPage bg-no-repeat bg-cover">
      <div className="min-h-screen flex justify-center items-center">
        {/* login form */}
        <form
          className="bg-white my-4 rounded-2xl p-6 w-[457px] max-w-[95%] flex flex-col gap-4"
          onSubmit={submitLoginPage}
        >
          {/* login header */}
          <div>
            <img
              className="block mx-auto text-xs font-[YB-Medium]"
              src={LoginLogo}
              alt="لوگوی بنیاد مسکن"
            />
            <label className="text-[#1C4B82] font-[YB-Heavy] text-base text-center block mb-[26px]">
              بنیاد مسکن انقلاب اسلامی
            </label>
            <h1 className="text-2xl font-[YB-Bold] text-center">
              ورود به سامانه بنیاد مسکن
            </h1>
          </div>
          {/* login inputs */}
          <div className="flex-grow mb-2">
            {/* login first page */}
            {loginPage == "first" && (
              <div className=" mx-auto mb-[70px]">
                {/* login first page radio inputs */}
                <div className="mb-[22px] flex gap-5 items-center">
                  <div>
                    <label
                      className={`"before:inline-block before:w-4 before:h-4 before:ml-2 before:bg-white ${
                        Radio == "genuine"
                          ? "before:border-[4px] before:border-[#1C4B82]"
                          : "before:border-[1.5px] before:border-[#00000066]"
                      } before:rounded-full flex justify-center items-center cursor-pointer"`}
                      htmlFor="genuine"
                    >
                      <span className="mb-1">حقیقی</span>
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      name="radio"
                      id="genuine"
                      defaultChecked={true}
                      onChange={() => {
                        setRadio("genuine");
                        setFormInfo((formInfo) => ({
                          ...formInfo,
                          nationalCode: "",
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className={`"before:inline-block before:w-4 before:h-4 before:ml-2 before:bg-white ${
                        Radio == "rightsi"
                          ? "before:border-[4px] before:border-[#1C4B82]"
                          : "before:border-[1.5px] before:border-[#00000066]"
                      } before:rounded-full flex justify-center items-center cursor-pointer"`}
                      htmlFor="rightsi"
                    >
                      <span className="mb-1">حقوقی</span>
                    </label>
                    <input
                      className="hidden"
                      type="radio"
                      name="radio"
                      id="rightsi"
                      onChange={() => {
                        setRadio("rightsi");
                        setFormInfo((formInfo) => ({
                          ...formInfo,
                          nationalCode: "",
                        }));
                      }}
                    />
                  </div>
                </div>
                {Radio == "genuine" && (
                  <div>
                    <Inputs
                      label="کد ملی"
                      typeInput="number"
                      // value={formInfo.nationalCode}
                      onChange={(e) => handleNC(e)}
                      required="required"
                    />
                  </div>
                )}
                {Radio == "rightsi" && (
                  <div>
                    <Inputs
                      label="شناسه ملی"
                      typeInput="number"
                      onChange={(e) => handleNC(e)}
                      required="required"
                    />
                  </div>
                )}
                <span className="text-xs text-red-700 font-[YB-Bold] pr-2 block mt-[6px]">
                  {formInfo.errorNC}
                </span>
              </div>
            )}
            {/* login second page */}
            {loginPage == "second" && (
              <div>
                <div className="opacity-60 mb-7">
                  <Inputs
                    label={Radio == "genuine" ? "کد ملی" : "شناسه ملی"}
                    disabled="disabled"
                    value={formInfo.nationalCode}
                  />
                </div>
                <Inputs
                  label="شماره همراه"
                  typeInput="number"
                  id="phoneNum"
                  onChange={(e) => handlePhoneNum(e)}
                  defaultValue={formInfo.phoneNumber}
                />
                <span className="text-xs text-red-700 font-[YB-Bold] pr-2 block mt-[6px]">
                  {formInfo.errorNum}
                </span>
              </div>
            )}
            {/* login third page */}
            {loginPage == "third" && (
              <div>
                <p className="text-center text-sm font-[YB-Bold] mb-1">
                  لطفا کد ارسالی به شماره{" "}
                  <span className="text-[#1C4B82]">{formInfo.phoneNumber}</span>{" "}
                  را وارد نمائید
                </p>
                <div className="text-lg text-center font-[YB-Bold] text-[#1C4B82] tracking-wider mb-2">
                  <Timer />
                </div>
                <div className="mb-5">
                  <Inputs
                    label="کد دریافتی"
                    typeInput="number"
                    onInput={handleSmsCode}
                    required="required"
                  />
                  <span className="text-xs text-red-700 font-[YB-Bold] pr-2 block mt-[6px]">
                    {formInfo.errorCodeSms}
                  </span>
                </div>
                {/* <p className="my-5">{formInfo.password}</p> */}
                <div>
                  <Inputs
                    label="رمز عبور"
                    onChange={handlePassword}
                    required="required"
                  />
                  <div className="mt-2 mb-5">
                    <div className="h-[6px] rounded-[0.6rem] bg-[#D9D9D9] mb-2"></div>
                    <p className=""></p>
                  </div>
                </div>
                <Inputs label="تکرار رمز عبور" onChange={handleConfirmPsw} />
                <span className="text-xs text-red-700 font-[YB-Bold] pr-2 block mt-[6px]">
                  {formInfo.errorConfirm}
                </span>
              </div>
            )}
          </div>
          {/* login buttons */}
          <div className="flex justify-end items-center gap-2">
            {loginPage == "second" || loginPage == "third" ? (
              // prev login page button
              <button
                type="button"
                onClick={prevLoginPage}
                className="px-4 py-3 bg-[#AAB7C6] rounded-lg text-white flex justify-center items-center text-[0.875rem] leading-[22px] font-[YB-Medium] "
              >
                بازگشت
              </button>
            ) : (
              // Login portal from my government
              <button
                type="button"
                className="px-4 py-3 bg-[#1C4B82] rounded-lg text-white flex justify-center items-center text-[0.875rem] leading-[22px] font-[YB-Medium] "
              >
                ورود درگاه از دولت من
              </button>
            )}
            {loginPage == "third" ? (
              // submit login form button
              <Link to="/main">
                <nextBtn text="ثبت تغییرات" typeBtn="submit" />
              </Link>
            ) : (
              // next login page button
              <NextBtn text="ادامه" typeBtn="submit" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
