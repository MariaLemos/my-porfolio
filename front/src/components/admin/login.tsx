import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputComponent from "../commons/input";
import Button from "../commons/button";
import { FaLockOpen } from "react-icons/fa";

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm({});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <section>
      <LoginForm onSubmit={onSubmit}>
        <h1>{`<Admin/>`}</h1>
        <InputComponent
          name="name"
          type="text"
          label="nome"
          control={control}
          rules={{ required: true }}
        />
        <InputComponent
          name="senha"
          type="password"
          label="senha"
          control={control}
          rules={{ required: true }}
        />
        <Button text="Entrar" icon={FaLockOpen}></Button>
      </LoginForm>
    </section>
  );
};
export default Login;

const LoginForm = styled.form`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  @media (max-width: 600px) {
    width: 100%;
  }
  h1 {
    font-size: 3rem;
  }
`;
