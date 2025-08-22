import { useState } from "react";

function FormRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // valid if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted: ", formData);
      alert("Form submitted successfully ✅");

       // ✅ Reset the form
    setFormData({
      username: "",
      email: "",
      password: "",
    });
    setErrors({});
    } else {
      console.log("Validation failed ❌");
      alert("Validation failed ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter Username:
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter username"
            minLength={4}
            onChange={handleChange}
          />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}

        <label>
          Enter Email:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <label>
          Enter Password:
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            minLength={4}
            onChange={handleChange}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormRegistration;
