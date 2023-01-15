import React, { useRef } from "react";
import TitleInput from "./TitleInput";
import inputs from "./constants/inputs";
export default function Form() {
	const inputRef = useRef<any[]>([])
	const assignRef = (idx:number) => {
		return (elem:HTMLInputElement) => inputRef.current[idx] = elem
	}
	const validate = () => {
		console.log(inputRef.current)
		inputRef.current.forEach(x => x.validate());
	}
	return (
		<div className="flex flex-col gap-y-4">
			<TitleInput ref={assignRef(0)} {...inputs[0]} />
			<TitleInput ref={assignRef(1)} {...inputs[1]} />
			<div className="flex gap-x-4">
				<TitleInput ref={assignRef(2)} {...inputs[2]} />
				<TitleInput ref={assignRef(3)} {...inputs[3]} />
			</div>

			<button
				type="submit"
				className="w-full bg-Very_dark_violet text-Light_grayish_violet rounded-lg py-4 text-xl transition-all hover:brightness-150 mt-6"
				onClick={validate}
			>
				Confirm
			</button>
		</div>
	);
}
