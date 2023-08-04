import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
// import bed1 from "../assets/images/bed1.jpg";
// import bed2 from "../assets/images/bed2.jpg";
// import bed3 from "../assets/images/bed3.jpg";
// import bed4 from "../assets/images/bed4.jpg";
// import Header from "../components/Header";
const beds = [
  ["king bed", "3000", bed1],
  ["single bed", "2000", bed2],
  ["my ded", "1800", bed3],
  ["abcd bed", "3000", bed4],
];
const HotelPage = () => {
  const [selected, setSelected] = useState("");
  const [bed, setBedNaime] = useState("");

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const navigate = useNavigate();

  const location = useLocation();
  const type = location.state.selected;
  const selectedName = location.state.selectedName;

  console.log(location);
  // const id = location.pathname.split("/")[2];

  const handleDateChange = (newDate) => {
    console.log("newDate:", newDate);
    setDate(newDate);
  };

  // , {
  //   state: { selected, selectedName },
  // }
  const handleBook = () => {
    navigate(`/hotel/8876/646545?type=${type}&name=${selectedName}`);
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
              value={type}
            />

            <input
              className="w-full bg-white py-2 rounded-lg px-5 mt-7 "
              readOnly
              value={selectedName}
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
          <h2 className="shadow-lg uppercase  py-4 mx-5 rounded-lg bg-indigo-100 border border-indigo-200  text-center  tracking-tight text-xl  md:text-2xl">
            {selectedName} is your home
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 w-full  p-4">
            {beds.map((val) => (
              <div key={val} className="p-1 md:p-2 rounded-xl shadow">
                <div className="relative ">
                  <img
                    className="rounded-lg inline-flex min-h-40 "
                    src={val[2]}
                  />

                  <div className="absolute grid grid-cols-1  text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <span className="p-1 md:py-2  text-lg md:text-2xl  font-bold  text-white ">
                      {val[1]} ETB
                    </span>
                    <a
                      href="#"
                      className="p-2 text-lg md:text-2xl  font-bold  text-white "
                    >
                      {val[0]}
                    </a>
                    <button
                      onClick={handleBook}
                      className="block px-3 py-1 my-1 text-center rounded-lg border  border-indigo-900  text-2xl font-semibold text-white "
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HotelPage;
