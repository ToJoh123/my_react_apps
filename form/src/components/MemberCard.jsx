import { Link } from 'react-router-dom';

export default function MemberCard({ member }) {
	return (
		<div key={member.id}>
			<h2>{member.name}</h2>
			<p>Age: {member.age}</p>
			<p>Email: {member.email}</p>

			<button>
				<Link to={`/member/${member.id}`}>Läs mer</Link>
			</button>
		</div>
	);
}
