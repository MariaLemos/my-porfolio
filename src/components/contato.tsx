import React from "react";
import { FaAddressCard } from "react-icons/fa";
import SectionTitle from "./commons/sectionTitle";
const Contato: React.FC = () => {
	return (
		<section id="contato" className="iaaa">
			<SectionTitle title={"Contato"} icon={FaAddressCard} />
			<div className="c"></div>
		</section>
	);
};

export default Contato;
