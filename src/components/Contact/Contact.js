import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <form>
        <div className="form-container">
          <div className="form-text">
            <h1 className="title">Contact Us</h1>
            <span className="description">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</span>
            <h3 className="subtitle">India</h3>
            <p>Dr RP Rd, GMC Ward Number 44, Swaraj Nagar, Ganeshguri, Guwahati, Assam<br />781006</p>
            <h3 className="subtitle">Phone</h3>
            <p>+91 8875465521 (Monday to Friday 10AM to 6PM)</p>
          </div>
          <div className="form-details">
            <input type="text" name="name" id="name" placeholder="Name" required />
            <input type="email" name="email" id="email" placeholder="Email" required />
            <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
            <button className="send-button">SEND MESSAGE</button>
          </div>
        </div>
      </form>
    </div>
  );
}
