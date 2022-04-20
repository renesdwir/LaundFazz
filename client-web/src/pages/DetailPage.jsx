import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { GET_BY_ID } from "../config/queries";
import { useQuery } from "@apollo/client";
const moment = require("moment");

export default function DetailPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BY_ID, {
    variables: { getUserTransactionByIdId: id },
  });
  // console.log(data, "<<<<<<<<<<<<<<<<<<");
  let obj = {};
  data?.getUserTransactionById.transaction.TransactionProducts.map(
    (product) => {
      if (!obj[product.Product.name]) {
        obj[product.Product.name] = 1;
      } else {
        obj[product.Product.name] += 1;
      }
    }
  );
  // console.log(obj, "<<<<<<<<<<<<<<<<<<<<<<<<<");
  return (
    <div className="container mx-auto bg-white pt-[5rem] pb-14">
      <Navbar />
      <div className="px-6 mt-3 flex flex-col">
        <h1 className="text-center font-bold text-2xl text-sky-500">
          Detail Transactions
        </h1>

        <div className="mt-4">
          <div className="map">
            <iframe
              src={`https://maps.google.com/maps?q=${data?.getUserTransactionById.transaction.latitude},  ${data?.getUserTransactionById.transaction.longitude}&z=15&output=embed`}
              height="270"
              frameborder="0"
              className="mx-auto w-full shadow-xl rounded-md"
            ></iframe>
          </div>
          <div>
            <div>
              <h1 className="text-2xl  font-semibold text-sky-500 mt-5">
                Transaction#{data?.getUserTransactionById.transaction.id}
              </h1>
            </div>
          </div>

          <div className=" flex flex-row justify-between mt-5  p-2 px-4 bg-white  border-sky-500 border-t-8  rounded-md py-5 shadow-xl">
            {/* <div className="flex flex-col ">
              <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                List of Item
              </h1>
              <div className="flex flex-col text-lg">
                {Object.keys(obj).map((item) => {
                  return (
                    <div className="flex flex-row gap-3 ">
                      <h1 className="text-lg  text-slate-800">{obj[item]}</h1>
                      <h1 className="text-lg  text-slate-800">{item}</h1>
                    </div>
                  );
                })}
              </div>
            </div> */}
            <div className=" flex-1 flex flex-row justify-between ">
              <div className="flex flex-col">
                <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                  List of Item
                </h1>
                <div className="flex flex-col text-lg">
                  {Object.keys(obj).map((item) => {
                    return (
                      <div className="flex flex-row gap-3 ">
                        <h1 className="text-lg  text-slate-800">{obj[item]}</h1>
                        <h1 className="text-lg  text-slate-800">{item}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="flex flex-col">
                <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                  Total Price
                </h1>
                <span className="text-lg text-center text-slate-800">
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    data?.getUserTransactionById.transaction.totalPrice
                  )}
                </span>
              </div> */}
              <div className="flex flex-col">
                <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                  Pickup date
                </h1>
                <span className="mb-5 text-lg   text-slate-800">
                  {data?.getUserTransactionById.transaction.pickupDate === null
                    ? "-"
                    : moment(
                        data?.getUserTransactionById.transaction.pickupDate
                      ).format("DD/MM/YYYY")}
                </span>
                <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                  Delivery date
                </h1>
                <span className="text-lg   text-slate-800">
                  {data?.getUserTransactionById.transaction.deliveryDate ===
                  null
                    ? "-"
                    : moment(
                        data?.getUserTransactionById.transaction.deliveryDate
                      ).format("DD/MM/YYYY")}
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className="uppercase text-xs text-left font-semibold text-slate-400 ">
                  Status
                </h1>
                <span
                  className={`mb-5 ${
                    data?.getUserTransactionById.transaction.status ===
                    "pending"
                      ? "text-red-400 "
                      : data?.getUserTransactionById.transaction.status ===
                        "onProgress"
                      ? "text-yellow-400"
                      : "text-green-400 "
                  } text-lg font-semibold  uppercase`}
                >
                  {data?.getUserTransactionById.transaction.status}
                </span>
                <h1 className="text-xs uppercase font-semibold text-slate-400 ">
                  Total Price
                </h1>
                <span className="text-lg text-left text-slate-800">
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    data?.getUserTransactionById.transaction.totalPrice
                  )}
                </span>
              </div>
            </div>
          </div>
          {/* sini */}
          {/* end sini */}

          <div className="flex flex-row justify-evenly mt-8">
            {data?.getUserTransactionById.transaction.status === "pending" ? (
              <a
                href={`${data?.getUserTransactionById.data.invoice_url}`}
                className="px-8 py-2 bg-sky-500 text-white rounded-lg text-2xl"
              >
                Bayar
              </a>
            ) : (
              <Link
                to={`/form/map/${data?.getUserTransactionById.transaction.id}`}
                className="px-8 py-2 bg-sky-500 text-white rounded-lg text-xl"
              >
                Tracking
              </Link>
            )}
            {data?.getUserTransactionById.transaction.status !== "pending" && (
              <Link
                to="/chat"
                className="px-3 py-2 bg-yellow-400 text-white  rounded-lg text-xl"
              >
                Chat Driver
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
