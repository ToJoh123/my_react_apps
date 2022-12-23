export default function Form({ name, setName, age, setAge, email, setEmail, handleSave }) {
	return (
		<form onSubmit={handleSave}>
			<label htmlFor="name">Name</label>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
			<label htmlFor="age">Age</label>
			<input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
			<label htmlFor="email">Email</label>
			<input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<button type="submit">Save</button>
		</form>
	);
}
