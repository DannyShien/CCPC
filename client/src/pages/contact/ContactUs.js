import React, { Component } from "react";
import "../../stylesheet/Styles.css";
import "../contact/ContactUs.css";
import Divider from "../../assets/Divider.png";
import ContactForm from "../../components/contactForm/ContactForm";

class Contact extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className="sub__title">Contact Us</h2>
        <img className="divider" src={Divider} alt="" />
        <div className="form__body">
          <ContactForm />
        </div>
      </>
    );
  }
}

export default Contact;
