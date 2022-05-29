import React from 'react';
import profile from "../assets/chopper.jpg";

export default function LeftSection() {
  return (
    <div className="Left col-lg-3">
    <div className="Profile">
      <div className="profile-picture">
        <img src={profile} alt="" />
      </div>
      <div className="Name">
        <h4>Hi Mike,</h4>
        <p>Welcome Back</p>
      </div>
    </div>
    <div className="Balance">
      <h6 className="Today">Today</h6>
      <h4>$19,892</h4>
      <p>Account Balance</p>
      <h6>$4,000</h6>
      <p>Year-to-Date Contributions</p>
      <h6>$1,892</h6>
      <p>Total Interest</p>
      <button>I Want to i</button>
    </div>
    <div className="Transactions">
      <h5>Recent Transactions</h5>
      <div className="Tansaction">
        <p>{new Date().toLocaleDateString()}</p>
        <h6>Withdrawl Transfer to Bank-XXX11</h6>
      </div>
      <div className="Tansaction">
        <p>{new Date().toLocaleDateString()}</p>
        <h6>Withdrawl Transfer to Bank-XXX11</h6>
      </div>
      <div className="Tansaction">
        <p>{new Date().toLocaleDateString()}</p>
        <h6>Withdrawl Transfer to Bank-XXX11</h6>
      </div>
    </div>
  </div>
  )
}
