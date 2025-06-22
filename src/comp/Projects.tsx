import Mobpro from "./mobpro";
import ProjectItem from "./ProjectItem";


export default function Projects(){
  return(
    <>
        <div className=" hidden sm:block w-full h-[90vh] mt-10">


          <div className="font-semibold   mb-4 sm:text-[18px] mt-10 text-[16px] w-full dark:text-white text-black " >Projects...</div>

           <ProjectItem glink="https://github.com/Sharad-Banga/ecoChain-lp" link="https://eco-chain-lp.vercel.app/" imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem glink="https://github.com/Sharad-Banga/ASTRA" link="https://astra-3.vercel.app/" imageUrl="/images/astra.png" Title="Solana Wallet Adapter" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem glink="https://github.com/Sharad-Banga/mirelle" link="https://mirelle-fashion.vercel.app/" imageUrl="/images/mirelle.png" Title="MIRELLE Clothing" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem glink="https://github.com/Sharad-Banga/ari" link="https://aristol-weld.vercel.app/" imageUrl="/images/ari.png" Title="Aristol" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem glink="https://github.com/Sharad-Banga/Electron" link="https://electron-wallet.vercel.app/" imageUrl="/images/electron.png" Title="Electron - Wallet Generator" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

          <ProjectItem glink="https://github.com/Sharad-Banga/devHub-fe" link="https://dev-hub-fe.vercel.app/" imageUrl="/images/dev.png" Title="DevHub Landing Page" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." width={30} /> 

        </div>














        <div className=" sm:hidden w-full h-[90vh] mt-10">
            <div className="font-semibold pl-2  mb-4 sm:text-[18px] text-[16px] w-full dark:text-white text-black " >Projects...</div>



            <Mobpro glink="https://github.com/Sharad-Banga/ecoChain-lp" link="https://eco-chain-lp.vercel.app/" imageUrl="/images/eco.png" Title="The Eco Chain" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission."  />

            <Mobpro glink="https://github.com/Sharad-Banga/ASTRA" link="https://astra-3.vercel.app/" imageUrl="/images/astra.png" Title="Solana Wallet Adapter" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." />

            <Mobpro glink="https://github.com/Sharad-Banga/mirelle" link="https://mirelle-fashion.vercel.app/" imageUrl="/images/mirelle.png" Title="MIRELLE Clothing" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." />

            <Mobpro glink="https://github.com/Sharad-Banga/ari" link="https://aristol-weld.vercel.app/" imageUrl="/images/ari.png" Title="Aristol" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." />

            <Mobpro glink="https://github.com/Sharad-Banga/Electron" link="https://electron-wallet.vercel.app/" imageUrl="/images/electron.png" Title="Electron - Wallet Generator" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission." />

            <Mobpro glink="https://github.com/Sharad-Banga/devHub-fe" link="https://dev-hub-fe.vercel.app/" imageUrl="/images/dev.png" Title="DevHub Landing Page" description="The Eco‑Chain landing page features a clean, modern design with eco-themed visuals, highlighting sustainable waste management. It clearly presents the platform’s mission."  />


        </div>
    </>
  )
}

