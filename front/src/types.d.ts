type Profile = {
  name: string;
  location: string;
  avatar_url: string;

  contact: Contact;
};
type Contact = {
  linkedin: string;
  email: string;
  github: string;
  site: string;
  whatsapp: string;
  codepen: string;
};
type Project = {
  languages: string[];
  name: string;
  html_url: string;
  description: string;
  homepage: string;
};
type TimeEvent = {
  title: string;
  institution: string;
  date: string;
  ativits?: string;
  projects?: { name: string; description: string }[];
};

type Resume<L = Lang> = {
  lang: L;
  softSkills: { name: string }[];
  subTitles: string[];
  bio: string;
  graduaction: TimeEvent[];
  courses: Courses[];
  workExperience: TimeEvent[];
  languages: Language[];
  hardSkills: { name: string }[];
};
type Language = {
  name: string;
  level: string;
  certificate?: string;
};
type Courses = {
  name: string;
  instituicion: string;
  hours: number;
};
type BffResponse = {
  userId: string;
  resumes: { [key in Lang]: Resume<key> };
  projects: Project[];
  profile: Profile;
};
type Message<T = "success" | "error" | "info"> = {
  type: T;
  message: string;
};
type Lang = "pt-br" | "en-us";
type TypeForm = "resume.workExperience" | "resume.graduaction";
type LoginForm = { username: string; password: string };
type TypeDataForm = TimeEvent | Profile;
type Status = "idle" | "loading" | "success" | "error";

type RequestResponse<T> = (Message<"success"> & { data: T }) | Message<"error">;
declare module "*.ttf" {
  const content: any;
  export default content;
}
