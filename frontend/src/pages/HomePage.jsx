import React from "react";
import Header from "../components/Header";
import landing from "../assets/images/landing.jpg";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import ListByCity from "../components/ListByCity";
import SearchItem from "../components/SearchItem";
import ListByType from "../components/ListByType";

const Home = () => {
  return (
    <>
      <Header />
      <ListByCity />
      <div className="relative isolate overflow-hidden 0 py-16 sm:py-24 lg:py-32">
        <div className="  mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight tsm:text-4xl">
                search for your choose here
              </h2>
              <p className="mt-4 text-lg leading-8 ">
                you can seach by city or by type
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <button
                  type="submit"
                  className=" text-white flex-none w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 "
                >
                  browse your chooses here
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold ">Weekly articles</dt>
                <dd className="mt-2 leading-7 ">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 " aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold ">No spam</dt>
                <dd className="mt-2 leading-7">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <SearchItem />
      <ListByType />
    </>
  );
};

export default Home;
