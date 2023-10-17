import React from "react";
import main from "../../images/main-image.png";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white w-full h-screen ">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col justify-center container overflow-hidden ">
            <div className="my-5">
              <p className="font-monserrat text-6xl font-bold">Hi! I Am </p>
              <p className="font-monserrat text-6xl font-bold">
                Muhammad Zaky Syukur
              </p>
            </div>

            {/* <p className="font-monserrat text-2xl font-bold text-[#505050] my-5">
              Web Developer
            </p> */}

            <div className="font-monserrat text-2xl font-bold text-[#505050] my-5">
              
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Front-end Developer",
                    "Back-end Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div>
              <a href="https://mail.google.com/" target="blank">
                <button className="bg-[#E01111] w-28 h-10 font-medium text-white rounded-tl-xl rounded-br-xl font-poppins animate-bounce shadow-xl hover:animate-none">
                  Hire Me
                </button>
              </a>
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
