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
  console.log(data);
  let obj = {};
  data?.getUserTransactionById.transaction.Products.map((product) => {
    if (!obj[product.name]) {
      obj[product.name] = 1;
    } else {
      obj[product.name] += 1;
    }
  });
  console.log(obj);
  return (
    <div className="container mx-auto bg-white pt-[5rem] pb-8">
      <Navbar />
      <div className="px-6 mt-3 flex flex-col">
        <h1 className="text-center font-bold text-2xl text-sky-500">
          Detail Page
        </h1>
        <h1 className="text-center text-lg">
          Transaction Id: {data?.getUserTransactionById.transaction.id}
        </h1>
        <button
          className={`px-3 py-1 rounded-md ${
            data?.getUserTransactionById.transaction.status === "pending"
              ? "text-red-400 bg-red-200"
              : data?.getUserTransactionById.transaction.status === "onProgress"
              ? "text-yellow-600 bg-yellow-200"
              : "text-green-400 bg-green-200"
          }  mx-auto text-xl `}
        >
          {data?.getUserTransactionById.transaction.status}
        </button>

        <div className="mt-5">
          <div className="map">
            <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline my-5">
              Pickup Location
            </h1>
            <iframe
              src={`https://maps.google.com/maps?q=${data?.getUserTransactionById.transaction.latitude},  ${data?.getUserTransactionById.transaction.longitude}&z=15&output=embed`}
              height="270"
              frameborder="0"
              className="mx-auto w-full"
            ></iframe>
          </div>
          <div className="mt-9 flex flex-col gap-9">
            <div className="flex flex-row gap-9">
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                List of Item :
              </h1>
              <div className="flex flex-col text-lg gap-1 font-semibold">
                {Object.keys(obj).map((item) => {
                  return (
                    <div className="flex flex-row gap-3">
                      <h1 className="text-xl">{obj[item]}</h1>
                      <h1 className="text-xl">{item}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                Total Price :
              </h1>
              <span className="text-xl  font-semibold">
                Rp{" "}
                {new Intl.NumberFormat("id-ID").format(
                  data?.getUserTransactionById.transaction.totalPrice
                )}
              </span>
            </div>
            <div className="flex flex-row gap-7">
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                Pickup Date :
              </h1>
              <span className="text-xl  font-semibold">
                {data?.getUserTransactionById.transaction.pickupDate === null
                  ? "( pay first )"
                  : moment(
                      data?.getUserTransactionById.transaction.pickupDate
                    ).format("DD/MM/YYYY")}
              </span>
            </div>
            <div className="flex flex-row gap-3">
              <h1 className="text-xl underline-offset-8 font-bold text-sky-500 underline">
                Delivery Date :
              </h1>
              <span className="text-xl  font-semibold">
                {data?.getUserTransactionById.transaction.deliveryDate === null
                  ? "( pay first )"
                  : moment(
                      data?.getUserTransactionById.transaction.deliveryDate
                    ).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-evenly mt-8">
            {data?.getUserTransactionById.transaction.status === "pending" ? (
              <a
                href={`${data?.getUserTransactionById.data.invoice_url}`}
                className="px-8 py-2 bg-sky-500 text-white rounded-lg text-2xl"
              >
                Bayar
              </a>
            ) : (
              <button className="px-8 py-2 bg-green-500 text-white rounded-lg text-2xl">
                Tracking
              </button>
            )}

            <Link
              to="/chat"
              className="px-3 py-2 bg-purple-500 text-white  rounded-lg text-2xl"
            >
              Chat Driver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
