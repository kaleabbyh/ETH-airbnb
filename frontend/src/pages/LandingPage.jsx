import landing from "../assets/images/landing.jpg";
import landin2 from "../assets/images/landing2.jpg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="">
      <Header />
      <div className="relative">
        <img className="w-full" src={landin2} />
        <Link
          to="/home"
          className="  bg-white absolute text-2xl md:text-3xl lg:text-5xl text-gray-900 px-2 py-1 md:px-6 md:py-4 rounded-3xl hover:bg-gray-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Book now
        </Link>
        <Link
          to="/home"
          className="absolute text-2xl text-amber-400 top-5 left-5"
        >
          my hotel
        </Link>
        <h2 className="absolute text-1xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">
          @copyright kaleab
        </h2>
      </div>
    </div>
  );
}
