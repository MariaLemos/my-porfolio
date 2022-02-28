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

type Resume = {
  objetive: string;
  softSkills: { name: string }[];
  subTitle: string[];
  bio: string;
  graduaction: TimeEvent[];
  courses: Courses[];
  workExperience: TimeEvent[];
  languages: Language[];
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
  resume: { [key in Lang]: Resume } & { hardSkills: { name: string }[] };
  projects: Project[];
  profile: Profile;
};
type Message = {
  type: "success" | "error" | "info";
  message: string;
};
type Lang = "pt-br" | "en-us";
type TypeForm = "resume.workExperience" | "resume.graduaction";
type LoginForm = { username: string; password: string };
type TypeDataForm = TimeEvent | Profile;
