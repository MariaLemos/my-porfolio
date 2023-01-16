import { useEffect, useState } from "react";
import { getInfo } from "./api/bff";
import { AppContext } from "./AppContext";

export const AppProvider: React.FC<{}> = ({ children }) => {
  const [status, setStatus] = useState<Status>("loading");
  const [lang, changeLang] = useState<Lang>("pt-br");
  const [gitProjectsInfo, setGitProjectsInfo] = useState<Project[]>([
    {
      languages: [],
      name: " ",
      html_url: "",
      description: "",
      homepage: "",
    },
  ]);
  const [resumeInfo, setResumeInfo] = useState<Resumes>({
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
  const refreshData = (bffResponse: BffResponse) => {
    if (!bffResponse) {
      return;
    }
    switch (bffResponse.type) {
      case "PROFILE":
        setGitProjectsInfo(bffResponse.projects);
        setProfileInfo(bffResponse.profile);
        return setStatus("success");
      case "RESUMES":
        setResumeInfo(bffResponse.resumes);

        return setStatus("success");
      case "ALL":
        const { projects = [], profile, resumes } = bffResponse;

        setGitProjectsInfo(projects);
        setProfileInfo(profile);
        setResumeInfo(resumes);

        return setStatus("success");
      case "LOGIN":
        setIsLogged(true);
        return setStatus("success");
    }
  };

  useEffect(() => {
    if (status !== "success") {
      setStatus("loading");
      getInfo();
    }
    const loggedIn = Boolean(localStorage.getItem("access-token"));
    setIsLogged(loggedIn);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    console.log(status);
  }, [status]);
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
        profile: profileInfo,
        resumes: resumeInfo,
        projects: gitProjectsInfo,
        setStatus,
        refreshData,
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
