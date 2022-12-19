import React from "react";
import Text from "./Text";
import Extra from "./Extras";
import Button from "./Buttons";

export default function Form() {
  return (
    <div className="formContainer">
      <form className="profileForm">
        <Text />
        <Extra />
        <Button />
      </form>
    </div>
  );
}
