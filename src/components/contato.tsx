import React from "react";
import styled from "styled-components";
import { useForm, NestedValue } from "react-hook-form";
import { FaAddressCard, FaEnvelope } from "react-icons/fa";
import SectionTitle from "./commons/sectionTitle";
import Button from "./commons/button";
type Inputs = {
  name: string;
  email: string;
  message: string;
};
const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({});
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <section id="contato" className="iaaa">
      <SectionTitle title={"Contato"} icon={FaAddressCard} />
      <ContactForm onSubmit={onSubmit}>
        <InputWrapper>
          <InputStyled
            type="text"
            id="name"
            placeholder=" "
            {...register("name")}
          />
          <span className="line" />
          <Label>Nome</Label>
        </InputWrapper>
        <InputWrapper>
          <InputStyled
            type="email"
            id="email"
            placeholder=" "
            {...register("email")}
          />
          <span className="line" />
          <Label>Email</Label>
        </InputWrapper>
        <InputWrapper>
          <TextAreaStyled placeholder=" " rows={4} {...register("message")} />
          <span className="line" />
          <Label>Mensagem</Label>
        </InputWrapper>
        <Button text="Enviar" icon={FaEnvelope}></Button>
      </ContactForm>
    </section>
  );
};

export default Contato;

const InputWrapper = styled.label`
  width: 100%;
  .line {
    width: 0;
    height: 2px;
    background-color: #9b6ed0;
    display: block;
    transition: 0.5s;
  }
`;
const Label = styled.span`
  position: relative;
  padding: 0.5rem;
  top: -2rem;
  transition: 0.5s ease-in;
`;
const InputStyled = styled.input`
  margin: 0;
  font-size: 1rem;
  height: 3rem;
  padding-left: 0.5rem;
  padding-top: 1rem;
  box-sizing: border-box;
  color: lightgrey;
  width: 100%;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  &:-internal-autofill-selected,
  &:-webkit-autofill {
    appearance: auto;
    background-color: rgba(0, 0, 0, 0.7) !important;
    color: lightgrey !important;
    -webkit-text-fill-color: #fff !important;
  }
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ .line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -3rem;
    }
  }
`;
const TextAreaStyled = styled.textarea`
  margin: 0;
  font-size: 1rem;
  width: 100%;
  border: none;
  padding-left: 0.5rem;
  padding-top: 1.2rem;
  box-sizing: border-box;
  color: lightgrey;
  background-color: rgba(0, 0, 0, 0.7);
  & ~ ${Label} {
    top: -5rem;
  }
  &:focus-visible,
  &:not(:placeholder-shown) {
    outline: none;
    & ~ .line {
      width: 100%;
    }
    & ~ ${Label} {
      font-size: 0.8rem;
      top: -6.1rem;
    }
  }
`;
const ContactForm = styled.form`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
    transition: background-color 5000s ease-in-out 0s;
  }
`;
