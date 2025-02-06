import styled from 'styled-components';


export const Load = styled.div`
    color:#b39dc6;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        display: inline-block;
    }
    .name {
        font-family: "Rubik Puddles", serif;
        font-weight: 800;
        font-size: 100px;
        opacity: 0.8;
    }
    /* .profession{
        font-family: "inherit !important";
        font-weight: 500;
        font-size: 30px; 
        opacity: 1;
        padding-top: 20px;
    } */

    @media (max-width: 767px) {
      .name{
        font-weight: 800;
        font-size: 55px; 
    }
  }
`;

// export const scrollDown = keyframes`
//   0% {
//     transform: translateY(20%) rotate(45deg);
//     opacity: 0.7;
//   }
//   50% {
//     transform: translateY(0%) rotate(45deg);
//     opacity: 0.2;
//   }
//   100% {
//     transform: translateY(20%) rotate(45deg);
//     opacity: 0.7;
//   }
// `;

// Styled component for the divs
// export const ScrollDownDiv = styled.div<ScrollDownDivProps>`
//   width: 2em;
//   height: 2em;
//   background-color: transparent;
//   z-index: 80;
//   position: absolute;
//   bottom: ${(props) => props.bottom}px;
//   left: 50%;
//   transform: translateY(0%) rotate(45deg);
//   opacity: 0;
//   border-width: 0 0.25em 0.25em 0;
//   border-style: solid;
//   border-color: antiquewhite;
//   animation: ${scrollDown} 1.2s ease-in-out infinite;
//   animation-delay: ${(props) => props.delay || '0'}s;
// `;