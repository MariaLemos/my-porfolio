import { useAppContext } from "AppContext";
import React from "react";
import { FaMapMarker } from "react-icons/fa";
import styled from "styled-components";
import Card from "../../../commons/card";

const Resume: React.FC<{}> = () => {
  const {
    lang,
    resumes: {
      [lang]: { languages, bio, subTitles },
    },
    profile: { name, location, avatar_url },
  } = useAppContext();
  return (
    <ResumeWrapper dataCy={"bio"}>
      <Photo>
        <img id="photo" src={avatar_url} alt="" />
      </Photo>

      <h3>{name}</h3>
      {subTitles && <SubTitles>{subTitles.map((title) => title)}</SubTitles>}
      <Location>
        <FaMapMarker /> {location}
      </Location>
      <Languages>
        <strong>Idiomas: </strong>
        {languages.map((lang, key) => (
          <span key={key}>{`${lang.name} ${lang.level}`}</span>
        ))}
      </Languages>

      <Bio>{bio}</Bio>
    </ResumeWrapper>
  );
};

export default Resume;
const ResumeWrapper = styled(Card)`
  display: grid;
  grid-template-columns: 120px 1fr 150px;
  grid-auto-rows: min-content;
  grid-template-areas:
    "image name name"
    "image subTitles subTitles"
    "image lang location"
    "image bio bio";
  gap: 0.5rem 1rem;
  grid-area: about;
  h3 {
    line-height: 1;
    font-size: 1.5rem;
    grid-area: name;
  }
  @media (max-width: 620px) {
    grid-template-columns: 150px 1fr;
    grid-template-areas:
      "image name"
      "image subTitles"
      "image lang"
      "image location"
      "bio bio";
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "name"
      "subTitles"
      "lang"
      "location"
      "bio";
  }
`;
const Location = styled.span`
  display: flex;
  font-size: 0.8rem;
  grid-area: location;
`;
const SubTitles = styled.span`
  grid-area: subTitles;
`;
const Photo = styled.div`
  grid-area: image;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.purple};
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  flex: 1;
  img {
    min-width: 120px;
    width: 100%;
    height: auto;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-radius: 30px;
  }
`;
const Languages = styled.p`
  font-size: 0.8rem;
  display: flex;
  grid-area: lang;
  > strong {
    color: ${({ theme }) => theme.purple};
  }
  > span {
    padding: 0 1ch;
    text-align: center;
    &:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
`;
const Bio = styled.p`
  grid-area: bio;
`;
