import ProjectItem from "./ProjectItem";


export default function Projects(){
  return(
    <>
        <div className=" w-full h-[90vh] mt-10">


          <div className="font-semibold  mb-4 sm:text-[18px] text-[16px] w-full dark:text-white text-black " >Projects...</div>

           <ProjectItem imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 
        </div>
    </>
  )
}

