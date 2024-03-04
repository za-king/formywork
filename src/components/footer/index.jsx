import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full min-h-[200px] max h-full left-0 right-0 bottom-0 border-t-2 font-poppins container ">
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center items-center mt-12 ">
          <div className="grid grid-cols-5">
            <p className="cursor-pointer hover:text-[#E01111]">Home</p>
            <p className="cursor-pointer hover:text-[#E01111]">Profile</p>
            <p className="cursor-pointer hover:text-[#E01111]">Project</p>
            <p className="cursor-pointer hover:text-[#E01111]">Skills</p>
            <p className="cursor-pointer hover:text-[#E01111]">Dashboard</p>
          </div>
          <div>
            <form action="" className="text-center">
              <input
                type="text"
                name="email"
                className="border w-48 h-8 mx-5 rounded-tl-xl rounded-br-xl"
              />
              <button className="bg-black dark:bg-white dark:text-black  text-white w-24 h-8 rounded-tl-xl rounded-br-xl cursor-pointer hover:bg-[#E01111]">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <a href="https://www.instagram.com/mhdzakysyukr/" target="blank">
              {" "}
              <BsInstagram
                style={{ fontSize: "1.5em" }}
                size={30}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/m-zaky-syukur-78560a221/"
              target="blank"
            >
              <BsLinkedin
                style={{ fontSize: "1.5em" }}
                size={30}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer"
              />
            </a>
            <a href="https://github.com/za-king" target="blank">
              {" "}
              <BsGithub
                style={{ fontSize: "1.5em" }}
                size={30}
                onMouseOver={({ target }) => (target.style.color = "red")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="text-center mt-20">
          &copy; Copyright muhammad zaky syukur 2024
        </div>
      </div>
    </>
  );
};

export default Footer;
