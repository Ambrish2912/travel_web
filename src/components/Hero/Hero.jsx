import React from "react";

const Hero = () => {
    const [priceValue, setPriceValue] = React.useState(30);

    return (
        <div className="bg-black/20 h-full flex flex-col justify-center items-center p-4">
            <div className="text-white mb-6">
                    <p data-aos="fade-up">Our packages</p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="font-bold text-3xl"
                    >
                        Search Your Destination
                    </p>
                </div>
            <div className="bg-white rounded-md p-6 w-full max-w-3xl relative shadow-lg">
            

                {/* Form Section */}
                <div className="flex items-center justify-between space-x-4">
                    {/* Destination Input */}
                    <div className="flex flex-col w-1/3">
                        <label htmlFor="destination" className="opacity-70 text-sm mb-1">
                            Search your Destination
                        </label>
                        <input
                            type="text"
                            id="destination"
                            placeholder="Dubai"
                            className="w-full bg-gray-100 rounded-full p-2"
                        />
                    </div>

                    {/* Date Input */}
                    <div className="flex flex-col w-1/3">
                        <label htmlFor="date" className="opacity-70 text-sm mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full bg-gray-100 rounded-full p-2"
                        />
                    </div>

                    {/* Max Price Input */}
                    <div className="flex flex-col w-1/3">
                        <label htmlFor="price" className="opacity-70 text-sm mb-1">
                            <div className="flex justify-between items-center">
                                <p>Max Price</p>
                                <p className="font-bold text-sm">${priceValue}</p>
                            </div>
                        </label>
                        <input
                            type="range"
                            id="price"
                            className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                            min="10"
                            max="100"
                            value={priceValue}
                            step="5"
                            onChange={(e) => setPriceValue(e.target.value)}
                        />
                    </div>
                </div>

                {/* Button Section */}
                <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-1 rounded-full duration-200 absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                    Search Now
                </button>
            </div>
        </div>
    );
};

export default Hero;
