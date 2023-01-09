export default function Form() {
	return (
		<div className="form uppercase">
			<p>Cardholder Name</p>
			<input type="text" placeholder="e.g. Jane Appleseed" className="w-full" />
			<p>Card Number</p>
			<input type="text" placeholder="e.g. 1234 5678 9123 0000" className="w-full" />
			<div className="flex w-full gap-x-4">
				<div className="flex flex-col w-3/5">
					<p>Exp. Date (MM/YY)</p>
					<div className="flex gap-x-2">
						<input type="text" placeholder="MM" className="w-1/2"/>
						<input type="text" placeholder="YY" className="w-1/2"/>
					</div>
				</div>
				<div className="flex flex-col w-2/5">
					<p>CVC</p>
					<input type="text" placeholder="e.g. 123" />
				</div>
			</div>
			<button className="w-full bg-Very_dark_violet text-Light_grayish_violet rounded-lg py-4 text-xl transition-all hover:brightness-150 mt-8">Confirm</button>

		</div>
	);
}
