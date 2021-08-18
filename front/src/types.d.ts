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
type TimeEvent = {
  title: string;
  institution: string;
  date: string;
  ativits?: string;
  projects?: { name: string; description: string }[];
};
