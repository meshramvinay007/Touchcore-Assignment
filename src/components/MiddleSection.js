import React from "react";
import Progress from "../assets/progress.png";
import Graph from "./Graph";

export default function MiddleSection() {
  return (
    <div className="MiddleSection col-lg-6">
      <h6>Retirement Income</h6>
      <h4 className="Year">Starting Year 2056</h4>
      <div className="row">
        <div className="col-lg-4 box">
          <h4>$300,000</h4>
          <p>My Goal</p>
        </div>
        <div className="col-lg-4 col-sm-6 box">
          <h4>59%</h4>
          <p>Goal Achieved</p>
        </div>
        <div className="col-lg-4 col-sm-6 box">
          <h4>$300</h4>
          <p>Est, Monthly Income</p>
        </div>
        <h5>Contributons Overtime</h5>
        <Graph />
        <h5>How do I compare to my peers?</h5>
        <p>These numbers represent current goal achievement</p>
        <div className="Achievements">
          <div>
            <p>
              <b>Age:</b> Under 30 i
            </p>
            <p>
              <b>Salary:</b> K 20 - K 30 i
            </p>
            <p>
              <b>Gender:</b> Male i
            </p>
          </div>
          <div className="Progress">
            <img src={Progress} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
