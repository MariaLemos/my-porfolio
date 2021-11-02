import React from "react";
import { FaMapMarker } from "react-icons/fa";
import styled from "styled-components";
import Card from "../../../commons/card";

const Resume: React.FC<{ owner: Profile }> = ({ owner }) => {
  const { name, location, avatar_url, bio } = owner;
  return (
    <ResumeWrapper>
      <Photo>
        <img src={avatar_url} alt="" />
      </Photo>
      <TextContent>
        <h3>{name}</h3>
        <span>
          <FaMapMarker /> {location}
        </span>
        <p>{bio}</p>
      </TextContent>
    </ResumeWrapper>
  );
};

export default Resume;
const ResumeWrapper = styled(Card)`
  display: flex;

  grid-area: about;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
const Photo = styled.div`
  width: 150px;
  height: fit-content;
  background-color: ${(props) => props.theme.purple};
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  flex: 1;
  img {
    min-width: 150px;
    width: 100%;
    height: auto;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-radius: 30px;
  }
`;
const TextContent = styled.div`
  padding: 1rem;
  width: 100%;
  span {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;
  }
  p {
    margin: 0.5rem;
  }
`;
