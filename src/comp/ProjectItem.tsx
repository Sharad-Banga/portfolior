interface projectInter{
    imageUrl : string;
    Title : string;
    description : string;
    width : number;
}


export default function ProjectItem({imageUrl , Title , description ,width}:projectInter){
  return(
    <>  

      <div className="w-[96%] h-[150px] flex justify-evenly items-center  bg-black/10 dark:bg-white/15  rounded-sm border-1 border-black/25">
          <div onClick={()=>window.open("https://eco-chain-lp.vercel.app/", "_blank")} style={{backgroundImage:`url(${imageUrl})` , width:`${width}%`}} className="  bg-cover bg-center h-[90%] w-[23%] ml-1 rounded-sm cursor-pointer">

          </div>
          <div style={{ width:`${98-width}%`}} className="pl-4 h-[90%] w-[74%]  rounded-sm">
              <div className=" text-[30px] font-sans text-black/70 font-bold dark:text-white" >
                {Title}
              </div>
              <div className="text-[16px] font-sans text-black/70  dark:text-white/80 w-[90%] mt-2">
                  {description}
              </div>
          </div>
      </div>
    
    </>
  )
}