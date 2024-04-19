import React, { useEffect, useState } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import {  useNavigate, useLocation } from "react-router-dom";
import { scrollToElement } from "../../Utils/ScrollToElement";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const navigate = useNavigate()
  const currenturl = useLocation()
  const handleTheme = () => {

    if(theme === 'light'){
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  const hanldeNav = () => {
    setNav(!nav)
  }
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }
  }, [])
  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark'){
      document.documentElement.classList.add('dark')
      setTheme('dark')
      window.dispatchEvent(new Event('storage'))
    } else{
      document.documentElement.classList.remove('dark')
      setTheme('light')
      window.dispatchEvent(new Event('storage'))
    }
  }, [theme])

  const handleExp = () => {
    if(currenturl.pathname.includes('profile')){
      scrollToElement('exp')
    } else {
      navigate('/profile')
      setTimeout(() => {
      scrollToElement('exp')
    }, 1000);
    }
  }
  return (
    <div className="w-full flex justify-center h-16 dark:bg-[#151226] dark:text-slate-50">
      <div className=" fixed top-0 bg-slate-50 invisible flex justify-between items-center shadow-md w-8/12 rounded-[100px] md:visible dark:bg-[#151226] dark:shadow-gray-700 mt-5 h-16">
        <div className={`pl-10 cursor-pointer uppercase tracking-widest text-lg font-bold animate-wiggle first-letter:text-[#f779be] first-letter:text-[30px] ${currenturl.pathname.length === 1 && 'text-[#BF307F]'}`} onClick={() => navigate('/')}>Satya</div>
        <div className="flex">
          <ul className="flex justify-between gap-10 pr-10">
          <li className="cursor-pointer hover:text-[#BF307F] text-lg font-bold" onClick={handleTheme}>
            {theme === "light" || theme === null ?  <MdNightlightRound size={30}/> : <MdOutlineLightMode size={30}/>}
            </li>
            <li className="cursor-pointer hover:text-[#BF307F] text-lg font-bold" onClick={() => navigate('/')}>
              Home
            </li>
            <li className={`cursor-pointer hover:text-[#BF307F] text-lg font-bold ${currenturl.pathname.includes('profile') && 'text-[#BF307F]' }`} onClick={() => navigate('/profile')}>
              Profile
            </li>
            <li className="cursor-pointer hover:text-[#BF307F] text-lg font-bold " onClick={handleExp}>
              Experience
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden cursor-pointer mt-5 fixed top-0 right-5" onClick={hanldeNav}>{!nav ? <IoIosMenu size={30} /> : <IoMdClose size={30} />}</div>
      <div className={nav ? `md:hidden fixed top-0 left-0 w-[60%] h-full ease-in-out duration-500 border-r backdrop-brightness-50 dark:border-white z-10 text-slate-50` : `fixed left-[-100%] ease-in-out duration-500`}>
        <div className="flex justify-between mt-3 " onClick={hanldeNav}>
        <div className="uppercase tracking-widest text-lg font-bold hover:text-[#BF307F] cursor-pointer" onClick={() => navigate('/')}>Satya
        </div>
        <div className="cursor-pointer hover:text-[#BF307F]" onClick={handleTheme}>{theme === "light" || theme === null ? <MdNightlightRound size={30}/> : <MdOutlineLightMode size={30}/>}</div>
        </div>
        <div className="" onClick={hanldeNav}>
          <ul className="flex-col mt-5">
            <li className="cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]" onClick={() => navigate('/')}>
              Home
            </li>
            <li className="cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]" onClick={() => navigate('/profile')}>
            Profile
            </li>
            <li className="cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]" onClick={handleExp}>
              Experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
