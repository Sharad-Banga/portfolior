
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './comp/navbar';
import Projects from './comp/Projects';
import Home from './comp/Home';
import Contact from './comp/Contact';


function App() {

  const [isDark , setIsDark] = useState(true);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  

  return (
    <>
      
      <div className={`${isDark?"dark":""}`}>

          <div  className="h-[120vh] w-[100%] flex justify-center  dark:bg-[url('/public/images/gradi2.png')]  bg-[url('/public/images/gradi1.png')] bg-no-repeat bg-cover bg-fixed" >
            <div className="w-[94%] md:w-[50%] h-full ">

              <Navbar darki={isDark} toggleDark={toggleDarkMode} />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>

            </div>
          </div>

      </div>

    </>
  )
}

export default App
