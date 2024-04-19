import React from "react";
import { ExperiencesJson } from "../../Utils/ExperiencesJson";

const Experience = () => {
  return (
    <div className="h-[80vh] w-full sm:mt-28 mt-16 relative">
      <div className="w-[130vh] flex flex-col">
        <div className="flex justify-center items-center">
          <span className="uppercase font-bold md:text-[30px] text-lime-400 text-[25px]">
            ~Experience~
          </span>
        </div>
        <div className="w-full mt-5 sm:mt-0">
          {ExperiencesJson &&
            ExperiencesJson.map((exp, index) => {
              const splitDescription = exp.description.split("\n");

              return (
                <div className="flex md:ml-0 justify-center  sm:flex-row" key={index}>
                  <div className="md:flex md:flex-col md:items-center hidden">
                    <exp.companyLogo className="h-16 w-16 fill-teal-500 mb-4" />
                    <span className="h-2 w-2 border-slate-500 rounded bg-slate-500 opacity-0 md:opacity-100"></span>
                    <span className="h-5/6 border-l-2 border-slate-500"></span>
                    <span className="h-2 w-2 border-slate-500 rounded bg-slate-500 opacity-0 md:opacity-100"></span>
                  </div>

                  <div className="pl-5 flex flex-col justify-center items-center md:items-start">
                    <div className="md:hidden">
                      <exp.companyLogo className="h-10 w-10 fill-teal-500 mb-4" />
                    </div>
                    <p className="uppercase">{exp.companyName}</p>
                    <p className="text-slate-500">{exp.Experience}</p>
                    <p className="text-slate-500">{exp.fromTo}</p>
                    <p className="text-slate-500">{exp.designation}</p>
                    <div className=" text-sm sm:text-lg text-start w-6/12 sm:w-10/12 md:w-full">
                      {splitDescription &&
                        splitDescription.map((des, index) => {
                          return (
                            <span
                              className="text-[18spanx] dark:text-slate-300 min-w-0"
                              key={index}
                            >
                              {des}
                              <br />
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
