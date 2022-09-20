import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full h-[200px] border-t-2 font-poppins container">
        <div className=" grid grid-cols-3 justify-items-center items-center mt-12 ">
          <div className="grid grid-cols-4">
            <p>Home</p>
            <p>Blog</p>
            <p>Project</p>
            <p>Contac Me</p>
          </div>
          <div>
            <form action="">
              <input type="text" name="email" className="border w-48 h-8 mx-5 rounded-tl-xl rounded-br-xl" />
              <button className="bg-black text-white w-24 h-8 rounded-tl-xl rounded-br-xl">Subscribe</button>
            </form>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <BsInstagram
              style={{ color: "black", fontSize: "1.5em" }}
              size={30}
            />
            <BsLinkedin
              style={{ color: "black", fontSize: "1.5em" }}
              size={30}
            />
            <BsGithub style={{ color: "black", fontSize: "1.5em" }} size={30} />
          </div>
        </div>
        <div className="text-center mt-20"> &copy; Copyright muhammad zaky syukur 2022</div>
      </div>
    </>
  );
};

export default Footer;
