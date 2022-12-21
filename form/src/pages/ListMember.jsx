import { useState, useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import AddMember from './AddMember';

function ListMember() {
	const [ users, setMembers ] = useState([]);

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
			{users.map((member) => {
				return <MemberCard key={member.id} member={member} />;
			})}
			<AddMember />
		</div>
	);
}
export default ListMember;
