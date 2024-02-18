import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./homePage.css";
import Services from "../services/Services";
import FeaturedServices from "../featuredServices/FeaturedServices";
import Clients from "../clients/Clients";
import Team from "../team/Team";
import LatestNews from "../latestNews/LatestNews";
import OurClients from "../ourClients/OurClients";
import NewsLetter from "../newsLetter/NewsLetter";

const Homepage = () => {
  return (
    <div>
      <marquee className="text-danger fw-bold">তিতাশ সার্ভিস XYZ এ আপনাকে স্বাগতম। </marquee>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="slider_container">
          <img
            className="slideOne"
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className=" fw-bold" style={{ color: "#3268C0" }}>
              Explore the world
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
              repudiandae? Itaque quis facere quo aspernatur tempore? Ipsam
              obcaecati suscipit dolorum.
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideOne"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className="fw-bold" style={{ color: "#3268C0" }}>
              The world is so butiful
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
              repudiandae? Itaque quis facere quo aspernatur tempore? Ipsam
              obcaecati suscipit dolorum.
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <Services />
      <FeaturedServices />
      <Clients />
      <Team />
      <LatestNews />
      <OurClients />
      <NewsLetter/>
    </div>
  );
};

export default Homepage;
