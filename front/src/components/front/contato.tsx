import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import SectionTitle from "../commons/sectionTitle";
import Button from "../commons/button";
import TyperWritter from "../commons/typerWritter";
import Card from "../commons/card";
import GirlTyping from "../commons/girltyping";
import Social from "./social";
import InputComponent from "../commons/input";
import TextAreaComponent from "../commons/textarea";
import LOCALE from "../../config/locale.json";
import { useAppContext } from "AppContext";
import useIntersection from "components/commons/useIntersection";
import { ErrorMessage } from "components/commons/errorMessage";

const Contato: React.FC = () => {
  const { handleSubmit, control, getValues } = useForm({});
  const [status, setStatus] = useState("idle");

  const onSubmit = handleSubmit((data) => {
    setStatus("loading");

    try {
      send(
        process.env.SERVICE_ID ?? "",
        process.env.TEMPLATE_ID ?? "",
        data,
        process.env.USER_ID
      ).then((response) => {
        setStatus("success");
      });
    } catch {
      setStatus("error");
    }
  });
  const { lang } = useAppContext();
  const locale = LOCALE[lang].contact;
  const ref = useRef<HTMLFormElement>(null);
  const inViewport = useIntersection(ref);
  return (
    <ContactWrapper id="contato">
      <SectionTitle title={locale.title} icon={FaEnvelope} />

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
      {status === "error" && (
        <ErrorMessage emailMessage={getValues("mensage")} />
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
