import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { BsBarChartLineFill } from "react-icons/bs";
import "./summery.css";

const Summery = () => {
  return (
    <div className="container mt-5 mb-5 pb-5 ">
      <h1 className="text-center mb-5 text-white">
        Millions Of Business Trusted
      </h1>
      <div className="row p-5">
        <div className="col-md mb-3">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <FaAward className="icon" />
              </div>
              <h3 className="card-title mb-3">Awards</h3>
              <p className="card-text">
                Top selling Top selling Top selling Top selling Top selling Top
                selling Top selling Top selling Top selling Top sellingTop
                selling
              </p>
            </div>
          </div>
        </div>
        <div className="col-md mb-3">
          <div className="card bg-secondary text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <VscFeedback className="icon" />
              </div>
              <h3 className="card-title mb-3">Feedback</h3>
              <p className="card-text">
                Millions of satisfied users feedbackMillions of satisfied users
                feedbackMillions of satisfied users feedback
              </p>
            </div>
          </div>
        </div>
        <div className="col-md mb-3">
          <div className="card bg-dark text-light">
            <div className="card-body text-center">
              <div className="h1 mb-3">
                <BsBarChartLineFill className="icon" />
              </div>
              <h3 className="card-title mb-3">Revenue</h3>
              <p className="card-text">
                100+ millions yearly revenue 100+ millions yearly revenue100+
                millions yearly revenue 100+ millions yearly revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
