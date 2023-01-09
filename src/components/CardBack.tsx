import bgCardBack from "../assets/bg-card-back.png";
export default function CardBack() {
	return (
		<div className="relative">
			<div className="w-[370px] h-[220px]">
				<img src={bgCardBack} alt="" className="w-full h-full"/>
			</div>
			<div className="absolute top-0 left-0">
				<p className="top-[6rem] left-[18rem] absolute text-Light_grayish_violet text-base">
					000
				</p>
			</div>
		</div>
	);
}
