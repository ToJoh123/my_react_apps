import { useState } from 'react';

export default function Pages() {
	const [ formFields, setFormFields ] = useState([ { name: '', text: '' } ]);

	const handleFormChange = (event, index) => {
		let data = [ ...formFields ];
		data[index][event.target.name] = event.target.value;
		setFormFields(data);
	};

	const submit = (e) => {
		e.preventDefault();
		console.log(formFields);
	};

	const addFields = () => {
		let object = {
			name: '',
			text: ''
		};

		setFormFields([ ...formFields, object ]);
	};

	const removeFields = (index) => {
		let data = [ ...formFields ];
		data.splice(index, 1);
		setFormFields(data);
	};

	return (
		<div className="Pages">
			<h2>Pages</h2>
			<form onSubmit={submit}>
				{formFields.map((form, index) => {
					return (
						<div key={index}>
							<input
								name="name"
								placeholder="Name"
								onChange={(event) => handleFormChange(event, index)}
								value={form.name}
							/>
							<input
								name="text"
								placeholder="Text"
								onChange={(event) => handleFormChange(event, index)}
								value={form.text}
							/>
							<button onClick={() => removeFields(index)}>Remove</button>
						</div>
					);
				})}
			</form>
			<button onClick={addFields}>Add More..</button>
			<br />
			<button onClick={submit}>Submit</button>
		</div>
	);
}
