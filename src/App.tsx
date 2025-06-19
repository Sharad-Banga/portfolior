
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import Contact from './comp/Contact';
import ProjectPage from './comp/ProjectPage';


function App() {

  const [isDark , setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  

  return (
    <>
      
      <div className={`${isDark?"dark":""}`}>

          <div  className="h-[250vh] w-[100%] flex justify-center  dark:bg-black  bg-[url('/images/gradi1.png')] bg-no-repeat bg-cover bg-fixed transition-all duration-500" >
            <div className="w-[100%] md:w-[50%] h-full ">

              <Navbar darki={isDark} toggleDark={toggleDarkMode} />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>

            </div>
          </div>

      </div>

    </>
  )
}

export default App
