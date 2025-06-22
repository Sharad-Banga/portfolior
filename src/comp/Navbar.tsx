import { NavLink } from "react-router-dom";

interface darkinter{
  darki : boolean;
  toggleDark:()=>void;
}



export default function Navbar({darki ,toggleDark}:darkinter){

  return(
    <div className="fixed w-[94%] sm:w-[50%] z-30   dark:border-1 dark:border-white font-semibold">
        <div className={darki?"dark":""}>
        <div className="nav h-[70px] md:h-[90px] w-full dark:text-white text-black flex justify-between items-center  border-b-1 dark:border-white/15 border-red-400  text-[100%] md:text-[110%]">
            
          <div className="flex w-[66%] md:w-[35%] justify-around backdrop-blur-md rounded-2xl p-1">
            <div>
              <NavLink to="/" className={({ isActive }) =>
                                  isActive ? 'text-green-500' : 'hover:opacity-70'
                                  }
              >
                              Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/projects" className={({ isActive }) =>
                                  isActive ?'text-green-500' : 'hover:opacity-70'
                                  }
              >
                              Projects
              </NavLink>
            </div>
            <div>
              <NavLink to="/contact" className={({ isActive }) =>
                                  isActive ? 'text-green-500' : 'hover:opacity-70'
                                  }
              >
                              Contact
              </NavLink>
            </div>
          </div>




          <div>

              <button
          onClick={toggleDark}
          className="px-2 py-1 rounded-4xl  transition-colors backdrop-blur-md"
        >
          {darki ? "🌙" : "☀️"}
        </button>

          </div>

        </div> 
        
      </div>
    
    </div>
  )
}