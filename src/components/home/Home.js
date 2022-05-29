import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../inventory/inventory.css";
import laptop3 from "../../images/laptop3.jpg";
import laptop4 from "../../images/laptop4.jpg";
import laptop6 from "../../images/laptop6.jpg";
import laptop7 from "../../images/laptop7.jpg";
import laptop9 from "../../images/laptop9.jpg";
import Summery from "../summery/Summery";
import Contact from "../contact-us/Contact";

const Home = () => {
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
    <>
      <div className="mb-5">
        <Carousel fade controls={false} indicators={false} interval={2000}>
          <Carousel.Item>
            <img className="d-block w-100" src={laptop3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={laptop4} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={laptop6} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={laptop7} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={laptop9} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container" id="inventory">
        <div className="row">
          <div className="inventory-container">
            {items.map((item) => (
              <div key={item._id}>
                {/* <button onClick={() => handleItemDelete(item._id)}>X</button> */}

                <Card style={{ width: "18rem" }} className="bg-dark text-white">
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
                    {/* <Link to={`/update/${item._id}`}>
                      <button className="btn btn-dark">Deliver</button>
                    </Link> */}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="inventory">
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-dark">Manage Inventory</button>
        </div>
      </Link>
      <Summery />
      <Contact />
    </>
  );
};

export default Home;
