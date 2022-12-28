import { useState, useEffect } from 'react';
import pic from '../img/floating.png';
import { useParams, Link } from 'react-router-dom';
import EditPicture from '../components/EditPicture';

export default function SinglePicture() {
	const { id } = useParams();
	const [ picture, setPicture ] = useState(null);
	async function handleDelete() {
		const response = await fetch(`http://localhost:3001/pictures/${id}`, {
			method: 'DELETE'
		});
		const data = await response.json();
		//redirect to /pictures/all
		window.location.href = '/pictures/';
	}

	async function handleSave() {
		const response = await fetch(`http://localhost:3001/pictures/${id}`, {
			method: 'PUT'
		});
		const data = await response.json();
		console.log(data);
	}

	useEffect(() => {
		async function fetchPicture() {
			const response = await fetch(`http://localhost:3001/pictures/${id}`);
			const data = await response.json();
			setPicture(data);
		}
		fetchPicture();
	}, []);

	return (
		<div>
			{picture && <EditPicture key={picture.id} picture={picture} />}
			<button onClick={handleDelete}>Delete</button>
			<button>
				<Link to="/pictures/">Back to pictures</Link>
			</button>
		</div>
	);
}
