import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { Card } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="container bg-dark mt-5 mb-5 pb-5 h-100">
      <h3 className="text-white text-center pb-5 pt-5">GET IN TOUCH</h3>
      <div className="row">
        <div className="col-md mb-3">
          <Card>
            <Card.Body>
              <BsFillGeoAltFill className="fs-2" />
              <Card.Title className="mb-2">Address</Card.Title>
              <Card.Subtitle>
                Road-8, House-52, Dhanmondi,
                <br />
                Dhaka
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md mb-3">
          <Card>
            <Card.Body>
              <BsFillEnvelopeOpenFill className="fs-2" />
              <Card.Title className="mb-2">Email</Card.Title>
              <Card.Subtitle>
                contact@computersource.com
                <br /> info@computersource.com
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md mb-3">
          <Card>
            <Card.Body>
              <BsFillTelephoneFill className="fs-2" />
              <Card.Title className="mb-2">Phone</Card.Title>
              <Card.Subtitle>
                <BsFillTelephoneFill /> 02-9898989898 <br />
                <AiOutlineMobile /> 01725-28-23-23
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
