import React from "react";

import Card from "./Card";
import { cardInfo } from "./../constants/index";

const CardContainer = () => {
	return (
		<div className="relative flex flex-col md:flex-row rounded-lg m-20 md:m-2 overflow-hidden max-w-4xl min-h-[32rem]">
			{/* TODO: Figure out why the hell I need to do this lol */}
			<div className="hidden bg-bright-orange text-bright-orange bg-dark-cyan text-dark-cyan bg-very-dark-cyan text-very-dark-cyan"></div>
			{cardInfo.map((card, index) => (
				<Card
					key={index}
					color={card.color}
					icon={card.icon}
					title={card.title}
					paragraph={card.paragraph}
				/>
			))}
		</div>
	);
};

export default CardContainer;
