import React from "react";

const Items = ({ item }) => {
  const { _id, name, description, price, quantity, supplierName, image } = item;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Items;
