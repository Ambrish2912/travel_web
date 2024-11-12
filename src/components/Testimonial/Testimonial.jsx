import React from "react";
import Slider from "react-slick";
import i01 from "../../assets/i01.jpg";
import i02 from "../../assets/i02.jpg";
import i03 from "../../assets/i03.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Isabelle T.",
    text: "Our trip was a blend of excitement and relaxation. From the bustling streets of Tokyo to the tranquil beaches of Bali, we felt embraced by the world’s diverse cultures and hospitality.",
    img: i01,
  },
  {
    id: 2,
    name: "Carlos M.",
    text: "Traveling with this company opened my eyes to the hidden gems of South America. Hiking the Andes, exploring ancient ruins, and tasting local cuisines made this trip unforgettable. I’m grateful for the seamless experience!",
    img: i02,
  },
  {
    id: 3,
    name: "Anika S.",
    text: "Exploring Europe was a dream come true for our family. With every detail taken care of, from child-friendly activities to accessible transport, we enjoyed every moment. Highly recommended for families seeking new adventures!",
    img: i03,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Our trip was a blend of excitement and relaxation. From the bustling
            streets of Tokyo to the tranquil beaches of Bali, we felt embraced
            by the world’s diverse cultures and hospitality. Thank you for
            curating such an amazing experience!
          </p>
        </div>

        {/* Testimonial Section */}
        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 mx-4 rounded-xl bg-primary/10 max-w-sm min-h-[300px]">
                <img
                  src={img}
                  alt={`Testimonial from ${name}`}
                  className="w-24 h-24 rounded-full object-cover mx-auto"
                />
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-gray-500 text-sm">{text}</p>
                <p
                  className="text-black/20 text-9xl font-serif
                absolute top-0 right-0 "
                ></p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
