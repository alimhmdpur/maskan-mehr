import React, { useState } from "react";
import { Header, Aside, NotifBox, Dashboard } from "../components";
import { Outlet } from "react-router-dom";
function MainPage() {
  const [menuMode, setMenuMode] = useState("closeMenu")
  const handleMenuMode = () => {
    if (menuMode === "openMenu") {
      setMenuMode("closeMenu")
    } else (
      setMenuMode("openMenu")
    )
  }
  return (
    <div className=" bg-[#f5f6fa]">
      <Header handleMenuMode={handleMenuMode}/>
      <div className=" block pt-[76px] min-h-[100%] relative">
        <Aside menuMode={menuMode} />
        <div className=" min-h-screen lg:pl-6 py-6 lg:pr-[274px] max-lg:px-4 max-lg:py-4 max-sm:px-2 max-sm:py-3">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
