import{W as l,s as n,u as f,r as s,Q as p,j as r}from"./index-1b2ba256.js";import{u}from"./dispatch-b450b485.js";const m=l`
  from {
    font-size: 56px;
  }
  to {
    font-size: 82px;
  }
`,d=n.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color:var(--delft-blue);
height: 100vh;
`,x=n.h2`
font-family :"Atma" ;
color:var(--saffron);
text-shadow: var(--form-shadow);
animation: ${m} 1s linear infinite alternate;
`,g=()=>{const o=u(),e=f(),[t,i]=s.useState(3);return s.useEffect(()=>{const a=setInterval(()=>{i(c=>c-1)},700);return t<0&&(clearInterval(a),e(`/${p.progress}`)),()=>{clearInterval(a)}},[t,o,e]),r.jsx(d,{children:r.jsx(x,{children:t===0?"START":t})})};export{g as default};
