import landing from "../assets/images/landing.jpg";
import { CheckIcon } from "@heroicons/react/20/solid";
import Header from "../components/Header";

const includedFeatures = ["Guest houses", "Resorts", "Hotels", "Apartaments"];

export default function Example() {
  return (
    <div className="">
      <Header />

      <div className="bg-white py-24 sm:py-28">
        <div className="mx-auto  px-6 lg:px-8">
          <img src={landing} alt="" className="w-full rounded-lg" />
          <div className="mx-auto sm:text-center pt-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              your home to book
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              you can book now from anywhere any time. save your time
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                our hotel
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                these are services of our platform
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50  text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center ">
                <div class="relative ">
                  <img className="rounded-lg" src={landing} />
                  <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black opacity-80">
                    <span className="text-3xl font-bold tracking-tight text-white m-10">
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
    </div>
  );
}
