import { Route, Routes } from "react-router-dom";
import react, { useState } from "react";
import {
  LoginRegister,
  Inputs,
  NotifBox,
  Dashboard,
  EstateList,
  RealState,
} from "./components";
import { LoginPage, MainPage } from "./pages";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />}>
            <Route path="/main" element={<Dashboard />} />
            <Route path="/main/dashboard" element={<Dashboard />}/>
            <Route path="/main/estate-management" element={<EstateList />} />
            <Route path="/main/financial-affairs" element={<Inputs />} />
            <Route path="/main/identity-information" element={<NotifBox />} />
            <Route path="/main/support" element={<NotifBox />} />
            <Route path="/main/login" element={<LoginRegister />} />
            <Route path="/main/notification" element={<NotifBox />} />
            <Route
              path={"/main/estate-management/realstate"}
              element={<RealState />}
            />
          </Route>
          <Route path="*" element={<Inputs />} />
          <Route path="/m" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
