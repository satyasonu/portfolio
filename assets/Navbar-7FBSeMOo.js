import{r as i,u,a as f,j as e}from"./index-BrVvIKvP.js";import{a as g,b as v}from"./index-DvUCQjYL.js";import{G as m}from"./iconBase-CyqCv4wF.js";import{s as d}from"./ScrollToElement-DQvGKWR6.js";function h(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M12.01 12c0-3.57 2.2-6.62 5.31-7.87.89-.36.75-1.69-.19-1.9-1.1-.24-2.27-.3-3.48-.14-4.51.6-8.12 4.31-8.59 8.83C4.44 16.93 9.13 22 15.01 22c.73 0 1.43-.08 2.12-.23.95-.21 1.1-1.53.2-1.9A8.46 8.46 0 0 1 12.01 12z"},child:[]}]})(t)}function x(t){return m({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"},child:[]}]})(t)}const w=()=>{const[t,p]=i.useState(!1),[l,r]=i.useState(localStorage.getItem("theme")),s=u(),a=f(),c=()=>{l==="light"?(localStorage.setItem("theme","dark"),r("dark")):(localStorage.setItem("theme","light"),r("light"))},o=()=>{p(!t)};i.useEffect(()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&r("dark")},[]),i.useEffect(()=>{localStorage.getItem("theme")==="dark"?(document.documentElement.classList.add("dark"),r("dark"),window.dispatchEvent(new Event("storage"))):(document.documentElement.classList.remove("dark"),r("light"),window.dispatchEvent(new Event("storage")))},[l]);const n=()=>{a.pathname.includes("profile")?d("exp"):(s("/profile"),setTimeout(()=>{d("exp")},1e3))};return e.jsxs("div",{className:"w-full flex justify-center h-16 dark:bg-[#151226] dark:text-slate-50",children:[e.jsxs("div",{className:" fixed top-0 bg-slate-50 invisible flex justify-between items-center shadow-md w-8/12 rounded-[100px] md:visible dark:bg-[#151226] dark:shadow-gray-700 mt-5 h-16",children:[e.jsx("div",{className:`pl-10 cursor-pointer uppercase tracking-widest text-lg font-bold animate-wiggle first-letter:text-[#f779be] first-letter:text-[30px] ${a.pathname.length===1&&"text-[#BF307F]"}`,onClick:()=>s("/"),children:"Satya"}),e.jsx("div",{className:"flex",children:e.jsxs("ul",{className:"flex justify-between gap-10 pr-10",children:[e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-lg font-bold",onClick:c,children:l==="light"||l===null?e.jsx(h,{size:30}):e.jsx(x,{size:30})}),e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-lg font-bold",onClick:()=>s("/"),children:"Home"}),e.jsx("li",{className:`cursor-pointer hover:text-[#BF307F] text-lg font-bold ${a.pathname.includes("profile")&&"text-[#BF307F]"}`,onClick:()=>s("/profile"),children:"Profile"}),e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-lg font-bold ",onClick:n,children:"Experience"})]})})]}),e.jsx("div",{className:"md:hidden cursor-pointer mt-5 fixed top-0 right-5",onClick:o,children:t?e.jsx(v,{size:30}):e.jsx(g,{size:30})}),e.jsxs("div",{className:t?"md:hidden fixed top-0 left-0 w-[60%] h-full ease-in-out duration-500 border-r backdrop-brightness-50 dark:border-white z-10 text-slate-50":"fixed left-[-100%] ease-in-out duration-500",children:[e.jsxs("div",{className:"flex justify-between mt-3 ",onClick:o,children:[e.jsx("div",{className:"uppercase tracking-widest text-lg font-bold hover:text-[#BF307F] cursor-pointer",onClick:()=>s("/"),children:"Satya"}),e.jsx("div",{className:"cursor-pointer hover:text-[#BF307F]",onClick:c,children:l==="light"||l===null?e.jsx(h,{size:30}):e.jsx(x,{size:30})})]}),e.jsx("div",{className:"",onClick:o,children:e.jsxs("ul",{className:"flex-col mt-5",children:[e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]",onClick:()=>s("/"),children:"Home"}),e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]",onClick:()=>s("/profile"),children:"Profile"}),e.jsx("li",{className:"cursor-pointer hover:text-[#BF307F] text-[30px] border-b hover:bg-[#B8A8A5]",onClick:n,children:"Experience"})]})})]})]})};export{w as default};
