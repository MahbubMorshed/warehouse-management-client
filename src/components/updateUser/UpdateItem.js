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
    <div className="container text-center">
      <h2>Stock Available: {item.quantity}</h2>
      <form onSubmit={handleUpdateStock}>
        <input
          type="number"
          className="form-control w-50 mx-auto"
          name="quantity"
          placeholder="Update Stock"
        />
        <br />

        <input type="submit" className="btn btn-dark" value="Update Item" />
      </form>
    </div>
  );
};

export default UpdateItem;
