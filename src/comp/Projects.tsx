import ProjectItem from "./ProjectItem";


export default function Projects(){
  return(
    <>
        <div className=" w-full h-[90vh] mt-10">


          <div className="font-semibold ml-2 mb-2 sm:text-[18px] text-[16px] w-full dark:text-white text-black " >Projects...</div>

           <ProjectItem imageUrl="/images/eco.png" Title="The Eco Chain" description="A smart ecosystem for waste management, recycling rewards & upcycled products." width={30} /> 


        </div>
    </>
  )
}