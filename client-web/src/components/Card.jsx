import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment");

export default function Card({ data }) {
  return (
    <Link
      to={`/detail/${data.id}`}
      className="card flex flex-row justify-between bg-sky-200 p-3 rounded-xl text-lg"
    >
      <div>
        <h1>Transaction Id</h1>
        <p>Date</p>
        <p>Pickup Date</p>
        <p>Total Items</p>
        <p>Total Price</p>
      </div>
      <div className="">
        <h1>: {data?.id}</h1>
        <p>: {data ? moment(data.createdAt).format("DD/MM/YYYY") : "-"}</p>
        <p>
          :{" "}
          {data?.pickupDate === null
            ? "( pay first )"
            : moment(data.pickupDate).format("DD/MM/YYYY")}
        </p>
        <p>: {data?.Products.length} pcs</p>
        <p>: Rp. {new Intl.NumberFormat("id-ID").format(data.totalPrice)}</p>
      </div>
      <div className="flex flex-col-reverse">
        {data?.isPaid === false ? (
          <span className="px-3 py-1 bg-red-400 rounded-xl text-white">
            unpaid
          </span>
        ) : (
          <span className="px-5 py-1 bg-green-400 rounded-xl text-white">
            paid
          </span>
        )}
      </div>
    </Link>
  );
}
