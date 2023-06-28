import{W as l,s as i,c as p,u,r,Q as n,q as d,j as o}from"./index-4074c4e0.js";const m=l`
  from {
    font-size: 56px;
  }
  to {
    font-size: 82px;
  }
`,x=i.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color:var(--delft-blue);
height: 100vh;
`,h=i.h2`
font-family :"Atma" ;
color: ${({count:e})=>e===0?"#ff0101":"#fabf47"};
text-shadow: var(--form-shadow);
animation: ${m} 1s linear infinite alternate;
`,g=()=>{const e=p(),s=u(),[t,c]=r.useState(3);return r.useEffect(()=>{const a=setInterval(()=>{c(f=>f-1)},800);return t<0&&(clearInterval(a),s(`/${n.progress}`),e(d(n.progress))),()=>{clearInterval(a)}},[t,e,s]),o.jsx(x,{children:o.jsx(h,{count:t,children:t===0?"START":t===-1?"":t})})};export{g as default};
