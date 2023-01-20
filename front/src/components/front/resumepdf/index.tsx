import { Page, Text, View, Document, Image, Font } from "@react-pdf/renderer";
import { AppContextType } from "AppContext";
import font from "assets/font.ttf";
import { iconsMap } from "./iconsMap";
import styles from "./styles";
import LOCALE from "config/locale.json";

Font.register({
  family: "Cabin",
  fontStyle: "italic",
  src: font,
  fontWeight: "normal",
  format: "truetype",
});

export const MyDocument: React.FC<{ context: AppContextType }> = ({
  context,
}) => {
  const {
    lang,
    profile: { name, avatar_url, contact },
    resumes: {
      [lang]: {
        subTitles,
        bio,
        workExperience,
        graduaction,
        languages,
        hardSkills,
      },
    },
  } = context;
  const locale = LOCALE[lang].resumeToPrint;
  const networkNames = Object.keys(contact).filter(
    (name) => name !== "codepen"
  ) as Array<keyof Omit<Contact, "codepen">>;

  return (
    //@ts-ignore
    <Document>
      {/* @ts-ignore */}
      <Page size="A4" style={styles.page} wrap={false}>
        <View style={styles.aside}>
          <Image
            src={
              avatar_url ??
              "https://media.licdn.com/dms/image/C4E03AQGfNodn0655GA/profile-displayphoto-shrink_200_200/0/1567362108740?e=1679529600&v=beta&t=MptbiyXheejs7gvK8YfyOGa-FM50KsgxWahvU4xQmk0"
            }
            style={styles.photo}
          />
          <Text
            style={styles.sectionTitle}
          >{`> ${locale.personalResume}`}</Text>
          <Text>{bio}</Text>
          <View>
            <Text style={styles.sectionTitle}>{`> ${locale.tecnology}`}</Text>
            <View style={styles.skills}>
              {hardSkills.map((habilit, i) => (
                <Text style={styles.skill} key={i}>
                  {habilit.name}
                </Text>
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.sectionTitle}>{`> ${locale.languages}`}</Text>
            {languages &&
              languages.map((linguagem, i) => (
                <Text key={i}>
                  {`${linguagem.name} 
                  ${linguagem.level} - ${linguagem.certificate}`}
                </Text>
              ))}
          </View>
          <View>
            <Text style={styles.sectionTitle}>{`> ${locale.contact}`}</Text>

            {networkNames.map((key, i) => {
              return (
                <View style={styles.contact} key={key}>
                  {iconsMap[key]}
                  <Text key={i}>{contact[key]}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>{name}</Text>
          {subTitles && <Text style={styles.subtitle}>{subTitles[0]}</Text>}
          <Text style={styles.sectionTitle}>{locale.workHistory}</Text>
          {workExperience.map((work, i) => (
            <View key={i} style={styles.timeline}>
              <View style={styles.timelineIcon}></View>
              <Text style={styles.timelineTitle}>{work.title}</Text>
              <View style={styles.info}>
                <Text>{work.institution}</Text>
                <Text>{work.date}</Text>
              </View>
              <View style={styles.description}>
                <Text>{work.ativits}</Text>
              </View>
            </View>
          ))}
          <Text style={styles.sectionTitle}>{locale.studyHistory}</Text>
          {graduaction.map((course, key) => (
            <View key={key} style={styles.timeline}>
              <View style={styles.timelineIcon}></View>
              <Text style={styles.timelineTitle}>{course.title}</Text>
              <View style={styles.info}>
                <Text>{course.institution}</Text>
                <Text>{course.date}</Text>
              </View>
              <View style={styles.description}>
                <Text key={key}> {course.ativits}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
