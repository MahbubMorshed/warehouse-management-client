import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://tranquil-badlands-14968.herokuapp.com/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  });

  const handleUpdateStock = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    const updatedItem = { quantity };
    const url = `https://tranquil-badlands-14968.herokuapp.com/item/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
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
      <h2>Update Items quantity: {item.quantity}</h2>
      <form onSubmit={handleUpdateStock}>
        <input type="number" name="quantity" placeholder="Quantity" />
        <br />

        <input type="submit" value="Update Item" />
      </form>
    </div>
  );
};

export default UpdateItem;
