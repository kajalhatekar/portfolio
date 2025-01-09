import { fadeInAndMoveDown } from "style/Home";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid #bcc6fc;
`;
export const WebName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

export const Wrapper = styled.div`
  padding: 30px;
  border-radius: 15px;
  width: 80%;
  background-color: #140c1c;
  animation: ${fadeInAndMoveDown} 2s ease-in-out;

  &:hover{
    box-shadow: 0 0 10px lightgray;
  }
`;

export const CloseBtn = styled.div`
  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Para = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  padding: 0 24px;
  margin-top: 24px;
`;

export const ColorContainer = styled.div`
  display: flex;
  gap: 9px;
  padding: 0 24px;
`;
export const Box1 = styled.div`
  width: 84px;
  height: 50px;
  background: #8896e1;
  border-radius: 12px;
`;
export const Image = styled.img`
  width: 84px;
  height: 50px;
  border-radius: 12px;
  margin-top: 14px;
`;
export const Form = styled.form`
  margin-top: 28px;
  padding: 0 24px;
`;
export const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  padding-bottom: 10px;
  color: white;
  width: 200px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border-radius: 12px;
  outline: none;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  font-size: 16px;  
  color: #fff;

  ::placeholder {
    color: #b9b9b9;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  padding: 10px;
  background: rgb(35 25 47);
  border: 1px solid #252c3d;
  padding: 10px;
  color: #fff;
  ::placeholder {
    color: #797979;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;
export const TextareaWrapper = styled.div`
  /* margin-top: 28px; */
  /* margin-bottom:36px; */
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  height: 45px;
`;

export const SubmitButton = styled.button`
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
`;

export const OpenButton = styled.button`
  width: 50px;
  height: 50px;
  background: transparent;
  border: 2px solid rgb(150, 79, 221);
  border-radius: 50%;
  font-size: 25px;
  color: rgb(150, 79, 221);
  text-decoration: none;
  margin: 30px 15px 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: hithere 1s ease infinite;
  cursor: pointer;

  &:hover {
    background-color: #6600cc;
    color: white;
    box-shadow: 0 0 20px #6600cc;
  }

  @keyframes hithere {
    40%,
    60% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(20deg);
    }
    70% {
      transform: rotate(0deg);
    }
  }
`;

export const CaroselContainer = styled.div`
  width: 600px;
  box-shadow: 0 0 10px lightgray;
  position: relative;
  border: 1px solid rgb(150, 79, 221);
  padding: 0px 25px;
`;
export const FeedBackParagrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  span{
    font-size: 16px;
  }
`;

export const WCaroselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

//Modal

export const PopupFormWrapper = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const ResetHeading = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  // gap: 120px;
  justify-content: space-between;
  span {
    cursor: pointer;
  }
`;
export const EditProfileHeading = styled(ResetHeading)`
  width: 100%;
  justify-content: space-between;

  &.confirmation-icon {
    display: flex;
    justify-content: flex-end;
  }
`;

export const UploadFileContentTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #fff;

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #a9acb4;
  }

  margin-bottom: 1vw;
`;
export const UploadFileTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 1366px) {
    gap: 5px;
  }
`;
export const ContactFormText = styled.div`
  width: 100%;
`;
export const ErrorMessageWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  color: red;
  margin-left: 6px;  
  padding-top: 8px;
`;
export const InputEditWrapper = styled.div`
  input {
    background: rgb(35 25 47);
    border: 1px solid #252c3d;
    padding: 10px;
    ::placeholder {
      color: #797979;
    }
  }
`;
export const InputWrapperContainer = styled.div`
  width: 100%;
  height: 102px;
&.textarea-height{
  height: 150px;
}
  ::placeholder {
    color: #64718c;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    /* padding: 10px; */
  }
  .css-166bipr-Input {
    color: #fff !important;
  }
  .rsw-toolbar {
    height: 48px;
    background: none;
    border: none;
  }
  .rsw-btn:hover {
    background-color: #2c304f;
  }
  .rsw-btn {
    color: #64718c;
    font-size: 25px;

    svg {
      width: 32px !important;
    }
  }
  .rsw-btn[data-active="true"] {
    background: none !important;
  }
  .rsw-editor {
    border: 1px solid #9a9fa53f;
  }
  .rsw-ce {
    height: 112px;
    background-color: #0e1023;
    color: #fff;
    padding-left: 10px;
  }
`;
export const InputText = styled.div`
  color:#d4d8df;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 5px;
  text-transform: capitalize;
`;
