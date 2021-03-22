import React from "react";
import {
	FaAsterisk,
	FaClock,
	FaCertificate,
	FaGraduationCap,
	FaSuitcase,
	FaUser,
} from "react-icons/fa";
import Timeline from "./timeline";
import styled from "styled-components";
import SectionTitle from "../commons/sectionTitle";
import Resume from "./components/resume";
import Card from "../commons/card";

function About() {
	const habilits = [{ name: "" }];
	const graduaction = [
		{
			title: "Analise e desenvolvimento de sistemas",
			institution: "Infnet",
			date: "2021 a 2023",
		},
		{
			title: "Analise e desenvolvimento de sistemas",
			institution: "Infnet",
			date: "2021 a 2023",
		},
	];
	const curses = [
		{ name: "", instituicion: "", hours: 12 },
		{ name: "JavaScript", instituicion: "Alura", hours: 24 },
	];
	const workExperience = [
		{
			title: "",
			institution: "",
			date: "",
			projects: [{ name: "", description: "" }],
		},
	];

	return (
		<AboutWrapper id="sobre">
			<SectionTitle title={"Sobre Mim"} icon={FaUser} />

			<Resume />

			<Card title={"Habilidades"} icon={FaAsterisk} width={`39%`}>
				{habilits.map((habilit) => habilit.name)}
			</Card>
			<div className="studiesGroup">
				<Card title={"Formação"} icon={FaGraduationCap}>
					<Timeline events={graduaction} />
				</Card>
				<div className="cursos">
					<SectionTitle title={"Cursos"} icon={FaCertificate}>
						<div className="sibling-fade">
							{curses.map((curse, index) => {
								console.log(
									<Card
										title={curse.name}
										icon={FaCertificate}
										width={"40%"}
										key={index}
									>
										<h4>{curse.name}</h4>
										<FaClock />
										{curse.hours} hrs
										{curse.institution}
									</Card>
								);
								return (
									<Card
										title={curse.name}
										icon={FaCertificate}
										width={"40%"}
										key={index}
									>
										<h4>{curse.name}</h4>
										<FaClock />
										{curse.hours} hrs
										{curse.institution}
									</Card>
								);
							})}
						</div>
					</SectionTitle>
				</div>
			</div>
			<Card title={"Experiência"} icon={FaSuitcase} width="49%">
				<Timeline events={workExperience} />
			</Card>
		</AboutWrapper>
	);
}
const AboutWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;
	.studiesGroup {
		width: 49%;
	}
`;

export default About;
