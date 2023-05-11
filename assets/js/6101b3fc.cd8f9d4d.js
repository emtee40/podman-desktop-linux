"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5248],{544:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7378),n=a(161);const r=function(){function e(){var e;if(!document||!document.documentElement)return;const t=document.documentElement;"dark"===(null==(e=t.dataset)?void 0:e.theme)?(t.classList.add("dark"),setTimeout((()=>{t.classList.add("dark")}),100)):(t.classList.remove("dark"),setTimeout((()=>{t.classList.remove("dark")}),100))}return(0,l.useEffect)((()=>{n.Z.canUseDOM&&e()}),[n.Z.canUseDOM]),(0,l.useEffect)((()=>{if(!n.Z.canUseDOM)return;const t=new MutationObserver((t=>{t.forEach((t=>{"attributes"!=t.type||"data-rh"!==t.attributeName&&"data-theme"!==t.attributeName||e()}))}));return t.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),()=>{t.disconnect()}}),[n.Z.canUseDOM]),l.createElement("div",null)}},3963:(e,t,a)=>{a.r(t),a.d(t,{LinuxDownloads:()=>d,default:()=>u});var l=a(353),n=a(432),r=a(7378),s=a(544),c=a(1884),o=a(2739),i=a(9374),m=a(9928);function d(){const[e,t]=(0,r.useState)({version:"",binary:"",flatpak:""});return(0,r.useEffect)((()=>{(async function(e){const t=await fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest"),a=await t.json(),l=a.assets,n=l.filter((e=>e.name.endsWith(".tar.gz")));if(1!==n.length)throw new Error("Unable to grab .tar.gz");const r=n[0],s=l.filter((e=>e.name.endsWith(".flatpak")));if(1!==s.length)throw new Error("Unable to grab .flatpak");const c=s[0];e({version:a.name,binary:r.browser_download_url,flatpak:c.browser_download_url})})(t).catch((e=>{console.error(e)}))}),[]),r.createElement("div",{className:"basis-1/3 py-2 rounded-lg dark:text-gray-400 text-gray-900  bg-zinc-300/25 dark:bg-zinc-700/25 bg-blend-multiply text-center items-center"},r.createElement(o.G,{size:"4x",icon:m.qJE,className:"my-4"}),r.createElement("h2",{className:"w-full text-center text-4xl title-font font-medium pb-3 border-purple-500 border-b-2"},"Linux"),r.createElement("div",{className:"flex p-1 flex-col md:flex-col items-center align-top"},r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("h3",{className:"mt-0"},"Podman Desktop for Linux"),r.createElement("div",{className:"pt-8"},r.createElement(c.Z,{className:"mt-auto no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-md font-semibold",to:e.flatpak},r.createElement(o.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"Download Now"),r.createElement("caption",{className:"block w-full mt-1 text/50 dark:text-white/50"},"Linux *.flatpak, version ",e.version)),r.createElement("div",{className:"mt-4"},r.createElement("div",null,"Other Linux downloads:"),r.createElement(c.Z,{className:"underline inline-flex dark:text-white text-purple-500 hover:text-purple-200 py-2 px-6 font-semibold text-md",to:e.binary},r.createElement(o.G,{size:"1x",icon:i.q7m,className:"mr-2"}),"AMD64 binary (tar.gz)")),r.createElement("div",{className:"flex flex-col align-middle items-center"},r.createElement("div",{className:"items-center text-center pt-6"},r.createElement("p",{className:"text-lg"},"Using"," ",r.createElement("a",{className:"text-purple-500",href:"https://flathub.org/apps/details/io.podman_desktop.PodmanDesktop"},"FlatHub")," ","? Install in one command:"),r.createElement("div",{className:"flex flex-row pt-3 pb-7"},r.createElement("p",{className:"text-xl p-1 mx-1"},r.createElement("svg",{width:"35px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},r.createElement("path",{d:"M12 2.604l-.43.283L0 10.459v6.752l6.393 4.184L12 17.725l5.607 3.671L24 17.211v-6.752L12 2.604zm0 .828l5.434 3.556-2.717 1.778L12 10.545l-2.717-1.78-2.717-1.777L12 3.432zM6.39 7.104l5.434 3.556-5.408 3.54-5.434-3.557 5.409-3.54zm11.22 0l5.431 3.554-5.434 3.557-5.433-3.555 5.435-3.556zM.925 10.867l5.379 3.52a.123.08 0 00.027.013v5.647l-5.406-3.54v-5.64zm11.213.115l5.408 3.54v5.664l-5.408-3.54v-5.664z"}))),r.createElement("div",{className:"dark:bg-charcoal-800/50 bg-zinc-300/50 p-1 text-xl dark:text-purple-200 text-purple-600 flex flex-row"},r.createElement("div",{className:"w-72 truncate"},r.createElement(o.G,{size:"xs",icon:i.Jw3,className:"mx-2 mt-3"}),"flatpak install flathub io.podman_desktop.PodmanDesktop"),r.createElement("div",null,r.createElement("button",{title:"Copy To Clipboard",className:"mr-2 p-1"}," ",r.createElement(o.G,{size:"xs",icon:i.O4,className:"ml-3  cursor-pointer text-xl  text-white-500",onClick:()=>(async()=>{await navigator.clipboard.writeText("flatpak install --user flathub io.podman_desktop.PodmanDesktop")})()}))))))))))}function u(){const{siteConfig:e}=(0,l.Z)();return r.createElement(n.Z,{title:e.title,description:"Downloads for macOS"},r.createElement(s.Z,null),r.createElement("section",{className:"container mx-auto flex justify-center flex-col"},r.createElement("div",{className:"w-full flex flex-col"},r.createElement("h1",{className:"title-font sm:text-3xl text-2xl lg:text-5xl mb-10 font-medium text-gray-900 dark:text-white"},"Linux Downloads"),r.createElement("main",{className:"h-screen"},r.createElement(d,null)))))}}}]);