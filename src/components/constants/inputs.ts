const limitStringLength = (s: string, len: number) => {
	return s.slice(0, len);
};
const validateBlank = (s: string) => {
	console.log(s)
	if (!s) {
		return "Can't be blank"
	}
	return "";
};
const validateAllDigit = (s: string) => {
	if (/[a-zA-Z]/.test(s)) {
		return "Wrong format, numbers only"
	}
	return "";
};
const validateCardNumber = (s: string) => {
	if (!/^(\d{4} ){3}\d{4}$/.test(s)) {
		return "Wrong format"
	}
	return ""
};
const validateMonth = (s: string) => {
	if (!/^0[1-9]|1[0-2]$/.test(s)) {
		return "Wrong format"
	}
	return ""
};
const validateYear = (s: string) => {
	if (!/^\d{2}$/.test(s)) {
		return "Wrong format"
	}
	return "";
};
const validateCvc = (s: string) => {
	if (!/^\d{3}$/.test(s)) {
		return "Wrong format"
	}
	return "";
};
const inputs = [
	{
		id: "name",
		title: "Cardholder Name",
		placeholder: ["e.g. Jane Appleseed"],
		validate: [[validateBlank]],
	},
	{
		id: "cardNumber",
		title: "Card Number",
		placeholder: ["e.g. 1234 5678 9123 0000"],
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			if( ( e.target.value.length + 1 ) % 5 == 0 ) e.target.value += ' '
			else if( e.target.value.length % 5 == 0) e.target.value = e.target.value.slice(0,-1)
			e.target.value = limitStringLength(e.target.value, 19);
		},
		validate: [[validateBlank,validateAllDigit,validateCardNumber]],
	},
	{
		id: "date",
		title: "Exp. Date (XX/YY)",
		placeholder: ["MM", "YY"],
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			e.target.value = limitStringLength(e.target.value, 2);
		},
		validate: [[validateBlank,validateMonth],[validateBlank,validateYear]],
	},
	{
		id: "cvc",
		title: "cvc",
		placeholder: ["e.g. 123"],
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			e.target.value = limitStringLength(e.target.value, 3);
		},
		validate: [[validateBlank,validateCvc]],
	},
];
export default inputs;
