import React from "react";

export default function Text(props) {
  return (
    <>
      <div className="row">
        <div className="column">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={props.handleOnChange}
            value={props.data.firstName}
          />
        </div>
        <div className="column">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={props.handleOnChange}
            value={props.data.lastName}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={props.handleOnChange}
            value={props.data.email}
          />
        </div>
        <div className="column">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={props.handleOnChange}
            value={props.data.phone}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <label htmlFor="intro">Profile Intro</label>
          <textarea
            name="intro"
            id="intro"
            rows="5"
            onChange={props.handleOnChange}
            value={props.data.intro}
          ></textarea>
        </div>
      </div>
    </>
  );
}
