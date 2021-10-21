import Button from "components/commons/button";
import { useState } from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import AddForm from "./addForm";

const TimeEventComponent: React.FC<{
  dataArray: TimeEvent[];
  type: "workExperience" | "graduaction";
}> = ({ dataArray, type }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Form>
      {dataArray.map((item: Graduaction | Work) => (
        <Item>{<AddForm data={item} type={type} />}</Item>
      ))}
      {!showForm ? (
        <AddButton
          icon={FaPlus}
          text={"Adicionar"}
          onClickHandler={() => setShowForm(true)}
        />
      ) : (
        <AddForm type={type} />
      )}
    </Form>
  );
};
export default TimeEventComponent;
const Form = styled.div`
  width: 100%;
`;
const Item = styled.div``;
const AddButton = styled(Button)`
  width: 100%;
`;
const EditButton = styled(Button)`
  width: 100%;
`;
