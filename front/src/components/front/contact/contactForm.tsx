import { useRef } from "react";
import { send } from "emailjs-com";
import { useFormContext } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import TextAreaComponent from "components/commons/textarea";
import useIntersection from "components/commons/useIntersection";
import LOCALE from "config/locale.json";

export const ContactForm: React.FC<{ setStatus: (status: Status) => void }> = ({
  setStatus,
}) => {
  const { lang } = useAppContext();
  const locale = LOCALE[lang].contact;
  const { handleSubmit, control } = useFormContext();

  const ref = useRef<HTMLFormElement>(null);
  const inViewport = useIntersection(ref);

  const onSubmit = handleSubmit((data) => {
    setStatus("loading");

    try {
      send(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        data,
        process.env.REACT_APP_USER_ID
      ).then((response) => {
        setStatus("success");
      });
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  });
  return (
    <Form onSubmit={onSubmit} ref={ref} animationStart={inViewport}>
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
    </Form>
  );
};
const Form = styled.form<{ animationStart: boolean }>`
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
  @media (max-width: 600px) {
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
