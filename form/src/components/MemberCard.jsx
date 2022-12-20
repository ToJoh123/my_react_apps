//ett object som   flera props som jag kan använda i komponenten med hjälp av destructuring
import { useLocation, Link } from 'react-router-dom';
const MemberCardLink = ({ member }) => {
	const location = useLocation();
	const currentPath = location.pathname;

	let linkPath;
	if (currentPath === '/member/' + member.id) {
		linkPath = '/member/all';
	} else {
		linkPath = '/member/' + member.id;
	}

	let linkText;
	if (currentPath.includes('/member/' + member.id)) {
		linkText = 'tillbaka';
	} else {
		linkText = 'Läs mer';
	}

	return <Link to={linkPath}>{linkText}</Link>;
};

export default function MemberCard({ member }) {
	// console.log(member);
	return (
		<div key={member.id}>
			<h2>{member.name}</h2>
			<p>Age: {member.age}</p>
			<p>Email: {member.email}</p>
			<button>
				<MemberCardLink member={member} />
			</button>
		</div>
	);
}
