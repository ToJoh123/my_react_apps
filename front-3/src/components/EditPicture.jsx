import { useState } from 'react';
export default function EditPicture({ picture }) {
	const [ name, setName ] = useState(picture.name);
	const [ url, setUrl ] = useState(picture.url);
	const handleSave = async (e) => {
		e.preventDefault();
		const newPicture = { name, url };
		console.log(newPicture);
		const post = await fetch(`http://localhost:3001/pictures/${picture.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newPicture)
		});
		if (post.ok) {
			console.log('New picture added');
			//this code will reload the page
			window.location.reload();
		} else {
			console.log('Something went wrong');
		}
	};
	return (
		<div className="edit">
			<h2>Edit a picture</h2>
			<img src={url} alt={name} width="200px" height="200px" />
			<form onSubmit={handleSave}>
				<label htmlFor="name">Name</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<label htmlFor="url">Url</label>
				<input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
				<button type="submit">Save</button>
			</form>
		</div>
	);
}
