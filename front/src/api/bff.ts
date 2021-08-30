import axios, { AxiosError } from "axios";
import CONFIG from "../config/index.json";

export async function getInfo(): Promise<BffResponse> {
  try {
    const res = await axios({
      url: `/`,
      method: "GET",
      baseURL: CONFIG.bffUrl,
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
}

export async function login(data: {
  username: string;
  password: string;
}): Promise<string> {
  try {
    const res = await axios({
      url: `/auth/login`,
      method: "POST",
      baseURL: CONFIG.bffUrl,
      data,
    });

    if (res.status === 201) {
      const token: string = res.data["access-token"];
      localStorage.setItem("access-token", token);

      return "success";
    }
    return res.statusText;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 401) {
      return "ops! Por favor verifique seu usuario e senha";
    }
    return err.message;
  }
}
