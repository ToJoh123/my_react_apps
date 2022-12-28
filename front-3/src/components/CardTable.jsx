import { Link } from 'react-router-dom';

export default function CardTable({ picture }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
				</tr>
				<tr>
					<td>
						<Link to={`/pictures/${picture.id}`}>{picture.id}</Link>
					</td>
					<td>{picture.name}</td>
				</tr>
				<tr />
				<tr>
					<Link to={`/pictures/${picture.id}`}>
						<a>
							<img src={picture.url} alt={picture.name} width="200px" height="200px" />
						</a>
					</Link>
				</tr>
			</thead>
		</table>
	);
}
