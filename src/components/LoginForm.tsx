import { useState } from "react";
import "./ContactForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

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

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    // Validate password
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Perform form validation before submission
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3000/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to log in. Please check your credentials.");
        }

        const data = await response.json();
        // console.log("Login successful:", data);

        // Redirect after successful login
        if (data.user.role === "admin") {
          navigate("/addPaintings");
        } else {
          navigate("/galleria");
        }

        // Clear form fields and errors after successful login
        setFormData({ email: "", password: "" });
        setErrors({});
        setServerError("");

        // Perform any additional actions after login (e.g., redirect)
      } catch (error) {
        setServerError(error.message);
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="formContainer">
      <h1>"Welcome! Please sign in to access your account."</h1>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
