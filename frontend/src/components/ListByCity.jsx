import React from "react";

import landing from "../assets/images/landing.jpg";

const ListByCity = () => {
  return (
    <div>
      <div className="mx-auto sm:text-center pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          browse your home by city
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          you can book now from anywhere any time. save your time
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-start-1 col-span-1  text-center">
          <div className="grid grid-cols-1 ">
            <div className="mt-60"></div>
            <h2 className="text-2xl font-bold tracking-tight tsm:text-4xl">
              search for your choose here
            </h2>
            <p className="mt-4 text-lg leading-8 ">you can seach by city</p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="search-city" className="sr-only">
                search and reserve
              </label>
              <input
                id="search-city"
                name="search-city"
                type="text"
                autoComplete="text"
                required
                className="ml-5 min-w-0 flex-auto rounded-md border border-indigo-500 px-4"
                placeholder="Enter city or type"
              />
              <button
                type="submit"
                className=" text-white flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 "
              >
                search
              </button>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-2">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 w-full bg-white p-4">
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={landing}
                />
                <div className="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
                  <span className="text-3xl py-5 font-bold tracking-tight text-white m-10 ">
                    3000 ETB
                  </span>
                  <a
                    href="#"
                    className=" block w-full rounded-md bg-indigo-900  py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={landing}
                />
                <div className="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
                  <span className="text-3xl py-5 font-bold tracking-tight text-white m-10 ">
                    3000 ETB
                  </span>
                  <a
                    href="#"
                    className=" block w-full rounded-md bg-indigo-900  py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={landing}
                />
                <div className="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
                  <span className="text-3xl py-5 font-bold tracking-tight text-white m-10 ">
                    3000 ETB
                  </span>
                  <a
                    href="#"
                    className=" block w-full rounded-md bg-indigo-900  py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={landing}
                />
                <div className="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
                  <span className="text-3xl py-5 font-bold tracking-tight text-white m-10 ">
                    3000 ETB
                  </span>
                  <a
                    href="#"
                    className=" block w-full rounded-md bg-indigo-900  py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListByCity;
