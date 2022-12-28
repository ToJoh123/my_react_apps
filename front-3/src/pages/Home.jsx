import React from 'react';
import pic from '../img/moonlight.png';
export default function Home() {
	return (
		<div className="hero">
			<h1>Home</h1>
			<p>Home page</p>
			<img src={pic} alt="moonlight" width="200px" height="200px" />
		</div>
	);
}
