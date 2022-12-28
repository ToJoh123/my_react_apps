import { useState } from 'react';

export default function Form() {
	return (
		<div className="Form">
			<h2>Basic info</h2>
			<form>
				<input type="text" placeholder="Name of the page" />
				<input type="text" placeholder="Purpose of page" />
				<label htmlFor="category">What type of page</label>
				<select name="category" id="category">
					<option value="1">Category 1</option>
					<option value="2">Category 2</option>
					<option value="3">Category 3</option>
				</select>
				<input type="text" placeholder="Font-1" />
				<input type="text" placeholder="Font-2" />
			</form>
		</div>
	);
}
