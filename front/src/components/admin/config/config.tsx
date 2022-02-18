import { updateUserInfo } from "api/bff";
import { useAppContext } from "AppContext";
import Button from "components/commons/button";
import InputComponent from "components/commons/input";
import { useForm } from "react-hook-form";
import { FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";
import { useAdminContext } from "../adminContext";

const ConfigComponent: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const { profile, refreshData } = useAppContext();
  const { setMessage } = useAdminContext();
  const onSubmit = handleSubmit(async (newData: Profile) => {
    const result = await updateUserInfo({ profile: newData });
    setMessage(result);
    refreshData();
  });
  const contact = profile.contact;

  return (
    <Form onSubmit={onSubmit}>
      <InputComponent
        control={control}
        name={"name"}
        type="text"
        label={"nome"}
        defaultValue={profile.name}
      />
      <InputComponent
        control={control}
        name={"objetive"}
        type="text"
        label={"objetivo"}
        defaultValue={profile.objetive}
      />
      {Object.keys(contact).map((networkName, i) => (
        <InputComponent
          key={i}
          control={control}
          name={`contact.${networkName}`}
          type="text"
          label={networkName}
          defaultValue={contact[networkName as keyof Contact]}
        />
      ))}

      <Button text="enviar" icon={FaArrowCircleRight} />
    </Form>
  );
};
export default ConfigComponent;
const Form = styled.form`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;
