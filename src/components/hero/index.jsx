import React from "react";
import main from "../../images/main-image.png";
const Hero = () => {
  return (
    <>
      <div className="bg-white w-full h-screen ">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col justify-center container ">
            <div className="my-5">
              <p className="font-monserrat text-6xl font-bold">Hi! I Am </p>
              <p className="font-monserrat text-6xl font-bold">
                Muhammad Zaky Syukur
              </p>
            </div>

            <p className="font-monserrat text-2xl font-bold text-[#505050] my-5">
              Junior Web Developer
            </p>
            <div>
              <button className="bg-[#E01111] w-28 h-10 font-medium text-white rounded-tl-xl rounded-br-xl font-poppins animate-bounce shadow-xl">
                Hire Me
              </button>
            </div>
          </div>
          <div>
            <img src={main} alt="main" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
