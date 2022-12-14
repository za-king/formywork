import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card";

import { GrNext,GrPrevious } from "react-icons/gr";
import { ProjectTeamData } from "../../database";

const ProjectTeam = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`projectdetail/${id}`);
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrNext
        className="bg-white absolute bottom-[50%] right-0  rounded-full cursor-pointer"
        onClick={onClick}
        style={{ color: "black", fontSize: "1.5em" }}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <GrPrevious
        className="bg-white absolute z-10  bottom-[50%]  rounded-full cursor-pointer "
        onClick={onClick}
        style={{ color: "black", fontSize: "1.5em" }}
      />
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full h-screen">
        <div className="text-center font-poppins text-4xl font-bold">
          ProjectTeam
        </div>
        <div className="max-w-full container mt-24">
        <div className="border-b-4 h-96"><Slider {...settings}>
            {ProjectTeamData.map((item, index) => {
              return <Card item={item} />;
            })}
          </Slider></div>
          
        </div>
      </div>
    </>
  );
};

export default ProjectTeam;
