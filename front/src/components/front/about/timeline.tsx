import React from "react";
import { FaCalendar, FaTerminal } from "react-icons/fa";
import styled from "styled-components";

const Timeline: React.FC<{ events: TimeEvent[] }> = ({ events }) => {
  return (
    <TimelineWrapper>
      {events.map((event, i) => (
        <EventWrapper key={i}>
          <Icon />

          <Title>{event.title}</Title>
          <Institution>{event.institution}</Institution>
          <Time>
            <FaCalendar />
            <time> {event.date} </time>
          </Time>
          <Description>
            {event.ativits?.split(". ").map((ativit, key) => {
              return ativit !== "" ? <li key={key}>{ativit}</li> : "";
            })}
          </Description>
          {event?.projects && event?.projects?.length > 0 && (
            <Experiences>
              <h4>Projetos</h4>
              <ul>
                {event.projects.map((project, i) => (
                  <li className="projeto" key={i}>
                    <a href={project.description}>
                      <strong>{project.name}</strong> - {project.description}
                    </a>
                  </li>
                ))}
              </ul>
            </Experiences>
          )}
        </EventWrapper>
      ))}
    </TimelineWrapper>
  );
};

export default Timeline;
const TimelineWrapper = styled.ul`
  border-left: 4px solid #9b6ed0;
  color: rgba(255, 255, 255, 0.8);
  list-style: none;
  padding: 0;
`;
const EventWrapper = styled.li`
  padding: 1rem 0;
  border-bottom: rgba(255, 255, 255, 0.5) dashed 2px;
  display: grid;
  grid-template-columns: 30px 1fr 130px;
  grid-template-areas:
    "icon title title"
    ".  institution date"
    ". description description"
    ". projects projects";
  align-items: center;

  &:first-child {
    padding-top: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 370px) {
    grid-template-areas:
      "icon title title"
      ".  date  date"
      ".  institution institution"
      ". description description"
      ". projects projects";
  }
`;
const Institution = styled.span`
  font-size: 0.8rem;
  grid-area: institution;
`;
const Time = styled.span`
  font-size: 0.8rem;
  grid-area: date;
  text-align: right;
  @media (max-width: 370px) {
    text-align: left;
  }
`;
const Title = styled.h3`
  grid-area: title;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Description = styled.ul`
  grid-area: description;
  width: 100%;
  margin-top: 1rem;
  padding-left: 1rem;
  font-size: 0.9rem;
  li::marker {
    font-size: 0.5rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;
const Experiences = styled.div`
  grid-area: projects;
  a {
    color: rgba(255, 255, 255, 0.8);
  }
`;
const Icon = styled(FaTerminal)`
  color: ${({ theme }) => theme.purple};
  margin-left: 3px;
  font-size: 1rem;
  grid-area: icon;
`;
