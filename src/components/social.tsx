import React from "react";
import styled from "styled-components";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Social: React.FC = () => {
	const socialNet = [
		{ name: "facebook", link: "/", text: "/maria.lemos", icon: FaFacebook },
		{ name: "linkedin", link: "/", text: "/maria.lemos", icon: FaLinkedin },
		{ name: "github", link: "/", text: "/maria.lemos", icon: FaGithub },
	];
	return (
		<SocialContainer>
			<div className="social">
				{socialNet.map((net) => (
					<a href={net.link}>
						<div className="redes-sociais">
							{net.icon({})}
							{net.text}
						</div>
					</a>
				))}
			</div>
		</SocialContainer>
	);
};
export default Social;

const SocialContainer = styled.div`
	padding: 20px 0;

	a {
		padding: 5px;
		display: inline-block;
		&:hover {
			transform: scale(1.1);
		}
	}
`;
