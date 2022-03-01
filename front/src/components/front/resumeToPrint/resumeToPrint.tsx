import styled from "styled-components";
import { useAppContext } from "AppContext";
import { AsideBio } from "./asideBio";
import { ForwardedRef } from "react";
import LOCALE from "config/locale.json";

export const ResumetoPrint: React.FC<{
  fref: ForwardedRef<HTMLDivElement>;
}> = ({ fref }) => {
  const {
    lang,
    profile: { name },
    resumes: {
      [lang]: { subTitles, bio, workExperience, graduaction },
    },
  } = useAppContext();

  const locale = LOCALE[lang].resumeToPrint;
  return (
    <Hidden>
      <Page ref={fref}>
        <AsideBio />
        <TextContent>
          <Title>{name}</Title>

          {subTitles && <SubTitles>{subTitles[0]}</SubTitles>}
          <SectionTitle>{locale.personalResume}</SectionTitle>
          <span>{bio}</span>
          <SectionTitle>{locale.workHistory}</SectionTitle>
          {workExperience.map((work, i) => (
            <Experience key={i}>
              <EventTitle>{work.title}</EventTitle>
              <time>{work.date}</time>
              <span>{work.institution}</span>
              <ul>
                {work.ativits?.split(". ").map((ativit, key) => {
                  return ativit !== "" ? <li key={key}>{ativit}</li> : "";
                })}
              </ul>
            </Experience>
          ))}
          <SectionTitle>{locale.studyHistory}</SectionTitle>
          {graduaction.map((course, key) => (
            <Experience key={key}>
              <EventTitle>{course.title}</EventTitle>
              <time>{course.date}</time>
              <span>{course.institution}</span>

              <ul>
                {course.ativits?.split(". ").map((ativit, key) => {
                  return ativit !== "" ? <li key={key}>{ativit}</li> : "";
                })}
              </ul>
            </Experience>
          ))}
        </TextContent>
      </Page>
    </Hidden>
  );
};
const Hidden = styled.div`
  display: none;
`;
const Experience = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "institution date"
    "description description";
  align-items: center;
  margin: 1rem 0;
  * > {
    font-size: 0.8rem;
  }

  time {
    grid-area: date;
    text-align: right;
  }
  span {
    grid-area: institution;
  }
  ul {
    grid-area: description;
    width: 100%;
    padding-left: 20px;
  }
`;
export const EventTitle = styled.h6`
  grid-area: title;
  color: ${(props) => props.theme.purple};
  text-transform: uppercase;
  font-size: 1rem;
  word-spacing: 1.2rem;
  &:before {
    content: ">";
    margin-right: 1ch;
  }
`;

const Page = styled.div`
  width: 780px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "bio text";

  text-align: left;
`;
const SubTitles = styled.h4`
  color: ${(props) => props.theme.purple};
  word-spacing: 1rem;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.purple};
  text-transform: uppercase;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;
const SectionTitle = styled.h5`
  color: ${(props) => props.theme.purple};
  word-spacing: 1rem;
  width: 100%;
  font-size: 1.2rem;
`;

const TextContent = styled.div`
  background-color: #fff;
  grid-area: text;
  padding: 1rem;
  width: auto;
  color: #000;

  span {
    display: flex;
    gap: 1rem;
    margin: 0.5rem 0;

    color: #000;
  }
  p {
    margin: 0.5rem;
    color: #000;
  }
`;
const Title = styled.h3`
  font-size: 2.5rem;
`;
