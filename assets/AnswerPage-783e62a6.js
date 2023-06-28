import{s as i,r as l,j as t,q as g,c as q,u as f,d as S}from"./index-1b2ba256.js";import{U as m,W as j,H as v,R as b,I as y,J as z,S as C}from"./RadioGroup-4f3079ff.js";import{u as A,a as d}from"./dispatch-b450b485.js";const k=i.div`
font-family :"Abel" ;
margin:30px 0px;
${m}

`,T=i.div`
${m}
`,R=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`,I=i.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`,E=i.div`
    font-family: Abel;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom:10px;


`,F=i.div`
height: 10px;
margin: 10px 0px;
`,Q=i.button`
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
`,_=({selectedAnswer:e,setSelectedAnswer:o})=>{const n=A(),[s,r]=l.useState(60),[c,u]=l.useState(!1);l.useEffect(()=>{let h;return!c&&s>0&&(h=setInterval(()=>{r(w=>w-1)},1e3)),()=>{clearInterval(h)}},[n,c,s]);const x=`${Math.floor(s/60).toString().padStart(2,"0")}:${(s%60).toString().padStart(2,"0")}`,a=()=>{s===0?(n(g()),r(60),u(!1),o({id:0,answer:""})):(u(!0),r(60),n(q(e)),n(g()),u(!1),o({id:0,answer:""}))};return t.jsxs(t.Fragment,{children:[t.jsxs(E,{children:[t.jsx("h3",{children:x}),t.jsx(Q,{type:"button",onClick:a,children:"NEXT"})]}),t.jsx(F,{children:s===0?t.jsx("h4",{children:"Time is finish"}):""})]})},N=e=>e.quiz.questions,U=e=>e.quiz.correctAnswer,$=e=>e.quiz.questionCounter,D=e=>e.quiz.quizStart,O=e=>e.quiz.isLoading,p=()=>({question:d(N),correctAnswer:d(U),questionCounter:d($),quizStart:d(D),isLoading:d(O)}),L={id:0,answer:""},M=e=>{const{incorrect_answers:o,correct_answer:n}=e||{},s=[...o,n],r=()=>Math.random()-.5;return s.sort(r)},P=()=>{const e=f(),{question:o,questionCounter:n}=p(),[s,r]=l.useState(L),[c,u]=l.useState([]);l.useEffect(()=>{const a=M(o[n]);u(a)},[e,o,n]);const x=a=>{r({id:n,answer:a.target.value})};return t.jsx(t.Fragment,{children:t.jsxs(j,{children:[t.jsxs(k,{children:[t.jsx("h2",{children:o[n].category}),t.jsx(I,{children:o[n].question})]}),t.jsx(T,{children:t.jsx(v,{children:t.jsx(b,{value:s.answer,onChange:x,children:c.map(a=>t.jsx(y,{control:t.jsx(z,{}),label:a,value:a},a))})})}),t.jsx(R,{children:t.jsx(_,{selectedAnswer:s,setSelectedAnswer:r})})]})})},B=i.div`
    ${m}
    font-family: "Atma";
    row-gap: 20px;
`,H=i.h2`
margin-top:20px;

`,W=i.button`
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

`,Z=()=>{const e=f(),o=A(),{questionCounter:n,correctAnswer:s}=p(),r=s/n*100,c=()=>{o(S()),e("/")};return t.jsx(j,{children:t.jsxs(B,{children:[t.jsxs(H,{children:["Result : ",`${r} %`]}),t.jsxs("h4",{children:["Question quantity : ",n," "]}),t.jsxs("h4",{children:["Correct answer : ",s," "]}),t.jsx(W,{type:"button",onClick:c,children:"Back to Quiz"})]})})},J=()=>{const{question:e,questionCounter:o}=p();return t.jsx(C,{children:e.length===o?t.jsx(Z,{}):t.jsx(P,{})})};export{J as default};
