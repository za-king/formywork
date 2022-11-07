import { LearningData } from "../Skills/skillsData";

const Learning = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 dark:text-white max-w-full min-h-[700px] max-h-full ">
        <div className="text-center font-poppins text-4xl font-bold pt-12">Learning</div>
        <div className="container mt-24 m-auto">
          <div className="grid gap-4 md:grid-cols-4 grid-cols-1  justify-items-center pb-12">
          {LearningData.map((item, index) => {
              return (
                <>
                  <div
                    id={index}
                    className=" w-48 h-48 transition ease-in-out delay-150 bg-white hover:shadow-md  rounded-tl-2xl rounded-br-2xl  flex flex-col  justify-center   "
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
  )
}

export default Learning