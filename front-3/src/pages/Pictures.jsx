import { useState, useEffect } from 'react';
import pic from '../img/floating.png';
import CardTable from '../components/CardTable';
import { Button } from '../components/Button.styled';
import { AppContainer } from '../components/AppContainer.styled';
export default function Pictures() {
	//this code is to sort the data
	const [ sorted, setSorted ] = useState((sorted: 'id'), (reversed: false));
	const sortById = () => {
		setSorted({ sorted: 'id', reversed: !sorted.reversed });
		const picturesCopy = [ ...pictures ];
		picturesCopy.sort((a, b) => {
			if (sorted.reversed) {
				return b.id - a.id;
			}
			return a.id - b.id;
		});
		setPictures(picturesCopy);
	};

	//this code is to fetch the data from the API
	const [ pictures, setPictures ] = useState([]);

	useEffect(() => {
		async function fetchPictures() {
			const response = await fetch('http://localhost:3001/pictures');
			const data = await response.json();
			setPictures(data);
		}
		fetchPictures();
	}, []);

	//this code is to handle the form submission
	const [ name, setName ] = useState('');
	const [ url, setUrl ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPicture = { name, url };

		const post = await fetch('http://localhost:3001/pictures', {
			method: 'POST',
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
		<div className="pictures">
			<div className="hero">
				<h1>Pictures</h1>
				<p>Add your pictures here</p>
				<img src={pic} alt="moonlight" width="200px" height="200px" />
			</div>
			{/* here is the buttons to sort the data */}
			<div className="sort">
				<AppContainer backgroundColor="purple">
					<Button onClick={sortByName} backgroundColor="violet">
						Sort by name
					</Button>
					<Button onClick={SortById} backgroundColor="violet">
						Sort by id
					</Button>
				</AppContainer>
			</div>
			{/* //this code is to map the data from the API */}
			<div className="tables">{pictures.map((picture) => <CardTable key={picture.id} picture={picture} />)}</div>
			{/* this code is to handle the form submission */}
			<div className="add">
				<h2>Add a picture</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					<label htmlFor="url">Url</label>
					<input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
					<button type="submit">Add</button>
				</form>
			</div>
		</div>
	);
}
