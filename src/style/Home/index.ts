import { ITheme } from "interfaces";
import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const fadeInAndMoveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Move from top (-50px) */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Move to original position */
  }
`;

const fadeInAndMoveUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0); /* Move from top (-50px) */
  }
  100% {
    opacity: 1;
    transform: translateY(-20px); /* Move to original position */
  }
`;

export const Container = styled.div`
  width: 86%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 250px;
  position: relative;
  padding-bottom: 39px;

  @media (max-width: 767px) {
    position: unset;
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding-top: 150px;
  }

  @media (min-width: 1260px) {
    width: 85%;
    padding-top: 176px;
  }

  &.testomonial-class {
    flex-direction: column;
    /* margin-bottom: 100px; */
    padding: 80px 17px 70px 17px;
  }
`;
export const LeftContainer = styled.div`
  max-width: 600px;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;
`;
export const Proffesion = styled.div<{ theme: ITheme }>`
  font-size: 30px;
  font-weight: 700;

  span {
    /* color: ${(props) => props.theme.color.third};  */
    background: linear-gradient(to right, #8750f7 0%, #ffffff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow:blue 0px 3px 1px; */
  }
  h3 {
    animation: slide 1s ease forwards;
    animation-delay: 0.7s;
    color: ${(props) => props.theme.color.second};
  }
`;
export const Paragraph = styled.div<{ theme: ITheme }>`
  font-size: 15px;
  color: ${(props) => props.theme.color.second};
  margin-top: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ConnectButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  width: 100%;
  max-width: 166px;
  border: none;
  background-color: ${(props) => props.theme.color.fifth};
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;

  svg {
    font-size: 20px;
    margin-left: 4px;
    text-align: center;
    color: white;
    path {
      stroke: white;
      fill: white;
    }

    animation: anime 1.5s ease infinite;

    @keyframes anime {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
`;

export const FButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
  text-decoration: none;
  width: 100%;
  max-width: 166px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.third};
  color: ${(props) => props.theme.color.second};
  background-color: transparent;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;

  &:hover {
    box-shadow: 0 0 10px lightgray;
  }

  svg {
    width: 25px;
    height: 40px;
    margin-left: 8px;
    text-align: center;
    animation: fadein 2.5s linear infinite;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
export const SocialSec = styled.div`
  display: inline-flex;
`;
export const AnkerTag = styled.a<{ theme: ITheme }>`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid ${(props) => props.theme.color.third};
  border-radius: 50%;
  font-size: 20px;
  color: ${(props) => props.theme.color.third};
  text-decoration: none;
  margin: 30px 15px 30px 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.color.third};
    color: white;
    box-shadow: 0 0 20px ${(props) => props.theme.color.fourth};
    transition: all 0.75s ease;
  }
`;
export const SocialIcon = styled.div`
  font-size: 15px;
`;
export const RightContainer = styled.div`
  /* width: 100%; */
  /* max-width: 345px;
  height: 300px;
  display: flex;
  margin-top: 49px;
  position: relative; */
  position: absolute;
  width: 64%;
  right: -92px;
  animation: ${fadeInAndMoveUp} 2s ease-in-out;

  @media (max-width: 767px) {
    position: unset;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    width: 66%;
  right: -60px;
  }

  @media (min-width: 1280px) {
    width: 66%;
  right: -88px;
  }
`;

export const BoxContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.second};
  width: 50%;
  border-right: none;
  z-index: 1;
  animation: fadeInAndMoveRight1 1.5s ease-out;

  @keyframes fadeInAndMoveRight1 {
    0% {
      opacity: 0;
      transform: translateX(-150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const SecondBoxContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.second};
  width: 50%;
  border-left: none;
  z-index: 1;
  animation: fadeInAndMoveRight2 1.5s ease-out;

  @keyframes fadeInAndMoveRight2 {
    0% {
      opacity: 0;
      transform: translateX(150px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const Image = styled.img`
  position: absolute;
  top: -68px;
  width: 255px;
  height: 319px;
  right: 44px;
  z-index: 10;
  animation: fadeInAndMoveDown1 2s ease-in-out;

  @keyframes fadeInAndMoveDown1 {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 5;
      transform: translateY(0px);
    }
  }
`;
export const UploadFileModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  // position: absolute;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 602px;
  // top: 206px;
  // left: 434px;
  padding: 20px;
  border-radius: 24px;
  border: 1px;
  gap: 10px;
  border: 1px solid #1b202b;
  padding: 40px 40px;
  background: #140c1c;
`;