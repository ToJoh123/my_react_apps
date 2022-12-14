import { useState } from 'react';
import Form from '../components/Form';

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
			//this code will reload the page
			window.location.reload();
		} else {
			console.log('Something went wrong');
		}
	};

	return <Form />;
}
export default AddMember;
