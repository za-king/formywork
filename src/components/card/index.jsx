import React from "react";

const Card = (props) => {
  console.log(props.item);
  return (
    <>
      {props.item && (
        // <div className="bg-white dark:bg-slate-800 dark:text-white dark:border-white border border-2 border-black w-72 h-72 mx-auto rounded-tl-2xl rounded-br-2xl cursor-pointer">
        //   <img
        //     src={props.item.image}
        //     alt="scr"
        //     className="max-h-[120px] min-w-full p-1  rounded-tl-2xl rounded-br-2xl"
        //   />
        //   <p className="mt-4 text-base font-bold font-poppins pl-2">
        //     {props.item.title}
        //   </p>
        //   <div className="pl-2">icon</div>
        //   <div className="px-2 mt-12">
        //   <button className="bg-[#E01111] text-white w-full h-8  rounded-tl-2xl rounded-br-2xl hover:bg-[#AA0B0B]">Read More</button>
        //   </div>
          
        // </div>

        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="asa">
        <img class="rounded-t-lg" src={props.item.image} alt=""  className=""/>
    </a>
    <div class="p-5">
        <a href="asa">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="asa" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

      )}
    </>
  );
};

export default Card;
