import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <div className="pt-20 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white mb-4">
              Contact Me
            </h1>
          </div>

          <div className="space-y-8 sm:space-y-12">
            
            <a 
              href="https://x.com/sharad_banga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full group cursor-pointer py-2 px-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black group-hover:bg-gray-800 text-white rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 mx-4 sm:mx-6">
                <div className="border-t border-dotted border-gray-400 dark:border-gray-500 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors duration-300"></div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  Twitter (X)
                </span>
              </div>
            </a>

            <a 
              href="https://github.com/Sharad-Banga" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full group cursor-pointer py-2 px-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 group-hover:bg-black text-white rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" className="w-5 h-5 sm:w-6 sm:h-6">
                    <g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                      <g transform="scale(4,4)">
                        <path d="M32,10c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM32,14c9.941,0 18,8.059 18,18c0,8.23871 -5.54128,15.16934 -13.0957,17.30664c-0.0928,-0.19124 -0.15645,-0.40072 -0.15039,-0.63867c0.031,-1.209 0,-4.03041 0,-5.06641c0,-1.778 -1.125,-3.03906 -1.125,-3.03906c0,0 8.82422,0.09959 8.82422,-9.31641c0,-3.633 -1.89844,-5.52539 -1.89844,-5.52539c0,0 0.9973,-3.87844 -0.3457,-5.52344c-1.505,-0.163 -4.20056,1.43755 -5.35156,2.18555c0,0 -1.82342,-0.74805 -4.85742,-0.74805c-3.034,0 -4.85742,0.74805 -4.85742,0.74805c-1.151,-0.748 -3.84656,-2.34755 -5.35156,-2.18555c-1.342,1.645 -0.3457,5.52344 -0.3457,5.52344c0,0 -1.89844,1.89044 -1.89844,5.52344c0,9.416 8.82422,9.31836 8.82422,9.31836c0,0 -1.00476,1.14381 -1.10547,2.7832c-0.58969,0.20793 -1.39349,0.45313 -2.16016,0.45313c-1.85,0 -3.25548,-1.79691 -3.77148,-2.62891c-0.508,-0.821 -1.54948,-1.50977 -2.52148,-1.50977c-0.64,0 -0.95312,0.3215 -0.95312,0.6875c0,0.366 0.89823,0.62083 1.49023,1.29883c1.248,1.43 1.22488,4.64648 5.67188,4.64648c0.5258,0 1.47056,-0.1211 2.22461,-0.22461c-0.00417,1.00955 -0.0159,1.97778 0,2.59766c0.00586,0.23869 -0.05897,0.44894 -0.15234,0.64063c-7.55349,-2.1379 -13.09375,-9.0686 -13.09375,-17.30664c0,-9.941 8.059,-18 18,-18z"/>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 mx-4 sm:mx-6">
                <div className="border-t border-dotted border-gray-400 dark:border-gray-500 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors duration-300"></div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  Github
                </span>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/sharad-banga-37a83a248/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full group cursor-pointer py-2 px-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 group-hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 mx-4 sm:mx-6">
                <div className="border-t border-dotted border-gray-400 dark:border-gray-500 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors duration-300"></div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  LinkedIn
                </span>
              </div>
            </a>

            <a 
              href="https://leetcode.com/u/Sharad_Banga/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full group cursor-pointer py-2 px-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 group-hover:bg-yellow-600 text-black rounded-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 mx-4 sm:mx-6">
                <div className="border-t border-dotted border-gray-400 dark:border-gray-500 group-hover:border-gray-600 dark:group-hover:border-gray-400 transition-colors duration-300"></div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="text-sm sm:text-base font-semibold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                  Leetcode
                </span>
              </div>
            </a>

          </div>

          <div className="text-center mt-16 sm:mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              Let's build something amazing together
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}