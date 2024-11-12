import React from "react";
import video from "../assets/HomeScreen.mp4";
import Hero from "../components/Hero/Hero";
// import Places from "../components/Places/places";
import BannerImg from "../components/BannerImg/BannerImg";
import Poster from "../assets/Poster.jpg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import Banner2 from "../assets/Banner2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            muted
            loop
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={video} type="video/mp4" />
          </video>
          <Hero />
        </div>
        {/* <Places /> */}
        <BannerImg img={Poster} />
        <Blogs />
        <Banner />
        <BannerImg img={Banner2} />
        <Testimonial/>
      </div>
    </>
  );
};

export default Home;
