import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card";

import { GrNext, GrPrevious } from "react-icons/gr";
import { MyProjectData } from "../../database";

const MyProject = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`myprojectdetail/${id}`);
  };
  
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full h-screen ">
        <div className="text-center font-poppins text-4xl font-bold">
          My Project
        </div>
        <div className="max-w-full container mt-24">
          
              {MyProjectData.map((item, index) => {
                return <Card item={item} />;
              })}
          
        </div>
      </div>
    </>
  );
};

export default MyProject;
