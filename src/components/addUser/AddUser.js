import { queryAllByAttribute } from "@testing-library/react";
import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = { name, email };

    fetch("https://tranquil-badlands-14968.herokuapp.com/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2>Add user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
