import { ListItemProps } from "interfaces";
import styled from "styled-components";

export const Unorderli = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;
`;
export const Listitems = styled.li<ListItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 0;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.color.second};

  a {
    text-decoration: none;
    padding-bottom: 5px;
    color: inherit;
    border-bottom: ${(props) =>
      props.isActive
        ? "1.5px solid " + props.theme.color.second
        : "1px solid transparent"}; // Border based on active state
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.color.second};
  }

  &:hover {
    color: ${(props) => props.theme.color.second};

    a {
      opacity: 2;
      border-bottom: 1.5px solid ${(props) => props.theme.color.second}; // Border when hovering
      transition: 0.5s ease-in-out;
    }
  }
`;
export const Header = styled.div`
  height: 11vh;
  backdrop-filter: blur(15px) !important;
  background-color: #1b1a2ea9 !important;
  box-shadow: 0 10px 10px 0 rgba(9, 5, 29, 0.171) !important;
  z-index: 5;
  position: fixed;
  top: 0;
  width: 100%;
  color: ${(props) => props.theme.color.second};
  /* padding: 10px; */
  transition: opacity 0.5s;
  z-index: 1000;
`;
export const LogoWrapper = styled.div`
  color: ${(props) => props.theme.color.second};
  transition: all 0.3s ease;
  font-size: 30px;
  font-weight: 700;
`;
// export const Unorderli = styled.ul`

// `
// export const Unorderli = styled.ul`

// `
// export const Unorderli = styled.ul`

// `

export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: 0px 100px;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease;

  &.sticky {
    backdrop-filter: blur(15px) !important;
    /* background-color: rgb(28 33 55 / 66%) !important; */
    /* background-color:  rgb(38 28 55 / 66%) !important; */
    background-color: rgb(19 6 25 / 75%) !important;

    box-shadow: 0 10px 10px 0 rgba(9, 5, 29, 0.171) !important;
  }

  .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-top: 15px; */
  }
`;

export const ScrollUpBtn = styled.div`
  position: fixed;
  height: 45px;
  width: 42px;
  background: #1e3551;
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  border-bottom-width: 2px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;

  &.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export const Section = styled.section`
  padding: 100px 0;

  .max-width {
    max-width: 1300px;
    /* padding: 0 80px; */
    margin: auto;
  }
`;

export const HomeContent = styled.div`
  .text-1,
  .text-2,
  .text-3 {
    font-family: "Ubuntu", sans-serif;
  }

  .text-1 {
    font-size: 24px;
  }

  .text-2 {
    font-size: 40px;
  }

  .text-3 {
    font-size: 24px;
  }
`;
