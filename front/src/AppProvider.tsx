import { useEffect, useState } from "react";
import { getInfo } from "./api/bff";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [status, setStatus] = useState<Status>("loading");
  const [lang, changeLang] = useState<Lang>("pt-br");
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([
    {
      languages: [""],
      name: " string;",
      html_url: "string;",
      description: "string;",
      homepage: "string;",
    },
  ]);
  const [resumeInfo, setResumeInfo] = useState<BffResponse["resumes"]>({
    "pt-br": {
      lang: "pt-br",
      softSkills: [],
      graduaction: [],
      courses: [],
      workExperience: [],
      languages: [],
      subTitles: [],
      hardSkills: [],
      bio: "",
    },
    "en-us": {
      lang: "en-us",
      softSkills: [],
      graduaction: [],
      courses: [],
      workExperience: [],
      hardSkills: [],
      languages: [],
      subTitles: [],
      bio: "",
    },
  });
  const [profileInfo, setProfileInfo] = useState<Profile>({
    name: "",
    location: "",
    avatar_url: "",

    contact: {
      email: "",
      linkedin: "",
      github: "",
      site: window.location.hostname,
      whatsapp: "",
      codepen: "",
    },
  });
  const [message, setMessage] = useState<Message | undefined>(undefined);
  const [isLogged, setIsLogged] = useState(false);
  const refreshData = async () => {
    try {
      const bffResponse: BffResponse = await getInfo();

      if (bffResponse) {
        const { projects = [], resumes, profile } = bffResponse;

        if (projects) {
          setGitProjectsInfo(projects);
        }
        if (profile && profile.name) {
          setProfileInfo(profile);
        }
        if (resumes) {
          setResumeInfo(resumes);
        }
      } else {
        setStatus("error");
        return Promise.reject();
      }
    } catch (e) {
      setStatus("error");
      return Promise.reject();
    }
  };

  useEffect(() => {
    if (status !== "success") {
      setStatus("loading");
      refreshData().then((r) => setStatus("success"));
    }
    const loggedIn = Boolean(localStorage.getItem("access-token"));
    setIsLogged(loggedIn);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (message !== undefined) {
      const id = setTimeout(() => setMessage(undefined), 2000);
      return () => clearTimeout(id);
    }
  }, [message]);
  return (
    <AppContext.Provider
      value={{
        status: status,
        lang: lang,
        changeLang: (newlang) => changeLang(newlang),
        updateResumes: async (request) => {
          if (request.type === "success") {
            await setResumeInfo(request.data);
          }
          setMessage(request);
        },
        profile: profileInfo,
        resumes: resumeInfo,
        projects: gitProjectsInfo,
        refreshData: refreshData,
        setMessage,
        message,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
