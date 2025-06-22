import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import Mobpro from "../comp/Mobpro";

export default function PRH(){
  return(
    <>
        <div className="hidden sm:block">

          <ProjectItem glink="https://github.com/Sharad-Banga/ecoChain-lp" link="https://eco-chain-lp.vercel.app/" imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 
        
            <ProjectItem glink="https://github.com/Sharad-Banga/ASTRA" link="https://astra-3.vercel.app/" imageUrl="/images/astra.png" Title="Solana Wallet Adapter" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 
            
            <ProjectItem glink="https://github.com/Sharad-Banga/mirelle" link="https://mirelle-fashion.vercel.app/" imageUrl="/images/mirelle.png" Title="MIRELLE Clothing" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 
        </div>


        

       <div className="sm:hidden">


         <Mobpro glink="https://github.com/Sharad-Banga/ecoChain-lp" link="https://eco-chain-lp.vercel.app/" imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission."  />

        <Mobpro glink="https://github.com/Sharad-Banga/ASTRA" link="https://astra-3.vercel.app/" imageUrl="/images/astra.png" Title="Solana Wallet Adapter" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission."  />

        <Mobpro glink="https://github.com/Sharad-Banga/mirelle" link="https://mirelle-fashion.vercel.app/" imageUrl="/images/mirelle.png" Title="MIRELLE Clothing" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." />


       </div>





        <div   className="w-[98%] h-[50px] flex justify-center items-center bg-black/5 dark:bg-white/5  rounded-sm border dark:border-white/20 border-black/20 dark:hover:bg-white/10 hover:bg-black/10 mb-4 font-semibold dark:text-white">

          <Link to="/projects" className="h-full w-full flex justify-center items-center">
            See more Projects
          </Link>

        </div>
    </>
  )
}