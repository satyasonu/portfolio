import React, { useEffect, useState } from "react";
import MyImage from "../../assets/myimg.png";
import DarkImage from "../../assets/darkimg.jpg";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import { scrollToElement } from "../../Utils/ScrollToElement";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

const Profile = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  useEffect(() => {
    window.addEventListener("storage", () => {
      setTheme(localStorage.getItem("theme"));
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className="md:mt-40 w-full flex flex-col justify-center mt-10 items-center overflow-hidden">
      <div className="w-8/12  h-[90vh]">
        <div className="flex justify-center mt-0 transform-[translateY(100px)] animate-slideIn ">
          {theme === "light" ? (
            <img
              src={MyImage}
              height={250}
              width={250}
              className="rounded-[100%] drop-shadow-md hover:animate-wiggle"
              alt="MyImage"
            />
          ) : (
            <img
              src={DarkImage}
              height={250}
              width={250}
              className="rounded-[100%] dark:drop-shadow-md drop-shadow-md hover:animate-wiggle"
              alt="DarkImage"
            />
          )}
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className="font-semibold md:text-[30px]  font-sans tracking-[3px] transform-[translateY(100px)] animate-slideUp">
            Satyabrata Sahoo
          </h1>
          <span className="text-slate-500">Front-end React Deveoper</span>
        </div>
        <div className="flex justify-center gap-8 mt-10">
          <div className=" w-[52px] border shadow-inner rounded-[5px] cursor-pointer dark:border-none hover:animate-wiggle">
            <a href="https://www.linkedin.com/in/ssahoo9853/" target="_blank">
              <svg
                className="hover:fill-blue-500 dark:fill-slate-500 dark:hover:fill-slate-50"
                width="50px"
                height="50px"
                fill="#000000"
                viewBox="0 0 256.00 256.00"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z"></path>{" "}
                </g>
              </svg>
            </a>
          </div>
          <div className=" w-[52px] border shadow-inner rounded-[5px] cursor-pointer dark:border-none hover:animate-wiggle">
            <a href="https://github.com/satyasonu" target="_blank">
              <svg
                fill="#000000"
                width="48px"
                height="48px"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
                className="hover:fill-sky-500 dark:fill-slate-500 dark:hover:fill-slate-50"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.36"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15zM15 1c7.738 0 14 6.262 14 14 0 6.33-4.24 11.547-10 13.28V22.5c0-.4-.154-.756-.375-1.063 1.663-.457 3.182-1.175 4.28-2.156C24.206 18.124 25 16.64 25 15c0-1.083-.394-2.074-1-2.97V6.5c.003-.35-.446-.613-.75-.437L18.656 8.53C17.516 8.22 16.296 8 15 8c-1.295 0-2.517.218-3.656.53L6.75 6.064c-.304-.176-.753.087-.75.437v5.53c-.606.896-1 1.887-1 2.97 0 1.64.795 3.123 2.094 4.28 1.1.982 2.62 1.7 4.28 2.158-.22.306-.374.66-.374 1.062v1.688c-1.09.406-1.807.493-2.25.406-.478-.094-.736-.34-1.03-.75-.592-.823-1.173-2.34-3.095-2.836-.654-.175-.875.8-.25.97 1.508.39 1.805 1.448 2.53 2.46.364.505.886.973 1.658 1.125.643.126 1.422.03 2.437-.313v3.03C5.242 26.548 1 21.33 1 15 1 7.262 7.262 1 15 1z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a onClick={() => scrollToElement("skills")} className="uppercase tracking-[2px] border p-2 font-semibold px-8 border-black cursor-pointer  hover:bg-black hover:text-white transition duration-500 ease-in-out dark:border-slate-300 dark:hover:bg-black  dark:hover:transition-transform">Skills</a>
        </div>
      </div>
      <div className="w-8/12  h-full scroll-smooth flex flex-col justify-center items-center">
        
      <div className="h-full  flex justify-center overflow-hidden" id="skills"><Skills /></div>
      <div id="exp" className="mb-32"><Experience /></div>
      </div>
      <div className="cursor-pointer mt-10 fixed bottom-10 right-5">
        <div onClick={scrollToTop} className="h-10 w-10 sm:h-20 sm:w-20 border border-black rounded-full flex justify-center items-center bg-slate-300 mb-4 dark:bg-slate-500"><FaArrowUp className="h-5 w-5 sm:h-10 sm:w-10 dark:text-slate-900 "/></div>
        <div onClick={scrollToBottom} className="h-10 w-10 sm:h-20 sm:w-20 border border-black rounded-full flex justify-center items-center bg-slate-300 dark:bg-slate-500"><FaArrowDown className="h-5 w-5 sm:h-10 sm:w-10 dark:text-slate-900" /></div>
      </div>
    </div>
  );
};

export default Profile;
