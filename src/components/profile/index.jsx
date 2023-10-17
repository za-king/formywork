import React from "react";
import profileImage from "../../images/profile-image.png";
const ProfileComponent = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:text-white w-full h-screen">
      <div>
        <div className="text-center">
          <div>Profile</div> <div>IM Frontend Developer</div>
        </div>
        <div className="grid grid-cols-3 items-center justify-items-center">
          <div>
            <div>About Me</div>
            <div>
              Im an allround Web developer. I am a junior programmer with good
              knowledge of a front-end techniques
            </div>
          </div>
          <div>
            <img src={profileImage} alt="profile" width={300} />
          </div>
          <div>
            <div>Details</div>
            <div>
              <div>
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
