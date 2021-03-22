import React from "react";
import { FaMapMarker } from "react-icons/fa";
import styled from "styled-components";
import Card from "../../commons/card";
import foto from "../../../assets/foto.jpg";

function Resume() {
	const infoBasics = {
		name: "Maria Lemos",
		city: "Rio de Janeiro",
		photo: foto,
		country: "Brasil",
		apresentationText: "",
		jobTitle: "Dev.Júnior",
	};
	const {
		name,
		city,
		photo,
		country,
		apresentationText,
		jobTitle,
	} = infoBasics;
	return (
		<ResumeWrapper>
			<Photo>
				<img src={photo} alt="" />
			</Photo>
			<TextContent>
				<h3>{name}</h3>
				<h4>{jobTitle}</h4>
				<span>
					<FaMapMarker /> {city} - {country}
				</span>
				<p>{apresentationText}</p>
			</TextContent>
		</ResumeWrapper>
	);
}

export default Resume;
const ResumeWrapper = styled(Card)`
	display: flex;
	flex-wrap: wrap;
	width: 59%;
`;
const Photo = styled.div`
	width: 150px;
	height: 150px;
	background-color: #9b6ed0;
	border-top-left-radius: 30px;
	border-bottom-right-radius: 30px;
	img {
		width: 150px;
		border-top-left-radius: 30px;
		border-bottom-right-radius: 30px;
		border-radius: 30px;
	}
`;
const TextContent = styled.div`
	padding: 0 1rem;
`;
