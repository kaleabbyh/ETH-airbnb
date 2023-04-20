import landing from "../assets/images/landing.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const mydata = ["hotel", "guest houses", "apartments", "resorts"];
export default function LandingPage() {
  return (
    <div className="">
      <div className="relative">
        <img className="w-full h-screen" src={hotel2} />
        <Link
          to="/home"
          className=" font-bold absolute text-2xl md:text-3xl lg:text-5xl text-white px-2 py-1 md:px-6 md:py-4 rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Book now
        </Link>

        <Link
          to="/home"
          className="absolute text-2xl text-amber-400 top-5 left-5 flex flex-row justify-items-stretch px-5"
        >
          my hotel
        </Link>

        <div className="absolute top-5 right-5 flex flex-row justify-items-stretch px-5">
          {mydata.map((type, index) => (
            <Link
              key={index}
              to="/home"
              className=" px-5 text-2xl text-amber-400 "
            >
              {type}
            </Link>
          ))}
        </div>

        <h2 className="absolute text-1xl text-white bottom-4 left-1/2 -translate-x-1/2">
          @copyright kaleab
        </h2>
      </div>
    </div>
  );
}
