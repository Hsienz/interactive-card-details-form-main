import bgCardFront from "../assets/bg-card-front.png";
export default function CardFront() {
	return (
		<div className="relative w-[350px] h-[180px]">
			<img src={bgCardFront} alt="" className="w-full h-full" />
			<div className="absolute top-0 left-0 text-Light_grayish_violet w-full px-6">
				<div className="absolute mt-6 flex items-center">
					<span className="bg-White w-8 aspect-square inline-block rounded-full"></span>
					<span className="border-White rounded-full border-2 ml-4 inline-block w-4 aspect-square"></span>
				</div>
				<div className="pt-24">
					<p className="text-xl tracking-widest">
						0000 0000 0000 0000
					</p>
					<div className="flex justify-between text-sm pt-4">
						<p className="uppercase">Jane Appleseed</p>
						<p>00/00</p>
					</div>
				</div>
			</div>
		</div>
	);
}
