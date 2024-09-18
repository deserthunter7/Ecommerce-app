import React from "react";
import "./Contact_Form.css";

const Contact_Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3214abda-dc6a-4194-b4d0-a7c8c58af1be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Enter Your Name" />
      <input type="email" name="email" placeholder="Enter Your Email Address" />
      <textarea name="message" placeholder="Description"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Contact_Form;
