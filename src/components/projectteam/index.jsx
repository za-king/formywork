import React from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card";
import { useGetProject } from "../../hooks/useGetProject";
import { ProjectTeamData } from "../../database";

const ProjectTeam = () => {
  const navigate = useNavigate();
  const { projectTeamList } = useGetProject();

  const handleClick = (id) => {
    navigate(`projectdetail/${id}`);
  };

  console.log(projectTeamList);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full h-full py-12">
        <div className="text-center font-poppins text-4xl font-bold">
          ProjectTeam
        </div>
        <div className="max-w-full container mt-12">
          <div className="grid grid-cols-3">
            {projectTeamList?.map((item, index) => {
              return <Card item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTeam;
