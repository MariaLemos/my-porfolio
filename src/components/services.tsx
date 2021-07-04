import React from "react";
import { FaCode, FaGlobe } from "react-icons/fa";
import styled from "styled-components";
import Card from "./commons/card";
import SectionTitle from "./commons/sectionTitle";
import SiblingFade from "./commons/siblingFade";

export const Services: React.FC = () => {
  const servicesList = [
    {
      name: "desenvolvimento de sites",
      desc: "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc: "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc: "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc: "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc: "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
  ];
  return (
    <ServicesWrapper>
      <SectionTitle title={"Serviços"} icon={FaCode} />

      <SiblingFade>
        {servicesList.map((service, index) => (
          <ServiceCard key={index} title={service.name} icon={service.icon}>
            <span>{service.desc}</span>
          </ServiceCard>
        ))}
      </SiblingFade>
    </ServicesWrapper>
  );
};
const ServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const ServiceCard = styled(Card)`
  min-width: 32%;
  text-align: center;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    width: 100%;
    text-align: center;
  }
`;

export default Services;
