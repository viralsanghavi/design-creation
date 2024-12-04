import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Carousel = ({src}) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="w-full rounded-md overflow-hidden">
        <img src={src} className="cover w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
