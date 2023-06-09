import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import Header from "../components/Header";
const types = [
  ["king bed", "3000", hotel1],
  ["single bed", "2000", hotel2],
  ["my ded", "1800", hotel3],
  ["abcd bed", "3000", hotel4],
];

const CityPage = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const [selected, setSelected] = useState("");
  const [selectedName, setSelectedName] = useState("");

  const navigate = useNavigate();

  const options = ["Choose", "resort", "Hotel", "apartment"];
  const resort = ["Choose", "Haile resort ", "abcd resort"];
  const hotel = ["Choose", "abcd hotel", "efg hotel", "hijk hotel"];
  const apartment = ["Choose", "asd apatment", "kafh apatment", "jgj apatment"];

  const optionHandler = (event) => {
    setSelected(event.target.value);
  };
  const selectedNameHandler = (event) => {
    setSelectedName(event.target.value);
  };

  let type = null;
  if (selected === "resort") {
    type = resort;
  } else if (selected === "Hotel") {
    type = hotel;
  } else if (selected === "apartment") {
    type = apartment;
  }

  const handleDateChange = (newDate) => {
    console.log("newDate:", newDate);
    setDate(newDate);
  };

  const handleSearch = () => {
    navigate(`/hotel/8876?type=${selected}&name=${selectedName}`, {
      state: { selected, selectedName },
    });
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div>
          <aside className="h-100 pb-10 mx-5 mt-10 mb-10  rounded-2xl w-80 bg-yellow-400 top-0 p-5">
            <h1 className="text-gray-600  pt-5 p-1"> select </h1>

            <select
              className="w-full bg-white py-2 rounded-lg px-5 mb-3 "
              onChange={optionHandler}
            >
              {options
                ? options.map((val) => <option key={val}>{val}</option>)
                : "options"}
            </select>
            <h1 className="text-gray-600  pt-5 p-1"> select </h1>
            <select
              onChange={selectedNameHandler}
              className="w-full bg-white py-2 rounded-lg px-5 mb-3 "
            >
              {type
                ? type.map((val) => <option key={val}>{val}</option>)
                : "choose"}
            </select>
            <div className="py-3 ">
              <Datepicker value={date} onChange={handleDateChange} />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="w-full px-5 py-2 rounded-lg text-2xl mt-20 text-white bg-indigo-700 "
              >
                search
              </button>
            </div>
          </aside>
        </div>

        <main className="h-screen overflow-auto w-full pt-10">
          <h2 className="shadow-lg uppercase  py-4 mx-5 rounded-lg bg-indigo-100 border border-indigo-200  text-center  tracking-tight text-xl  md:text-2xl">
            hotels in bahidar city
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 w-full  p-4">
            {types.map((Name, index) => (
              <div key={index} className="p-1 md:p-2 rounded-xl shadow">
                <div className="relative ">
                  <img
                    className="rounded-lg inline-flex min-h-40 "
                    src={Name[2]}
                  />
                  <div className="absolute bottom-0 text-center px-4 py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <span className="block text-2xl px-5 py-2 font-bold  text-white ">
                      {Name[1]}
                    </span>
                    <a
                      href="#"
                      className="block px-5 py-2 text-center rounded-md border border-indigo-900  text-2xl font-semibold text-white "
                    >
                      {Name[0]}
                    </a>
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

export default CityPage;
