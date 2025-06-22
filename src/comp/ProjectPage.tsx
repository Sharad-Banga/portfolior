import { useEffect } from "react";
import Projects from "./Projects";

export default function ProjectPage(){

  

useEffect(()=>{
  
    window.scrollTo(0,0);
  },[])





  return(
    <div className="mt-20 h-[320vh] sm:h-[150vh]">
      <Projects/>
    </div>
  )
}