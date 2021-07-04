import { FaCode, FaBriefcase } from "react-icons/fa";
import styled from "styled-components";

const ProjectHoverContent: React.FC<{
  homepage?: string;
  gitUrl?: string;
  className?: string;
}> = ({ homepage, gitUrl, className }) => {
  return (
    <HoverContent className={className}>
      {homepage && (
        <a href={homepage}>
          <FaBriefcase /> Visite
        </a>
      )}
      {gitUrl && (
        <a href={gitUrl}>
          <FaCode />
          Ver codigo
        </a>
      )}
    </HoverContent>
  );
};
export default ProjectHoverContent;
const HoverContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  align-self: center;
  width: 100%;
  margin: 1rem auto;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
