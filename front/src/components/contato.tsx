import React, { useState } from "react";
import styled from "styled-components";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { FaAddressCard, FaEnvelope } from "react-icons/fa";
import SectionTitle from "./commons/sectionTitle";
import Button from "./commons/button";
import TyperWritter from "./commons/typerWritter";
import Card from "./commons/card";
import GirlTyping from "./commons/girltyping";
import Social from "./social";
import CONFIG from "../config/index.json";
import InputComponent from "./commons/input";
import TextAreaComponent from "./commons/textarea";

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
  return (
    <ContactWrapper id="contato">
      <SectionTitle title={"Contato"} icon={FaAddressCard} />

      {status === "idle" && (
        <ContactForm onSubmit={onSubmit}>
          <InputComponent
            name="name"
            type="text"
            label="nome"
            control={control}
            rules={{ required: true }}
          />
          <InputComponent
            name="email"
            type="email"
            label="email"
            control={control}
            rules={{ required: true }}
          />

          <TextAreaComponent
            name="mensage"
            label={"mensagem"}
            control={control}
            rules={{ required: true }}
          />
          <Button text="Enviar" icon={FaEnvelope}></Button>
        </ContactForm>
      )}
      {status === "loading" && (
        <FeedbackCard>
          <TyperWritter text="Enviando..." />
        </FeedbackCard>
      )}
      {status === "success" && (
        <FeedbackCard>
          <TyperWritter text="Obrigada pelo contato!" />
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
`;

const ContactForm = styled.form`
  padding: 1rem 0;
  display: flex;

  flex-direction: column;
  width: 60%;
  align-items: center;
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
