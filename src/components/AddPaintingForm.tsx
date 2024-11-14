import { useState } from "react";
import "./ContactForm.css";

const AddPaintingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    image_url: "",
    type: "",
    artist_id: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    price: "",
    image_url: "",
    type: "",
    artist_id: "",
  });

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simple client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = "Title is required";

    if (!formData.description) newErrors.description = "Email is required";

    if (!formData.price) {
      newErrors.price = "Price is required";
    } //else if (!/^\d{1,3}(,\d{3})*(\.\d{2})?$/.test(formData.price)) {
    //newErrors.price = "Price must be a positive number";
    //}

    if (!formData.image_url) {
      newErrors.image_url = "URL required";
    } else if (
      !/^(https?:\/\/)?([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,}))(:\d+)?(\/[^\s]*)?$/.test(
        formData.image_url,
      )
    ) {
      newErrors.image_url = "REGEX: URL format not valid";
    }

    if (!formData.type) newErrors.type = "Type is required";

    if (!formData.artist_id) newErrors.artist_id = "artist_id is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Perform form validation before submission
    if (validateForm()) {
      formData.price = Number(formData.price);

      try {
        const response = await fetch("http://localhost:3000/painting/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(
            "Failed to add the new painting. Check input fields.",
          );
        }

        const data = await response.json();
        // console.log("Login successful:", data);

        // Next actions after POST data successfully
        window.alert(`Painting added (ID: ${data.painting_id})`);

        // Clear form fields and errors after successful login

        setFormData({
          title: "",
          description: "",
          price: 0,
          image_url: "",
          type: "",
          artist_id: "",
        }); // Clear form fields after submit

        setErrors({}); // Clear errors

        // Perform any additional actions after login (e.g., redirect)
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="formContainer">
      <h1>Add new items to our collection</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          {errors.description && (
            <p style={{ color: "red" }}>{errors.description}</p>
          )}
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required
          />
          {errors.image_url && (
            <p style={{ color: "red" }}>{errors.image_url}</p>
          )}
        </div>

        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="oil">Oil</option>
            <option value="acrylic">Acrylic</option>
            <option value="watercolor">Watercolor</option>
            <option value="pastel">Pastel</option>
            <option value="gouache">Gouache</option>
            <option value="ink">Ink</option>
            <option value="fresco">Fresco</option>
            <option value="tempera">Tempera</option>
            <option value="digital">Digital</option>
            <option value="Other">Other</option>
          </select>
          {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
        </div>

        <div>
          <label htmlFor="artist_id">Artist ID:</label>
          <input
            type="number"
            id="artist_id"
            name="artist_id"
            value={formData.artist_id}
            onChange={handleChange}
            required
          />
          {errors.artist_id && (
            <p style={{ color: "red" }}>{errors.artist_id}</p>
          )}
        </div>

        <div>
          <button type="submit">Add to Galleria</button>
        </div>
      </form>
    </div>
  );
};

export default AddPaintingForm;
