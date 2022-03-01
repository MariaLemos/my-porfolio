import styled from "styled-components";
import { FaEnvelope } from "react-icons/fa";
import SectionTitle from "../../commons/sectionTitle";
import GirlTyping from "../../commons/girltyping";
import Social from "../social";
import LOCALE from "../../../config/locale.json";
import { useAppContext } from "AppContext";
import { ContactContainer } from "./contact.container";
import { FormProvider, useForm } from "react-hook-form";

const Contact: React.FC = () => {
  const { lang } = useAppContext();
  const locale = LOCALE[lang].contact;
  const methods = useForm({});
  return (
    <ContactWrapper id="contato">
      <SectionTitle title={locale.title} icon={FaEnvelope} />
      <FormProvider {...methods}>
        <ContactContainer />
      </FormProvider>
      <ContactAside>
        <GirlTyping />
        <Social />
      </ContactAside>
    </ContactWrapper>
  );
};

export default Contact;

const ContactAside = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 40%;
  min-width: 200px;
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;
const ContactWrapper = styled.section`
  align-items: flex-start;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
