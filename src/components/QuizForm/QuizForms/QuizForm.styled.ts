import styled from "styled-components";

export const DF_FD_AI = `
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WRAPPER = styled.div`
  font-family :"Abel" ;
  margin:30px;
  background-color: var(--white);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 16px;
  border-radius:10px;
  box-shadow: var(--form-shadow);
  @media (min-width: 768px) {
    background-image: url("./public/lego-border.png") ;
  }
`;

export const DIV_BUTTON = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    margin-bottom:20px;
 
`;

export const DIV_FIELD = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 40vh;
    @media (max-width: 767px) {
    flex-direction: column;
  }
    @media (max-width: 480px) {
    height: 56vh;
  }
`;

export const H1 = styled.h1`
  font-family :"Atma" ;
  display: flex;
  justify-content: center;
  border-radius:20px;
  margin: 20px;
  font-size:56px;
  background: var(--saffron-linear);
`;
export const DIV_SLIDER = styled.div`
  font-family :"Abel" ;
  ${DF_FD_AI}
  margin: 20px;
  width: 150px;
`;
export const DIV_SELECT = styled.div`
  margin: 20px;
  width: 200px;
`;
export const DIV_LEVEL = styled.div`
    font-family :"Abel" ;
    ${DF_FD_AI}
    width: 300px;

    @media (max-width: 480px) {
    width: 20px;
  }
    
`;
export const BUTTON = styled.button`
  font-family :"Atma" ;
  padding: 12px 48px;
  border-radius: 10px;
  font-size:22px;
  letter-spacing:2px;
  background-color: var(--pink);
  transition:transform 250ms ease-in-out, background-color 250ms ease-in-out,color 250ms ease-in-out ;
  &:hover{
    background-color: var(--pink-hover);
    transform: scale(1.2) rotateZ(10deg);
    color:var(--white);
  }
`;
// export const SPAN = styled.span`
// `;