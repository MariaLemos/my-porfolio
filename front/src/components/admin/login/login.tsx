import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputComponent from "../../commons/input";
import Button from "../../commons/button";
import { FaLockOpen, FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "api/bff";
import { useState } from "react";
import { useAdminContext } from "../adminContext";

const Login: React.FC<{ setHasLoggedIn: (logged: boolean) => void }> = ({
  setHasLoggedIn,
}) => {
  const { setMessage } = useAdminContext();
  const { handleSubmit, control } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = handleSubmit(
    async (data: { username: string; password: string }) => {
      const result = await login(data);
      setMessage(result);
      if (result.type === "success") {
        setTimeout(() => setHasLoggedIn(true), 1000);
      }
    }
  );
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

        <Button text="Entrar" icon={FaLockOpen}></Button>
      </LoginForm>
    </section>
  );
};
export default Login;
const InputAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.blackTransparent};
  height: 48px;

  > button {
    background-color: transparent;
    color: #fff;
    border: none;
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
