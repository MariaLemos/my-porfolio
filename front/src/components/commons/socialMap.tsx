import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaCodepen,
} from "react-icons/fa";

type SocialMap = { link: string; icon: any };

export const socialNet = (social: keyof Contact, text: string): SocialMap => {
  switch (social) {
    case "linkedin":
      return {
        link: `https://www.linkedin.com/in/${text}`,
        icon: FaLinkedin,
      };

    case "github":
      return {
        link: `https://github.com/${text}`,
        icon: FaGithub,
      };
    case "email":
      return {
        link: `mailto:${text}`,
        icon: FaEnvelope,
      };
    case "whatsapp":
      return {
        link: `https://api.whatsapp.com/send?phone=${text}`,
        icon: FaWhatsapp,
      };
    case "codepen":
      return {
        link: `https://codepen.io/${text}`,
        icon: FaCodepen,
      };
  }
};
