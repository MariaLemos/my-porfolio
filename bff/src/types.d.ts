type Profile = {
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
type TimeEvent = {
  title: string;
  institution: string;
  date: string;
  ativits?: string;
  projects?: { name: string; description: string }[];
};

type Resume = {
  userId: string;
  courses: Courses[];
  graduaction: TimeEvent[];
  workExperience: TimeEvent[];
};
type Courses = {
  name: string;
  instituicion: string;
  hours: number;
};
type BffResponse = {
  resume: Resume;
  projects: Project[];
  profile: Profile;
  userId: string;
};
