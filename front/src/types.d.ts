type OwnerData = {
  name: string;
  location: string;
  avatar_url: string;

  bio: string;
  contact: Contact;
};
type Contact = {
  linkedin?: string;
  email: string;
  github?: string;
};
type Project = {
  languages: string[];
  name: string;
  html_url: string;
  description: string;
  homepage: string;
};
type TimeEvent = Graduaction | Work;
type Graduaction = {
  title: string;
  institution: string;
  date: string;
  projects?: { name: string; description: string }[];
};
type Work = {
  title: string;
  institution: string;
  date: string;
  ativits?: string;
  projects?: { name: string; description: string }[];
};
type Resume = {
  graduaction: Graduaction[];
  courses: {
    name: string;
    instituicion: string;
    hours: number;
  }[];

  workExperience: Work[];
};
type BffResponse = {
  resume: Resume;
  projects: Project[];
  profile: OwnerData;
};
type Message = {
  type: "success" | "error" | "info";
  message: string;
};
