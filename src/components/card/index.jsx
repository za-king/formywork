import React from "react";

const Card = (props) => {
  console.log(props.item);
  return (
    <>
      {props.item && (
        <div className="bg-white dark:bg-slate-800 dark:text-white dark:border-white border border-2 border-black w-72 h-72 mx-auto rounded-tl-2xl rounded-br-2xl cursor-pointer">
          <img
            src={props.item.image}
            alt="scr"
            className="max-h-[120px] min-w-full p-1  rounded-tl-2xl rounded-br-2xl"
          />
          <p className="mt-4 text-base font-bold font-poppins pl-2">
            {props.item.title}
          </p>
          <div className="pl-2">icon</div>
          <div className="px-2 mt-12">
          <button className="bg-[#E01111] text-white w-full h-8  rounded-tl-2xl rounded-br-2xl ">Read More</button>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Card;
