import React from 'react'
import { useParams } from "react-router-dom";

import { MyProjectData } from "../../database";

function MyProjectDetail() {
    const { id } = useParams();
  
    const res = MyProjectData.find((item) => item.id == id);
    console.log(res);
    return (
      <div className="bg-white dark:bg-slate-800 dark:text-white">
        <div className="container py-12 ">
            <div className=''><h1 className="font-poppins text-4xl font-medium">{res.title}</h1>
          <div className="my-8">
            <img src={res.image} alt="" width={800} className="m-auto" />
          </div>
          <p className="font-poppins text-2xl font-medium text-justify">{res.description}</p></div>
          
        </div>
      </div>
    );
  }

export default MyProjectDetail