import React from "react";
import { useInView } from "react-intersection-observer"
import { Icons } from "../../Utils/Icons";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.5 })
  return (
    <div className="flex-col flex md:mt-32 mt-10  justify-center sm:mb-32 mb-32 h-full sm:mt-16  items-center sm:w-8/12" ref={ref}>
        <div className="animate-marquee text-nowrap text-slate-500 sm:visible md:invisible">Double tap on each icon to check the skill completion percentage</div>
      <div className="mt-2 flex justify-center ">
        <span className="uppercase font-bold md:text-[30px] text-[25px] text-teal-700">~Skill set~</span>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
      {Icons && Icons.map((icon, index) => {
        return (
          <div className="sm:h-32 sm:w-32 h-20 w-20 hover:rounded-full flex justify-center items-center  transition duration-500 ease-in-out hover:border hover:shadow-lg" key={index}>
          <icon.name
            className={`${icon.color} absolute hover:opacity-0 transition duration-500 ease-in-out peer h-20 w-20`}
          />
          <div className="opacity-0 peer-hover:opacity-100 flex flex-col justify-center items-center"><p>{icon.percentage}</p>{icon.title}</div>
        </div>
        )
      }) }
      </div>
    </div>
  );
};

export default Skills;

// <h1 class="conic-gradient conic-gradient-color-1-indigo-500 conic-gradient-color-1-purple-500 ">
