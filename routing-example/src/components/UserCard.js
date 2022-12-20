import { Link } from 'react-router-dom';
// const testUser =
//   {
//     "address": {
//       "geolocation": {
//         "lat": "-37.3159",
//         "long": "81.1496"
//       },
//       "city": "kilcoole",
//       "street": "new road",
//       "number": 7682,
//       "zipcode": "12926-3874"
//     },
//     "id": 1,
//     "email": "john@gmail.com",
//     "username": "johnd",
//     "password": "m38rmF$",
//     "name": {
//       "firstname": "john",
//       "lastname": "doe"
//     },
//     "phone": "1-570-236-7033",
//     "__v": 0
//   };

export default function UserCard({ user }) {
	return (
		<table>
			<tr>
				<th>City</th>
        <td>{user.address.city}</td>
			</tr>
			<tr>
				<th>Street</th>
				<th>{user.addres}</th>
			</tr>
			<tr>
				<th>Latitude</th>
				<th>Longitude</th>
			</tr>
			<tr>
				<td>{user.address.geolocation.lat}</td>
				<td>{user.address.geolocation.long}</td>
			</tr>

			<tr>
				<th>ID</th>
        <td>
					<Link to={`/user/${user.id}`}>{user.id}</Link>
				</td>
			</tr>
			<tr>


				<th>Email</th>
				<th>Username</th>
			</tr>
			<tr>
				<td>{user.email}</td>
				<td>{user.username}</td>
			</tr>
			<tr>
				<th>Password</th>
				<th>Firstname</th>
				<th>Lastname</th>
			</tr>
			<tr>
				<td>{user.password}</td>
				<td>{user.name.firstname}</td>
				<td>{user.name.lastname}</td>
			</tr>
			<tr>
				<th>Phone</th>
				<th>__v</th>
			</tr>
			<tr>
				<td>{user.phone}</td>
				<td>{user.__v}</td>
			</tr>
		</table>
	);
}
