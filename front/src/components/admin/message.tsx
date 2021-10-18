import { useAdminContext } from "./adminContext";
import styled from "styled-components";
const Message: React.FC = () => {
  const { showMessage } = useAdminContext();
  return <> {showMessage && <Messagem>Atualizado com sucesso</Messagem>}</>;
};
export default Message;
const Messagem = styled.span`
  color: green;
  padding: 1rem;
`;
