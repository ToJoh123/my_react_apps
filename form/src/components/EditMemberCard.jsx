import { useState } from 'react';

export default function EditMemberCard({ member }) {
	const [ id, setId ] = useState(member.id);
	const [ name, setName ] = useState(member.name);
	const [ age, setAge ] = useState(member.age);
	const [ email, setEmail ] = useState(member.email);

	const handleSave = async (e) => {
		e.preventDefault();
		const newUser = { name, age, email };
		console.log(newUser);
		const post = await fetch(`http://localhost:3001/members/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser) // vad som ska skickas till servern, OM jag lägger måsvingar här så funkar det skapar jag ett object!
		});

		if (post.ok) {
			console.log('user updated');
			//this code will reload the page
			window.location.reload();
		} else {
			console.log('Something went wrong');
		}
	};

	// console.log(member);
	return (
		<form onSubmit={handleSave}>
			<label htmlFor="name">Name</label>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<label htmlFor="age">Age</label>
			<input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
			<label htmlFor="email">Email</label>
			<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<button type="submit">Save</button>
		</form>
	);
}
