import Card from "./Card";
import Form from "./Form";
export default function Main() {
	return (
		<div className="font-sans text-lg relative md:flex md:w-screen">
			<div className="bg-[url('/src/assets/bg-main-mobile.png')] md:bg-[url('/src/assets/bg-main-desktop.png')] md:h-auto md:min-h-screen md:w-auto w-screen bg-cover bg-no-repeat h-72 py-8 px-6 font-medium flex justify-center md:items-center">
				<div>
					<Card />
				</div>
			</div>
			<div className="relative mt-24 px-8 md:m-auto md:px-32">
				<Form />
			</div>
		</div>
	);
}
