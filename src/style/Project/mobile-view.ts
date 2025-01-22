import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
  gap: 35px;
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  width: 85%;
  gap: 47px 36px;

  @media (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PortfolioItem = styled.article`
  padding: 25px;
  border-radius: 15px;
  background-color: #140c1c;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px lightgray;
  }
`;

export const PortfolioImage = styled.div`
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    display: block;
  }
`;

export const ServiceBoxHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
  padding-top: 20px;
  color: #d4d8df;
`;

export const ServiceBoxP = styled.div`
  font-size: 16px;
  color: #b3b9c5;
  text-align: center;
  color: ${(props) => props.theme.fontColorSecondary};
`;
