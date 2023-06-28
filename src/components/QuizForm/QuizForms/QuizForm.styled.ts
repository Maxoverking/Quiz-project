import styled from "styled-components";



export const DF_FD_AI = `
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface isInViewProps {
  isInView: boolean
}
const OPACITY_TRANSITION = `
  opacity: ${({ isInView }: { isInView: boolean }) => (isInView ? 1 : 0)};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s;
`;

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
    background-image: url("./lego-border.png") ;
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

    height: 46vh;
    @media (max-width: 767px) {
    flex-direction: column;
  }
    @media (max-width: 480px) {
    height: 56vh;
  }
`;
export const DIV_TITLE = styled.div`
  background: var(--saffron-linear);
height:84px;
`;

export const DIV_SLIDER = styled.div<isInViewProps>`
  font-family :"Abel" ;
  ${DF_FD_AI}
  margin: 20px;
  width: 150px;
  transform: ${({ isInView }) => isInView ? "none" : "translate(-250px, 250px)"};
  ${OPACITY_TRANSITION};
`;
export const DIV_SELECT = styled.div<isInViewProps>`
  margin: 20px;
  width: 200px;
  transform: ${({ isInView }) => isInView ? "none" : "translateY(-250px)"};
  opacity: ${({ isInView }) => isInView ? 1 : 0};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s;
`;
export const DIV_LEVEL = styled.div<isInViewProps>`
    font-family :"Abel" ;
    ${DF_FD_AI}
    width: 300px;
      transform: ${({ isInView }) => isInView ? "none" : "translateX(250px)"};
  opacity: ${({ isInView }) => isInView ? 1 : 0};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s;

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
/* transform: ${({ isInView }) => isInView ? "none" : "translateX(-250px)"};
 ${OPACITY_TRANSITION}; */
// `;