import React from "react";
import Navbar from "../components/Navbar";

export default function DetailPage() {
  return (
    <div className="container mx-auto bg-white pt-[5rem] pb-8">
      <Navbar />
      <div className="px-6 mt-3 flex flex-col">
        <h1 className="text-center font-bold text-2xl text-sky-500">
          Detail Page
        </h1>
        <h1 className="text-center text-lg">Transaction Id: L123-123</h1>
        <button className="px-3 py-1 rounded-md text-red-400 mx-auto text-xl bg-red-200">
          Pending
        </button>

        <div className="mt-5">
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.603247420415!2d107.6186961!3d-6.9024642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sid!2sid!4v1650076742344!5m2!1sid!2sid"
              width="100%"
              height="350"
              className="border-none mx-auto"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-9 flex flex-row gap-9">
            <div>
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                List of Item
              </h1>
              <div className="flex flex-col mt-2 text-lg">
                <span>2 Jas</span>
                <span>1 Gaun Pesta</span>
                <span>1 Sepatu</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                Total Price
              </h1>
              <span className="text-lg mt-3 block">Rp 200.000</span>
            </div>
          </div>
          <div className="flex flex-row justify-evenly mt-8">
            <button className="px-8 py-2 bg-green-200 rounded-lg text-2xl">
              Bayar
            </button>
            <button className="px-3 py-2 bg-yellow-200 rounded-lg text-2xl">
              Chat Driver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
