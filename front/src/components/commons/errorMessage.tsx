import { FaBug, FaEnvelope } from "react-icons/fa";
import styled from "styled-components/macro";
import Button from "./button";
import Card from "./card";
import CONFIG from "config/index.json";
import LOCALE from "config/locale.json";
import { useAppContext } from "AppContext";

export const ErrorMessage: React.FC<{
  className?: string;
  emailMessage?: string;
}> = ({ className, emailMessage }) => {
  const { lang } = useAppContext();
  const emailParams = emailMessage
    ? `?body=${emailMessage}`
    : `?subject=erro no site`;
  return (
    <Wrapper title="ops!" icon={FaBug} className={className}>
      <p> {LOCALE[lang].error}</p>
      <Button
        icon={FaEnvelope}
        text="Email"
        href={`mailto:${CONFIG.emailDefault}${emailParams}`}
      ></Button>
    </Wrapper>
  );
};
const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  > div {
    margin: 0;
  }
`;
