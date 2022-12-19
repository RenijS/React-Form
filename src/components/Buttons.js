import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="row">
        <button type="button" onClick={props.onSubmit}>
          Save
        </button>
        <button type="button">Clear</button>
      </div>
    </>
  );
}
