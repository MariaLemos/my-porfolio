import { updateUserInfo } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import { socialNet } from "components/commons/socialMap";
import { useForm } from "react-hook-form";
import { FaAddressCard, FaArrowCircleRight, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

const ContactComponent: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { profile } = useAppContext();
  const { setMessage } = useAdminContext();
  const onSubmit = handleSubmit(async (newData) => {
    const subTitlesArray: [] = newData?.subTitle?.split(",") ?? [];
    const result = await updateUserInfo({
      profile: newData,
    });
    setMessage(result);
  });
  const contact = profile.contact;
  const networkNames = Object.keys(contact) as Array<keyof Contact>;
  return (
    <Form onSubmit={onSubmit}>
      <h1>Contato</h1>
      <fieldset>
        <legend>
          <FaAddressCard />
          Informaçoes básicas
        </legend>
        <InputComponent
          control={control}
          name={"name"}
          type="text"
          label={"nome"}
          defaultValue={profile.name}
        />
      </fieldset>
      <fieldset>
        <legend>
          <FaEnvelope />
          Contato
        </legend>

        {networkNames.map((networkName, i) => {
          const { icon } = socialNet(networkName, contact[networkName]);
          return (
            <InputComponent
              key={i}
              control={control}
              name={`contact.${networkName}`}
              type="text"
              label={networkName}
              defaultValue={contact[networkName]}
              icon={icon}
            />
          );
        })}
      </fieldset>
      <Button text="enviar" icon={FaArrowCircleRight} />
    </Form>
  );
};
export default ContactComponent;
const Form = styled.form`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;
