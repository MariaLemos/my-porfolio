import { useAppContext } from "AppContext";
import Card from "components/commons/card";
import { ErrorMessage } from "components/commons/errorMessage";
import TyperWritter from "components/commons/typerWritter";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components/macro";
import LOCALE from "../../../config/locale.json";
import { ContactForm } from "./contactForm";

export const ContactContainer: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const { lang } = useAppContext();
  const locale = LOCALE[lang].contact;
  const { getValues } = useFormContext();
  switch (status) {
    case "success":
      return (
        <FeedbackCard>
          <TyperWritter text={locale.thanks} />
        </FeedbackCard>
      );
    case "error":
      return <ErrorMessage emailMessage={getValues("mensage")} />;
    case "loading":
      return (
        <FeedbackCard>
          <TyperWritter text={locale.sending} />
        </FeedbackCard>
      );
    case "idle":
      return <ContactForm setStatus={setStatus} />;
  }
};

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
