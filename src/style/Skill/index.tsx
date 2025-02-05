import styled, { keyframes } from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: 3s ease-in-out;

  @media (max-width: 1920px) {
    padding-top: "50px";
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
  padding-top: 80px;

  @media (max-width: 767px) {
    height: unset;
  }

  @media (min-width: 1920px) {
    height: 33vh;
  }
`;

export const ToolsContainer = styled(Container)`
  padding-top: 70px;

  @media (max-width: 767px) {
    padding-top: 55px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    margin-top: 120px;
  }
`;

const fadeInAndMoveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Move from top (-50px) */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Move to original position */
  }
`;
export const Heading = styled.div`
  font-size: 30px;
  font-weight: 700;
  background: linear-gradient(to right, #8750f7 0%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 0;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;
`;
export const CollegeHeading = styled(Heading)`
  justify-content: unset;
  animation: unset;
`;
export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 48px;
  flex-wrap: wrap;
  padding: 35px 0px;

  @media (max-width: 767px) {
    gap: 24px;
    padding: 35px 21px 0;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 35px 72px;
  }

  @media (min-width: 1280px) {
    gap: 41px;
  }
`;
export const FlexItem = styled.div`
  border: 5px solid ${(props) => props.theme.color.third};
  box-shadow: 0 0 4px ${(props) => props.theme.color.third};
  padding: 10px;
  text-align: center;
  width: 123px;
  height: 122px;
  border-radius: 50%;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;
  .next-icon {
    svg {
      width: 40px;
    }
  }
  svg {
    font-weight: 0;
  }

  @media (min-width: 1366px) and (max-height: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 1280px) {
    width: 100px;
    height: 100px;
  }
`;
export const SkilName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
export const ToolsItem = styled(FlexItem)`
  border: none;
  box-shadow: unset;
  background-color: #140c1c;
  border-radius: 25px;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;
  transition: all 0.5s linear;
  filter: #808080;
  -webkit-filter: grayscale(1);
  -webkit-transition: all 0.8s ease-in-out;

  svg {
    animation: "unset";
    width: 54px;
  }
  &:hover {
    transition: 0.5s ease-out;
    background-color: #2a1454;
    border: 1px solid #8750f7;
    filter: none;
    -webkit-filter: grayscale(0);
    -webkit-transform: scale(1.01);
  }
`;
