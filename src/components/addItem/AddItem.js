import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://tranquil-badlands-14968.herokuapp.com/item`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success", result);
        alert("users added successfully");
        //event.target.reset();
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Add a new item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Name" {...register("name")} />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Suplier Name"
          {...register("suplierName")}
        />
        <input
          className="mb-2"
          placeholder="Image URL"
          type="text"
          {...register("image")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />

        <input className="mb-2" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
