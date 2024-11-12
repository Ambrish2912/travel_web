import React from "react";
import TraveImg from "../../assets/TraveImg.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div className="flex justify-center">
              <img
              data-aos="flip-up"
                src={TraveImg}
                alt="Travel Destination"
                className="max-w-[450px] h-[350px] w-full drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* Text section */}
            <div>
              <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">
                Explore all corners of the world with us
              </h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8 mt-4">
                Escape the Ordinary, Embrace the Unknown. Adventures Begin Here,
                Wherever You Want to Go. Discover, Dream, Depart! Your Journey
                Awaits!
              </p>
              <div data-aos="zoom-in" className="space-y-4 mt-8">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200" />
                    <p>Flight</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100" />
                    <p>Hotel</p>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200" />
                    <p>Wi-Fi</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100" />
                    <p>Food</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
