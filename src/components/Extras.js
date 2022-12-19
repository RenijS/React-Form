import React from "react";

export default function Extra(props) {
  return (
    <>
      <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        <input
          type="checkbox"
          id="isStudent"
          onChange={props.handleOnChange}
          checked={props.data.checked}
          name="isStudent"
        />
        <label htmlFor="isStudent">Are you student?</label>
      </div>

      <div className="row">
        <div className="column">
          <label htmlFor="favColor">What is your favorite color?</label>
          <select
            id="favColor"
            name="favColor"
            value={props.data.favColor}
            onChange={props.handleOnChange}
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </div>
      </div>

      <div className="row">
        <fieldset style={{ width: "100%" }}>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="empStatus"
            checked={props.data.empStatus === "Unemployed"}
            value="Unemployed"
            onChange={props.handleOnChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="empStatus"
            checked={props.data.empStatus === "Part-time"}
            value="Part-time"
            onChange={props.handleOnChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="empStatus"
            checked={props.data.empStatus === "Full-time"}
            value="Full-time"
            onChange={props.handleOnChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
      </div>
    </>
  );
}
