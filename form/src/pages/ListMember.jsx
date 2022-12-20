import { useState, useEffect } from 'react';
import MemberCard from '../components/MemberCard';

function ListMember() {
	const [ members, setMembers ] = useState([]);

	useEffect(() => {
		async function fetchMembers() {
			const response = await fetch('http://localhost:3001/members');
			const data = await response.json();
			setMembers(data);
		}
		fetchMembers();
	}, []);

	return (
		<div>
			<h1>Members</h1>
			{members.map((member) => {
				return <MemberCard key={member.id} member={member} />;
			})}
		</div>
	);
}
export default ListMember;
