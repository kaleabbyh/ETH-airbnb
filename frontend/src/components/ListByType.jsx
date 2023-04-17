import React from "react";
import landing from "../assets/images/landing.jpg";

const ListByType = () => {
  return (
    <div>
      <div>
        <div className="mx-auto sm:text-center pt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            your home to book
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            you can book now from anywhere any time. save your time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20">
          <div class="p-1 md:p-2 rounded-xl shadow">
            <div class="relative ">
              <img className="rounded-lg inline-flex min-h-40 " src={landing} />
              <div class="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
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
          <div class="p-1 md:p-2 rounded-xl shadow">
            <div class="relative ">
              <img className="rounded-lg inline-flex min-h-40 " src={landing} />
              <div class="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
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
          <div class="p-1 md:p-2 rounded-xl shadow">
            <div class="relative ">
              <img className="rounded-lg inline-flex min-h-40 " src={landing} />
              <div class="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
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
          <div class="p-1 md:p-2 rounded-xl shadow">
            <div class="relative ">
              <img className="rounded-lg inline-flex min-h-40 " src={landing} />
              <div class="absolute bottom-0 text-center left-0 right-0 px-4 py-2 bg-black opacity-80">
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
  );
};

export default ListByType;
