type OwnerData = {
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  email: string;
  bio: string;
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
  projects: Projects[];
  contact: {
    email: string;
    linkedin: string;
  };
};
