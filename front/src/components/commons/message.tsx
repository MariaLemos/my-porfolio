import styled, { css, keyframes } from "styled-components";
import { FaCheck, FaFile, FaTimesCircle } from "react-icons/fa";
import { useAppContext } from "AppContext";
export const MessageComponent: React.FC = () => {
  const { message } = useAppContext();
  const Icon = () => {
    switch (message?.type) {
      case "success":
        return FaCheck({});

      case "error":
        return FaTimesCircle({});
      case "info":
        return FaFile({});
    }
  };

  return message ? (
    <Messagem type={message.type}>
      {Icon()}
      {message.message}
    </Messagem>
  ) : null;
};

const a = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
const Messagem = styled.span<{ type: Message["type"] }>`
  position: fixed;
  top: calc(50% - 10vw / 2);
  right: 35%;
  color: #fff;
  width: 100%;
  height: 10vw;
  max-width: 30vw;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999999;
  text-align: center;
  border-radius: 1em;
  outline: 2px #000;
  animation: ${a} 200ms;
  svg {
    font-size: 2rem;
    margin: 0;
  }
  ${({ type }) => {
    switch (type) {
      case "success":
        return css`
           {
            background-color: rgba(0, 128, 0, 0.9);
          }
        `;
      case "error":
        return css`
           {
            background-color: rgba(192, 57, 57, 0.9);
          }
        `;
      case "info":
        return css`
           {
            background-color: rgba(0, 0, 255, 0.9);
          }
        `;
    }
  }};
  @media (max-width: 500px) {
    width: calc(100% - 5rem);
    left: 4rem;
  }
`;
