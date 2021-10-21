import axios, { AxiosError } from "axios";
import { DeepPartial } from "react-hook-form";
import CONFIG from "../config/index.json";

export async function getInfo(): Promise<BffResponse> {
  try {
    const res = await axios({
      url: `/userInfo/${CONFIG.userId}`,
      method: "GET",
      baseURL: CONFIG.bffUrl,
    });

    return res.data;
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function login(data: {
  username: string;
  password: string;
}): Promise<Message> {
  try {
    const res = await axios({
      url: `/auth/login`,
      method: "POST",
      baseURL: CONFIG.bffUrl,
      data,
    });

    if (res.status === 201) {
      const token: string = res.data["access_token"];
      console.log(res.data, token);
      localStorage.setItem("access-token", token);

      return { type: "success", message: "autenticado com sucesso!" };
    }
    return { type: "error", message: res.statusText };
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 401) {
      return { type: "error", message: "por favor verifique usuario e senha" };
    }
    return { type: "error", message: err.message };
  }
}
export async function updateGit(): Promise<Message> {
  try {
    const res = await axios({
      url: `/gitInfo/${CONFIG.userId}`,
      method: "GET",
      baseURL: CONFIG.bffUrl,
    });

    return res.status === 200
      ? { type: "success", message: "Github sincronizado com sucesso!" }
      : { type: "error", message: "erro ao recuperar dados do github" };
  } catch (e) {
    throw new Error(e as string);
  }
}
export async function updateUserInfo(
  data: DeepPartial<BffResponse>
): Promise<Message> {
  try {
    const res = await axios({
      url: `/userInfo/${CONFIG.userId}`,
      method: "POST",
      baseURL: CONFIG.bffUrl,
      data,
    });

    return res.status === 201
      ? { type: "success", message: "perfil atualizado com sucesso!" }
      : { type: "error", message: "erro ao alterar dados do usuario" };
  } catch (e) {
    throw new Error(e as string);
  }
}
