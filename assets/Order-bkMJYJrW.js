import{r as i,j as e}from"./vendor-Br8sKS3x.js";import{u as n}from"./index-B0OYo3z_.js";import{B as d}from"./BookCard-BjlRWQMx.js";const m=()=>{const r=n(),[a,c]=i.useState([]),[o,t]=i.useState(!0);return i.useEffect(()=>{var s;if(!r.isLoggedIn){t(!1);return}(s=r.fetchMyBooks(r.user.uid))==null||s.then(l=>{c(l.docs),t(!1)}).catch(l=>{console.error("Error fetching books:",l),t(!1)})},[r]),r.isLoggedIn?o?e.jsx("div",{className:"bg-[#2C2C2C] flex items-center justify-center h-screen w-full",children:e.jsx("h1",{className:"text-white text-2xl",children:"Loading..."})}):e.jsxs("div",{className:"bg-[#2C2C2C] min-h-screen h-auto w-full flex flex-col items-center px-3 py-5 overflow-y-scroll pt-20 scrollbar",children:[e.jsx("h1",{className:"my-4 mb-5 text-4xl font-normal text-white",children:"Orders"}),a.length===0?e.jsx("h2",{className:"text-white text-2xl",children:"No orders available"}):e.jsx("div",{className:"grid w-full max-w-screen-lg grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-content-center",children:a.map(s=>e.jsx(d,{link:`/books/orders/${s.id}`,id:s.id,...s.data()},s.id))})]}):e.jsx("div",{className:"bg-[#2C2C2C] flex items-center justify-center h-screen w-full",children:e.jsx("div",{className:"bg-white p-5 rounded shadow-lg",children:e.jsx("h1",{className:"text-red-600 text-2xl",children:"Please Log in"})})})};export{m as default};
