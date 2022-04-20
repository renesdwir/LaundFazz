import React from "react";
import { Link } from "react-router-dom";
const moment = require("moment");

export default function Card({ data }) {
  // console.log(data);
  return (
    <Link
      to={`/detail/${data.id}`}
      className="card flex flex-row justify-between bg-sky-200 shadow-xl p-3 rounded-xl text-lg"
    >
      <div className="flex flex-col w-full p-3 gap-3">
        <div className="flex flex-row justify-between  w-full">
          <div>
            <h1 className="text-xs text-slate-400 uppercase">Transaction id</h1>
            <h1 className="text-lg text-slate-800 text-left mb-4">
              {data?.id}
            </h1>
            <h1 className="text-xs text-slate-400 uppercase">Total items</h1>
            <h1 className="text-lg text-slate-800 text-left">
              {data?.TransactionProducts.length} items
            </h1>
          </div>
          <div>
            <h1 className="text-xs text-slate-400 uppercase text-right">
              Order On
            </h1>
            <h1 className="text-lg text-slate-800 text-right mb-4">
              {data ? moment(data.createdAt).format("DD/MM/YYYY") : "-"}
            </h1>
            <h1 className="text-xs text-slate-400 uppercase text-right">
              Pickup date
            </h1>
            <h1 className="text-lg text-slate-800 text-right">
              {data?.pickupDate === null
                ? "-"
                : moment(data.pickupDate).format("DD/MM/YYYY")}
            </h1>
          </div>
          <div>
            <h1 className="text-xs text-slate-400 uppercase text-right">
              status
            </h1>
            {data?.isPaid === false ? (
              <h1 className="text-lg text-red-400 font-semibold text-right mb-3 uppercase">
                Unpaid
              </h1>
            ) : (
              <h1 className="text-lg text-green-500 font-semibold text-right mb-3 uppercase">
                Paid
              </h1>
            )}

            <h1 className="text-xs text-slate-400 uppercase text-right">
              total price
            </h1>
            <h1 className="text-lg text-slate-800 text-right">
              Rp. {new Intl.NumberFormat("id-ID").format(data.totalPrice)}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
