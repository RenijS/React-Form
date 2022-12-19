import React from "react";

export default function Text() {
  return (
    <>
      <div className="row">
        <div className="column">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="column">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="column">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="intro">Profile Intro</label>
          <textarea name="" id="intro" rows="5"></textarea>
        </div>
      </div>
    </>
  );
}
