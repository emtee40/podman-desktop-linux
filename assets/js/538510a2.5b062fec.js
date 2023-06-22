"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4770],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=m(n),u=a,d=g["".concat(s,".").concat(u)]||g[u]||p[u]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var i=n(5773),a=(n(7378),n(5318));const r={sidebar_position:10,title:"Building an image",description:"Building an image on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},o="Building an image on your container engine",l={unversionedId:"getting-started/building-an-image",id:"getting-started/building-an-image",title:"Building an image",description:"Building an image on your container engine.",source:"@site/docs/getting-started/building-an-image.md",sourceDirName:"getting-started",slug:"/getting-started/building-an-image",permalink:"/docs/getting-started/building-an-image",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/getting-started/building-an-image.md",tags:[{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building an image",description:"Building an image on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Starting a container",permalink:"/docs/getting-started/starting-a-container"},next:{title:"Creating a pod",permalink:"/docs/getting-started/creating-a-pod"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-an-image-on-your-container-engine"},"Building an image on your container engine"),(0,a.kt)("p",null,"With Podman Desktop, you can build an image from a Containerfile on your container engine."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your Containerfile: ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build an image"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Build Image from Containerfile")," screen",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Containerfile path"),": select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," to build."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Image Name"),": enter your image name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"my-image"),". If you want to push the image to a registry, use the fully qualified image name that your registry requires, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"quay.io/my-repository/my-image"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/my-repository/my-image"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io/my-repository/my-image"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Build"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})),": Enter your image name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"quay.io/my-repository/my-image"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/my-repository/my-image"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"docker.io/my-repository/my-image"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the line with your image name."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"History"),".",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,a.kt)("kbd",null,"\u2318")," + ",(0,a.kt)("kbd",null,"F")," on macOS to start searching in the content."))),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Inspect"),".",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,a.kt)("kbd",null,"\u2318")," + ",(0,a.kt)("kbd",null,"F")," on macOS to start searching in the content."))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})),"..",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You see the ",(0,a.kt)("strong",{parentName:"li"},"Create a container")," screen.")))))}p.isMDXComponent=!0}}]);