import React from "react";
import { useParams } from "react-router-dom";

import { ProjectTeamData } from "../../database";

function ProjectDetail() {
  const { id } = useParams();

  const res = ProjectTeamData.find((item) => item.id == id);
  console.log(res);
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container py-12">
        <h1 className="font-poppins text-4xl font-medium">{res.title}</h1>
        <div className="my-8">
          <img src={res.image} alt="" width={800} className="m-auto" />
        </div>
        <p className="font-poppins text-2xl font-medium text-justify">{res.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
