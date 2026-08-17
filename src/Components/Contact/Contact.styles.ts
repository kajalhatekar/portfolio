import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0; 
  }
`;

const popIn = keyframes`
  from {
    transform: scale(0.92) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 100px 0;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const blinkColor = keyframes`
  0%, 49% {
    -webkit-text-fill-color: #ffffff;
    color: #ffffff;
    -webkit-text-stroke: 0;
    background: none;
  }
  50%, 100% {
    -webkit-text-fill-color: transparent;
    color: transparent;
    -webkit-text-stroke: 0.04em;
    background: linear-gradient(
      180deg,
      var(--cursor-color-1),
      var(--cursor-color-2)
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const TerminalButton = styled.button`
  --cursor-color-1: ${({ theme }) => theme.color.third};
  --cursor-color-2: ${({ theme }) => theme.color.fourth};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin: 0 0 200px;
  padding: 0.5em 0.75em;
  background: transparent;
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.third},
    ${({ theme }) => theme.color.fourth}
  );
  border-image-slice: 1;

  font-family: "Major Mono Display", monospace;
  font-size: 2em;
  font-weight: bolder;
  text-transform: lowercase;

  color: #0000;
  -webkit-text-stroke: 0.04em;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.third},
    ${({ theme }) => theme.color.fourth}
  );
  -webkit-background-clip: text;
  background-clip: text;

  .prompt-row {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }

  .terminal-cursor {
    display: inline-block;
    animation: ${blinkColor} 1s infinite steps(1);
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
`;

/* Modal Overlay & Card */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 620px;
  background: #0e141b;
  border: 1px solid ${({ theme }) => theme.color.sixth};
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  animation: ${popIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 30px;
  line-height: 1;
  color: #a9acb4;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.second};
  }
`;

export const ModalHeading = styled.h2`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.third},
    ${({ theme }) => theme.color.second}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputWrapperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &.textarea-height textarea {
    height: 110px;
    resize: vertical;
  }
`;

export const InputText = styled.label`
  color: #d4d8df;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  background: #0e141b;
  border: 1px solid #252c3d;
  font-size: 15px;
  color: ${({ theme }) => theme.color.second};
  font-family: ${({ theme }) => theme.font.secondary};
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.third};
  }

  &::placeholder {
    color: #797979;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  outline: none;
  background: #0e141b;
  border: 1px solid #252c3d;
  font-size: 15px;
  color: ${({ theme }) => theme.color.second};
  font-family: ${({ theme }) => theme.font.secondary};
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.third};
  }

  &::placeholder {
    color: #797979;
  }
`;

export const ErrorMessageWrapper = styled.div`
  min-height: 18px;
  font-size: 13px;
  color: #ff5252;
  margin-top: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.secondary};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.second};
  padding: 12px 28px;
  border: none;
  background-color: ${({ theme }) => theme.color.fifth};
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.third};
    box-shadow: 0 0 15px ${({ theme }) => theme.color.third};
  }
`;