import { SkillsData } from "./skillsData";

const Skills = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full min-h-[700px] max-h-full py-12 ">
        <div className="text-center font-poppins text-4xl font-bold pt-12">
          Skills
        </div>
        <div className="container pt-12  m-auto">
          <div className="grid gap-4 md:grid-cols-4 grid-cols-1 mx-auto justify-items-center">
            {SkillsData.map((item, index) => {
              return (
                <>
                  <div
                    id={index}
                    className=" w-48 h-48 transition ease-in-out delay-150 bg-white shadow-md  rounded-tl-2xl rounded-br-2xl  flex flex-col  justify-center   "
                  >
                    <img
                      src={item.image}
                      alt=""
                      width={120}
                      className="mx-auto"
                    />
                   
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
