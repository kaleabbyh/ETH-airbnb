import React from "react";
import { Link } from "react-router-dom";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";

const ListByCity = () => {
  return (
    <div>
      <div className="mx-auto sm:text-center pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          choose your city to stay
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Save your time.Book now
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-start-0 col-span-1  text-center">
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
              <Link
                to="/city/767"
                className=" text-white flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 "
              >
                search
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-span-2 ">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 w-full  p-4">
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={hotel1}
                />
                <div className="absolute bottom-0 text-center px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <span className="block text-2xl px-5 py-2 font-bold  text-white ">
                    3000 hotels
                  </span>
                  <a
                    href="#"
                    className="block px-5 py-2 text-center rounded-md border border-indigo-900  text-2xl font-semibold text-white "
                  >
                    Bahirdar
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={hotel2}
                />
                <div className="absolute bottom-0 text-center px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <span className="block text-2xl px-5 py-2 font-bold  text-white ">
                    3000 hotels
                  </span>
                  <a
                    href="#"
                    className="block px-5 py-2 text-center rounded-md border border-indigo-900  text-2xl font-semibold text-white "
                  >
                    Bahirdar
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={hotel3}
                />
                <div className="absolute bottom-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <span className="block text-2xl px-5 py-2 font-bold  text-white ">
                    3000 hotels
                  </span>
                  <a
                    href="#"
                    className="block px-5 py-2 text-center rounded-md border border-indigo-900  text-2xl font-semibold text-white "
                  >
                    Bahirdar
                  </a>
                </div>
              </div>
            </div>
            <div className="p-1 md:p-2 rounded-xl shadow">
              <div className="relative ">
                <img
                  className="rounded-lg inline-flex min-h-40 "
                  src={hotel4}
                />
                <div className="absolute bottom-0 text-center px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <span className="block text-2xl px-5 py-2 font-bold  text-white ">
                    3000 hotels
                  </span>
                  <a
                    href="#"
                    className="block px-5 py-2 text-center rounded-md border border-indigo-900  text-2xl font-semibold text-white "
                  >
                    Bahirdar
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
