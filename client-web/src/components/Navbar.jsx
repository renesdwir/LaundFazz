import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [click, setClick] = useState(false);
  return (
    <>
      {/* navbar */}
      <div className="w-full px-6 bg-sky-500 py-4 flex flex-row justify-between fixed top-0 left-0 z-50">
        <div className="text-white text-xl font-semibold">
          <img src={logo} alt="" className="h-12" />
        </div>
        {click ? (
          <FiX
            onClick={() => setClick(!click)}
            className="my-auto text-2xl text-white"
          />
        ) : (
          <FiMenu
            onClick={() => setClick(!click)}
            className="my-auto text-2xl text-white"
          />
        )}
      </div>
      <div
        // atas
        className={`bg-sky-500 text-white fixed left-0 right-0 ${
          click ? "top-[4.9rem]" : "top-[-400px]"
        } text-center text-xl z-10 transition-all duration-500 ease pb-5`}
        // samping
        // className={`bg-sky-500 text-white fixed top-[4.9rem]  ${
        //   click ? "right-0 left-0" : "left-[1000px] right-[-1000px]"
        // } text-center text-xl z-10 transition-all duration-500 ease pb-5`}
      >
        <ul>
          <li className="p-5 hover:bg-blue-800">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-5 hover:bg-blue-800">
            <NavLink to="/form">Form</NavLink>
          </li>
          <li className="p-5 hover:bg-blue-800">
            <NavLink to="/myhistory">My History</NavLink>
          </li>
          <li className="p-5 hover:bg-blue-800">
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
      {/* end navbar */}
    </>
  );
}
