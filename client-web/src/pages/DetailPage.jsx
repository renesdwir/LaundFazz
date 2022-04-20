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
  if (loading)
    return (
      <div className="flex justify-center mt-[14rem]">
        <svg
          role="status"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
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
