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

      localStorage.setItem("access-token", token);

      return { type: "success", message: "autenticado com sucesso!" };
    }
    return { type: "error", message: res.statusText };
  } catch (error) {
    const e = error as AxiosError;
    if (e.response?.status === 401) {
      return { type: "error", message: "por favor verifique usuario e senha" };
    }
    return errorMessage(e);
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
  } catch (error) {
    const e = error as AxiosError;
    if (e.response?.status === 400) {
      return { type: "error", message: "por favor verifique as configuracoes" };
    }
    return errorMessage(e);
  }
}
export async function updateUserInfo(
  data: DeepPartial<BffResponse>
): Promise<Message> {
  try {
    const res = await axios({
      url: `/userInfo/${CONFIG.userId}`,
      method: "PATCH",
      baseURL: CONFIG.bffUrl,
      data,
    });

    return res.status === 200
      ? { type: "success", message: "perfil atualizado com sucesso!" }
      : { type: "error", message: "erro ao alterar dados do usuario" };
  } catch (e) {
    return errorMessage(e);
  }
}
export async function updateResumeInfo(
  data: DeepPartial<Resume>
): Promise<Message> {
  try {
    const res = await axios({
      url: `/resume/${CONFIG.userId}`,
      method: "PATCH",
      baseURL: CONFIG.bffUrl,
      data,
    });

    return res.status === 200
      ? { type: "success", message: "curriculo atualizado com sucesso!" }
      : { type: "error", message: "erro ao alterar curriculo" };
  } catch (e) {
    return errorMessage(e);
  }
}
export async function putResume(data: Partial<Resume>): Promise<Message> {
  try {
    const res = await axios({
      url: `/resume/${CONFIG.userId}`,
      method: "PUT",
      baseURL: CONFIG.bffUrl,
      data,
    });
    console.log(res);
    return res.status === 200
      ? { type: "success", message: "curriculo atualizado com sucesso!" }
      : { type: "error", message: "erro ao alterar curriculo" };
  } catch (e) {
    return errorMessage(e);
  }
}
export async function putUserInfo(
  data: Partial<BffResponse>
): Promise<Message> {
  try {
    const res = await axios({
      url: `/userInfo/${CONFIG.userId}`,
      method: "PUT",
      baseURL: CONFIG.bffUrl,
      data,
    });

    return res.status === 201
      ? { type: "success", message: "curriculo atualizado com sucesso!" }
      : { type: "error", message: "erro ao alterar curriculo" };
  } catch (e) {
    return errorMessage(e);
  }
}
const errorMessage = (error: unknown): Message => {
  const e = error as AxiosError;

  return { type: "error", message: e.message };
};
