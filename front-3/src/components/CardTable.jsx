import { Link } from 'react-router-dom';
import { AppContainer } from './AppContainer.styled';
export default function CardTable({ picture }) {
	return (
		<AppContainer backgroundColor="purple">
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
					</tr>
					<tr>
						<td>{picture.id}</td>
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
		</AppContainer>
	);
}
