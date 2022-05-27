import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./inventory.css";

const Inventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-badlands-14968.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleItemDelete = (id) => {
    const proceed = window.confirm("Confirm your remove process !!!");
    if (proceed) {
      console.log("delete", id);
      const url = `https://tranquil-badlands-14968.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className="container" id="inventory">
      <h2>Inventory</h2>
      <div className="row">
        <div className="inventory-container">
          {items.map((item) => (
            <div key={item._id}>
              {/* <button onClick={() => handleItemDelete(item._id)}>X</button> */}

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Price: {item.price}</ListGroupItem>
                  <ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
                  <ListGroupItem>Supplier: {item.supplierName}</ListGroupItem>
                </ListGroup>
                <Card.Body className="d-flex justify-content-between">
                  <Link to={`/update/${item._id}`}>
                    <button className="btn btn-dark ">Update Stock</button>
                  </Link>
                  <Link to={`/update/${item._id}`}>
                    <button
                      onClick={() => handleItemDelete(item._id)}
                      className="btn btn-dark"
                    >
                      Deliver
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;