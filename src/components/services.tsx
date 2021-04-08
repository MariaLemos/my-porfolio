import React from "react";
import { FaCode, FaGlobe } from "react-icons/fa";
import SectionTitle from "./commons/sectionTitle";

export const Services: React.FC = () => {
  const servicesList = [
    {
      name: "desenvolvimento de sites",
      desc:
        "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc:
        "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc:
        "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc:
        "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
    {
      name: "desenvolvimento de sites",
      desc:
        "Lorem ipsum Lorem Ipusn adkahkjahd adhajhdjkakhd a hdahdjha  ahdjkahdha",
      icon: FaGlobe,
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <SectionTitle title={"Serviços"} icon={FaCode} />

        <div className="sibling-fade">
          {servicesList.map((service, index) => (
            <a href="#contato" key={index} className="servico sombra ">
              <div className="">
                {service.icon({})}
                <div className="project-info">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
