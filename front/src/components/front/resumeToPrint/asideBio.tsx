import { useAppContext } from "AppContext";
import styled from "styled-components";
import linkedin from "assets/linkedin.png";
import whatsapp from "assets/whatsapp.png";
import email from "assets/email.png";
import github from "assets/github.png";
import globe from "assets/globe.png";

export const AsideBio: React.FC = () => {
  const { profile, resume } = useAppContext();
  const { avatar_url, objetive, contact } = profile;

  const iconsMap: { [key in keyof Contact]: string } = {
    linkedin,
    whatsapp,
    email,
    github,
    site: globe,
  };
  return (
    <Apresentation>
      <Photo src={avatar_url} alt="foto" />
      {objetive && (
        <BioSection>
          <BioSectionTitle>Objetivo</BioSectionTitle>
          <p>{objetive}</p>
        </BioSection>
      )}
      <BioSection>
        <BioSectionTitle>Tecnologias</BioSectionTitle>
        <HabilitsWrapper>
          {resume.hardSkills.map((habilit, i) => (
            <HabilitTag key={i}>{habilit}</HabilitTag>
          ))}
        </HabilitsWrapper>
      </BioSection>
      <BioSection>
        <BioSectionTitle>Idiomas</BioSectionTitle>
        {resume?.languages?.map((linguagem) => (
          <p>
            {linguagem.name}
            {linguagem.level} - {linguagem.certificate}
          </p>
        ))}
      </BioSection>
      <ContactSection>
        <BioSectionTitle>Contato</BioSectionTitle>

        {Object.keys(profile.contact).map((key, i) => {
          return (
            <SocialItem key={i}>
              <img src={iconsMap[key as keyof Contact]} alt={key} />
              <span> {contact[key as keyof Contact]}</span>
            </SocialItem>
          );
        })}
      </ContactSection>
    </Apresentation>
  );
};
const Apresentation = styled.div`
  grid-area: bio;
  background-color: #191919;
  padding: 1rem;
  color: #fff;
`;
const BioSectionTitle = styled.h6`
  grid-area: title;
  color: ${(props) => props.theme.purple};
  text-transform: capitalize;
  font-size: 1rem;
  word-spacing: 1.2rem;
  &:before {
    content: ">";
    margin-right: 1ch;
  }
`;
const BioSection = styled.div`
  margin: 0.5rem 0;
`;
const HabilitsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: auto;
`;
const HabilitTag = styled.span`
  background-color: ${(props) => props.theme.purple};
  font-size: 0.8rem;
  padding: 0.2rem 0.3rem;
  margin: 0.2rem;
  text-align: center;
`;

const Photo = styled.img`
  width: 100%;
  height: fit-content;
  background-color: purple;
`;
const ContactSection = styled(BioSection)``;
const SocialItem = styled.span`
  padding-top: 0.25rem;
  display: flex;
  align-items: center;

  border-radius: 15px;

  line-height: 1.5;
  font-size: 0.8rem;

  img {
    width: 1rem;
    margin: 0 0.5rem;
  }
`;
