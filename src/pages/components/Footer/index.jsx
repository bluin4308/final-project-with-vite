/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./style.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="footer">
        <div className="contact-form footer-item">
          <p className="title">Contact</p>
          <p>Questions? Go ahead</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="contact-form-button">Send</button>
        </div>
        <div className="footer-item">
          <p className="title">About</p>
          <a href="#">About us</a>
          <a href="#">We're hiring</a>
          <a href="#">Support</a>
          <a href="#">Find store</a>
          <a href="#">Shipment</a>
          <a href="#">Paynet</a>
          <a href="#">Gift card</a>
          <a href="#">Return</a>
          <a href="#">Help</a>
        </div>
        <div className="footer-item">
          <p className="title">Store</p>
          <div className="social-links-group">
            <p className="social-link">
              <i className="fa-solid fa-location-dot"></i>
              Company Name
            </p>
            <p className="social-link">
              <i className="fa-solid fa-phone"></i>
              0000000000
            </p>
            <p className="social-link">
              <i className="fa-solid fa-envelope"></i>
              site@site.com
            </p>
          </div>
          <p className="title">We accept</p>
          <div className="social-links-group">
            <p className="social-link">
              <i className="fa-solid fa-credit-card"></i>
              Credit card
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">Volodymyr Ukraintsev 2022</div>
    </>
  );
}
