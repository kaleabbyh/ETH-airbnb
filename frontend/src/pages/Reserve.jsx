import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import bed1 from "../assets/images/bed1.jpg";
import bed2 from "../assets/images/bed2.jpg";
import bed3 from "../assets/images/bed3.jpg";
import bed4 from "../assets/images/bed4.jpg";
import Header from "../components/Header";
const beds = [
  ["king bed", "3000", bed1],
  ["single bed", "2000", bed2],
  ["my ded", "1800", bed3],
  ["abcd bed", "3000", bed4],
];
const ReservePage = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  //   const location = useLocation();
  //   const type = location.state.selected;
  //   const selectedName = location.state.selectedName;

  //   console.log(location);
  // const id = location.pathname.split("/")[2];

  const handleDateChange = (newDate) => {
    console.log("newDate:", newDate);
    setDate(newDate);
  };

  return (
    <div>
      <Header />
      <div className="">
        <main className="h-screen overflow-auto w-full pt-10">
          <div className="grid grid-cols-1   gap-4 w-full  p-4">
            <h2 className="  shadow-lg uppercase  py-4 mx-10 rounded-lg bg-indigo-100 border border-indigo-200  text-center   text-xl  md:text-2xl">
              abcd room
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full  p-4">
            <div className="md:col-start-2  md:col-span-7 p-1 md:p-2 rounded-xl shadow">
              <img className="rounded-md  min-h-40 " src={bed1} />
            </div>

            <div className="md:col-start-9  md:col-span-3  pb-1 my-1 rounded-2xl  bg-yellow-400  p-5">
              <input
                className="w-full bg-white py-2 rounded-lg px-5 mt-7 "
                readOnly
                value={"King bed"}
              />

              <input
                className="w-full bg-white py-2 rounded-lg px-5 mt-7 "
                readOnly
                value={"300 ETB"}
              />

              <div className="py-3 mt-7 ">
                <Datepicker value={date} onChange={handleDateChange} />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-5 py-2 rounded-lg text-2xl mt-10 mb-4 text-white bg-indigo-700 "
                >
                  book now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReservePage;
