import{s as i,c as w,r as u,j as e,d as g,e as b,g as p,u as A,S as f,h as v,i as y}from"./index-46c65485.js";import{V as m,W as S,H as z,R as k,I as T,J as C,K as I,U as R}from"./use-in-view-e6cf45ca.js";const E=i.div`
font-family :"Abel" ;
margin:30px 0px;
${m}

`,F=i.div`
${m}
`,Q=i.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:10px 0px;
`,_=i.p`
max-width: 60%;
font-size: 24px;
 @media (max-width: 1070px) {
    max-width: 40%; 
  }
 @media (max-width: 767px) {
    max-width: 84%; 
  }
`,N=i.div`
    font-family: Abel;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom:10px;


`,U=i.div`
height: 10px;
margin: 10px 0px;
color : var(--time-finish);
`,$=i.button`
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
`,L=({selectedAnswer:t,setSelectedAnswer:s})=>{const n=w(),[r,o]=u.useState(60),[c,l]=u.useState(!1);u.useEffect(()=>{let a;return!c&&r>0&&(a=setInterval(()=>{o(q=>q-1)},1e3)),()=>{clearInterval(a)}},[n,c,r]);const d=`${Math.floor(r/60).toString().padStart(2,"0")}:${(r%60).toString().padStart(2,"0")}`,x=()=>{r===0?(n(g()),o(60),l(!1),s({id:0,answer:""})):(l(!0),o(60),n(b(t)),n(g()),l(!1),s({id:0,answer:""}))};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx("h3",{children:d}),e.jsx($,{type:"button",onClick:x,children:"NEXT"})]}),e.jsx(U,{children:r===0?e.jsx("h4",{children:"Time is finish"}):""})]})},D=t=>t.quiz.questions,M=t=>t.quiz.correctAnswer,O=t=>t.quiz.questionCounter,P=t=>t.quiz.quizStart,V=t=>t.quiz.isLoading,h=()=>({questions:p(D),correctAnswer:p(M),questionCounter:p(O),quizStart:p(P),isLoading:p(V)}),B={id:0,answer:""},H=t=>{const{incorrect_answers:s,correct_answer:n}=t||{},r=[...s,n],o=()=>Math.random()-.5;return r.sort(o)},W=t=>t.replace(/&rsquo;|&#039;|&quot;/g,n=>{switch(n){case"&rsquo;":case"&#039;":return"'";case"&quot;":return'"';default:return n}}),Z=()=>{const t=A(),{questions:s,questionCounter:n}=h(),[r,o]=u.useState(B),[c,l]=u.useState([]);u.useEffect(()=>{const a=H(s[n]);l(a)},[t,s,n]);const d=a=>{o({id:n,answer:a.target.value})},x=W(s[n].question);return e.jsx(e.Fragment,{children:e.jsxs(S,{children:[e.jsxs(E,{children:[e.jsx("h2",{children:`№ ${n+1}`}),e.jsx("h2",{children:s[n].category}),e.jsx(_,{children:x})]}),e.jsx(F,{children:e.jsx(z,{children:e.jsx(k,{value:r.answer,onChange:d,children:c.map(a=>e.jsx(T,{control:e.jsx(C,{}),label:a,value:a},a))})})}),e.jsx(Q,{children:e.jsx(L,{selectedAnswer:r,setSelectedAnswer:o})})]})})},G=i.div`
    ${m}
    font-family: "Atma";
    row-gap: 20px;
`,j=i.h2`
margin-top:20px;

`,X=i.h4`
margin-top:20px;
width: 200px;
height: 200px;
 background-image:url("./smile.gif"); 
  background-size: cover;
  background-repeat: no-repeat; 

`,J=i.button`
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

`,K=()=>{const t=A(),s=w(),n=u.useRef(null),r=I(n,{once:!0}),{questionCounter:o,correctAnswer:c,isLoading:l}=h(),d=Math.floor(c/o*100);d>30&&console.log("object");const x=()=>{s(v()),y(),t("/")};return e.jsx(S,{ref:n,style:{transform:r?"none":"translateY(150px)",opacity:r?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"},children:e.jsxs(G,{children:[f.error===l?e.jsxs(e.Fragment,{children:[e.jsx(j,{children:f.error}),e.jsx(X,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(j,{children:["Result : ",`${d} %`]}),e.jsxs("h4",{children:["Question quantity : ",o," "]}),e.jsxs("h4",{children:["Correct answer : ",c," "]})]}),e.jsx(J,{type:"button",onClick:x,children:"Back to Quiz"})]})})},te=()=>{const{questions:t,questionCounter:s}=h();return e.jsx(R,{children:t.length===s?e.jsx(K,{}):e.jsx(Z,{})})};export{te as default};
