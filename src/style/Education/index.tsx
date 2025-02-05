import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin: 0px 0 90px 0;

  @media (max-width: 767px) {
    margin: 62px 0px;
  }
`;

export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 35px;
  padding: 90px 120px 0px 120px;

  @media (max-width: 768px) {
    padding: 67px 33px 0px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1224px) {
    padding: 55px 72px 0;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: center;

  @media (max-width: 668px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 668px) and (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`;
export const IconWrap = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
  svg {
    width: 30px;
    height: 42px;
    backface-visibility: visible !important;
    color: #ffffffb3;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Box = styled.div`
  width: 50%;
  padding: 20px 0;
  display: flex;
  background-color: #140c1c;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  border-radius: 15px;
  animation: fadeInAndMoveRight1 1.5s ease-out;

  &:hover {
    box-shadow: 0 0 10px lightgray;
    /* box-shadow: #8d2cee 0px 50px 10px -20px, #140c1c 0px 30px 60px -30px; */
  }

  @media (max-width: 668px) {
    width: 100%;
  }

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

export const BoxWrapper = styled(Box)`
  max-width: unset;
  padding: unset;
  border: none;
  display: flex;
  box-shadow: unset;
  padding: 20px 10px 10px 0;
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

  @media (max-width: 600px) {
    padding: 25px;
  }

  @media (max-width: 1024px) {
    padding: 25px;
  }
`;

export const DateWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: #ffffffb3;
`;

export const Degree = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fff;
`;
export const AboutDegree = styled.div`
  color: #ffffffb3;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

export const CollegeHeading = styled.div`
  color: #ffd479;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  padding-bottom: 5px;
`;
