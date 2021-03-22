import React from "react";
import { FaEnvelope, FaArrowAltCircleDown } from "react-icons/fa";
import Social from "./social";
import styled from "styled-components";
import Button from "./commons/button";
function Apresentation() {
	return (
		<ApresentationWrapper id="inicio">
			<div>
				<Title>&lt;/Maria&gt;</Title>
				<h2 className="subtitulo">Desenvolvedora júnior</h2>
				<ButtonWrapper>
					<Button text="Baixar Curriculo" icon={FaArrowAltCircleDown} />

					<Button
						text={"Entre em contato"}
						icon={FaEnvelope}
						href="/#contato"
					/>
				</ButtonWrapper>
			</div>

			<Social />
			<span id="mouse"></span>
		</ApresentationWrapper>
	);
}
const ApresentationWrapper = styled.section`
	height: 100vh;
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	svg {
		margin-right: 0.5rem;
	}
`;
const ButtonWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin: 1.5rem 0;
`;
const Title = styled.h1`
	font-size: 5.4rem;
	padding: 1rem;
	/* Animation */
`;
export default Apresentation;
