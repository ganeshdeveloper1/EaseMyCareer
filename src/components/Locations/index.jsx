import React from "react";
import data from "../Companies/data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const JobLocation = () => {
  return (
    <div className="location-wrapper">
      <div className="loaction-container">
        <h3 className="Heading">Job Locations</h3>
        <div className="slider">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={6}
            navigation
            autoplay
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i} data={data}>
                <div className="data">
                  {console.log(item)}
                  <img src={item.url} alt="img" />
                  <p className="name">Bangalore</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default JobLocation;
