import React, { useCallback, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineGpsFixed } from "react-icons/md";
import { GET_PRODUCTS } from "../config/queries";
import { useQuery, useMutation } from "@apollo/client";
import { POST_TRANSACTIONS } from "../config/queries";
import { useDispatch } from "react-redux";
import MapForm from "../components/Map/MapForm";
import { GeolocateControl } from "maplibre-gl";
import { fetchAdress, fetchRoute } from "../store/actions/map";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const [formProduct, setFormProduct] = useState([
    { product: "", price: 0, id: 0 },
  ]);
  const [addForm] = useMutation(POST_TRANSACTIONS);
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const geoRef = useRef(null);
  const [address, setAddress] = useState({
    formatted: "",
    lat: 0,
    lon: 0,
  });
  const [distance, setDistance] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mapIsReadyCallback = useCallback((map) => {
    const geolocate = new GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    map.addControl(geolocate);
    geoRef.current = geolocate;
  }, []);
  function findMe() {
    geoRef.current.trigger();
    navigator.geolocation.getCurrentPosition((e) => {
      const { longitude: lon, latitude: lat } = e.coords;
      dispatch(fetchAdress({ lon, lat })).then((res) => {
        setAddress({
          ...address,
          formatted: res.results?.[0]?.formatted,
          lat,
          lon,
        });
      });
      dispatch(
        fetchRoute({
          lon1: lon,
          lat1: lat,
          lat2: -6.928883448498851,
          lon2: 107.61718541400433,
        })
      ).then((res) => {
        setDistance(res.features?.[0]?.properties?.distance / 1000);
      });
    });
  }

  const formHandler = async (e) => {
    e.preventDefault();
    let arr = [];
    let total = 0;
    formProduct.forEach((el) => {
      total = +el.price + total;
      arr.push(+el.id);
    });
    total += Math.floor(distance * 4000);
    // console.log(address.lat.toString(), address.lon.toString());
    await addForm({
      variables: {
        latitude: address.lat.toString(),
        longitude: address.lon.toString(),
        staffId: 1,
        productArrays: arr,
        totalPrice: total,
      },
    });
    navigate("/myhistory");
  };

  const handleFormProduct = () => {
    setFormProduct([...formProduct, { product: "", price: 0, id: 0 }]);
  };
  const handleDeleteProduct = (index) => {
    const newFormProduct = [...formProduct];
    newFormProduct.splice(index, 1);
    setFormProduct(newFormProduct);
  };
  const handleProduct = (e, index) => {
    const { name, value, id } = e.target;
    let arr = value.split(",");
    const temp = [...formProduct];
    temp[index][name] = arr[0];
    temp[index]["price"] = arr[1];
    temp[index]["id"] = arr[2];
    setFormProduct(temp);
  };
  function handlePrice() {
    let total = 0;
    formProduct.map((item) => {
      total += +item.price;
    });
    total += Math.floor(distance * 4000);
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
          <form
            onSubmit={formHandler}
            className="form p-5 border border-slate-500 rounded-lg"
          >
            <div className="flex flex-row justify-between">
              <h1 className="text-xl uppercase mb-4 w-full  text-sky-500 text-left">
                Set Your Location
              </h1>
            </div>
            <div className="map">
              <MapForm mapIsReadyCallback={mapIsReadyCallback} />
            </div>
            <div className="w-full flex justify-center mt-3">
              <button
                type="button"
                className=" text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={findMe}
              >
                Find me
              </button>
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
                defaultValue={address.formatted || ""}
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
                      value={[item.product, item.price, item.id]}
                      className="border w-1/2 p-2 border-black rounded-md text-lg bg-white"
                    >
                      <option value="">Choose Item</option>
                      {data &&
                        data.getProducts.map((item) => (
                          <option
                            key={item.id}
                            value={[item.name, item.price, item.id]}
                          >
                            {item.name}
                          </option>
                        ))}
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
                <span className="text-xl">Distance: {distance} Km</span>
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
