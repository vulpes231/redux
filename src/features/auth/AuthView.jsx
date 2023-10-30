import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import UserView  from "../user/UserView.jsx";

const AuthView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const initState = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(isLoggedIn);
    resetForm();
    isLoggedIn && goToDash();
  };

  function resetForm() {
    setForm(initState);
  }

  function goToDash() {
    navigate("/dash");
  }

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="username"
          value={form.username}
          onChange={handleInputChange}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleInputChange}
          name="password"
        />
        <button onClick={handleSubmit}>Login</button>
        <a href="/user">UserView</a>
      </form>
    </div>
  );
};

export default AuthView;
