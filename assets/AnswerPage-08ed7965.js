import{s as o,c as j,r as u,j as e,d as g,e as q,g as p,u as w,W as b,A as v,S as f,h as z,i as y}from"./index-6fc8be79.js";import{V as m,W as A,H as k,R as T,I as C,J as R,K as I,U as E}from"./use-in-view-b2d4fe1e.js";const F=o.div`
font-family :"Abel" ;
margin:30px 0px;
${m}

`,Q=o.div`
${m}
`,$=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`,_=o.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`,N=o.div`
    font-family: Abel;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom:10px;


`,U=o.div`
height: 10px;
margin: 10px 0px;
color : var(--time-finish);
`,L=o.button`
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
`,D=({selectedAnswer:t,setSelectedAnswer:s})=>{const n=j(),[r,i]=u.useState(60),[c,d]=u.useState(!1);u.useEffect(()=>{let a;return!c&&r>0&&(a=setInterval(()=>{i(S=>S-1)},1e3)),()=>{clearInterval(a)}},[n,c,r]);const l=`${Math.floor(r/60).toString().padStart(2,"0")}:${(r%60).toString().padStart(2,"0")}`,x=()=>{r===0?(n(g()),i(60),d(!1),s({id:0,answer:""})):(d(!0),i(60),n(q(t)),n(g()),d(!1),s({id:0,answer:""}))};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx("h3",{children:l}),e.jsx(L,{type:"button",onClick:x,children:"NEXT"})]}),e.jsx(U,{children:r===0?e.jsx("h4",{children:"Time is finish"}):""})]})},M=t=>t.quiz.questions,O=t=>t.quiz.correctAnswer,H=t=>t.quiz.questionCounter,P=t=>t.quiz.quizStart,V=t=>t.quiz.isLoading,h=()=>({questions:p(M),correctAnswer:p(O),questionCounter:p(H),quizStart:p(P),isLoading:p(V)}),W={id:0,answer:""},B=t=>{const{incorrect_answers:s,correct_answer:n}=t||{},r=[...s,n],i=()=>Math.random()-.5;return r.sort(i)},Z=t=>t.replace(/&rsquo;|&#039;|&quot;/g,n=>{switch(n){case"&rsquo;":case"&#039;":return"'";case"&quot;":return'"';default:return n}}),G=()=>{const t=w(),{questions:s,questionCounter:n}=h(),[r,i]=u.useState(W),[c,d]=u.useState([]);u.useEffect(()=>{const a=B(s[n]);d(a)},[t,s,n]);const l=a=>{i({id:n,answer:a.target.value})},x=Z(s[n].question);return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs(F,{children:[e.jsx("h2",{children:`№ ${n+1}`}),e.jsx("h2",{children:s[n].category}),e.jsx(_,{children:x})]}),e.jsx(Q,{children:e.jsx(k,{children:e.jsx(T,{value:r.answer,onChange:l,children:c.map(a=>e.jsx(C,{control:e.jsx(R,{}),label:a,value:a},a))})})}),e.jsx($,{children:e.jsx(D,{selectedAnswer:r,setSelectedAnswer:i})})]})})},X=b`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,J=o.div`
    ${m}
    font-family: "Atma";
    row-gap: 20px;
`,K=o.h2`
font-size:36px;
margin-top:20px;
color: var(--time-finish);

@media (max-width: 400px) {
   font-size:26px;
  }
`,Y=o.h2`
margin-top:20px;
color: ${({percentage:t})=>t<40?v`var(--time-finish)`:"#279725"};

`,ee=o.h4`
width: 350px;
height: 310px;
border-radius:10px;
background-image: url("./astronaut.gif");
background-size: cover;
background-repeat: no - repeat;
animation: ${X} 20s linear infinite;
  @media (max-width: 500px) {
    width: 250px;
    height: 210px;
  }
`,te=o.button`
font-family : "Atma";
padding: 10px 24px;
border-radius: 10px;
font-size: 20px;
letter-spacing: 2px;
background-color: var(--pink);
transition:transform 250ms ease-in-out, background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover{
  background-color: var(--pink-hover);
  transform: scale(1.2) rotateZ(-10deg);
  color: var(--white);
}
`,ne=()=>{const t=w(),s=j(),n=u.useRef(null),r=I(n,{once:!0}),{questionCounter:i,correctAnswer:c,isLoading:d}=h(),l=Math.floor(c/i*100);l>30&&console.log("object");const x=()=>{s(z()),y(),t("/")};return e.jsx(A,{ref:n,style:{transform:r?"none":"translateY(150px)",opacity:r?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"},children:e.jsxs(J,{children:[f.error===d?e.jsxs(e.Fragment,{children:[e.jsx(K,{children:f.error}),e.jsx(ee,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Y,{percentage:l,children:["Result : ",`${l} %`]}),e.jsxs("h4",{children:["Question quantity : ",i," "]}),e.jsxs("h4",{children:["Correct answer : ",c," "]})]}),e.jsx(te,{type:"button",onClick:x,children:"Back to Quiz"})]})})},oe=()=>{const{questions:t,questionCounter:s}=h();return e.jsx(E,{children:t.length===s?e.jsx(ne,{}):e.jsx(G,{})})};export{oe as default};
