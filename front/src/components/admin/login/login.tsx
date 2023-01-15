import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputComponent from "../../commons/input";
import Button from "../../commons/button";
import { FaLockOpen, FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "api/bff";
import { useState } from "react";

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = handleSubmit(async (data: LoginForm) => {
    await login(data);
  });
  return (
    <section>
      <LoginForm onSubmit={onSubmit}>
        <h1>{`<Admin/>`}</h1>

        <InputComponent
          name="username"
          type="text"
          label="nome"
          control={control}
          rules={{ required: true }}
        />
        <InputAndButtonWrapper>
          <InputComponent
            name="password"
            type={showPassword ? "text" : "password"}
            label="senha"
            control={control}
            rules={{ required: true }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </InputAndButtonWrapper>

        <Button text="Entrar" icon={FaLockOpen} />
      </LoginForm>
    </section>
  );
};
export default Login;
const InputAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  height: 50px;

  > button {
    background-color: #000000;
    color: #fff;
    border: none;
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.purple};
  }
`;

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
