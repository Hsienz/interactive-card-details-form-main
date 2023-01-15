import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card() {
	return (
		<div>
			<div className="md:hidden">
				<div className="ml-16 relative">
					<CardBack />
				</div>
				<div className="top-[9.75rem] absolute">
					<CardFront />
				</div>
			</div>
			<div className="hidden md:block">
				<div className="">
					<CardFront />
				</div>
				<div className="relative left-16 pt-12">
					<CardBack />
				</div>
			</div>
		</div>
	);
}
