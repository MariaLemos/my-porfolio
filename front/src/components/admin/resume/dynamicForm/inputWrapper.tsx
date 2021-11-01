import InputComponent from "components/commons/input";
import TextAreaComponent from "components/commons/textarea";
import { useFormContext } from "react-hook-form";
import ProjectsFieldComponent from "./projectsField";

const InputSwitch: React.FC<{
  fieldName: string;
  label: string;
}> = ({ fieldName, label }) => {
  const { control } = useFormContext();
  const separatedFieldName = fieldName.split(".");

  switch (separatedFieldName[2]) {
    case "projects":
      return <ProjectsFieldComponent fieldName={fieldName} />;
    case "date":
      return (
        <InputComponent
          name={fieldName}
          label={label}
          control={control}
          type="text"
        />
      );
    case `ativits`:
      return (
        <TextAreaComponent name={fieldName} label={label} control={control} />
      );
    default:
      return (
        <InputComponent name={fieldName} label={label} control={control} />
      );
  }
};
export default InputSwitch;
