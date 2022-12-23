import { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';

import EditMemberCard from '../components/EditMemberCard';

export default function SingleMember() {
	const { id } = useParams();
	const [ member, setMember ] = useState(null);

	async function handleDelete() {
		const response = await fetch(`http://localhost:3001/members/${id}`, {
			method: 'DELETE'
		});
		const data = await response.json();
		//redirect to /member/all
		window.location.href = '/member/all';
	}

	async function handleSave() {
		const response = await fetch(`http://localhost:3001/members/${id}`, {
			method: 'PUT'
		});
		const data = await response.json();
		console.log(data);
	}

	useEffect(() => {
		async function fetchMember() {
			const response = await fetch(`http://localhost:3001/members/${id}`);
			const data = await response.json();
			setMember(data);
		}
		fetchMember();
	}, []);

	return (
		<div>
			{member && <EditMemberCard key={member.id} member={member} />}
			<button onClick={handleDelete}>Delete</button>
			<button>
				<Link to="/member/all">Back to members</Link>
			</button>
		</div>
	);
}
//tänk på att nu hämtar du en medlem i taget och inte alla medlemmar som i ListMember, därför så skriver vi till singleMember att hämta en medlem i taget och inte alla medlemmar som i ListMember och därför skriver vi inte map utan bara member och inte members
//
