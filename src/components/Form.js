import React, { useState } from "react";
import Text from "./Text";
import Extra from "./Extras";
import Button from "./Buttons";

export default function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    intro: "",
    isStudent: false,
    favColor: "Red",
    empStatus: "Unemployed",
  });

  const handleOnChange = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
    });
    //==================================================
    //Above code Simplified
    // const {name, value, type, checked} = event.target
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [name]: type === "checkbox" ? checked : value
    //         }
    //     })
  };

  const onSubmit = () => {
    console.log(data);
  };

  return (
    <div className="formContainer">
      <form className="profileForm">
        <Text handleOnChange={handleOnChange} data={data} />
        <Extra handleOnChange={handleOnChange} data={data} />
        <Button onSubmit={onSubmit} />
      </form>
    </div>
  );
}
