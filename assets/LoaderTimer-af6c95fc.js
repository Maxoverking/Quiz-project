import{W as f,s as o,c as l,u as p,r as n,Q as u,j as r}from"./index-6fc8be79.js";const d=f`
  from {
    font-size: 56px;
  }
  to {
    font-size: 82px;
  }
`,m=o.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color:var(--delft-blue);
height: 100vh;
`,x=o.h2`
font-family :"Atma" ;
color: ${({count:e})=>e===0?"#ff0101":"#fabf47"};
text-shadow: var(--form-shadow);
animation: ${d} 1s linear infinite alternate;
`,v=()=>{const e=l(),a=p(),[t,i]=n.useState(3);return n.useEffect(()=>{const s=setInterval(()=>{i(c=>c-1)},800);return t<0&&(clearInterval(s),a(`/${u.progress}`)),()=>{clearInterval(s)}},[t,e,a]),r.jsx(m,{children:r.jsx(x,{count:t,children:t===0?"START":t===-1?"":t})})};export{v as default};
