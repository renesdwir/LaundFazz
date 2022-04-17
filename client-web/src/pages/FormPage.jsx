import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineGpsFixed } from "react-icons/md";
import { GET_PRODUCTS } from "../config/queries";
import { useQuery } from "@apollo/client";

export default function FormPage() {
  const [formProduct, setFormProduct] = useState([{ product: "", price: 0 }]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const handleFormProduct = () => {
    setFormProduct([...formProduct, { product: "", price: 0 }]);
  };
  const handleDeleteProduct = (index) => {
    const newFormProduct = [...formProduct];
    newFormProduct.splice(index, 1);
    setFormProduct(newFormProduct);
  };
  const handleProduct = (e, index) => {
    const { name, value } = e.target;
    let arr = value.split(",");
    const temp = [...formProduct];
    temp[index][name] = arr[0];
    temp[index]["price"] = arr[1];
    setFormProduct(temp);
  };
  function handlePrice() {
    let total = 0;
    formProduct.map((item) => {
      total += +item.price;
    });
    return new Intl.NumberFormat("id-ID").format(total);
  }
  return (
    <>
      <div className="container mx-auto bg-white pt-[5rem]">
        <Navbar />
        <div className=" h-[70rem] flex flex-col px-6 ">
          <h1 className="mx-auto text-4xl font-semibold my-8 text-sky-500">
            LaundFazz Form
          </h1>
          <form className="form p-5 border border-slate-500 rounded-lg">
            <div className="flex flex-row justify-between">
              <h1 className="text-xl uppercase mb-4 w-full  text-sky-500 text-left">
                Set Your Location
              </h1>
              <MdOutlineGpsFixed className=" text-3xl border border-black rounded-md text-sky-500" />
            </div>
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
            <div>
              <h1 className="text-xl uppercase my-4 w-full  text-sky-500 text-left">
                Detail Location
              </h1>
              <textarea
                className="border border-sky-500 rounded-md px-2 w-full"
                name="Detail Location"
                id=""
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div className="laund-form">
              <h1 className="text-xl mt-4 text-sky-500 text-center mb-3">
                Select the item you want to laundry
              </h1>
              {/* select */}
              {formProduct.map((item, index) => (
                <div className="flex-col flex mb-3" key={index}>
                  <div className="flex flex-row justify-between">
                    <select
                      onChange={(e) => handleProduct(e, index)}
                      name="product"
                      id=""
                      value={[item.product, item.price]}
                      className="border w-1/2 p-2 border-black rounded-md text-lg bg-white"
                    >
                      <option value="">Choose Item</option>
                      {data &&
                        data.getProducts.map((item) => (
                          <option key={item.id} value={[item.name, item.price]}>
                            {item.name}
                          </option>
                        ))}
                      {/* <option value={["gaun", "30000"]}>Gaun Pesta</option>
                      <option value={["jas", "40000"]}>Jas Pria</option>
                      <option value={["tas", "50000"]}>Tas Branded</option>
                      <option value={["sepatu", "100000"]}>Sepatu</option> */}
                    </select>
                    {formProduct.length > 1 && (
                      <span
                        onClick={() => handleDeleteProduct(index)}
                        className="bg-red-500 my-auto px-3 py-1 w-fit rounded-md  text-white"
                      >
                        Del
                      </span>
                    )}

                    <span className="my-auto text-lg">
                      Rp.
                      {new Intl.NumberFormat("id-ID").format(+item.price)}
                    </span>
                  </div>
                  {formProduct.length - 1 === index && (
                    <span
                      onClick={handleFormProduct}
                      className="bg-green-500 px-2 py-1 w-fit rounded-md mt-2 text-white"
                    >
                      Add More
                    </span>
                  )}
                </div>
              ))}

              {/* end select */}
              <div className="border flex flex-col p-2 gap-2 mt-14 border-sky-500 rounded-md">
                <span className=" text-xl">
                  Total Item :{" "}
                  {formProduct[0].product === "" ? 0 : formProduct.length} pcs
                </span>
                <span className="text-xl">Distance : 2Km</span>
                <span className=" text-xl">
                  Total Price : Rp.{handlePrice()}
                </span>
              </div>
              <div className="flex">
                <button className="text-xl mx-auto bg-sky-500 text-white px-4 py-2 rounded-2xl mt-3">
                  Laundry Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
