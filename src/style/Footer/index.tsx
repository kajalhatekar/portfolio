import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
      /* backdrop-filter: blur(15px) !important;
    background-color: rgba(38, 28, 55, 0.66) !important;
    box-shadow: rgba(9, 5, 29, 0.173) 0px 10px 10px 0px !important; */
    /* background-color: #0f0715; */
    padding: 20px 0 30px 0;
`
export const ChildContainer = styled.div`
     display: flex;
     flex-direction:column;
  justify-content: center;
  align-items: center;
  gap:10px 0;
`
export const Heading = styled.div`
margin-top: 20px;
color:#fff;

`
export const Para = styled.div`
text-align:center;
color:#fff;
font-size: 18px;
`

export const SocialSec = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
`;
export const AnkerTag = styled.a`
  width: 25px;
  height: 25px;
  background: transparent;
  border: 2px solid gray;
  border-radius: 50%;
  font-size: 18px;
  color: gray;
  text-decoration: none;
  margin: 10px 15px 0 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: gray;
    color: white;
    box-shadow: 0 0 20px  gray;
  }
`;
export const SocialIcon = styled.div`
  font-size: 15px;
`;
export const CvContainer = styled.div`
    /* width:100%; */

`
// export const FooterContainer = styled.div`

// `