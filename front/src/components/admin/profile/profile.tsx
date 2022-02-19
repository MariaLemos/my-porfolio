import { updateUserInfo } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import { socialNet } from "components/commons/socialMap";
import { useForm } from "react-hook-form";
import { FaAddressCard, FaArrowCircleRight, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

const ProfileComponent: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { profile } = useAppContext();
  const { setMessage } = useAdminContext();
  const onSubmit = handleSubmit(async (newData) => {
    const subTitlesArray: [] = newData?.subTitle?.split(",") ?? [];
    const result = await updateUserInfo({
      profile: { ...newData, subTitle: [...subTitlesArray] },
    });
    setMessage(result);
  });
  const contact = profile.contact;
  const networkNames = Object.keys(contact) as Array<keyof Contact>;
  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>
          <FaAddressCard />
          Informaçoes basicas
        </legend>
        <InputComponent
          control={control}
          name={"name"}
          type="text"
          label={"nome"}
          defaultValue={profile.name}
        />
        <InputComponent
          control={control}
          name={"subTitle"}
          type="text"
          label={"subtitulo"}
          defaultValue={profile.subTitle.join(",")}
        />
        <InputComponent
          control={control}
          name={"objetive"}
          type="text"
          label={"objetivo"}
          defaultValue={profile.objetive}
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
export default ProfileComponent;
const Form = styled.form`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;
