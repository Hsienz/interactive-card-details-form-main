import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
const Input = forwardRef(
	(
		props: {
			id: string;
			placeholder: string;
			onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
			onClick?: () => void;
			validate: ((value: string) => string)[];
		},
		ref
	) => {
		const [value, setValue] = useState("");
		const valueRef = useRef("")
		valueRef.current = value
		const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) props.onChange(e);
			setValue(e.target.value);
		};
		const handleOnClick = () => {
			if (props.onClick) props.onClick();
			let el = document.getElementById(props.id) as HTMLElement
			el.classList.remove('error')
		};
		useImperativeHandle(
			ref,
			() => ({
				validate() {
					let errorMsg = "";
					for (let i = 0; i < props.validate.length; i++) {
						errorMsg = props.validate[i](valueRef.current);
						if (errorMsg) break;
					}
					let el = document.getElementById(props.id) as HTMLElement;
					if (errorMsg) {
						if (!el.classList.contains("error")) {
							el.classList.add("error");
						}
					} else el.classList.remove("error");
					return errorMsg;
				},
			}),
			[]
		);
		return (
			<input
				id={props.id}
				className="w-full px-4 tracking-wider text-Dark_grayish_violet py-2 outline-none border-2 border-Light_grayish_violet rounded-lg placeholder:tracking-wider placeholder:text-Dark_grayish_violet my-2"
				placeholder={props.placeholder}
				onChange={handleOnChange}
				onClick={handleOnClick}
				value={value}
			/>
		);
	}
);
export default Input;
