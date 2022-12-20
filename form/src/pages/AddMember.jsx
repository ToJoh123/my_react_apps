import { useState } from 'react';

function AddMember() {
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');
	const [ email, setEmail ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = { name, age, email };

		const post = await fetch('http://localhost:3001/members', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser) // vad som ska skickas till servern, OM jag lägger måsvingar här så funkar det skapar jag ett object!
		});

		if (post.ok) {
			console.log('New user created');
		} else {
			console.log('Something went wrong');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				// id="name" //är denna onödig?
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor="age">Age</label>
			<input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
			<label htmlFor="email">Email</label>
			<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<button type="submit">Add member</button>
		</form>
	);
}
export default AddMember;
