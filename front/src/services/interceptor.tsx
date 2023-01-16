import { useAppContext } from "AppContext";
import axios, { AxiosResponse } from "axios";
import Loading from "components/commons/loading";
import { MessageComponent } from "components/commons/message";

const DEBUG = process.env.REACT_APP_NODE_ENV !== "production";

type BffResMap = { [key in BffResponse["type"]]: string };
const LocaleMessage: BffResMap = {
  PROFILE: "Informacao atualizada com sucesso",
  RESUMES: "Resumo atualizado com sucesso",
  LOGIN: "autenticado com sucesso!",
  ALL: "",
};
export const httpBffClient = axios.create({
  baseURL: process.env.REACT_APP_BFF_URL,
});
export const StatusInterceptor: React.FC = ({ children }) => {
  const { setMessage, refreshData, setIsLogged, setStatus, status } =
    useAppContext();

  httpBffClient.interceptors.response.use(
    (response: AxiosResponse<BffResponse>) => {
      //Response Successful
      if (response && response.data) {
        if (response.status === 201 && response.data.type === "LOGIN") {
          const token: string = response.data["access_token"];
          localStorage.setItem("access-token", token);
          setTimeout(() => setIsLogged(true), 1000);
          setMessage({
            type: "success",
            message: LocaleMessage[response.data.type],
          });
        }
        if (response.status === 202) {
          setMessage({
            type: "success",
            message: LocaleMessage[response.data.type],
          });
        }

        refreshData(response.data);
        return response.data;
      }
    },
    (error) => {
      if (error?.status?.code === 400) {
        setMessage({
          type: "error",
          message: "por favor verifique as configuracoes do github",
        });
      }
      if (error?.status?.code === 401) {
        setMessage({
          type: "error",
          message: "por favor verifique usuario e senha",
        });
      } else {
        //dispatch your error in a more user friendly manner*
        setStatus("error");
        console.log("error", error);
        if (DEBUG) {
          //easier debugging

          console.group("Error");

          console.log("error", error);

          console.groupEnd();
        }
      }
    }
  );
  return (
    <>
      <MessageComponent />
      {status !== "error" && <Loading />}
      {children}
    </>
  );
};

export default StatusInterceptor;
