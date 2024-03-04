import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card";
import { useGetProject } from "../../hooks/useGetProject";

import { MyProjectData } from "../../database";

const MyProject = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`myprojectdetail/${id}`);
  };

  const { projectList } = useGetProject();

  console.log(projectList);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full h-full py-12 ">
        <div className="text-center font-poppins text-4xl font-bold">
          My Project
        </div>
        <div className="max-w-full container mt-12">
          <div className="grid grid-cols-3 gap-4">
            {projectList?.map((item, index) => {
              return <Card item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
