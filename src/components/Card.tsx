import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card() {
	return (
		<div>
			<div className="ml-16 relative">
				<CardBack />
			</div>
			<div className="top-[7.75rem] absolute">
				<CardFront />
			</div>
		</div>
	);
}
