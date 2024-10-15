const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BkzoenEq.js","assets/vendor-DToAP8fI.js","assets/BookCard-X2imDMjH.js","assets/Login-B6mCnrE-.js","assets/Register-CM8_yGpl.js","assets/List-D9E4iiLG.js","assets/Details-9k8xZsPP.js","assets/Order-BlSXIDZi.js","assets/OrderDetail-DkuxiINp.js"])))=>i.map(i=>d[i]);
import{r as y,i as z,g as $,a as T,b as W,G as V,o as q,j as e,c as F,s as H,d as M,e as G,f as I,u as K,h as P,k as v,l as E,m as Y,n as J,p as X,q as Z,w as Q,t as ee,N as b,v as te,R as c,x as se,A as oe,y as re,z as m,L as ne,B as ie,C as ae}from"./vendor-DToAP8fI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))x(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&x(r)}).observe(document,{childList:!0,subtree:!0});function u(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function x(o){if(o.ep)return;o.ep=!0;const n=u(o);fetch(o.href,n)}})();const le="modulepreload",ce=function(d){return"/Bookify/"+d},O={},p=function(s,u,x){let o=Promise.resolve();if(u&&u.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(u.map(t=>{if(t=ce(t),t in O)return;O[t]=!0;const f=t.endsWith(".css"),w=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${w}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":le,f||(h.as="script"),h.crossOrigin="",h.href=t,l&&h.setAttribute("nonce",l),document.head.appendChild(h),f)return new Promise((L,N)=>{h.addEventListener("load",L),h.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${t}`)))})}))}function n(r){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r}return o.then(r=>{for(const l of r||[])l.status==="rejected"&&n(l.reason);return s().catch(n)})},de="/Bookify/assets/Logo-Hb6gwIbO.png",S=y.createContext(null),ue={apiKey:"AIzaSyBANuZRXNFzSNxyMAagWDH2INUpYBcYhHc",authDomain:"bookify-4da1b.firebaseapp.com",projectId:"bookify-4da1b",storageBucket:"bookify-4da1b.appspot.com",messagingSenderId:"1040037251482",appId:"1:1040037251482:web:435d1ef946ec3bdc9ed223"},A=z(ue),k=$(A),j=T(A),C=W(A),he=new V,xe=()=>y.useContext(S),me=({children:d})=>{const[s,u]=y.useState(null);y.useEffect(()=>{const i=q(k,a=>{u(a||null)});return()=>i()},[]);const x=(i,a)=>F(k,i,a),o=(i,a)=>H(k,i,a),n=()=>M(k,he),r=()=>G(k),l=async(i,a,_,R)=>{const B=I(C,`uploads/images/${Date.now()}-${R.name}`),U=await K(B,R);await P(v(j,"books"),{name:i,isbn:a,price:_,imageURL:U.ref.fullPath,userID:s.uid,userEmail:s.email,displayName:s.displayName,photoURL:s.photoURL})},t=()=>E(v(j,"books")),f=async i=>{const a=Y(j,"books",i);return J(a)},w=i=>X(I(C,i)),h=async(i,a)=>{const _=v(j,"books",i,"order");return P(_,{userID:s.uid,userEmail:s.email,displayName:s.displayName,photoURL:s.photoURL,qty:Number(a)})},L=async i=>{const a=Z(v(j,"books"),Q("userID","==",i));return E(a)},N=async i=>{const a=v(j,"books",i,"order");return E(a)},D=!!s;return e.jsx(S.Provider,{value:{signupUserWithEmailAndPassword:x,signinUserWithEmailAndPassword:o,signinWithGoogle:n,handleCreateNewListing:l,listAllBooks:t,getImageURL:w,getBookById:f,placeOrder:h,fetchMyBooks:L,getOrders:N,logout:r,isLoggedIn:D,user:s},children:d})},ge=()=>{const[d,s]=y.useState(!1),{currentUser:u,logout:x}=xe(),o=ee(),n=()=>{s(t=>!t)},r=async()=>{await x(),o("/login")},l=()=>{o("/login")};return e.jsx("div",{children:e.jsxs("nav",{className:"bg-[#202020] fixed w-full h-16 z-10",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between max-w-screen-xl py-4 mx-auto px-7 ",children:[e.jsxs("a",{href:"#",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[e.jsx("img",{src:de,className:"h-8",alt:"Bookify"}),e.jsx("span",{className:"self-center text-2xl font-light text-white font-girassol whitespace-nowrap",children:"Bookify"})]}),e.jsx("div",{className:"flex items-center lg:hidden",children:e.jsx("button",{onClick:n,className:"text-white",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16m-7 6h7"})})})}),e.jsx("div",{className:"items-center justify-between hidden w-full text-lg font-normal lg:flex md:w-auto md:order-1",children:e.jsxs("ul",{className:"flex flex-col p-4 mt-4 md:p-0 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ",children:[e.jsx("li",{children:e.jsx(b,{to:"/",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${t?"text-blue-700":""}`,children:"Home"})}),e.jsx("li",{children:e.jsx(b,{to:"/book/list",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${t?"text-blue-700":""}`,children:"Add Listing"})}),e.jsx("li",{children:e.jsx(b,{to:"/book/orders",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:border-gray-700 ${t?"text-blue-700":""}`,children:"Orders"})}),e.jsx("li",{children:u?e.jsx("button",{onClick:r,className:"text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700",children:"Log Out"}):e.jsx("button",{onClick:l,className:"text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700",children:"Log In"})})]})})]}),e.jsx("div",{className:`${d?"max-h-screen opacity-100":"max-h-0 opacity-0"} lg:hidden overflow-hidden transition-all duration-500 ease-in-out`,children:e.jsxs("ul",{className:"flex flex-col p-4 space-y-2 bg-gray-800",children:[e.jsx("li",{children:e.jsx(b,{to:"/",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 ${t?"text-blue-700":""}`,onClick:()=>s(!1),children:"Home"})}),e.jsx("li",{children:e.jsx(b,{to:"/book/list",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 ${t?"text-blue-700":""}`,onClick:()=>s(!1),children:"Add Listing"})}),e.jsx("li",{children:e.jsx(b,{to:"/book/orders",className:({isActive:t})=>`block py-2 px-3 text-white rounded hover:bg-gray-700 ${t?"text-blue-700":""}`,onClick:()=>s(!1),children:"Orders"})}),e.jsx("li",{children:u?e.jsx("button",{onClick:()=>{r(),s(!1)},className:"px-3 py-2 text-white rounded hover:bg-gray-700",children:"Log Out"}):e.jsx("button",{onClick:()=>{l(),s(!1)},className:"px-3 py-2 text-white rounded hover:bg-gray-700",children:"Log In"})})]})})]})})},pe={initial:{opacity:0,x:"-100vw"},in:{opacity:1,x:0},out:{opacity:0,x:"100vw"}},fe={duration:.5,ease:"easeInOut"},g=({children:d})=>e.jsx(te.div,{initial:"initial",animate:"in",exit:"out",variants:pe,transition:fe,children:d}),be=c.lazy(()=>p(()=>import("./Home-BkzoenEq.js"),__vite__mapDeps([0,1,2]))),je=c.lazy(()=>p(()=>import("./Login-B6mCnrE-.js"),__vite__mapDeps([3,1]))),ye=c.lazy(()=>p(()=>import("./Register-CM8_yGpl.js"),__vite__mapDeps([4,1]))),ve=c.lazy(()=>p(()=>import("./List-D9E4iiLG.js"),__vite__mapDeps([5,1]))),ke=c.lazy(()=>p(()=>import("./Details-9k8xZsPP.js"),__vite__mapDeps([6,1]))),we=c.lazy(()=>p(()=>import("./Order-BlSXIDZi.js"),__vite__mapDeps([7,1,2]))),Le=c.lazy(()=>p(()=>import("./OrderDetail-DkuxiINp.js"),__vite__mapDeps([8,1])));function Ne(){const d=se();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(ge,{}),e.jsx(oe,{mode:"wait",children:e.jsxs(re,{location:d,children:[e.jsx(m,{path:"/",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(be,{})})})}),e.jsx(m,{path:"/login",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(je,{})})})}),e.jsx(m,{path:"/register",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(ye,{})})})}),e.jsx(m,{path:"/book/list",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(ve,{})})})}),e.jsx(m,{path:"/book/view/:bookId",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(ke,{})})})}),e.jsx(m,{path:"/book/orders",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(we,{})})})}),e.jsx(m,{path:"/books/orders/:bookId",element:e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(g,{children:e.jsx(Le,{})})})})]},d.pathname)})]}),e.jsxs("div",{className:"h-screen bg-[#2C2C2C] flex flex-col items-center px-3 justify-center text-center text-white",children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl mb-4",children:"Welcome to Bookify!"}),e.jsx("p",{className:"mb-6 text-lg md:text-xl",children:"A place where you can list books to sell and discover great reads from others. Join our community today!"}),e.jsx("a",{as:ne,to:"/login",className:"px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300",children:"Login"})]})]})}ie(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(ae,{children:e.jsx(me,{children:e.jsx(Ne,{})})})}));export{xe as u};
