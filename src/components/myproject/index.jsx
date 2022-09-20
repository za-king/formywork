import React,{useRef} from "react";
import Card from "../card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";

const MyProject = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="w-full h-screen">
        <div className="text-center font-poppins text-4xl font-bold">
          My Project
        </div>
        <div className="container mt-24">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            
            modules={[Pagination, Navigation]}
            className="h-96 border-b-4 border-black"
          >
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
            <SwiperSlide><Card/></SwiperSlide>
          </Swiper>

          <div className="flex justify-end mt-5">
            <div class="swiper-button-prev-unique" ref={prevRef}>
              <FiChevronLeft size={"50px"} />
            </div>
            <div class="swiper-button-next-unique" ref={nextRef}>
              <FiChevronRight size={"50px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
