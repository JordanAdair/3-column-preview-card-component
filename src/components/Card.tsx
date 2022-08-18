import React from "react";

type Props = {
	color: string;
	icon: string;
	title: string;
	paragraph: string;
};

const Card = ({ color, icon, title, paragraph }: Props) => {
	return (
		<div className={`bg-${color} text-white font-lexendDeca`}>
			<article className="mx-10">
				<img className="mt-10" src={`../src/assets/${icon}`} alt={""} />
				<h2 className="my-7 font-bigShouldersDisplay text-4xl">{title}</h2>
				<p className="text-gray-200 text-md">{paragraph}</p>
				<button
					className={`md:absolute bottom-0 my-12 px-7 py-3 rounded-full font-medium tracking-wide bg-white text-${color} whitespace-nowrap`}
				>
					Learn More
				</button>
			</article>
		</div>
	);
};

export default Card;
