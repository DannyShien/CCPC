import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../contactForm/ContactForm.css";
import Input from "../input/Input";
import Button from "../button/Button";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mdoyojzv");

  if (state.succeeded) {
    return <p>Thank you for your prayer!</p>;
  }

  return (
    <>
      {/* <h4>Add a statement here for users to see</h4> */}
      <form className="email__form" onSubmit={handleSubmit}>
        <div className="input__wrapper">
          <label htmlFor="full_name">Full Name</label>
          <Input
            formId="full_name"
            type="text"
            name="full_name"
            placeholder="First and Last"
            style={{ width: "60%" }}
          />
          <ValidationError
            prefix="Full-Name"
            field="full_name"
            errors={state.errors}
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="email">Email Address</label>
          <Input
            formId="email"
            type="email"
            name="email"
            placeholder=""
            style={{ width: "60%" }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="input__wrapper">
          <label htmlFor="telephone">Telephone Number</label>
          <Input
            formId="telephone"
            type="telephone"
            name="telephone"
            placeholder="555-555-5555"
            style={{ width: "60%" }}
          />
          <ValidationError
            prefix="Telephone"
            field="telephone"
            errors={state.errors}
          />
        </div>

        <div className="input__wrapper">
          <label htmlFor="prayer_message">Prayer Message</label>
          <textarea
            id="prayer-message"
            name="prayer_message"
            rows="6"
            style={{ width: "60%" }}
          />
          <ValidationError
            prefix="Prayer"
            field="prayer_message"
            errors={state.errors}
          />
        </div>

        <Button
          type="submit"
          text="Send Email"
          disabled={state.submitting}
          style={{ alignSelf: "center", display: "flex", width: "60%" }}
        />
      </form>
    </>
  );
};

export default ContactForm;
