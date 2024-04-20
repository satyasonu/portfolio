import{r as h,j as t}from"./index-DFhW4aYX.js";import{G as l}from"./iconBase-2V4RhX4K.js";import{s as L}from"./ScrollToElement-DQvGKWR6.js";const R="/portfolio/assets/myimg-s1XUFOJU.png",H="/portfolio/assets/darkimg-CRTHLjsG.jpg";var b=new Map,p=new WeakMap,M=0,B=void 0;function E(e){return e?(p.has(e)||(M+=1,p.set(e,M.toString())),p.get(e)):"0"}function A(e){return Object.keys(e).sort().filter(a=>e[a]!==void 0).map(a=>`${a}_${a==="root"?E(e.root):e[a]}`).toString()}function T(e){const a=A(e);let s=b.get(a);if(!s){const r=new Map;let m;const n=new IntersectionObserver(i=>{i.forEach(c=>{var o;const v=c.isIntersecting&&m.some(g=>c.intersectionRatio>=g);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=v),(o=r.get(c.target))==null||o.forEach(g=>{g(v,c)})})},e);m=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:a,observer:n,elements:r},b.set(a,s)}return s}function I(e,a,s={},r=B){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const o=e.getBoundingClientRect();return a(r,{isIntersecting:r,target:e,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:m,observer:n,elements:i}=T(s),c=i.get(e)||[];return i.has(e)||i.set(e,c),c.push(a),n.observe(e),function(){c.splice(c.indexOf(a),1),c.length===0&&(i.delete(e),n.unobserve(e)),i.size===0&&(n.disconnect(),b.delete(m))}}function G({threshold:e,delay:a,trackVisibility:s,rootMargin:r,root:m,triggerOnce:n,skip:i,initialInView:c,fallbackInView:o,onChange:v}={}){var g;const[x,V]=h.useState(null),f=h.useRef(),[z,y]=h.useState({inView:!!c,entry:void 0});f.current=v,h.useEffect(()=>{if(i||!x)return;let u;return u=I(x,(k,j)=>{y({inView:k,entry:j}),f.current&&f.current(k,j),j.isIntersecting&&n&&u&&(u(),u=void 0)},{root:m,rootMargin:r,threshold:e,trackVisibility:s,delay:a},o),()=>{u&&u()}},[Array.isArray(e)?e.toString():e,x,m,r,n,i,s,o,a]);const w=(g=z.entry)==null?void 0:g.target,N=h.useRef();!x&&w&&!n&&!i&&N.current!==w&&(N.current=w,y({inView:!!c,entry:void 0}));const d=[V,z.inView,z.entry];return d.ref=d[0],d.inView=d[1],d.entry=d[2],d}function D(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"},child:[]}]})(e)}function _(e){return l({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(e)}function F(e){return l({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(e)}function J(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(e)}function W(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"},child:[]}]})(e)}function O(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(e)}function P(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},child:[]}]})(e)}function Z(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(e)}function U(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"},child:[]}]})(e)}function K(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(e)}function $(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"},child:[]}]})(e)}function Y(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function q(e){return l({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.5415 12.0352c0-.8754-.69-1.5851-1.541-1.5851-.8513 0-1.5415.7097-1.5415 1.585 0 .8757.6902 1.5854 1.5416 1.5854.851 0 1.541-.7097 1.541-1.5853zm-1.541.837c-.4373 0-.7927-.3755-.7927-.837 0-.4611.3554-.8366.7928-.8366.437 0 .7923.3755.7923.8366 0 .4615-.3554.837-.7923.837zm-9.5842-2.2084l-.9272 2.8733c-.0148.046-.0665.0835-.1152.0835h-.084c-.0484 0-.1064-.0352-.1287-.078l-.95-1.8242-.9496 1.8243c-.0225.0427-.0803.0779-.1289.0779h-.0842c-.0483 0-.1002-.0374-.115-.0835L.006 10.6638c-.0222-.0693.019-.126.0915-.126h.5677c.0483 0 .1002.0379.115.084l.4688 1.452.8047-1.5458c.0223-.0428.0804-.0779.1289-.0779H2.24c.0485 0 .1063.0351.1289.0779l.805 1.5458.4685-1.452c.0148-.0461.0667-.084.1152-.084h.5672c.0727 0 .1138.0567.0915.126zm1.368 2.7367a.1323.1323 0 01-.1321.1322h-.5726a.1321.1321 0 01-.132-.1322v-2.7304c0-.0729.059-.1322.132-.1322h.5726a.1323.1323 0 01.1322.1322v2.7304zm.7409-2.7305v4.3155c0 .0733.059.1322.1321.1322h.5725a.1318.1318 0 00.132-.1322v-1.497c.2426.085.5106.132.7927.132.8024 0 1.4531-.7097 1.4531-1.5853 0-.8754-.6507-1.5851-1.4531-1.5851-.394 0-.751.171-1.0127.4487l-.0002-.0004-.1018-.2777c-.0167-.0453-.07-.0829-.1183-.0829h-.2642a.1321.1321 0 00-.1321.1322zm.8365.9c.1376-.2239.3713-.3714.6373-.3714.4235 0 .7667.3746.7667.8366 0 .4622-.3432.837-.7667.837-.2396 0-.4599-.063-.6373-.1694V11.57zm3.5755 1.9627h-.5723a.1321.1321 0 01-.1321-.1321V10.67c0-.0729.059-.1322.1321-.1322h.2642c.0483 0 .1016.0376.1183.0829l.1018.2777s.3195-.4483.87-.4483c.5507 0 .6172.1897.5712.2947-.0463.1047-.1714.3878-.197.4454-.0254.058-.0903.099-.1772.0657-.087-.0335-.5128-.1723-.8469.2329v1.9118a.1323.1323 0 01-.1321.1321zm4.6893-10.3422a.704.704 0 01.8628-.4977.7043.7043 0 11-.3647 1.3607.7046.7046 0 01-.498-.863zm1.8466 2.7892a.5286.5286 0 01.1935.722.528.528 0 01-.7218.193.5281.5281 0 01-.1935-.7215.5281.5281 0 01.7218-.1935zm.664 10.9686a.5727.5727 0 010-.8099.5722.5722 0 01.8096 0 .5727.5727 0 010 .81.573.573 0 01-.8095 0zm-2.4577-7.377a.2423.2423 0 01-.4196-.2423.2422.2422 0 11.4196.2422zm-.4196 5.1001a.2423.2423 0 01.4196-.2422.2425.2425 0 01-.0888.331.2426.2426 0 01-.3308-.0888zm3.7296-2.6713a.517.517 0 11-.5169-.5169.517.517 0 01.517.5169zM17.816 3.8893a.7485.7485 0 111.2962.749.7485.7485 0 01-1.2962-.749zm-5.43 10.5742a.154.154 0 11.2666.154.154.154 0 01-.2666-.154zm2.8037-8.7912a.4842.4842 0 11.9354.2502.4843.4843 0 01-.593.3428.4844.4844 0 01-.3424-.593zM13.993 7.8486a.308.308 0 110-.6162.308.308 0 110 .6162zm0 1.0129a.1982.1982 0 11.0002.3962.1982.1982 0 01-.0002-.3962zm0-2.84a.4404.4404 0 110-.881.4404.4404 0 010 .881zm-1.6072 3.5154a.154.154 0 11.2102.0564.1537.1537 0 01-.2102-.0564zm1.6072 5.602a.1982.1982 0 11-.0001-.3963.1982.1982 0 010 .3964zm0 1.0127a.3081.3081 0 010 .6165.3081.3081 0 110-.6165zm3.4944-2.1381a.4399.4399 0 01.6014-.161.44.44 0 01.161.6013.4402.4402 0 01-.7624-.4403zm-3.4944 3.9655a.4404.4404 0 11-.0002.8808.4404.4404 0 01.0002-.8808zm9.5772-8.5426c.1383.5164-.168 1.0476-.6848 1.186-.5165.1383-1.0478-.1684-1.1861-.6849-.1386-.5164.1682-1.0475.6847-1.186.5165-.1384 1.0476.168 1.1862.6849zm-6.694 6.0018a.3963.3963 0 01.5602-.5607.396.396 0 010 .5602.3958.3958 0 01-.5602.0005zm.9736-4.4694a.484.484 0 01.3424-.5928.4841.4841 0 11.2507.9353.484.484 0 01-.593-.3425zm1.4076-2.7157a.6165.6165 0 01.6166 1.0676.6165.6165 0 01-.6166-1.0676zm-.3108-.3913a.5722.5722 0 01-.8095 0 .5725.5725 0 010-.8097.5722.5722 0 01.8095 0 .5725.5725 0 010 .8097zm-1.0968 5.1692a.4842.4842 0 01.9355.2509.4842.4842 0 11-.9355-.251zm-3.0186-5.4263a.3303.3303 0 01.4041-.2336.3303.3303 0 01-.1706.6381.3303.3303 0 01-.2335-.4045zm6.4676-.835c.4213-.2434.96-.0992 1.2031.3218a.8806.8806 0 11-1.5254.8808c-.2429-.421-.0987-.9596.3223-1.2027zm-3.049 2.777a.4401.4401 0 11-.7624.4402.4401.4401 0 11.7624-.4402zm1.3227.9608a.6606.6606 0 01.4667-.8089.6605.6605 0 01.342 1.2758.6605.6605 0 01-.8087-.467zm0 2.9854a.6603.6603 0 111.2756.3416.6602.6602 0 11-1.2756-.3416zm.8594-.7354a.7574.7574 0 11-.0002-1.5146.7574.7574 0 01.0002 1.5146zm-.6756-6.5149a.7921.7921 0 010-1.1207c.3095-.3095.8115-.31 1.1209 0a.7926.7926 0 01-1.1209 1.1207zm-3.2223 2.068a.3522.3522 0 11-.61-.3523.3522.3522 0 01.61.3522zm-.6387 5.5862a.2642.2642 0 01.3738-.0004.2646.2646 0 010 .3738.2638.2638 0 01-.3738 0 .2637.2637 0 010-.3734zm0-4.1666a.2642.2642 0 01.3738-.0004.2642.2642 0 11-.3738.0004zm.5146 3.9917a.2868.2868 0 01-.105-.391.2862.2862 0 01.3912-.1046.2863.2863 0 01-.2862.4956zm-.486 2.3203a.352.352 0 01.129-.4811.352.352 0 01.4811.1288.352.352 0 01-.1289.4811.3521.3521 0 01-.4811-.1288zm.877-5.659a.286.286 0 01-.1048.3909.2867.2867 0 01-.3911-.1049.2862.2862 0 01.4958-.286zm-.2485.9334a.3082.3082 0 11.5955-.1596.3082.3082 0 01-.5955.1596zm0 1.3668a.3083.3083 0 11.5953.1602.3083.3083 0 01-.5953-.1602zm.4008-.3467a.3366.3366 0 11.0001-.6731.3366.3366 0 01-.0001.6731zm.4832-3.7744a.3963.3963 0 11-.5602.5608.3963.3963 0 01.5602-.5608zm-7.416 11.4507a.573.573 0 01-.782.2096.5726.5726 0 01.5725-.9916.5725.5725 0 01.2096.782zM14.814 8.945a.2202.2202 0 11-.114.4253.2202.2202 0 01.114-.4254zm-2.5387 11.8366a.6164.6164 0 11-1.1908-.3189.6164.6164 0 011.1908.319zm2.5387-5.726a.2203.2203 0 01-.1138-.4255.22.22 0 11.1138.4254zm-.1604 5.8739a.6603.6603 0 01-.6604.6602.6603.6603 0 01-.6606-.6602c0-.3649.2959-.6608.6606-.6608.3647 0 .6604.296.6604.6608zm-1.4693-5.9217a.1767.1767 0 01-.1247-.2158.1766.1766 0 01.216-.1245.1761.1761 0 01-.0913.3403zm-.0712 1.3712a.2863.2863 0 11-.5526-.1478.2863.2863 0 01.5526.1478zm-2.795-2.2726a.2202.2202 0 01-.3812.2202.2195.2195 0 01.0805-.3005.2198.2198 0 01.3007.0803zm1.6704 1.8817a.2642.2642 0 11-.4578-.2638.2642.2642 0 01.4578.2638zm.0148-1.8253a.1321.1321 0 11-.1869-.1869.1328.1328 0 01.187 0 .1325.1325 0 010 .187zm-.9966.81a.242.242 0 11-.3423.342.2418.2418 0 010-.342.2417.2417 0 01.3423 0zm.0783 2.7563a.3518.3518 0 01-.4811.1289.3522.3522 0 11.4811-.1289zm9.7924.0285a.7926.7926 0 010 1.121c-.3094.3097-.8114.3093-1.121 0-.3097-.3094-.3095-.8114 0-1.121a.793.793 0 011.121 0zm-1.6198-2.0103a.6169.6169 0 01-.2255-.8423.6168.6168 0 01.842-.2255.6165.6165 0 01-.6166 1.0678zm3.2445 1.1612c-.243.4214-.7818.5656-1.203.3223-.4211-.243-.5653-.7816-.3224-1.2026.2437-.4211.782-.5655 1.203-.3224.4213.2433.5657.7816.3224 1.2027zm-7.2666-.2796a.33.33 0 11-.1706-.638.3301.3301 0 01.1706.638zM24 12c0 .584-.4735 1.058-1.058 1.058-.5843 0-1.0578-.474-1.0578-1.058 0-.5842.4735-1.0579 1.0579-1.0579S24 11.4159 24 12.0001zm-.4297 2.564c-.1386.5164-.6697.8233-1.1862.685-.5165-.1387-.8233-.6698-.6847-1.1862.1383-.5169.6696-.8234 1.1861-.685.5169.1386.8231.6697.6848 1.1861zm-6.583 5.881a.7044.7044 0 11-1.3608.3643.7042.7042 0 01.4981-.8625.7043.7043 0 01.8628.4981zm2.1248-1.0825a.748.748 0 01-.274 1.0221.7482.7482 0 01-1.0222-.2738.748.748 0 01.2738-1.0224.7484.7484 0 011.0224.274zm-3.9225-1.0344a.4843.4843 0 11.9355-.2507.4843.4843 0 01-.9355.2507zm2.2835-.3077a.5284.5284 0 11-.5284-.9153.5284.5284 0 01.5284.9153zm-4.761.2798a.3963.3963 0 01-.7655-.205.396.396 0 01.4853-.2803.3964.3964 0 01.2802.4853zm-.8958-8.2762a.132.132 0 11.1868-.1869.132.132 0 01-.1868.1869zm.0754-1.651a.2643.2643 0 01-.2643-.4576.2642.2642 0 01.2643.4576zm-.8072-4.8355a.6164.6164 0 111.1905-.3188.6164.6164 0 01-1.1905.3188zm-.847 6.0555a.22.22 0 11-.2201.3812.2195.2195 0 01-.0806-.3004.22.22 0 01.3006-.0808zm.7691-.908a.2423.2423 0 01-.3423.3426.2423.2423 0 01.3423-.3426zm-.5319-2.0617a.3524.3524 0 01.6102-.352.3522.3522 0 01-.6102.352zm2.8578-3.5523c0-.3648.2959-.6608.6606-.6608.3647 0 .6604.296.6604.6608a.6606.6606 0 01-.6604.6607.6608.6608 0 01-.6606-.6607zm-.1483 5.9215a.1761.1761 0 11.091.3404.1761.1761 0 01-.091-.3404zm-.9575-3.5729a.3964.3964 0 01.2053.7657.3962.3962 0 01-.4854-.2802.3966.3966 0 01.28-.4855zm.5358 1.9992a.2863.2863 0 11.148.553.2863.2863 0 01-.148-.553zM9.0292 4.5596a.5724.5724 0 01.2094-.7818.5725.5725 0 01.5724.9914.572.572 0 01-.7818-.2096zm-.37 10.5048a.2643.2643 0 11-.458.264.2643.2643 0 01.458-.264zM4.9193 9.4585a.462.462 0 01.566-.3267.462.462 0 01.327.5658.4621.4621 0 01-.5661.3271.4624.4624 0 01-.327-.5662zm.9001-2.1691a.4843.4843 0 11.1772.6616.4845.4845 0 01-.1772-.6616zm2.2292 10.6412a.528.528 0 010 .7472.5286.5286 0 01-.7473 0 .5285.5285 0 010-.7472.5282.5282 0 01.7473 0zM6.676 16.2091a.4842.4842 0 11-.8386.4845.4842.4842 0 01.8386-.4845zm.6255-10.1393a.5285.5285 0 010-.7472.5286.5286 0 01.7473 0 .528.528 0 010 .7472.5282.5282 0 01-.7473 0zM9.6679 7.689a.3086.3086 0 01-.436 0 .3085.3085 0 010-.4362.3086.3086 0 01.436 0 .3085.3085 0 010 .4362zm0 8.6225a.3082.3082 0 11-.4359.4359.3082.3082 0 01.4359-.436zM8.2015 8.6719a.2642.2642 0 11.4574.2642.2642.2642 0 01-.4574-.2642z"},child:[]}]})(e)}const C=[{name:J,color:"fill-sky-500",title:"React",percentage:"80%"},{name:F,color:"fill-green-600",title:"NodeJS",percentage:"60%"},{name:Y,color:"fill-sky-300",title:"Tailwind",percentage:"80%"},{name:K,color:"fill-green-600",title:"MongoDB",percentage:"50%"},{name:$,color:"fill-purple-500",title:"Redux",percentage:"80%"},{name:_,color:"fill-sky-800",title:"HTML",percentage:"70%"},{name:D,color:"fill-blue-900",title:"CSS",percentage:"70%"},{name:Z,color:"fill-yellow-400",title:"JavaScript",percentage:"70%"},{name:P,color:"fill-black",title:"GitHub",percentage:"70%"},{name:U,color:"fill-blue-700",title:"Kubernetes",percentage:"30%"},{name:O,color:"fill-sky-700",title:"Docker",percentage:"30%"},{name:W,color:"fill-sky-500",title:"Az DevOps",percentage:"30%"}],X=()=>{const[e,a]=G({threshold:.5});return t.jsxs("div",{className:"flex-col flex md:mt-32 mt-10  justify-center sm:mb-32 mb-32 h-full sm:mt-16  items-center sm:w-8/12",ref:e,children:[t.jsx("div",{className:"animate-marquee text-nowrap text-slate-500 sm:visible md:invisible",children:"Double tap on each icon to check the skill completion percentage"}),t.jsx("div",{className:"mt-2 flex justify-center ",children:t.jsx("span",{className:"uppercase font-bold md:text-[30px] text-[25px] text-teal-700",children:"~Skill set~"})}),t.jsx("div",{className:"flex flex-wrap justify-center gap-10 mt-10 w-11/12 md:w-full",children:C&&C.map((s,r)=>t.jsxs("div",{className:"sm:h-32 sm:w-32 h-20 w-20 hover:rounded-full flex justify-center items-center  transition duration-500 ease-in-out hover:border hover:shadow-lg",children:[t.jsx(s.name,{className:`${s.color} absolute hover:opacity-0 transition duration-500 ease-in-out peer h-20 w-20`}),t.jsxs("div",{className:"opacity-0 peer-hover:opacity-100 flex flex-col justify-center items-center",children:[t.jsx("p",{children:s.percentage}),s.title]})]},r))})]})},S=[{companyLogo:q,imgAlt:"WiproLogo",companyName:"Wipro",designation:"Senior Project Engineer",Experience:"4.5yrs",fromTo:"Oct 2019 - Present",description:`- Proficient in React with a strong focus on state management
- Extensive knowledge of JavaScript for crafting robust and scalable applications
- Adept at creating responsive and visually appealing UI with HTML & CSS, utilizing Grid & Flex layouts
- Experienced in unit testing React components using Jest for code reliability
- Proficient in version control using GitHub, ensuring collaborative and streamlined development
- Proven ability to troubleshoot and design solutions with a hands-on approach
- Dedicated to meeting challenging deadlines with a multitasking and problem-solving mindset
- Committed to fostering an inclusive culture, valuing diverse perspectives
- Capable of developing and unit testing code in a dynamic and fast-paced environment
- Strong ability to work both independently and collaboratively in a team setting
- Experienced with Docker and Kubernetes for application deployment/Orchestration.`}],Q=()=>t.jsx("div",{className:"h-[80vh] w-full sm:mt-28 mt-16 relative",children:t.jsxs("div",{className:"w-[130vh] flex flex-col",children:[t.jsx("div",{className:"flex justify-center items-center",children:t.jsx("span",{className:"uppercase font-bold md:text-[30px] text-lime-400 text-[25px]",children:"~Experience~"})}),t.jsx("div",{className:"w-full mt-5 sm:mt-0",children:S&&S.map((e,a)=>{const s=e.description.split(`
`);return t.jsxs("div",{className:"flex md:ml-0 justify-center  sm:flex-row",children:[t.jsxs("div",{className:"md:flex md:flex-col md:items-center hidden",children:[t.jsx(e.companyLogo,{className:"h-16 w-16 fill-teal-500 mb-4"}),t.jsx("span",{className:"h-2 w-2 border-slate-500 rounded bg-slate-500 opacity-0 md:opacity-100"}),t.jsx("span",{className:"h-5/6 border-l-2 border-slate-500"}),t.jsx("span",{className:"h-2 w-2 border-slate-500 rounded bg-slate-500 opacity-0 md:opacity-100"})]}),t.jsxs("div",{className:"pl-5 flex flex-col justify-center items-center md:items-start",children:[t.jsx("div",{className:"md:hidden",children:t.jsx(e.companyLogo,{className:"h-10 w-10 fill-teal-500 mb-4"})}),t.jsx("p",{className:"uppercase",children:e.companyName}),t.jsx("p",{className:"text-slate-500",children:e.Experience}),t.jsx("p",{className:"text-slate-500",children:e.fromTo}),t.jsx("p",{className:"text-slate-500",children:e.designation}),t.jsx("div",{className:" text-sm sm:text-lg text-start w-6/12 sm:w-10/12 md:w-full",children:s&&s.map((r,m)=>t.jsxs("span",{className:"text-[18spanx] dark:text-slate-300 min-w-0",children:[r,t.jsx("br",{})]},m))})]})]},a)})})]})});function e1(e){return l({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},child:[]}]})(e)}function t1(e){return l({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"},child:[]}]})(e)}const c1=()=>{const[e,a]=h.useState(localStorage.getItem("theme"));h.useEffect(()=>{window.addEventListener("storage",()=>{a(localStorage.getItem("theme"))})},[]);const s=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},r=()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return t.jsxs("div",{className:"md:mt-40 w-full flex flex-col justify-center mt-10 items-center overflow-hidden",children:[t.jsxs("div",{className:"w-8/12  h-[90vh]",children:[t.jsx("div",{className:"flex justify-center mt-0 transform-[translateY(100px)] animate-slideIn ",children:e==="light"?t.jsx("img",{src:R,className:"rounded-[100%] drop-shadow-md hover:animate-wiggle h-52 w-52 sm:h-60 sm:w-60",alt:"MyImage"}):t.jsx("img",{src:H,height:250,width:250,className:"rounded-[100%] dark:drop-shadow-md drop-shadow-md hover:animate-wiggle",alt:"DarkImage"})}),t.jsxs("div",{className:" flex flex-col justify-center items-center",children:[t.jsx("h1",{className:"font-semibold md:text-[30px]  font-sans tracking-[3px] transform-[translateY(100px)] animate-slideUp",children:"Satyabrata Sahoo"}),t.jsx("span",{className:"text-slate-500",children:"Front-end React Deveoper"})]}),t.jsxs("div",{className:"flex justify-center gap-8 mt-10",children:[t.jsx("div",{className:" w-[52px] border shadow-inner rounded-[5px] cursor-pointer dark:border-none hover:animate-wiggle",children:t.jsx("a",{href:"https://www.linkedin.com/in/ssahoo9853/",target:"_blank",children:t.jsxs("svg",{className:"hover:fill-blue-500 dark:fill-slate-500 dark:hover:fill-slate-50",width:"50px",height:"50px",fill:"#000000",viewBox:"0 0 256.00 256.00",id:"Flat",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsxs("g",{id:"SVGRepo_iconCarrier",children:[t.jsx("path",{d:"M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z"})," "]})]})})}),t.jsx("div",{className:" w-[52px] border shadow-inner rounded-[5px] cursor-pointer dark:border-none hover:animate-wiggle",children:t.jsx("a",{href:"https://github.com/satyasonu",target:"_blank",children:t.jsxs("svg",{fill:"#000000",width:"48px",height:"48px",viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",transform:"rotate(0)",className:"hover:fill-sky-500 dark:fill-slate-500 dark:hover:fill-slate-50",children:[t.jsx("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t.jsx("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round",stroke:"#CCCCCC",strokeWidth:"0.36"}),t.jsx("g",{id:"SVGRepo_iconCarrier",children:t.jsx("path",{d:"M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15zM15 1c7.738 0 14 6.262 14 14 0 6.33-4.24 11.547-10 13.28V22.5c0-.4-.154-.756-.375-1.063 1.663-.457 3.182-1.175 4.28-2.156C24.206 18.124 25 16.64 25 15c0-1.083-.394-2.074-1-2.97V6.5c.003-.35-.446-.613-.75-.437L18.656 8.53C17.516 8.22 16.296 8 15 8c-1.295 0-2.517.218-3.656.53L6.75 6.064c-.304-.176-.753.087-.75.437v5.53c-.606.896-1 1.887-1 2.97 0 1.64.795 3.123 2.094 4.28 1.1.982 2.62 1.7 4.28 2.158-.22.306-.374.66-.374 1.062v1.688c-1.09.406-1.807.493-2.25.406-.478-.094-.736-.34-1.03-.75-.592-.823-1.173-2.34-3.095-2.836-.654-.175-.875.8-.25.97 1.508.39 1.805 1.448 2.53 2.46.364.505.886.973 1.658 1.125.643.126 1.422.03 2.437-.313v3.03C5.242 26.548 1 21.33 1 15 1 7.262 7.262 1 15 1z"})})]})})})]}),t.jsx("div",{className:"flex justify-center mt-10",children:t.jsx("a",{onClick:()=>L("skills"),className:"uppercase tracking-[2px] border p-2 font-semibold px-8 border-black cursor-pointer  hover:bg-black hover:text-white transition duration-500 ease-in-out dark:border-slate-300 dark:hover:bg-black  dark:hover:transition-transform",children:"Skills"})})]}),t.jsxs("div",{className:"w-8/12  h-full scroll-smooth flex flex-col justify-center items-center",children:[t.jsx("div",{className:"h-full  flex justify-center overflow-hidden",id:"skills",children:t.jsx(X,{})}),t.jsx("div",{id:"exp",className:"mb-32",children:t.jsx(Q,{})})]}),t.jsxs("div",{className:"cursor-pointer mt-10 fixed bottom-10 right-5",children:[t.jsx("div",{onClick:s,className:"h-10 w-10 sm:h-20 sm:w-20 border border-black rounded-full flex justify-center items-center bg-slate-300 mb-4 dark:bg-slate-500",children:t.jsx(t1,{className:"h-5 w-5 sm:h-10 sm:w-10 dark:text-slate-900 "})}),t.jsx("div",{onClick:r,className:"h-10 w-10 sm:h-20 sm:w-20 border border-black rounded-full flex justify-center items-center bg-slate-300 dark:bg-slate-500",children:t.jsx(e1,{className:"h-5 w-5 sm:h-10 sm:w-10 dark:text-slate-900"})}),t.jsx("div",{className:"flex justify-center items-center",children:t.jsx("span",{className:"text-[10px] text-slate-300",children:window.screen.availWidth+"x"+window.screen.availHeight})})]})]})};export{c1 as default};