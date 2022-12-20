import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import MemberCard from '../components/MemberCard';

export default function SingleMember() {
	const { id } = useParams();
	const [ member, setMember ] = useState(null);

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
			<button>Delete</button>
			<button>Save</button>
			{member && <MemberCard key={member.id} member={member} />}
		</div>
	);
}
//tänk på att nu hämtar du en medlem i taget och inte alla medlemmar som i ListMember, därför så skriver vi till singleMember att hämta en medlem i taget och inte alla medlemmar som i ListMember och därför skriver vi inte map utan bara member och inte members
//
