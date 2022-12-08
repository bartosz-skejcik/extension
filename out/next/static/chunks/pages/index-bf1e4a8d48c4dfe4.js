(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1595)}])},1595:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return ea}});var a=s(1799),n=s(9396),r=s(5893),l=s(1355),c=s(7294);function i(e){var t=e.placeholder,s=e.searchState,a=e.searchEngine,n=(0,c.useState)(""),i=n[0],o=n[1],u=function(e){o(e.target.value)},d=function(e){e.preventDefault(),window.location.href="".concat(a.value).concat(i)};return(0,r.jsx)(l.u,{show:s,enter:"transition duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition duration-300",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",className:"w-full",children:(0,r.jsxs)("form",{className:"flex flex-row items-center justify-center w-full backdrop-blur-md bg-gray-800/40 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl mb-8",children:[(0,r.jsx)("img",{src:"https://static-00.iconduck.com/assets.00/google-marketing-platform-icon-256x256-kwk0alas.png",className:"mx-4 my-2 h-8 w-8",id:"search-icon",alt:"Google Search Icon"}),(0,r.jsx)("input",{type:"text",ref:function(e){return e&&e.focus()},placeholder:t,onChange:function(e){return u(e)},onKeyDown:function(e){"Enter"===e.key&&d(e)},className:"pr-6 py-4 w-full text-xl text-white placeholder:text-gray-100 bg-transparent focus:outline-none "})]})})}var o,u,d,x=s(7568),m=s(655),p=s(2987),f=s(8750),h=(o=(0,x.Z)(function(e,t,s,a,n){var r,l;return(0,m.__generator)(this,function(r){switch(r.label){case 0:return[4,fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(n,"&q=").concat(e.toString(),",").concat(t.toString(),"&language=pl-PL"),{method:"GET",headers:{Accept:"*/*","Accept-Encoding":"gzip","Accept-Language":"en-US"}})];case 1:return[4,r.sent().json()];case 2:return s((l=r.sent())[0].Key),a(l[0]),[2]}})}),function(e,t,s,a,n){return o.apply(this,arguments)}),g=(u=(0,x.Z)(function(e,t,s){var a,n;return(0,m.__generator)(this,function(a){switch(a.label){case 0:return[4,fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat(s,"&details=true"),{method:"GET",headers:{Accept:"*/*","Accept-Encoding":"gzip","Accept-Language":"en-US"}})];case 1:return[4,a.sent().json()];case 2:return t(a.sent()),[2]}})}),function(e,t,s){return u.apply(this,arguments)}),y=(d=(0,x.Z)(function(e,t,s){var a,n;return(0,m.__generator)(this,function(a){switch(a.label){case 0:return[4,fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(s,"&details=true&metric=true"),{method:"GET",headers:{Accept:"*/*","Accept-Encoding":"gzip","Accept-Language":"en-US"}})];case 1:return[4,a.sent().json()];case 2:return t(a.sent()),[2]}})}),function(e,t,s){return d.apply(this,arguments)}),j={getLocationKey:h,sendRequest:g,getForecast:y,convertDateToDayName:function(e){var t=new Date(e).getDay();switch(t){case 0:return"Niedz";case 1:return"Pon";case 2:return"Wt";case 3:return"Śro";case 4:return"Czw";case 5:return"Pią";case 6:return"Sob"}}},v=function(e){var t,s,a,n,i,o,u,d,h,g,y,v=e.weather,w="v07xGuWKiWUnzSG3BWFRqzG6SUF0vmMc",b=(0,c.useState)(),N=b[0],S=b[1],k=(0,c.useState)(),_=k[0],F=k[1],O=(0,c.useState)([]),T=O[0],C=O[1],I=(0,c.useState)([]),E=I[0],V=I[1];return(0,c.useEffect)(function(){var e;navigator.geolocation.getCurrentPosition((e=(0,x.Z)(function(e){return(0,m.__generator)(this,function(t){return j.getLocationKey(e.coords.latitude,e.coords.longitude,S,F,w),[2]})}),function(t){return e.apply(this,arguments)})),N&&(j.getForecast(N,V,w),j.sendRequest(N,C,w))},[N,v]),T.length>0&&E.DailyForecasts.length>0?(0,r.jsx)(l.u,{show:v,enter:"transition duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition duration-300",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",className:"w-full",children:(0,r.jsxs)("section",{className:"w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 py-4 rounded-3xl",children:[(0,r.jsxs)("h1",{className:"font-semibold text-3xl xl:text-4xl",children:[_.LocalizedName.length>11?_.LocalizedName.slice(0,11):_.LocalizedName,",",null===(t=_.Country)||void 0===t?void 0:t.ID]}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-around",children:[(0,r.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(null===(s=T[0].WeatherIcon)||void 0===s?void 0:s.toString().padStart(2,"0"),"-s.png"),alt:"weather icon",className:"w-24"}),(0,r.jsxs)("h2",{className:"text-7xl",children:[Math.round(null===(a=T[0].Temperature)||void 0===a?void 0:null===(n=a.Metric)||void 0===n?void 0:n.Value),"\xb0C"]})]}),(0,r.jsx)("h3",{className:"font-bold text-2xl",children:T[0].WeatherText}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center space-x-5 w-full mt-2",children:[(0,r.jsxs)("h4",{className:"font-semibold text-xl flex items-center justify-center space-x-1.5",children:[(0,r.jsx)(p.Z,{className:"w-5 h-5 text-green-500"}),":",(0,r.jsxs)("span",{children:[Math.round(E.DailyForecasts[0].Temperature.Maximum.Value),"\xb0C"]})]}),(0,r.jsxs)("h5",{className:"font-semibold text-xl flex items-center justify-center space-x-1.5",children:[(0,r.jsx)(f.Z,{className:"w-5 h-5 text-red-500"}),":",(0,r.jsxs)("span",{children:[Math.round(E.DailyForecasts[0].Temperature.Minimum.Value),"\xb0C"]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-16 mt-2 w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsxs)("h3",{className:"text-md",children:["Real feel:"," ",Math.round(null===(i=T[0].RealFeelTemperature)||void 0===i?void 0:null===(o=i.Metric)||void 0===o?void 0:o.Value),"\xb0C"]}),(0,r.jsxs)("h3",{className:"text-md",children:["Humidity: ",T[0].RelativeHumidity,"%"]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsxs)("h3",{className:"text-md",children:["Wind:"," ",Math.round(null===(u=T[0].Wind)||void 0===u?void 0:null===(d=u.Speed)||void 0===d?void 0:null===(h=d.Metric)||void 0===h?void 0:h.Value)," ","km/h"]}),(0,r.jsxs)("h3",{className:"text-md",children:["Press: ",null===(g=T[0].Pressure)||void 0===g?void 0:null===(y=g.Metric)||void 0===y?void 0:y.Value," hPa"]})]})]}),(0,r.jsx)("section",{className:"flex flex-row items-center justify-center w-full space-x-3 lg:space-x-10 mt-3",children:E.DailyForecasts.map(function(e,t){if(0!==t)return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-1.5",children:[(0,r.jsx)("h3",{className:"text-md",children:j.convertDateToDayName(e.Date)}),(0,r.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(e.Day.Icon.toString().padStart(2,"0"),"-s.png"),alt:"weather icon",className:"w-12"}),(0,r.jsxs)("h3",{className:"text-md",children:[Math.round(e.Temperature.Maximum.Value),"\xb0C"]}),(0,r.jsxs)("h3",{className:"text-md",children:[Math.round(e.Temperature.Minimum.Value),"\xb0C"]})]},t)})})]})}):(0,r.jsx)(r.Fragment,{})},w=function(e){var t=e.clock,s=e.greeting,a=(0,c.useState)(),n=a[0],i=a[1],o=(0,c.useState)(),u=o[0],d=o[1];return(0,c.useEffect)(function(){var e=setInterval(function(){i(new Date().toLocaleTimeString("pl-PL",{hour:"numeric",minute:"numeric",hour12:!1})),d(new Date().toLocaleDateString("pl-PL",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))},1e3);return function(){return clearInterval(e)}},[]),n?(0,r.jsx)(l.u,{show:t,enter:"transition duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition duration-300",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",className:"w-full",children:(0,r.jsxs)("section",{className:"w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 px-6 py-4 rounded-3xl",children:[(0,r.jsx)("h1",{className:"font-semibold text-7xl text-start",children:n}),(0,r.jsx)("h2",{className:"text-2xl",children:u}),(0,r.jsx)("h2",{className:"text-3xl font-semibold pt-4",style:{display:s?"block":"none"},children:["Dzień dobry","Dobry wiecz\xf3r"][17>new Date().getHours()?0:1]})]})}):(0,r.jsx)("div",{})},b=s(4033),N=function(e){var t=e.icon,s=e.href,a=e.apps,n=e.setApps,l=(0,c.useState)(!1),i=l[0],o=l[1],u=function(){o(!0)},d=function(){o(!1)};return(0,r.jsxs)("div",{className:"relative",onMouseOver:u,onMouseOut:d,children:[(0,r.jsx)("a",{href:s,className:"flex p-2 mx-2 items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 hover:rotate-12 transition duration-500",children:(0,r.jsx)("img",{alt:"icon",src:t,className:"block max-w-8 max-h-8 w-full h-full aspect-square"})}),(0,r.jsx)("button",{className:"".concat(i?"block":"invisible"," absolute -top-2 -right-1"),onClick:function(){n(a.filter(function(e){return e.href!==s}))},children:(0,r.jsx)(b.Z,{className:"w-5 h-5 rounded-full text-black bg-red-500 transition duration-500"})})]})},S=s(2237),k=s(8680),_=s(5548),F=s(97),O=s(6941),T=s(5503),C=s(6257),I=s(1153),E=(0,T.ZF)({apiKey:"AIzaSyBw-VqQ5J7hzGg5UVlLYDSdQW94N6Khf9s",authDomain:"future-tab.firebaseapp.com",projectId:"future-tab",storageBucket:"future-tab.appspot.com",messagingSenderId:"915335926178",appId:"1:915335926178:web:9b6f97f7354a7d05f922fb",measurementId:"G-VKDPV69RV6"}),V=(0,C.ad)(E),J=(0,I.cF)(),D=function(e){var t=e.setOpen,s=e.setNewAppOpen,a=e.apps,n=e.setApps,l=e.storage,i=e.selected,o=e.setLoginModalOpen,u=e.setUserModalOpen,d=e.user;(0,c.useEffect)(function(){l&&l.setItem("appSettings",JSON.stringify(a))},[a,l]);var x=(0,c.useState)(""),m=x[0],p=x[1];return(0,c.useEffect)(function(){if(d.email){var e=(0,I.iH)(J,"profilePictures/".concat(d.email.replace(".","_").replace("@","_"),".jpg"));(0,I.Jt)(e).then(function(e){var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(e){t.response},t.open("GET",e),t.send(),p(e),console.log(e)}).catch(function(e){})}},[d]),(0,r.jsxs)("section",{className:"flex h-full items-center justify-between flex-col bg-gray-900 py-6 space-y-6",style:{width:i.value+"%"},children:[(0,r.jsx)("section",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)("button",{onClick:function(){window.open("#","_self")},className:"flex items-center justify-center",children:(0,r.jsx)(S.Z,{className:"p-1 w-8/12 h-8/12 rounded-xl hover:text-blue-600 hover:bg-gray-800/70 transition duration-500 text-gray-500"})})}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-start w-full h-full space-y-4",children:[(0,r.jsx)(O.ReactSortable,{className:"flex flex-col items-center justify-start space-y-4",list:a,setList:n,animation:600,swapThreshold:1,easing:"cubic-bezier(0, -0.6, 0, 1.6)",dragClass:"contents",ghostClass:"block",chosenClass:"block",children:a.map(function(e){return(0,r.jsx)(N,{href:e.href,icon:e.icon,apps:a,setApps:n},e.id)})}),(0,r.jsx)("button",{onClick:function(){return s(!0)},className:"flex items-center justify-center",children:(0,r.jsx)(k.Z,{className:"m-2 mx-4 rounded-lg w-11/12 h-11/12 hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500"})})]}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center space-y-4",children:[(0,r.jsx)("button",{onClick:function(){return t(!0)},className:"flex items-center justify-center",children:(0,r.jsx)(_.Z,{className:"w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500"})}),(0,r.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("user")||"{}");l&&e.email?u(!0):o(!0)},className:"flex items-center justify-center",children:m?(0,r.jsx)("img",{src:m,className:"w-10 h-10 rounded-full hover:scale-95 transition duration-500"}):(0,r.jsx)(F.Z,{className:"w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-95 transition duration-500 text-gray-500"})})]})]})},L=s(2299);function z(e){var t=e.value,s=e.setValue,a=e.placeholder,n=e.storage;return(0,r.jsx)("input",{type:"text",className:"px-3 py-1 backdrop-blur-md bg-gray-600/40 text-gray-300 w-full rounded-xl",onChange:function(e){s(e.target.value),n&&n.setItem("wallpaper",JSON.stringify(e.target.value))},value:t,placeholder:a})}var M=s(9949),U=s(7349),Z=function(e){var t=e.selected,s=e.setSelected,a=e.storage,n=e.options,i=e.label;return(0,r.jsx)("div",{className:"z-40",children:(0,r.jsx)(M.R,{value:t,onChange:function(e){s(e),a&&a.setItem(i,JSON.stringify(e))},children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(M.R.Button,{className:"cursor-default rounded-lg backdrop-blur-sm bg-gray-200/10 py-1 pl-3 pr-9 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",children:[(0,r.jsx)("span",{className:"block truncate text-gray-400",children:t.name}),(0,r.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,r.jsx)(U.Z,{className:"h-4 w-4 text-gray-400","aria-hidden":"true"})})]}),(0,r.jsx)(l.u,{as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(M.R.Options,{className:"absolute border-gray-200/20 border mt-1 max-h-60 overflow-auto rounded-md backdrop-blur-md bg-gray-600/30 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ".concat("searchEngine"==i?"-ml-3":""),children:n.map(function(e,t){return(0,r.jsx)(M.R.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none font-semibold text-md rounded-md mx-1 ".concat(t?"backdrop-blur-md bg-gray-600/10 text-gray-200":"text-gray-300")},value:e,children:function(t){var s=t.selected;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"block font-normal truncate px-4 rounded-md ".concat(s?"bg-blue-500 text-gray-300":"font-normal"),children:e.name})})}},t)})})})]})})})},P=s(3933);function A(e){var t=e.enabled,s=e.runFunction;return(0,r.jsxs)(P.r,{checked:t,onChange:s,className:"".concat(t?"bg-blue-600":"bg-gray-400"," inline-flex h-6 w-11 items-center rounded-full z-20"),children:[(0,r.jsx)("span",{className:"sr-only",children:"Enable option"}),(0,r.jsx)("span",{className:"".concat(t?"translate-x-6":"translate-x-1"," h-4 w-4 transform rounded-full bg-white transition")})]})}function G(e){var t=e.open,s=e.setOpen,a=e.clock,n=e.setClock,i=e.search,o=e.setSearch,u=e.weather,d=e.setWeather,x=e.news,m=e.setNews,p=e.greeting,f=e.setGreeting,h=e.storage,g=e.selected,y=e.setSelected,j=e.searchEngine,v=e.setSearchEngine,w=e.bgUrl,b=e.setBgUrl,N=function(){s(!1)};return(0,r.jsx)(l.u,{appear:!0,show:t,as:c.Fragment,children:(0,r.jsxs)(L.V,{as:"div",className:"relative z-10",onClose:N,children:[(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(L.V.Panel,{className:"w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all",children:[(0,r.jsx)(L.V.Title,{as:"h3",className:"text-2xl font-semibold leading-6 text-gray-200",children:"User settings"}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center my-4",children:[(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pb-4 pt-2",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100",children:"Dock size"}),(0,r.jsx)(Z,{label:"dockSize",storage:h,selected:g,setSelected:y,options:[{name:"Small",value:3},{name:"Medium",value:3.5},{name:"Large",value:4},{name:"Huge",value:4.5},]})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-center border-t-2 pt-4 pb-2 border-gray-500",children:[(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pb-1",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100",children:"Clock"}),(0,r.jsx)(A,{enabled:a,runFunction:function(){n(!a),h&&h.setItem("clockSettings",JSON.stringify(!a))}})]}),(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pt-1",children:[(0,r.jsx)("h3",{className:"text-lg text-gray-100 ml-3",children:"Greeting"}),(0,r.jsx)(A,{enabled:p,runFunction:function(){f(!p),h&&h.setItem("greeting",JSON.stringify(!p))}})]})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-center py-2",children:[(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pb-1",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100",children:"Search"}),(0,r.jsx)(A,{enabled:i,runFunction:function(){o(!i),h&&h.setItem("searchSettings",JSON.stringify(!i))}})]}),(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pt-1",children:[(0,r.jsx)("h3",{className:"text-lg text-gray-100 ml-3",children:"Search Engine"}),(0,r.jsx)(Z,{label:"searchEngine",storage:h,selected:j,setSelected:v,options:[{name:"Google",value:"https://google.com/search?q="},{name:"Bing",value:"https://bing.com/search?q="},{name:"DuckDuckGo",value:"https://duckduckgo.com/?q="},{name:"Qwant",value:"https://qwant.com/?q="},]})]})]}),(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between py-2",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100",children:"News"}),(0,r.jsx)(A,{enabled:x,runFunction:function(){m(!x),h&&h.setItem("newsSettings",JSON.stringify(!x))}})]}),(0,r.jsxs)("div",{className:"w-full flex flex-row items-center justify-between pt-2 pb-4",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100",children:"Weather"}),(0,r.jsx)(A,{enabled:u,runFunction:function(){d(!u),h&&h.setItem("weatherSettings",JSON.stringify(!u))}})]}),(0,r.jsxs)("div",{className:"w-full flex flex-col items-start justify-between border-t-2 pt-4 border-gray-500",children:[(0,r.jsx)("h3",{className:"text-xl text-gray-100 mb-2",children:"Wallpaper"}),(0,r.jsx)(z,{value:w,setValue:b,placeholder:"Wallpaper link",storage:h})]})]})]})})})})]})})}var R=s(9815);function q(e){var t=e.open,s=e.setOpen,a=e.apps,n=e.setApps,i=e.user,o=function(){s(!1)},u=(0,c.useState)(""),d=u[0],x=u[1];return(0,r.jsx)(l.u,{appear:!0,show:t,as:c.Fragment,children:(0,r.jsxs)(L.V,{as:"div",className:"relative z-10",onClose:o,children:[(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(L.V.Panel,{className:"w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all",children:[(0,r.jsx)(L.V.Title,{as:"h3",className:"text-2xl font-semibold leading-6 text-gray-200",children:"Add new App"}),(0,r.jsx)("section",{className:"flex flex-col items-center justify-center space-y-4 mt-4",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,s=e.target,r=new FormData(s),l=r.get("href"),c=r.get("icon")?null===(t=r.get("icon"))||void 0===t?void 0:t.toString():"https://www.google.com/s2/favicons?domain=".concat(l,"&sz=256");l?a.length>=8&&"bartek@paczesny.pl"!=i.email?x("Nie można dodać więcej skr\xf3t\xf3w!"):(n((0,R.Z)(a).concat([{id:a.length+1,href:l.toString(),icon:c},])),x(""),o()):x("Prosze podać adres strony!")},children:[(0,r.jsx)("div",{className:"flex flex-col items-center justify-center space-y-2 mt-4",children:(0,r.jsx)("input",{type:"text",ref:function(e){return e&&e.focus()},name:"href",id:"href",placeholder:"URL",className:"w-full px-4 py-2 text-gray-300 bg-gray-300/10 backdrop-blur-md rounded-md"})}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-center space-y-2 mt-4",children:(0,r.jsx)("input",{type:"text",name:"icon",id:"icon",placeholder:"Icon (optional)",className:"w-full px-4 py-2 text-gray-300 bg-gray-300/10 backdrop-blur-md rounded-md"})}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-center space-y-2 mt-4 text-red-500",children:d}),(0,r.jsx)("div",{className:"flex items-center justify-center mt-4",children:(0,r.jsx)("button",{type:"submit",className:"px-4 py-2 text-gray-300 bg-blue-500/50 backdrop-blur-md rounded-md",children:"Add"})})]})})]})})})})]})})}var W=s(9008),H=s.n(W),K=s(6512),B=s(1452),Q=s(6610);function X(e){var t=e.workspaces,s=e.setOpen;return(0,r.jsxs)("section",{className:"flex flex-col items-start justify-start py-4 px-4 w-full h-full backdrop-blur-md bg-gray-800/40 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl",children:[(0,r.jsx)("h1",{className:"px-4 py-2 text-left text-2xl font-bold text-gray-300",children:"Workspaces"}),(0,r.jsxs)("button",{onClick:function(){return s(!0)},className:"flex flex-row items-center justify-center w-full space-x-2 rounded-xl bg-gray-900/50 mx-2 py-1 font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300",children:[(0,r.jsx)(B.Z,{className:"w-6 h-6 block text-gray-300"}),(0,r.jsx)("span",{className:"text-gray-300",children:"Add workspace"})]}),(0,r.jsx)("div",{className:"mx-auto w-full",children:Object.keys(t).map(function(e,s){return(0,r.jsx)(K.p,{children:function(s){var a=s.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(K.p.Button,{className:"m-2 flex w-full justify-between rounded-lg bg-gray-900/50 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",children:[(0,r.jsxs)("div",{className:"flex flex-row space-x-2 items-center justify-center",children:[(0,r.jsx)("div",{className:"rounded-full flex items-center justify-center bg-gray-400 text-gray-800 w-6 h-6",children:(0,r.jsx)("span",{children:e[0].toUpperCase()})}),(0,r.jsx)("span",{children:e.charAt(0).toUpperCase()+e.slice(1)})]}),(0,r.jsx)(Q.Z,{className:"".concat(a?"":"rotate-180 transform"," h-5 w-5 text-gray-300")})]}),(0,r.jsx)(K.p.Panel,{className:"px-4 pt-3 pb-2 text-sm text-gray-200",children:(0,r.jsx)("ul",{className:"space-y-1",children:t[e].map(function(e,t){return(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"flex items-center space-x-5 px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:scale-[1.01] hover:bg-gray-900/50 transition duration-300",children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("span",{className:"text-gray-400",children:e.link})]},t)})})})]})}},s)})})]})}function Y(e){var t=e.news,s=(0,c.useState)([]),a=s[0],n=s[1];return(0,c.useEffect)(function(){if(!0===t&&a.length<1)try{fetch("https://newsdata.io/api/1/news?apikey=pub_13769e3292267531fdb828270f29e0f038c93&country=pl&language=pl").then(function(e){return e.json()}).then(function(e){n(e.results)})}catch(e){console.log(e)}},[t]),(0,r.jsxs)(l.u,{show:t,enter:"transition duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition duration-300",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",className:"w-full h-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl overflow-y-scroll pt-20",children:[(0,r.jsx)("h1",{className:"font-semibold text-3xl xl:text-4xl mb-10",children:"News"}),(0,r.jsx)("div",{className:"flex flex-wrap w-full h-full items-center justify-center gap-10",children:a.map(function(e,t){return(0,r.jsxs)("div",{className:"w-1/3 flex flex-col items-center justify-around h-[27rem] hover:scale-105 transition duration-300",children:[(0,r.jsx)("img",{src:e.image_url?e.image_url:"/no-image.jpg",alt:e.title,className:"rounded-t-2xl w-full max-h-56 object-cover"}),(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-around space-y-5 h-full border-2 border-b-white/40 border-x-white/40 border-t-transparent rounded-b-3xl",children:[(0,r.jsx)("h1",{className:"text-xl font-semibold text-center mt-2",children:e.title.length>50?e.title.slice(0,50)+"...":e.title}),(0,r.jsx)("p",{className:"text-center",children:e.description&&e.description.length>90?e.description.slice(0,90)+"...":e.description}),(0,r.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("button",{className:"px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800/40 bg-opacity-50 rounded-3xl mb-4 hover:scale-110 hover:bg-gray-800 transition duration-300",children:"Read more"})})]})]},t)})})]})}var $=s(828);function ee(e){var t=e.open,s=e.setOpen,a=e.user,n=e.setUser,i=function(){localStorage.removeItem("user"),localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),n({}),window.location.reload()},o=function(e){var t=e.target.files[0],s=(0,I.iH)(J,"profilePictures/".concat(a.email.replace(".","_").replace("@","_"),".jpg"));(0,I.KV)(s,t).then(function(e){console.log("")}),window.location.reload()},u=(0,$.Z)(c.useState(""),2),d=u[0],x=u[1];return(0,c.useEffect)(function(){if(a.email){var e=(0,I.iH)(J,"profilePictures/".concat(a.email.replace(".","_").replace("@","_"),".jpg"));(0,I.Jt)(e).then(function(e){var t=new XMLHttpRequest;t.responseType="blob",t.onload=function(e){t.response},t.open("GET",e),t.send(),x(e)}).catch(function(e){})}},[a]),(0,r.jsx)(l.u,{appear:!0,show:t,as:c.Fragment,children:(0,r.jsxs)(L.V,{as:"div",className:"relative z-10",onClose:function(){return s(!1)},children:[(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(L.V.Panel,{className:"w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all",children:[(0,r.jsx)(L.V.Title,{as:"h3",className:"text-2xl font-semibold leading-6 text-gray-200",children:"User Details"}),(0,r.jsxs)("section",{className:"flex w-full flex-row items-center justify-center space-x-4",children:[d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:"myImg",children:(0,r.jsx)("img",{src:d,alt:"user profile picture",className:"w-32 h-32 rounded-[2rem] cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300"})}),(0,r.jsx)("input",{onChange:function(e){return o(e)},type:"file",name:"myImg",id:"myImg",className:"hidden"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:"myIcon",children:(0,r.jsx)(F.Z,{className:"w-32 h-32 rounded-full text-gray-200 cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300"})}),(0,r.jsx)("input",{onChange:function(e){return o(e)},type:"file",name:"myIcon",id:"myIcon",className:"hidden"})]}),(0,r.jsxs)("section",{className:"flex flex-1 flex-col items-center justify-center my-4 space-y-4",children:[(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center w-full space-x-3",children:[(0,r.jsx)("p",{className:"w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start",children:a.name}),(0,r.jsx)("p",{className:"w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start",children:a.surname})]}),(0,r.jsx)("p",{className:"w-full py-1 px-3 rounded-xl bg-gray-600/40 text-gray-200 text-start",children:a.email}),(0,r.jsx)("button",{onClick:i,className:"px-3 py-1 mt-4 w-1/3 text-gray-200 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",children:"Logout"})]})]})]})})})})]})})}function et(e){var t,s=e.open,a=e.setOpen,n=e.setUser,i=e.setRegisterOpen,o=(0,$.Z)(c.useState(""),2),u=o[0],d=o[1],p=(0,$.Z)(c.useState(""),2),f=p[0],h=p[1],g=(0,$.Z)(c.useState(""),2),y=g[0],j=g[1],v=(t=(0,x.Z)(function(){var e,t,s;return(0,m.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,(0,C.PL)((0,C.hJ)(V,"users"))];case 1:if(!(t=e.sent().docs.find(function(e){return e.data().email===u})))return j("User does not exist"),[2];if(t.data().password!==f)return j("Incorrect password"),[2];return n(t.data()),a(!1),window.location.reload(),[3,3];case 2:return j(e.sent().message),[3,3];case 3:return[2]}})}),function(){return t.apply(this,arguments)});return(0,r.jsx)(l.u,{appear:!0,show:s,as:c.Fragment,children:(0,r.jsxs)(L.V,{as:"div",className:"relative z-10",onClose:function(){return a(!1)},children:[(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(L.V.Panel,{className:"w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all",children:[(0,r.jsx)(L.V.Title,{as:"h3",className:"text-2xl font-semibold leading-6 text-gray-200",children:"User Login"}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center my-4",children:[(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center w-full space-y-3 my-4",children:[(0,r.jsx)(z,{value:u,setValue:d,placeholder:"Email"}),(0,r.jsx)(z,{value:f,setValue:h,placeholder:"Password"}),(0,r.jsxs)("span",{className:"text-gray-400",children:["Don't have an account? ",(0,r.jsx)("button",{className:"text-blue-500",onClick:function(){i(!0),a(!1)},children:"Register"})]}),y&&(0,r.jsx)("p",{className:"text-red-500",children:y})]}),(0,r.jsx)("button",{onClick:v,className:"px-3 py-1 mt-4 w-1/3 text-gray-200 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",children:"Login"})]})]})})})})]})})}function es(e){var t,s=e.open,a=e.setOpen,n=e.setUser,i=e.setLoginOpen,o=(0,$.Z)(c.useState(""),2),u=o[0],d=o[1],p=(0,$.Z)(c.useState(""),2),f=p[0],h=p[1],g=(0,$.Z)(c.useState(""),2),y=g[0],j=g[1],v=(0,$.Z)(c.useState(""),2),w=v[0],b=v[1],N=(0,$.Z)(c.useState(""),2),S=N[0],k=N[1],_=(t=(0,x.Z)(function(){var e,t,s;return(0,m.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,(0,C.PL)((0,C.hJ)(V,"users"))];case 1:if(e.sent().docs.find(function(e){return e.data().email===y}))return k("User already exists"),[2];return[4,(0,C.pl)((0,C.JU)(V,"users",y),{name:u,surname:f,email:y,password:w}).then(function(){n({name:u,surname:f,email:y,password:w}),a(!1)}).catch(function(e){k(e)})];case 2:return e.sent(),[3,4];case 3:return k(e.sent().message),[3,4];case 4:return[2]}})}),function(){return t.apply(this,arguments)});return(0,r.jsx)(l.u,{appear:!0,show:s,as:c.Fragment,children:(0,r.jsxs)(L.V,{as:"div",className:"relative z-10",onClose:function(){return a(!1)},children:[(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(l.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(L.V.Panel,{className:"w-full max-w-md transform overflow-hidden backdrop-blur-md bg-gray-900/90 shadow-[0_0_3px_1px] shadow-gray-300 rounded-3xl p-6 text-left align-middle transition-all",children:[(0,r.jsx)(L.V.Title,{as:"h3",className:"text-2xl font-semibold leading-6 text-gray-200",children:"User Login"}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center my-4",children:[(0,r.jsxs)("section",{className:"flex flex-col items-center justify-center w-full space-y-3 my-4",children:[(0,r.jsxs)("section",{className:"flex flex-row items-center justify-center w-full space-x-3",children:[(0,r.jsx)(z,{placeholder:"Name",value:u,setValue:d}),(0,r.jsx)(z,{placeholder:"Surname",value:f,setValue:h})]}),(0,r.jsx)(z,{value:y,setValue:j,placeholder:"Email"}),(0,r.jsx)(z,{value:w,setValue:b,placeholder:"Password"}),(0,r.jsxs)("span",{className:"text-gray-400",children:["Already have an account? ",(0,r.jsx)("button",{className:"text-blue-500",onClick:function(){i(!0),a(!1)},children:"Login"})]}),S&&(0,r.jsx)("p",{className:"text-red-500",children:S})]}),(0,r.jsx)("button",{onClick:_,className:"px-3 py-1 mt-4 w-1/3 text-gray-200 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",children:"Register"})]})]})})})})]})})}function ea(){var e=(0,c.useState)(),t=e[0],s=e[1],l=(0,c.useState)(),o=l[0],u=l[1],d=(0,c.useState)(),x=d[0],m=d[1],p=(0,c.useState)(),f=p[0],h=p[1],g=(0,c.useState)(),y=g[0],j=g[1],b=(0,c.useState)(),N=b[0],S=b[1],k=(0,c.useState)({}),_=k[0],F=k[1],O=(0,c.useState)(!1),T=O[0],I=O[1],E=(0,c.useState)(!1),J=E[0],L=E[1],z=(0,c.useState)(!1),M=z[0],U=z[1],Z=(0,c.useState)([{id:1,href:"https://google.com",icon:"https://cdn-icons-png.flaticon.com/512/2991/2991148.png"},{id:2,href:"https://messenger.com",icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"},{id:3,href:"https://facebook.com",icon:"https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png"},{id:4,href:"https://instagram.com",icon:"https://cdn-icons-png.flaticon.com/512/174/174855.png"},{id:5,href:"https://discord.com",icon:"https://www.tellmebest.com/wp-content/uploads/2022/03/discord-logo-4-1.png"},]),P=Z[0],A=Z[1],R=(0,c.useState)({name:"Medium",value:3.5}),W=R[0],K=R[1],B=(0,c.useState)({name:"Google",value:"https://google.com/search?q="}),Q=B[0],$=B[1],ea=(0,c.useState)(""),en=ea[0],er=ea[1],el=(0,c.useState)(),ec=el[0],ei=el[1],eo=(0,c.useState)(!1),eu=(eo[0],eo[1]);(0,c.useEffect)(function(){var e=localStorage.getItem("user")||"{}",t=JSON.parse(e);if(t.email&&(console.log("user found"),(0,C.QT)((0,C.JU)(V,"users",t.email)).then(function(e){if(e.exists()){F(e.data());var t=e.data().settings,a=t.weather,n=t.clock,r=t.search,l=t.news,c=t.apps,i=t.dockSize,o=t.searchEngine,d=t.wallpaper,x=t.workspaces,p=t.greeting;a&&m(a),n&&s(n),r&&u(r),l&&h(l),p&&j(p),c&&A(c),o?$(o):$({name:"Google",value:"https://google.com/search?q="}),i?K(i):K({name:"Medium",value:3.5}),d?er(d):er("https://wallpaperaccess.com/full/2180654.jpg"),x&&ei(x)}else console.log("No such document!")})),!JSON.parse(e).settings){console.log("no user settings");var a=localStorage.getItem("weatherSettings"),n=localStorage.getItem("clockSettings"),r=localStorage.getItem("searchSettings"),l=localStorage.getItem("newsSettings"),c=localStorage.getItem("appSettings"),i=localStorage.getItem("dockSize"),o=localStorage.getItem("searchEngine"),d=localStorage.getItem("wallpaper"),x=localStorage.getItem("workspaces"),p=localStorage.getItem("greeting");a&&m(JSON.parse(a)),n&&s(JSON.parse(n)),r&&u(JSON.parse(r)),l&&h(JSON.parse(l)),p&&j(JSON.parse(p)),c&&A(JSON.parse(c)),o?$(JSON.parse(o)):(localStorage.setItem("searchEngine",JSON.stringify({name:"Google",value:"https://google.com/search?q="})),$({name:"Google",value:"https://google.com/search?q="})),i?K(JSON.parse(i)):(localStorage.setItem("dockSize",JSON.stringify({name:"Medium",value:3.5})),K({name:"Medium",value:3.5})),d?er(d):(localStorage.setItem("wallpaper","https://wallpaperaccess.com/full/2180654.jpg"),er("https://wallpaperaccess.com/full/2180654.jpg")),x&&ei(JSON.parse(x))}S(localStorage)},[]),(0,c.useEffect)(function(){_.email&&localStorage.setItem("user",JSON.stringify(_))},[_]),(0,c.useEffect)(function(){var e=JSON.parse(localStorage.getItem("user")||"{}");if(_.email){var s=(0,n.Z)((0,a.Z)({},e),{settings:{weather:x||!1,clock:t||!1,search:o||!1,news:f||!1,greeting:y||!1,apps:P,dockSize:W||!1,searchEngine:Q,wallpaper:en}});F(s),null==N||N.setItem("user",JSON.stringify(s)),(0,C.pl)((0,C.JU)(V,"users",_.email),s)}},[x,t,o,f,P,W,Q,en,y,_.email,]);var ed=(0,c.useState)(!1),ex=ed[0],em=ed[1],ep=(0,c.useState)(!1),ef=ep[0],eh=ep[1];return(0,r.jsxs)("section",{className:"flex flex-row w-screen max-h-screen h-screen overflow-x-hidden overflow-y-hidden",children:[(0,r.jsx)(H(),{children:(0,r.jsxs)("title",{children:["Home"," ⌛",new Date().toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"})]})}),(0,r.jsx)(D,{apps:P,storage:N,setApps:A,setOpen:em,setNewAppOpen:eh,selected:W,setUserModalOpen:I,setLoginModalOpen:L,user:_}),(0,r.jsxs)("section",{className:"flex flex-row items-start justify-center bg-cover w-full h-full",style:{backgroundImage:"url(".concat(en,")")},children:[(0,r.jsx)(G,{open:ex,setOpen:em,clock:t||!1,setClock:s,search:o||!1,setSearch:u,weather:x||!1,setWeather:m,news:f||!1,setNews:h,greeting:y||!1,setGreeting:j,storage:N,selected:W,setSelected:K,searchEngine:Q,setSearchEngine:$,bgUrl:en,setBgUrl:er}),(0,r.jsx)(q,{open:ef,setOpen:eh,apps:P,setApps:A,user:_}),(0,r.jsx)(ee,{open:T,setOpen:I,user:_,setUser:F}),(0,r.jsx)(et,{open:J,setOpen:L,setUser:F,setRegisterOpen:U}),(0,r.jsx)(es,{open:M,setOpen:U,setUser:F,setLoginOpen:L}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-start w-1/4 px-10 py-20 space-y-8 h-full overflow-y-scroll",children:[(0,r.jsx)(w,{clock:t||!1,greeting:y||!1}),(0,r.jsx)(v,{weather:x||!1})]}),(0,r.jsxs)("section",{className:"flex flex-col items-center justify-start px-10 py-20 w-3/4 h-full",children:[(0,r.jsx)(i,{placeholder:"Search the web",searchState:o||!1,searchEngine:Q}),ec&&(0,r.jsx)(X,{setOpen:eu,workspaces:ec}),(0,r.jsx)(Y,{news:f||!1})]})]})]})}}},function(e){e.O(0,[16,444,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);