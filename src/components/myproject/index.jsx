import React, { useRef, useEffect, useState } from "react";
import Card from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MyProjectData} from "../../database";

const MyProject = () => {
  const [windowWidth, setWindowWidth] = useState();
  const lebar = window.innerWidth;

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [lebar]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full h-screen ">
        <div className="text-center font-poppins text-4xl font-bold">
          My Project
        </div>
        <div className="max-w-full container mt-24">
          <Swiper
            slidesPerView={windowWidth <= 768 ? 1 : 3}
            spaceBetween={30}
            slidesPerGroup={windowWidth <= 768 ? 1 : 3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-96 border-b-4 "
          >
            {MyProjectData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card  item={item}/>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex justify-end mt-5">
            <div class="swiper-button-prev-unique" ref={prevRef}>
              <FiChevronLeft
                size={"50px"}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer"
              />
            </div>
            <div class="swiper-button-next-unique" ref={nextRef}>
              <FiChevronRight
                size={"50px"}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
