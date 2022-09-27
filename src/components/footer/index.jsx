import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full min-h-[200px] max h-full left-0 right-0 bottom-0 border-t-2 font-poppins container ">
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 justify-items-center items-center mt-12 ">
          <div className="grid grid-cols-4">
            <p className="cursor-pointer hover:text-red-500">Home</p>
            <p className="cursor-pointer hover:text-red-500">Blog</p>
            <p className="cursor-pointer hover:text-red-500">Project</p>
            <p className="cursor-pointer hover:text-red-500">Contac Me</p>
          </div>
          <div>
            <form action="">
              <input
                type="text"
                name="email"
                className="border w-48 h-8 mx-5 rounded-tl-xl rounded-br-xl"
              />
              <button className="bg-black dark:bg-white dark:text-black  text-white w-24 h-8 rounded-tl-xl rounded-br-xl cursor-pointer hover:bg-red-500">
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <BsInstagram
              style={{  fontSize: "1.5em" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              className="cursor-pointer"
            />
            <BsLinkedin
              style={{  fontSize: "1.5em" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              className="cursor-pointer"
            />
            <BsGithub
              style={{  fontSize: "1.5em" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="text-center mt-20">
          
          &copy; Copyright muhammad zaky syukur 2022
        </div>
      </div>
    </>
  );
};

export default Footer;
