import Card from "./Card";
import Form from "./Form";
export default function Main() {
	return (
		<div className="font-sans text-lg relative">
			<div className="bg-[url('/src/assets/bg-main-mobile.png')] w-screen bg-cover bg-no-repeat h-72 py-8 px-6 font-medium flex justify-center">
				<div className="relative">
					<Card />
				</div>
			</div>
			<div className="relative mt-24 px-8">
				<Form />
			</div>
		</div>
	);
}
