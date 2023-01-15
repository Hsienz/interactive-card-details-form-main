import React, {
	forwardRef,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import Input from "./Input";

const TitleInput = forwardRef(
	(
		props: {
			id: string;
			title: string;
			placeholder: string[];
			onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
			validate: ((value: string) => string)[][];
		},
		ref
	) => {
		const inputRef = useRef<any[]>([]);
		const clearError = () => {
			document.getElementById(props.id)?.classList.remove("error");
			let elem = document.getElementById(
				props.id + "__errorMsg"
			) as HTMLElement;
			elem.innerHTML = "";
		};
		const assignRef = (idx: number) => {
			return (elem: HTMLInputElement) => (inputRef.current[idx] = elem);
		};
		useImperativeHandle(
			ref,
			() => ({
				validate() {
					console.log(inputRef.current);
					let errorMsg = "";
					for (let i = 0; i < inputRef.current.length; i++) {
						let temp = inputRef.current[i].validate();
						if (!errorMsg) errorMsg = temp;
					}
					let el = document.getElementById(
						`${props.id}__errorMsg`
					) as HTMLElement;
					if (errorMsg) {
						el.innerHTML = errorMsg;
						el = document.getElementById(props.id) as HTMLElement;
						if (!el.classList.contains("error")) {
							el.classList.add("error");
						}
					} else {
						el.classList.remove('error')
					}
				},
			}),
			[]
		);
		return (
			<div id={props.id}>
				<h2 className="uppercase tracking-widest text-Very_dark_violet mt-4 whitespace-nowrap">
					{props.title}
				</h2>
				<div className="flex gap-x-2">
					{props.placeholder.map((x, i) => (
						<Input
							key={i}
							ref={assignRef(i)}
							id={`${props.id}__input${i}`}
							placeholder={x}
							onChange={props.onChange}
							onClick={clearError}
							validate={props.validate[i]}
						/>
					))}
				</div>
				<p
					id={`${props.id}__errorMsg`}
					className="errorMsg hidden text-Red"
				></p>
			</div>
		);
	}
);
export default TitleInput;
