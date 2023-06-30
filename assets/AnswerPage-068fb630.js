import{s as i,c as A,r as d,j as e,d as j,e as b,g as m,u as S,W as v,A as z,S as w,h as y,i as k}from"./index-41f3826d.js";import{V as g,W as q,H as T,R,I as C,J as I,K as E,U as F}from"./use-in-view-74b8a16a.js";const Q=i.div`
font-family :"Abel" ;
margin:30px 0px;
${g}

`,_=i.div`
${g}
`,$=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`,N=i.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`,U=i.div`
    font-family: Abel;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom:10px;


`,L=i.div`
height: 10px;
margin: 10px 0px;
color : var(--time-finish);
`,D=i.button`
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
`,M=({selectedAnswer:t,setSelectedAnswer:r,setCorrect:n})=>{const o=A(),[s,c]=d.useState(60),[u,l]=d.useState(!1);d.useEffect(()=>{let p;return!u&&s>0&&(p=setInterval(()=>{c(a=>a-1)},1e3)),()=>{clearInterval(p)}},[o,u,s]);const x=`${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`,h=()=>{n(!0),setTimeout(s===0?()=>{o(j()),c(60),l(!1),r({id:0,answer:""}),n(!1)}:()=>{l(!0),c(60),o(b(t)),o(j()),l(!1),r({id:0,answer:""}),n(!1)},1e3)};return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx("h3",{children:x}),e.jsx(D,{type:"button",onClick:h,children:"NEXT"})]}),e.jsx(L,{children:s===0?e.jsx("h4",{children:"Time is finish"}):""})]})},O=t=>t.quiz.questions,H=t=>t.quiz.correctAnswer,P=t=>t.quiz.questionCounter,V=t=>t.quiz.quizStart,W=t=>t.quiz.isLoading,f=()=>({questions:m(O),correctAnswer:m(H),questionCounter:m(P),quizStart:m(V),isLoading:m(W)}),B={id:0,answer:""},Z=t=>{const{incorrect_answers:r,correct_answer:n}=t||{},o=[...r,n],s=()=>Math.random()-.5;return o.sort(s)},G=t=>t.replace(/&rsquo;|&#039;|&quot;/g,n=>{switch(n){case"&rsquo;":case"&#039;":return"'";case"&quot;":return'"';default:return n}}),X=()=>{const t=S(),{questions:r,questionCounter:n}=f(),[o,s]=d.useState(B),[c,u]=d.useState(!1),[l,x]=d.useState([]);d.useEffect(()=>{const a=Z(r[n]);x(a)},[t,r,n]);const h=a=>{s({id:n,answer:a.target.value})},p=G(r[n].question);return e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsxs(Q,{children:[e.jsx("h2",{children:`№ ${n+1}`}),e.jsx("h2",{children:r[n].category}),e.jsx(N,{children:p})]}),e.jsx(_,{children:e.jsx(T,{children:e.jsx(R,{value:o.answer,onChange:h,children:l.map(a=>e.jsx(C,{control:e.jsx(I,{}),label:a,value:a,sx:c?{color:r[n].correct_answer===a?"green":"red"}:{color:"black"}},a))})})}),e.jsx($,{children:e.jsx(M,{selectedAnswer:o,setSelectedAnswer:s,setCorrect:u})})]})})},J=v`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,K=i.div`
    ${g}
    font-family: "Atma";
    row-gap: 20px;
`,Y=i.h2`
font-size:36px;
margin-top:20px;
color: var(--time-finish);

@media (max-width: 400px) {
   font-size:26px;
  }
`,ee=i.h2`
margin-top:20px;
color: ${({percentage:t})=>t<40?z`var(--time-finish)`:"#279725"};

`,te=i.h4`
width: 350px;
height: 310px;
border-radius:10px;
background-image: url("./astronaut.gif");
background-size: cover;
background-repeat: no - repeat;
animation: ${J} 20s linear infinite;
  @media (max-width: 500px) {
    width: 250px;
    height: 210px;
  }
`,ne=i.button`
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
`,re=()=>{const t=S(),r=A(),n=d.useRef(null),o=E(n,{once:!0}),{questionCounter:s,correctAnswer:c,isLoading:u}=f(),l=Math.floor(c/s*100),x=()=>{r(y()),k(),t("/")};return e.jsx(q,{ref:n,style:{transform:o?"none":"translateY(150px)",opacity:o?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"},children:e.jsxs(K,{children:[w.error===u?e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:w.error}),e.jsx(te,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ee,{percentage:l,children:["Result : ",`${l} %`]}),e.jsxs("h4",{children:["Question quantity : ",s," "]}),e.jsxs("h4",{children:["Correct answer : ",c," "]})]}),e.jsx(ne,{type:"button",onClick:x,children:"Back to Quiz"})]})})},ie=()=>{const{questions:t,questionCounter:r}=f();return e.jsx(F,{children:t.length===r?e.jsx(re,{}):e.jsx(X,{})})};export{ie as default};