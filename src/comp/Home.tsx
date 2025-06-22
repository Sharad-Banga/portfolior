
import PRH from "./PRH";


export default function Home() {
  return (
    <div className='flex flex-col  justify-start items-start  w-full h-full pt-24 sm:pt-32'>

      <div className='flex sm:flex-row flex-col-reverse justify-start items-start sm:justify-between sm:pl-4  sm:items-center h-[200px] sm:h-[170px]   w-full sm:p-[10px] '>
        <div className="w-full">
          <div className='sm:text-[200%] font-bold text-[120%] w-full sm:w-[180%] flex justify-center sm:justify-start  dark:text-green-300 '>
            SHARAD BANGA
          </div>
          <div className='text-black/70 font-semibold text-[70%] sm:text-[100%] dark:text-white/70 flex justify-center w-full sm:w-[180%] sm:justify-start'>
            Software Engineer
          </div>
          <div className=' flex justify-center sm:justify-start gap-3 sm:gap-2 sm:w-[66%] w-full mt-3 items-center   sm:p-1 rounded-md '>
            <div className='p-1 sm:h-[34px] sm:w-[34px] h-[24px] w-[24px] flex justify-center items-center bg-white text-white rounded-md text-[140%] border border-white/15 hover:scale-110 transition-all ease-in-out'><a href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" className='sm:w-[42px] sm:h-[42px] w-[32px] h-[32px]' y="0px"  viewBox="0 0 50 50">
            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            </a></div>
            
            <div className='p-1 sm:h-[35px] h-[27px] w-[26px] sm:w-[36px] flex justify-center items-center bg-black  text-white rounded-md hover:scale-110 transition-all ease-in-out'><a href="https://github.com/Sharad-Banga" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='am:w-[35px] am:h-[32px] w-[25px] h-[24px]'  viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(4,4)"><path d="M32,10c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM32,14c9.941,0 18,8.059 18,18c0,8.23871 -5.54128,15.16934 -13.0957,17.30664c-0.0928,-0.19124 -0.15645,-0.40072 -0.15039,-0.63867c0.031,-1.209 0,-4.03041 0,-5.06641c0,-1.778 -1.125,-3.03906 -1.125,-3.03906c0,0 8.82422,0.09959 8.82422,-9.31641c0,-3.633 -1.89844,-5.52539 -1.89844,-5.52539c0,0 0.9973,-3.87844 -0.3457,-5.52344c-1.505,-0.163 -4.20056,1.43755 -5.35156,2.18555c0,0 -1.82342,-0.74805 -4.85742,-0.74805c-3.034,0 -4.85742,0.74805 -4.85742,0.74805c-1.151,-0.748 -3.84656,-2.34755 -5.35156,-2.18555c-1.342,1.645 -0.3457,5.52344 -0.3457,5.52344c0,0 -1.89844,1.89044 -1.89844,5.52344c0,9.416 8.82422,9.31836 8.82422,9.31836c0,0 -1.00476,1.14381 -1.10547,2.7832c-0.58969,0.20793 -1.39349,0.45313 -2.16016,0.45313c-1.85,0 -3.25548,-1.79691 -3.77148,-2.62891c-0.508,-0.821 -1.54948,-1.50977 -2.52148,-1.50977c-0.64,0 -0.95312,0.3215 -0.95312,0.6875c0,0.366 0.89823,0.62083 1.49023,1.29883c1.248,1.43 1.22488,4.64648 5.67188,4.64648c0.5258,0 1.47056,-0.1211 2.22461,-0.22461c-0.00417,1.00955 -0.0159,1.97778 0,2.59766c0.00586,0.23869 -0.05897,0.44894 -0.15234,0.64063c-7.55349,-2.1379 -13.09375,-9.0686 -13.09375,-17.30664c0,-9.941 8.059,-18 18,-18z"></path></g></g>
              </svg>
              </a></div>


            <div className='p-1 sm:h-[25px] sm:w-[33px] w-[24px] h-[26px] flex justify-center items-center bg-white text-white rounded-sm hover:scale-110 transition-all ease-in-out'><a href="https://www.linkedin.com/in/sharad-banga-37a83a248/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px " className='sm:w-[42px] sm:h-[41px] w-[32px] h-[33px]'  viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
              
            </a></div>




            <div className='p-1 sm:h-[35px] h-[26px] sm:w-[34px] w-[25px] flex justify-center items-center bg-black text-white rounded-sm hover:scale-110 transition-all ease-in-out'><a href="https://leetcode.com/u/Sharad_Banga/" target="_blank" rel="noopener noreferrer">
            
            <svg  className='sm:w-[27px] sm:h-[26px] w-[17px] h-[16px]' fill='white' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>

              </a></div>
            
          </div>
        </div>
        <div className="sm:h-[90%] sm:w-[16%]  h-[60%] w-full  rounded-full flex justify-center items-center sm:mr-10 hover:scale-110 mt-4 transition-all ease-in-out">
          <img src="/images/dp4.jpg" alt="" className="w-[25%] hover:rotate-1 transition-transform ease-in-out -rotate-1 cursor-pointer sm:w-[105%] h-[100%]  object-cover rounded-lg  sm:rounded-2xl origin-top" />
          
        </div>
        

      </div>

      <div className="flex justify-start pl-4  mt-10 mb-8 items-center dark:text-white">
        <div className="sm:w-[92%] w-[96%]">
          <div className="font-semibold mb-2 sm:text-[18px] text-[16px] w-full">About Me</div>
          <div className="text-[13px] sm:text-[16px] font-light">
            Hey! I'm Sharad Banga, I build websites that not only work great but also look impressive, focusing on UI and user experience.

            I'm comfortable working in <span className="font-semibold">MERN</span> stack and love experimenting with modern technologies. Currently, I’m learning with <span className="font-semibold">Next.js</span>  and building with <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Express</span>, <span className="font-semibold">React.js</span>.

          
          </div>
        </div>
      </div>


      <div className=" flex justify-center items-center pl-4  mt-4 sm:mt-16">
        <div className="text-center   flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4  w-full flex justify-start dark:text-white/90 ">Proof of Work</h3>
          <div className="overflow-hidden w-[290px] sm:w-[700px] h-[80px] sm:h-[150px]"> 
            <img src="https://ghchart.rshah.org/Sharad-Banga" alt="GitHub Streak" className="object-cover object-right w-[270px] sm:w-[600px] sm:h-[150px] h-[80px]"/>
          </div>
        </div>
      </div>

      

        <div className=" w-full mt-6">
          <div className="text-lg font-semibold mb-4 pl-4 sm:pb-0  w-full flex justify-start dark:text-white/90 ">
            Projects...
          </div>
          <PRH />
        </div>
    
    </div >
  );
}