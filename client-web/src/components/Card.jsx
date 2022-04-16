import React from "react";

export default function Card({ status }) {
  return (
    <div className="card flex flex-row justify-between bg-sky-200 p-3 rounded-xl text-lg">
      <div>
        <h1>Transaction Id</h1>
        <p>Date</p>
        <p>Total Items</p>
        <p>Total Price</p>
      </div>
      <div className="">
        <h1>: 1-12325</h1>
        <p>: 4/16/2022</p>
        <p>: 4 pcs</p>
        <p>: Rp. 200.000</p>
      </div>
      <div className="flex flex-col-reverse">
        {status === "unpaid" ? (
          <span className="px-3 py-1 bg-red-400 rounded-xl text-white">
            unpaid
          </span>
        ) : (
          <span className="px-5 py-1 bg-green-400 rounded-xl text-white">
            paid
          </span>
        )}
      </div>
    </div>
  );
}
