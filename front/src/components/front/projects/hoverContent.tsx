import { FaCode, FaLocationArrow } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../../../AppContext";
import LOCALE from "../../../config/locale.json";

export const HoverContent: React.FC<{
  homepage?: string;
  gitUrl?: string;
  className?: string;
}> = ({ homepage, gitUrl, className }) => {
  const { lang } = useAppContext();
  const locale = LOCALE[lang].projects;
  return (
    <ProjectImagesHover className={className}>
      <Content>
        {homepage && (
          <LinkButton href={homepage}>
            <FaLocationArrow /> <span> {locale.visit}</span>
          </LinkButton>
        )}
        {gitUrl && (
          <LinkButton href={gitUrl}>
            <FaCode />
            <span>{locale.show}</span>
          </LinkButton>
        )}
      </Content>
    </ProjectImagesHover>
  );
};

const ProjectImagesHover = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: -0%;
  opacity: 0;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  transition: animation 8s;
  background-color: rgba(0, 0, 0, 0.7);

  padding: 1rem;
  transition: 1s;
`;
const Content = styled.div`
  display: flex;
  align-items: center;

  align-self: center;
  width: 100%;
  margin: 1rem auto;
  font-size: 1.2rem;
  justify-content: space-evenly;
  height: 100%;
  flex-wrap: wrap;
`;
const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  svg {
    flex-shrink: 0;
    margin: 0;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: ${({ theme }) => theme.purple};
  }
`;
