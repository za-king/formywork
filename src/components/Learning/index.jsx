import { SkillsData } from "../Skills/skillsData";

const Learning = () => {
  return (
    <>
      <div className="bg-white w-full h-[500px]">
        <div className="text-center font-poppins text-4xl font-bold text-black">Learning</div>
        <div className="container mt-24">
          <div className="grid grid-cols-4 gap-2 justify-items-center">
            {SkillsData.map((item,index) => {
              return <>
              <div id={index} className=" w-48 h-48 hover:shadow-md  font text-white rounded-tl-2xl rounded-br-2xl justify-self-center  ">
              
                <img src={item.image} alt="" width={120}  className="mx-auto"   />
                <p className="text-black text-center font-poppins text-2xl font-medium my-5">{item.title}</p>
              </div>
              </>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Learning