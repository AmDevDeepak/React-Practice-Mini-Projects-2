import React from "react";

const FormValidation = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  function validateInput(name, value) {
    switch (name) {
      case "username":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            value.length < 3 ? "Must be atleast 3 characters" : "Looks Good!",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? "Looks Good!"
            : "Email is not valid",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            value.length < 5 ? "Must be atleast 3 characters" : "Looks Good!",
        }));
        break;
      default:
        break;
    }
  }
  const handleFormChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(name, value);
  };

  function handleFormSubmit(ev) {
    ev.preventDefault();
    const isInvalidInputs = Object.values(errors).some(
      (value) => value !== "Looks Good!"
    );
    if (isInvalidInputs) alert("ERROR : Invalid inputs...");
    else alert("Form Submitted successfully");
  }

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-slate-400">
      <form
        onSubmit={handleFormSubmit}
        className="w-1/4 h-[70%] rounded-lg shadow-blue-300 shadow-lg bg-slate-700 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-start gap-2 text-white">
          <label htmlFor="username" className="text-xl font-extralight">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleFormChange}
            className="bg-slate-800 p-3 text-white font-medium rounded-md outline-none w-full"
          />
          <span
            className={`font-medium ${
              errors?.username !== "Looks Good!"
                ? "text-red-600"
                : "text-green-500"
            }`}
          >
            {errors?.username}
          </span>
        </div>
        <div className="flex flex-col items-start gap-1 text-white">
          <label htmlFor="email" className="text-xl font-extralight">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleFormChange}
            name="email"
            placeholder="Enter your email"
            className="bg-slate-800 p-3 text-white font-medium rounded-md outline-none"
          />
          <span
            className={`font-medium ${
              errors?.email !== "Looks Good!"
                ? "text-red-600"
                : "text-green-500"
            }`}
          >
            {errors?.email}
          </span>
        </div>
        <div className="flex flex-col items-start gap-1 text-white">
          <label htmlFor="password" className="text-xl font-extralight">
            Password
          </label>
          <input
            id="password"
            onChange={handleFormChange}
            type="password"
            value={formData.password}
            name="password"
            placeholder="Enter your password"
            className="bg-slate-800 p-3 text-white font-medium rounded-md outline-none"
          />
          <span
            className={`font-medium ${
              errors?.password !== "Looks Good!"
                ? "text-red-600"
                : "text-green-500"
            }`}
          >
            {errors?.password}
          </span>
        </div>

        <button
          className="bg-slate-800 px-3 py-2 w-[65%] hover:bg-slate-700 mt-5  text-white font-medium rounded-md outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
