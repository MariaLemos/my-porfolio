import React from "react";
import { FaCalendar, FaTerminal } from "react-icons/fa";
import styled from "styled-components";

const Timeline: React.FC<{ events: TimeEvent[] }> = ({ events }) => {
  return (
    <TimelineWrapper>
      {events.map((event, i) => (
        <EventWrapper key={i}>
          <FaTerminal />
          <div>
            <h3>
              {event.title}- {event.institution}
            </h3>
            <p className="time">
              <FaCalendar />
              {event.date}
            </p>
            {/* {event?.ativits && <p>{event.ativits}</p>} */}
            {event.projects && (
              <div className="xp">
                <h4>Projetos</h4>
                <ul>
                  {event.projects.map((project, i) => (
                    <li className="projeto" key={i}>
                      {project.name}
                      {project.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
  margin: 1rem 0;
`;
const EventWrapper = styled.li`
  display: flex;
  padding-bottom: 30px;
  border-bottom: rgba(255, 255, 255, 0.5) dashed 2px;
  margin-bottom: 20px;
  > svg {
    color: #9b6ed0;
    margin: 0 0.5rem;
    margin-left: 3px;
    font-size: 20px;
  }
`;
