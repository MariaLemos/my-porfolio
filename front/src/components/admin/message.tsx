import { useAdminContext } from "./adminContext";
import styled, { css } from "styled-components";
import { FaCheck, FaFile, FaTimesCircle } from "react-icons/fa";
const MessageComponent: React.FC = () => {
  const { message } = useAdminContext();
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
  return (
    <MessageWrapper>
      {message && (
        <Messagem type={message.type}>
          {Icon()}
          {message.message}
        </Messagem>
      )}
    </MessageWrapper>
  );
};
export default MessageComponent;
const MessageWrapper = styled.div`
  height: 5vh;
  width: 100%;
`;
const Messagem = styled.span<{ type: Message["type"] }>`
  position: fixed;
  top: 1rem;
  background-color: ${(props) => props.theme.blackTransparent};
  width: 100%;
  display: flex;
  align-items: center;
  ${({ type }) => {
    switch (type) {
      case "success":
        return css`
           {
            color: green;
          }
        `;
      case "error":
        return css`
           {
            color: #c03939;
          }
        `;
      case "info":
        return css`
           {
            color: blue;
          }
        `;
    }
  }};
  padding: 1rem;
`;
