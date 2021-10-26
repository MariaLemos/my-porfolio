import InputComponent from "components/commons/input";
import TextAreaComponent from "components/commons/textarea";
import { useFormContext } from "react-hook-form";

const InputSwitch: React.FC<{
  fieldName: string;
  label: string;
  value: string;
}> = ({ fieldName, label, value }) => {
  const { control } = useFormContext();
  const separatedFieldName = fieldName.split(".");

  switch (separatedFieldName[2]) {
    case "projects":
      return <>a</>;
    case "date":
      return (
        <InputComponent
          name={fieldName}
          label={label}
          control={control}
          type="date"
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
