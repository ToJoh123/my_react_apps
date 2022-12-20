import { useEffect } from 'react';

const CreatePost = () => {
  // State to store the form values
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      title: '',
      price: '',
      description: '',
      image: '',
      category: '',
    });
  };

  // Send a POST request to the API endpoint when the form is submitted
  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        name="price"
        value={
            formData.price}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Create Post</button>
        </form>
      );
    };
    
    export default CreatePost;
    