import React from "react";
import profileImage from "../../images/profile-image.png";

const ProfileComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white w-full h-screen">
      <div className="container">
        <div className="text-center py-12">
          <div className="text-4xl font-bold">Profile</div>
          <div className=""><p>I AM Web Developer</p> </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1  justify-items-center">
          <div className="text-justify">
            <div className="text-center text-lg font-bold">About Me</div>
            <div className="text-lg pt-4">
            i'm M.Zaky Syukur, 23 years old I'm fresh graduate bachelor of
            Computer, Majoring in Informatics Engineering at Gunadarma
            University, I am a person who has analytical and critical thinking
            skills, likes programming and design. I have the motivation to
            develop insight adn knowledge,especially in IT. I can work
            individualy or in at team. I am motivated, able to collaborate,
            belive in passion, creative and I have the will to learn
            </div>
          </div>
          <div className="">
            <img src={profileImage} alt="profile" width={300} className="" />
          </div>
          <div>
            <div className="text-lg font-bold">Details</div>
            <div className="pt-4 text-lg grid gap-4">
              <div className="">
                <div>Name : </div>
                <div>M. Zaky Syukur</div>
              </div>

              <div>
                <div>Age</div>
                <div>24 years</div>
              </div>

              <div>
                <div>Location</div>
                <div>Depok , Jawa Barat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
