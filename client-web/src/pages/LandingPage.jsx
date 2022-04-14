import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDeliver, GrBasket, GrBeacon, GrDeploy } from "react-icons/gr";
import {
  MdDryCleaning,
  MdOutlineDeliveryDining,
  MdLocalLaundryService,
} from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
// import Carousel from "../components/Carousel";

export default function LandingPage() {
  return (
    <>
      <div className="container mx-auto bg-white">
        {/* navbar */}
        <div className="w-full px-6 bg-blue-700 py-4 flex flex-row justify-between fixed top-0 left-0 z-50">
          <div className="text-white text-xl font-semibold">LaundFazz</div>
          <GiHamburgerMenu className="my-auto text-2xl text-white" />
        </div>
        {/* end navbar */}
        {/* hero */}
        <div
          className="hero text-center h-[30rem] bg-fixed flex"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1610305401607-8745a10c75dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
          }}
        >
          <div className="my-auto pt-[8rem] text-white drop-shadow-2xl">
            <h1 className="text-4xl font-semibold">Ini Jargon Kami</h1>
            <p className="text-lg mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              vitae
            </p>
            <button className="px-5 py-3 rounded-2xl  bg-blue-700 text-lg  mt-8 hover:bg-blue-800">
              Get Started
            </button>
          </div>
        </div>
        {/* end hero */}

        {/* Why me */}
        <div className="px-2 mb-10">
          <h1 className="text-center text-2xl font-bold py-10 text-blue-700">
            Why LaundFazz
          </h1>
          <div className="flex flex-wrap flex-row justify-evenly gap-y-7">
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <VscWorkspaceTrusted className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Trusted</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <MdLocalLaundryService className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Easy</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <FaShippingFast className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Fast</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <MdDryCleaning className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Clean</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <MdOutlineDeliveryDining className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Pick Up</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="card border border-slate-400 rounded-lg shadow-xl w-36 p-4 text-center">
              <AiFillCreditCard className="text-blue-700 text-[4rem] mx-auto" />
              <h1 className="mt-3 text-lg font-semibold uppercase">Payment</h1>
              <span>Lorem ipsum dolor sit.</span>
            </div>
          </div>
        </div>
        {/* end Why me */}

        <div className="test">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          fugiat fuga voluptate alias itaque esse voluptas optio porro maiores
          hic! Cupiditate, laboriosam enim repellendus magnam debitis nihil
          ullam quisquam? Similique atque corrupti incidunt suscipit! Autem quae
          atque modi perferendis quia ipsam impedit cupiditate delectus
          reiciendis. Repudiandae animi voluptas explicabo molestias tenetur
          sequi a, obcaecati odio! Adipisci amet suscipit similique ea fugiat
          facere hic esse excepturi reprehenderit, magnam odit ex corporis ut
          alias ab eius neque voluptate quos. Aut, facere. Libero aspernatur,
          placeat temporibus suscipit error corrupti. Aspernatur architecto
          eligendi adipisci, illum dolorem esse repudiandae fugit placeat
          consequuntur labore qui perferendis ad, explicabo quas praesentium
          mollitia, dignissimos doloremque aliquid quasi ab laudantium impedit
          in dolores veniam? Rerum vero commodi fugiat fugit? Suscipit, minus
          incidunt? Esse vel excepturi earum laborum totam ipsam facilis
          dignissimos dolor deleniti voluptatibus saepe blanditiis quas beatae
          ea, illum autem iste officia! Laboriosam adipisci asperiores debitis
          id doloremque doloribus atque odio. Harum, quo quos porro, modi fugit
          illo accusamus cupiditate nesciunt inventore, dolore dolores? Nemo
          rerum porro reiciendis, quod nesciunt laudantium placeat debitis
          nihil, pariatur saepe, magnam aut. Optio ducimus nisi assumenda. Ea
          quidem animi distinctio necessitatibus aperiam eveniet quaerat laborum
          optio libero facilis voluptatibus sapiente et harum ad illo assumenda
          adipisci odit repellendus quam tempore nihil, at excepturi? Quam
          eligendi eius laborum repudiandae voluptas sapiente. Eos quos at unde
          tenetur eligendi amet ad dolores. Ab harum nostrum ex rem tenetur
          excepturi nemo eveniet quas porro maxime corporis deserunt voluptates
          quae quam, nobis suscipit inventore praesentium hic doloribus
          nesciunt, reiciendis odio? Vel ea veniam sint eligendi enim
          accusantium autem, iure corporis provident perspiciatis aperiam est
          quasi aut delectus animi sunt officiis ducimus placeat cumque
          reiciendis impedit quisquam. Omnis aspernatur officiis, esse
          laudantium temporibus mollitia, officia facere id animi quae error
          expedita atque numquam? Quae dolores impedit et quod.
        </div>
        {/* <div className="carousel">
          <Carousel />
        </div> */}
      </div>
    </>
  );
}
