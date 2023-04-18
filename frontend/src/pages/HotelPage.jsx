import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import Header from "../components/Header";

const HotelPage = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const location = useLocation();
  console.log(location);
  // const id = location.pathname.split("/")[2];
  const handleDateChange = (newDate) => {
    console.log("newDate:", newDate);
    setDate(newDate);
  };

  return (
    <div>
      <Header />

      <div className="flex">
        <div>
          <aside className="h-100 pb-10 mx-5 mt-10 mb-10  rounded-2xl w-80 bg-yellow-400 top-0 p-5">
            <input
              className="w-full bg-white py-2 rounded-lg px-5 mt-7 "
              readOnly
              value={location.state.selected}
            />

            <input
              className="w-full bg-white py-2 rounded-lg px-5 mt-7 "
              readOnly
              value={location.state.selectedName}
            />

            <div className="py-3 mt-7 ">
              <Datepicker value={date} onChange={handleDateChange} />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-5 py-2 rounded-lg text-2xl mt-20 text-white bg-indigo-700 "
              >
                book now
              </button>
            </div>
          </aside>
        </div>

        <main className="h-screen overflow-auto w-full pt-10">
          <h2 className="text-2xl text-center font-bold tracking-tight tsm:text-4xl">
            {location.state.selectedName} is your home
          </h2>
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
        </main>
      </div>
    </div>
  );
};

export default HotelPage;
