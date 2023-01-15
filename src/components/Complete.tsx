import iconComplete from "../assets/icon-complete.svg";
export default function Complete() {
	return (
		<div>
			<img src={iconComplete} alt="" />
			<h2 className="uppercase text-xl font-extrabold"> Thank you!</h2>
			<p> We've added your card details</p>
			<button> Continue</button>
		</div>
	);
}
