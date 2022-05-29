import React from 'react'

export default function RightSection({state,handleChange}) {
  return (
    <div className="RightSection col-lg-3">
        <div>
          <h5>Retirement Stratergy</h5>
          <h6>Employee Contribution</h6>
          <input
            type="range"
            value={state.contribution}
            className="Slider"
            name="contribution"
            id=""
            min={0}
            max={100}
            onChange={handleChange}
          />{" "}
          <label>{state.contribution}%</label>
          <h6>Retirement Age</h6>
          <input
            type="range"
            value={state.age}
            className="Slider"
            name="age"
            onChange={handleChange}
            id=""
            min={25}
            max={75}
          />
          <label>{state.age}</label>
        </div>
        <hr />
        <div>
          <div>
            <h6>Employer Contribution</h6>
          </div>
          <div>
            <h6>Interest Rate</h6>
          </div>
        <center>  <button>Update</button></center>
          <br />
          <center><a href="">View Help Docs?</a></center>
        </div>
        <div>
          <p>Are you considering a <br />
          <b>Housing Advance?</b>
          </p>
          <p>Limited time reduced interest.</p>
    <a href="">Learn More i</a>
        </div>
      </div>
  )
}
