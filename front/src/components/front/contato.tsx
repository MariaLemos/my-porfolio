import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { FaAddressCard, FaEnvelope } from "react-icons/fa";
import SectionTitle from "../commons/sectionTitle";
import Button from "../commons/button";
import TyperWritter from "../commons/typerWritter";
import Card from "../commons/card";
import GirlTyping from "../commons/girltyping";
import Social from "./social";
import CONFIG from "../../config/index.json";
import InputComponent from "../commons/input";
import TextAreaComponent from "../commons/textarea";
import LOCALE from "../../config/locale.json";
import { useAppContext } from "AppContext";
import useIntersection from "components/commons/useIntersection";

const Contato: React.FC = () => {
  const { handleSubmit, control } = useForm({});
  const [status, setStatus] = useState("idle");
  const onSubmit = handleSubmit((data) => {
    setStatus("loading");
    send(
      CONFIG.contact.SERVICE_ID,
      CONFIG.contact.TEMPLATE_ID,
      data,
      CONFIG.contact.USER_ID
    ).then((response) => {
      setStatus("success");
    });
  });
  const { lang } = useAppContext();
  const locale = LOCALE[lang].contact;
  const ref = useRef<HTMLFormElement>(null);
  const inViewport = useIntersection(ref);
  return (
    <ContactWrapper id="contato">
      <SectionTitle title={locale.title} icon={FaAddressCard} />

      {status === "idle" && (
        <ContactForm onSubmit={onSubmit} ref={ref} animationStart={inViewport}>
          <InputComponent
            name="name"
            type="text"
            label={locale.labels.name}
            control={control}
            rules={{ required: true }}
          />
          <InputComponent
            name="email"
            type="email"
            label={locale.labels.email}
            control={control}
            rules={{ required: true }}
          />

          <TextAreaComponent
            name="mensage"
            label={locale.labels.message}
            control={control}
            rules={{ required: true }}
          />
          <Button text={locale.send} icon={FaEnvelope}></Button>
        </ContactForm>
      )}
      {status === "loading" && (
        <FeedbackCard>
          <TyperWritter text={locale.sending} />
        </FeedbackCard>
      )}
      {status === "success" && (
        <FeedbackCard>
          <TyperWritter text={locale.thanks} />
        </FeedbackCard>
      )}
      <ContactAside>
        <GirlTyping />
        <Social />
      </ContactAside>
    </ContactWrapper>
  );
};

export default Contato;

const ContactAside = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 5%;
  width: 30%;
  min-width: 200px;
`;
const ContactWrapper = styled.section`
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const FeedbackCard = styled(Card)`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  font-size: 1.5rem;
  width: 60%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ContactForm = styled.form<{ animationStart: boolean }>`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 1s;
  ${({ animationStart }) => {
    if (animationStart) {
      return css`
        opacity: 1;
        transform: translateY(0);
      `;
    }
  }}
  @media (max-width: 500px) {
    width: 100%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
