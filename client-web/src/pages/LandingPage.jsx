import React, { useState } from "react";
import {
  MdDryCleaning,
  MdOutlineDeliveryDining,
  MdLocalLaundryService,
} from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import {
  AiFillCreditCard,
  AiOutlineForm,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlineCopyright,
} from "react-icons/ai";
import { GiWashingMachine } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import Carousel from "../components/Carousel";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  let [click, setClick] = useState(false);
  return (
    <>
      <div className="container mx-auto bg-white pt-[3.7rem]">
        <Navbar />

        <div onClick={() => setClick(false)}>
          {/* hero */}
          <div
            className="hero text-center h-[30rem] bg-fixed flex"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1610305401607-8745a10c75dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
            }}
          >
            <div className="my-auto pt-[8rem] text-white drop-shadow-2xl">
              <h1 className="text-4xl font-semibold">Laundry at its Finest</h1>
              <p className="text-lg mt-5 px-6">
                We collect, clean, and deliver your laundry and dry cleaning
                back to your home, in as little as 24 Hours.
              </p>
              <button className="px-5 py-3 rounded-2xl  bg-sky-500 text-lg  mt-8 hover:bg-blue-800">
                <Link to="/form">Get Started</Link>
              </button>
            </div>
          </div>
          {/* end hero */}

          {/* How */}
          <div className="px-2 pb-5 bg-slate-100">
            <h1 className="uppercase text-center text-2xl font-bold py-12 text-sky-500">
              Follow this three <br />
              simple steps
            </h1>
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <FiLogIn className="mb-3 mx-auto text-[3rem] " />
                <h1 className="  text-xl text-center">Login/Register</h1>
              </div>
              <div className="mb-10">
                <AiOutlineForm className="mb-3 mx-auto text-[3rem] " />
                <h1 className="  text-xl text-center">Fill your order form</h1>
              </div>
              <div className="mb-10">
                <GiWashingMachine className="mb-3 mx-auto text-[3rem] " />
                <h1 className="  text-xl text-center">Enjoy our service</h1>
              </div>
            </div>
          </div>
          {/* end How */}

          {/* Why me */}
          <div className="px-2 mb-16">
            <h1 className="uppercase text-center text-2xl font-bold py-10 text-sky-500">
              Why LaundFazz
            </h1>
            <div className="flex flex-wrap flex-row justify-evenly gap-y-7">
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <VscWorkspaceTrusted className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">
                  Trusted
                </h1>
                {/* <span>90% </span> */}
              </div>
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <MdLocalLaundryService className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">Easy</h1>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <FaShippingFast className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">Fast</h1>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <MdDryCleaning className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">Clean</h1>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <MdOutlineDeliveryDining className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">
                  Pick Up
                </h1>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
              <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
                <AiFillCreditCard className="text-sky-500 text-[4rem] mx-auto" />
                <h1 className="mt-3 text-lg font-semibold uppercase">
                  Payment
                </h1>
                {/* <span>Lorem ipsum dolor sit.</span> */}
              </div>
            </div>
          </div>
          {/* end Why me */}

          {/* apa kata mereka */}
          <div className="carousel h-96 text-center bg-sky-500">
            <h1 className="uppercase text-center text-2xl font-bold py-6 pt-10 text-white">
              What our customers say
            </h1>
            <div className="h-72 ">
              <Carousel />
            </div>
          </div>
          {/*end apa kata mereka */}

          {/* About us */}
          <div className="px-2 pb-5 mb-5">
            <h1 className="uppercase text-center text-2xl font-bold py-8 text-sky-500">
              About Us
            </h1>
            <div className="flex flex-col justify-center px-6">
              <p className="text-justify  text-lg">
                Door-to-door service, free next-day delivery, 24/7 ordering?
                What more could you want? Click “Get Started” to use “Laundfazz
                on the web or alternatively find us on your app store by
                searching “Laundfazz.”
              </p>
            </div>
          </div>
          {/* end About us */}
          {/* footer */}
          <footer className="bg-black p-8">
            <div className="flex flex-col justify-center">
              <img className="w-32 mx-auto" src={logo} alt="" />
              <div className="text-white mx-auto flex flex-row text-2xl gap-5 mt-4">
                <AiFillFacebook /> <AiFillInstagram /> <AiFillTwitterSquare />{" "}
                <AiOutlineWhatsApp />
              </div>
              <p className="text-white text-center mt-3">
                Customer Service - (021) 999 99 1212
              </p>
              <p className="text-white text-center mt-3">
                Copyright <AiOutlineCopyright className="inline" /> 2022 by
                LaundFazz
              </p>
              <p className="text-white text-center text-sm">
                Syarat dan Ketentuan | Kebijakan Privasi
              </p>
            </div>
          </footer>
          {/* end footer */}
        </div>
      </div>
    </>
  );
}
