import{s as i,c as j,r as d,j as e,d as h,e as v,u as w,g as p,S as g,h as y}from"./index-4074c4e0.js";import{V as m,W as A,H as S,R as k,I as T,J as q,K as I,U as R}from"./use-in-view-d4b1cf9b.js";const C=i.div`
font-family :"Abel" ;
margin:30px 0px;
${m}

`,z=i.div`
${m}
`,E=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`,F=i.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`,Q=i.div`
    font-family: Abel;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom:10px;


`,_=i.div`
height: 10px;
margin: 10px 0px;
color : var(--time-finish);
`,N=i.button`
  font-family :"Atma" ;
  padding:8px 18px;
  border-radius: 10px;
  font-size:16px;
  letter-spacing:1px;
  margin-left: 30px;
  background-color: var(--pink);
  transition:transform 250ms ease-in-out, background-color 250ms ease-in-out ;
  &:hover{
    background-color: var(--pink-hover);
    transform: scale(1.2);
  }
`,U=({selectedAnswer:r,setSelectedAnswer:n})=>{const t=j(),[s,o]=d.useState(60),[c,l]=d.useState(!1);d.useEffect(()=>{let a;return!c&&s>0&&(a=setInterval(()=>{o(b=>b-1)},1e3)),()=>{clearInterval(a)}},[t,c,s]);const u=`${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`,x=()=>{s===0?(t(h()),o(60),l(!1),n({id:0,answer:""})):(l(!0),o(60),t(v(r)),t(h()),l(!1),n({id:0,answer:""}))};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx("h3",{children:u}),e.jsx(N,{type:"button",onClick:x,children:"NEXT"})]}),e.jsx(_,{children:s===0?e.jsx("h4",{children:"Time is finish"}):""})]})},$={id:0,answer:""},D=r=>{const{incorrect_answers:n,correct_answer:t}=r||{},s=[...n,t],o=()=>Math.random()-.5;return s.sort(o)},M=r=>r.replace(/&rsquo;|&#039;|&quot;/g,t=>{switch(t){case"&rsquo;":case"&#039;":return"'";case"&quot;":return'"';default:return t}}),O=()=>{const r=w(),{questions:n,questionCounter:t}=p(),[s,o]=d.useState($),[c,l]=d.useState([]);d.useEffect(()=>{const a=D(n[t]);l(a)},[r,n,t]);const u=a=>{o({id:t,answer:a.target.value})},x=M(n[t].question);return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs(C,{children:[e.jsx("h2",{children:n[t].category}),e.jsx(F,{children:x})]}),e.jsx(z,{children:e.jsx(S,{children:e.jsx(k,{value:s.answer,onChange:u,children:c.map(a=>e.jsx(T,{control:e.jsx(q,{}),label:a,value:a},a))})})}),e.jsx(E,{children:e.jsx(U,{selectedAnswer:s,setSelectedAnswer:o})})]})})},P=i.div`
    ${m}
    font-family: "Atma";
    row-gap: 20px;
`,f=i.h2`
margin-top:20px;

`,V=i.h4`
margin-top:20px;
width: 200px;
height: 200px;
 background-image:url("./smile.gif"); 
  background-size: cover;
  background-repeat: no-repeat; 

`,B=i.button`
  font-family :"Atma" ;
  padding: 10px 24px;
  border-radius: 10px;
  font-size:20px;
  letter-spacing:2px;
  background-color: var(--pink);
  transition:transform 250ms ease-in-out, background-color 250ms ease-in-out,color 250ms ease-in-out ;
  &:hover{
    background-color: var(--pink-hover);
    transform: scale(1.2) rotateZ(-10deg);
    color:var(--white);
  }

`,H=()=>{const r=w(),n=j(),t=d.useRef(null),s=I(t,{once:!0}),{questionCounter:o,correctAnswer:c,isLoading:l}=p(),u=Math.floor(c/o*100);u>30&&console.log("object");const x=()=>{n(y()),r("/")};return e.jsx(A,{ref:t,style:{transform:s?"none":"translateY(150px)",opacity:s?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"},children:e.jsxs(P,{children:[g.error===l?e.jsxs(e.Fragment,{children:[e.jsx(f,{children:g.error}),e.jsx(V,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:["Result : ",`${u} %`]}),e.jsxs("h4",{children:["Question quantity : ",o," "]}),e.jsxs("h4",{children:["Correct answer : ",c," "]})]}),e.jsx(B,{type:"button",onClick:x,children:"Back to Quiz"})]})})},Z=()=>{const{questions:r,questionCounter:n}=p();return e.jsx(R,{children:r.length===n?e.jsx(H,{}):e.jsx(O,{})})};export{Z as default};
