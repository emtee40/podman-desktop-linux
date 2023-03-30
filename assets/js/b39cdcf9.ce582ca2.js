"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{5318:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var n=o(7378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=a,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return o?n.createElement(k,r(r({ref:t},c),{},{components:o})):n.createElement(k,r({ref:t},c))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2700:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(5773),a=(o(7378),o(5318));const i={title:"5 things to know about Podman Desktop for a Docker user",description:"Important things to know when switching from Docker Desktop to Podman Desktop",slug:"5-things-to-know-for-a-docker-user",authors:["benoitf"],tags:["podman-desktop","docker","migrating"],hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/5-things-to-know-for-a-docker-user",source:"@site/blog/2023-03-24-5-things-to-know-for-a-docker-user.md",title:"5 things to know about Podman Desktop for a Docker user",description:"Important things to know when switching from Docker Desktop to Podman Desktop",date:"2023-03-24T00:00:00.000Z",formattedDate:"March 24, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"docker",permalink:"/blog/tags/docker"},{label:"migrating",permalink:"/blog/tags/migrating"}],readingTime:4.275,hasTruncateMarker:!0,authors:[{name:"Florent Benoit",title:"Maintainer of Podman Desktop",url:"https://github.com/benoitf",imageURL:"https://github.com/benoitf.png",key:"benoitf"}],frontMatter:{title:"5 things to know about Podman Desktop for a Docker user",description:"Important things to know when switching from Docker Desktop to Podman Desktop",slug:"5-things-to-know-for-a-docker-user",authors:["benoitf"],tags:["podman-desktop","docker","migrating"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 0.13",permalink:"/blog/podman-desktop-release-0.13"},nextItem:{title:"Release Notes - Podman Desktop 0.12",permalink:"/blog/podman-desktop-release-0.12"}},l={authorsImageUrls:[void 0]},p=[{value:"Use Podman Desktop to interact with containers running in Docker",id:"use-podman-desktop-to-interact-with-containers-running-in-docker",level:2},{value:"Docker compatibility mode",id:"docker-compatibility-mode",level:2},{value:"Socket file compatibility",id:"socket-file-compatibility",level:3},{value:"CLI compatibility",id:"cli-compatibility",level:3},{value:"Compose",id:"compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Rootless mode",id:"rootless-mode",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The 5 things to know being a Docker user by using Podman Desktop:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Use a single UI"),": Podman Desktop works with several container engines, including Docker."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"compatibility mode"),": How to ensure tools are working with Podman instead of Docker."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compose")," support: How to work with Compose files and Podman."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes")," support: How to use Kubernetes with Podman."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"rootless")," mode or containers without root privileges.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"5-things-to-know-for-a-docker-user-hero",src:o(3440).Z,width:"800",height:"462"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"use-podman-desktop-to-interact-with-containers-running-in-docker"},"Use Podman Desktop to interact with containers running in Docker"),(0,a.kt)("p",null,"Docker Desktop provides a UI to interact with containers and images. But the UI depends on Docker API and it is not possible to use the UI with Docker and Podman at the same time."),(0,a.kt)("p",null,"Podman Desktop is a multi-engine UI tool. The UI is compatible with the API of Docker and Podman. It means all containers and images from all the engines at the same time are visible in the UI."),(0,a.kt)("p",null,"When migrating from Docker to Podman, you can use Podman Desktop to interact with containers running in Docker. Explore all commands and features of Podman Desktop and see all the resources from Docker."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Many container engines at the same time",src:o(86).Z,width:"1253",height:"712"})),(0,a.kt)("h2",{id:"docker-compatibility-mode"},"Docker compatibility mode"),(0,a.kt)("p",null,"Using Podman with Podman Desktop or with the Podman CLI is straightforward. But some tools expect to find ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," CLI or ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.sock")," socket. In this case, you have to use the compatibility mode of Podman."),(0,a.kt)("h3",{id:"socket-file-compatibility"},"Socket file compatibility"),(0,a.kt)("p",null,"The socket compatibility mode is a feature of Podman that allows to bind the Podman socket under the Docker socket path."),(0,a.kt)("p",null,"On Windows the socket compatibility mode is always enabled by default. On macOS, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},".pkg installer")," it is active by default. But when installing with ",(0,a.kt)("inlineCode",{parentName:"p"},"brew"),", it will not be there because it requires some admin permissions. "),(0,a.kt)("p",null,"That is not an issue because you can enable it by ",(0,a.kt)("a",{parentName:"p",href:"https://podman-desktop.io/docs/migrating-from-docker/using-podman-mac-helper"},"invoking a CLI tool")," that will setup the compatibility mode."),(0,a.kt)("p",null,"For example if you use ",(0,a.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"TestContainers"))," in your Java project, you can use the compatibility mode to ensure that the tool will use Podman instead of Docker."),(0,a.kt)("h3",{id:"cli-compatibility"},"CLI compatibility"),(0,a.kt)("p",null,"If you have scripts relying on ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," CLI, you can use the compatibility mode to ensure that the tool is working with Podman instead of Docker."),(0,a.kt)("p",null,"If you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," CLI installed on your computer, you can use the socket file compatibility of docker to ensure that the tool is working with Podman engine instead of Docker."),(0,a.kt)("p",null,"If you do not have the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," CLI installed on your computer, you can ",(0,a.kt)("a",{parentName:"p",href:"https://podman-desktop.io/docs/migrating-from-docker/emulating-docker-cli-with-podman"},"Create a script")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," that will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"podman")," CLI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:"))," creating a shell prompt alias, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"alias docker=podman"),", will not work inside scripts that you call."),(0,a.kt)("h2",{id:"compose"},"Compose"),(0,a.kt)("p",null,"As a user of Docker, you might use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),") to run some of your applications."),(0,a.kt)("p",null,"For now Podman does not include a ",(0,a.kt)("inlineCode",{parentName:"p"},"Compose")," support directly in the CLI with a command ",(0,a.kt)("inlineCode",{parentName:"p"},"podman compose"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Compose")," can work with the Podman socket."),(0,a.kt)("p",null,"Based on the compatibility mode (see ",(0,a.kt)("a",{parentName:"p",href:"#docker-compatibility-mode"},"section about Docker compatibility mode"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enabled: you can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"compose")," binary to run your applications."),(0,a.kt)("li",{parentName:"ul"},"Disabled: you need to ",(0,a.kt)("a",{parentName:"li",href:"https://podman-desktop.io/docs/migrating-from-docker/using-the-docker_host-environment-variable"},"export the environment variable DOCKER_HOST")," before running compose.")),(0,a.kt)("p",null,"You can now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," binary to run your applications and it will use Podman engine."),(0,a.kt)("p",null,"Podman Desktop has a ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," extension that can fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"compose")," binary if not already available on the filesystem."),(0,a.kt)("p",null,"Podman Desktop UI displays the containers created by ",(0,a.kt)("inlineCode",{parentName:"p"},"Compose")," are in the same group."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Compose support in the UI",src:o(226).Z,width:"1253",height:"712"})),(0,a.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"It is possible to start a Kubernetes cluster with Docker."),(0,a.kt)("p",null,"Podman supports directly a subset of Kubernetes resources that you can use with ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," files."),(0,a.kt)("p",null,"For example if you only want to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod")," resource, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Play Kubernetes YAML")," button from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Containers")," list screen with your ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file. No need to install or start a Kubernetes cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Play Kubernetes YAML",src:o(9179).Z,width:"1253",height:"712"})),(0,a.kt)("p",null,"It is possible to do the counter-part. Export the definition of a container or pod to a Kubernetes resource. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate kube")," button from the kebab menu of a given container or pod."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Kubernetes generate",src:o(6467).Z,width:"1253",height:"712"})),(0,a.kt)("p",null,"Podman handles pods and in the Podman Desktop UI, you can see all the pods inside a Pod section. All containers inside the pod are in the same group."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pods in the UI",src:o(6726).Z,width:"1253",height:"712"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Containers from pod",src:o(1958).Z,width:"1253",height:"712"})),(0,a.kt)("p",null,"An experimental ",(0,a.kt)("inlineCode",{parentName:"p"},"kind")," extension is bringing the creation of full-blown Kubernetes cluster with Podman."),(0,a.kt)("h2",{id:"rootless-mode"},"Rootless mode"),(0,a.kt)("p",null,"One of the difference of Docker and Podman is the way they handle containers. Docker requires root privileges to run containers by default. Podman can run containers without root privileges by default."),(0,a.kt)("p",null,"It means that for example, starting a container with a port < 1024 will not work. You need to use a port > 1024."),(0,a.kt)("p",null,"If you still need to create containers with a port < 1024, you can change the Podman machine configuration of the Podman Machine if you are on Windows or macOS."),(0,a.kt)("p",null,"The command is ",(0,a.kt)("inlineCode",{parentName:"p"},"podman machine --rootful")," to enable the execution with root privileges or ",(0,a.kt)("inlineCode",{parentName:"p"},"podman machine --rootful=false")," to switch back to rootless mode."))}m.isMDXComponent=!0},3440:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/5-things-to-know-for-a-docker-user-hero-376f962671072e8cd6909702d92c90b1.png"},226:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/compose-containers-in-ui-0528fa58b39f08da7008c01b27744042.png"},1958:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/containers-from-pod-a149547e10f972aeb503bc0bbcb53f07.png"},6467:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/kube-generate-3e6c658947cad795467c8fdc5db13c10.png"},86:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/multiple-container-engines-aeb03d9e5dab3b2d502066aaa300be41.png"},9179:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/play-kubernetes-yaml-ce2ce5fd9101d6731dfe4eac4414910a.png"},6726:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/pods-in-ui-ecd61f20dce88252ee58cd26303e469b.png"}}]);