import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { BsBarChartLineFill } from "react-icons/bs";
import "./summery.css";

const Summery = () => {
  return (
    <div className="container mt-5 bg-dark mb-5 pb-5">
      <h1 className="text-center mb-5 text-white">
        Millions Of Business Trusted
      </h1>
      <div className="summery-container">
        <div className="card">
          <div className="icon text-center">
            <FaAward />
          </div>
          <div className="card-body">
            <p className="card-text text-center fw-bold fs-5">
              Top selling awards
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon text-center">
            <VscFeedback />
          </div>
          <div className="card-body">
            <p className="card-text text-center fw-bold fs-5">
              Millions of satisfied users feedback
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon text-center">
            <BsBarChartLineFill />
          </div>
          <div className="card-body">
            <p className="card-text text-center fw-bold fs-5">
              100+ millions yearly revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
