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
      <marquee className="text-danger fw-bold">
        তিতাশ সার্ভিস A-2-Z লিমিটেড এ আপনাকে স্বাগতম।{" "}
      </marquee>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="slider_container">
          <img
            className="slideOne"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className=" fw-bold" style={{ color: "#3268C0" }}>
              It training program.
            </h1>
            <p className="">
              Unlock your potential with our IT training. Whether you{"'"}re a
              beginner or an experienced professional, our courses cater to all
              skill levels for career growth.
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
              Web & App solution
            </h1>
            <p className="">
              Our organization delivered a great web and app product for your
              business.
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideOne"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className="fw-bold" style={{ color: "#3268C0" }}>
              Social network and media marketing.
            </h1>
            <p className="text-white">
              Unleash the power of social media with our expert-led marketing
              solutions.
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{width: "100%", height: "30vh"}}
            src="https://images.unsplash.com/photo-1551748629-08d916ed6682?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className="fw-bold" style={{ color: "#3268C0" }}>
              Titash Tours and Travels
            </h1>
            <p className="text-white">
              Embrace your travel, spend less, Travel more. Fly with your dreams and expand your mind and culture.
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideOne"
            src="https://images.unsplash.com/photo-1676607185258-fc3cfc097bcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className="fw-bold" style={{ color: "#3268C0" }}>
              Umrah Hajj services
            </h1>
            <p className="text-white">
              Hajj in the Modern World: Bridging Tradition and Contemporary
              Challenges
            </p>
            <button type="button" className="btn btn-primary btn-lg">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slideOne"
            src="https://images.unsplash.com/flagged/photo-1570343271132-8949dd284a04?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="centered">
            <h1 className="fw-bold" style={{ color: "#3268C0" }}>
              Security services
            </h1>
            <p className="text-black">
              Securing your peace of mind. Our professional security team is
              dedicated to safeguarding your property and assets 24/7.
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
      <NewsLetter />
    </div>
  );
};

export default Homepage;
