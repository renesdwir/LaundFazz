import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useQuery } from "@apollo/client";
import { GET_NAME } from "../config/queries";

export default function MyHistoryPage() {
  const { loading, error, data } = useQuery(GET_NAME);
  return (
    <>
      <div className="container mx-auto bg-white pt-[5rem]">
        <Navbar />
        <div className="px-6 mt-3">
          <h1 className="text-xl font-semibold capitalize ">
            <span className="text-4xl font-extrabold text-sky-500">Hi</span>,{" "}
            {data?.getCustomerName.name}
          </h1>
          <p className="text-large">Welcome to your history transactions</p>
          <div className="card-list mt-5 mb-20 flex flex-col gap-5">
            <Card status={"unpaid"} />
            <Card status={"unpaid"} />
            <Card status={"paid"} />
            <Card status={"paid"} />
            <Card status={"paid"} />
            <Card status={"paid"} />
          </div>
        </div>
      </div>
    </>
  );
}
