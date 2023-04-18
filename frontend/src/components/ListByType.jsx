import React from "react";
import landing from "../assets/images/landing.jpg";
import hotel5 from "../assets/images/hotel5.jpg";
import hotel6 from "../assets/images/hotel6.jpg";
import hotel7 from "../assets/images/hotel7.jpg";
import hotel8 from "../assets/images/hotel8.jpg";

const ListByType = () => {
  return (
    <div>
      <div className="mx-auto sm:text-center pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          resorts hotels and apartments are here for you
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          you can book now from anywhere any time. save your time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20">
        <div className="p-1 md:p-2 rounded-xl shadow">
          <div className="relative ">
            <img className="rounded-lg inline-flex min-h-40 " src={hotel5} />
            <div className="absolute text-center  px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-2xl py-5 font-bold tracking-tight text-white m-10 ">
                3000 ETB
              </span>
              <a
                href="#"
                className=" block w-full rounded-md border border-indigo-900  py-2 text-center text-2xl font-semibold text-white "
              >
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 md:p-2 rounded-xl shadow">
          <div className="relative ">
            <img className="rounded-lg inline-flex min-h-40 " src={hotel6} />
            <div className="absolute text-center  px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-2xl py-5 font-bold tracking-tight text-white m-10 ">
                3000 ETB
              </span>
              <a
                href="#"
                className=" block w-full rounded-md border border-indigo-900  py-2 text-center text-2xl font-semibold text-white "
              >
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 md:p-2 rounded-xl shadow">
          <div className="relative ">
            <img className="rounded-lg inline-flex min-h-40 " src={hotel7} />
            <div className="absolute text-center  px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-2xl py-5 font-bold tracking-tight text-white m-10 ">
                3000 ETB
              </span>
              <a
                href="#"
                className=" block w-full rounded-md border border-indigo-900  py-2 text-center text-2xl font-semibold text-white "
              >
                Book now
              </a>
            </div>
          </div>
        </div>
        <div className="p-1 md:p-2 rounded-xl shadow">
          <div className="relative ">
            <img className="rounded-lg inline-flex min-h-40 " src={hotel8} />
            <div className="absolute text-center  px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-2xl py-5 font-bold tracking-tight text-white m-10 ">
                3000 ETB
              </span>
              <a
                href="#"
                className=" block w-full rounded-md border border-indigo-900  py-2 text-center text-2xl font-semibold text-white "
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListByType;
